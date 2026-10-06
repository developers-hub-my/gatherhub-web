'use server'

import { UTM_PARAMS } from '@/lib/attribution'
import { config } from '@/lib/config'
import { sendContactEmail, SUBJECT_LABELS } from '@/lib/sparkpost'

export type ContactFormState = {
  success: boolean
  message: string
  errors?: Record<string, string[]>
} | null

const GENERIC_ERROR =
  'Something went wrong while sending your message. Your details are still in the form — please try again, or email us directly at support@gatherhub.app.'

export async function submitContactForm(
  _prevState: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  const field = (key: string, max = 255) =>
    formData.get(key)?.toString().trim().slice(0, max) || ''

  const success = {
    success: true,
    message:
      'Thank you for your message. We will get back to you within 24 hours.',
  }

  // Honeypot: hidden from people, filled by bots. Pretend it worked.
  if (field('website')) {
    return success
  }

  const firstName = field('first-name')
  const lastName = field('last-name')
  const email = field('email')
  const phone = field('phone', 50)
  const organisation = field('organisation')
  const subject = field('subject')
  const message = field('message', 1900)

  if (!firstName || !lastName || !email || !subject || !message) {
    return { success: false, message: 'Please fill in all required fields.' }
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { success: false, message: 'Please enter a valid email address.' }
  }

  const lead: Record<string, string> = {
    name: `${firstName} ${lastName}`,
    email,
    message: `Topic: ${SUBJECT_LABELS[subject] || subject}\n\n${message}`,
  }
  if (phone) lead.phone = phone
  if (organisation) lead.company = organisation
  for (const key of UTM_PARAMS) {
    const value = field(key)
    if (value) lead[key] = value
  }
  for (const key of ['landing_url', 'referrer_url']) {
    const value = field(key, 2000)
    if (value) lead[key] = value
  }

  let response: Response
  try {
    response = await fetch(config.crmIntakeUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'X-API-Version': 'v1',
      },
      body: JSON.stringify(lead),
      signal: AbortSignal.timeout(10_000),
    })
  } catch {
    console.error('CRM intake unreachable')
    return { success: false, message: GENERIC_ERROR }
  }

  if (response.status === 422) {
    const body = await response.json().catch(() => ({}))
    return {
      success: false,
      message: 'Please check the highlighted fields.',
      errors: body.errors ?? {},
    }
  }

  if (response.status === 429) {
    return {
      success: false,
      message: 'Too many submissions right now — please try again shortly.',
    }
  }

  if (response.status !== 202) {
    // 404 = wrong or disabled channel token. Status only — never the lead.
    console.error(`CRM intake rejected the submission: HTTP ${response.status}`)
    return { success: false, message: GENERIC_ERROR }
  }

  // The lead is safely queued in the CRM; the email is a team notification only.
  try {
    await sendContactEmail({
      firstName,
      lastName,
      email,
      organisation: organisation || undefined,
      subject,
      message,
    })
  } catch {
    console.error('Contact notification email failed (lead already in CRM)')
  }

  return success
}
