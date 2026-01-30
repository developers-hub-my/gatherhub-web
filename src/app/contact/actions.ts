'use server'

import { sendContactEmail } from '@/lib/sparkpost'

export type ContactFormState = {
  success: boolean
  message: string
} | null

export async function submitContactForm(
  _prevState: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  const firstName = formData.get('first-name')?.toString().trim() || ''
  const lastName = formData.get('last-name')?.toString().trim() || ''
  const email = formData.get('email')?.toString().trim() || ''
  const organisation = formData.get('organisation')?.toString().trim() || ''
  const subject = formData.get('subject')?.toString().trim() || ''
  const message = formData.get('message')?.toString().trim() || ''

  if (!firstName || !lastName || !email || !subject || !message) {
    return { success: false, message: 'Please fill in all required fields.' }
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { success: false, message: 'Please enter a valid email address.' }
  }

  try {
    await sendContactEmail({
      firstName,
      lastName,
      email,
      organisation: organisation || undefined,
      subject,
      message,
    })

    return {
      success: true,
      message:
        'Thank you for your message. We will get back to you within 24 hours.',
    }
  } catch (error) {
    console.error('Contact form submission error:', error)
    return {
      success: false,
      message:
        'Something went wrong while sending your message. Please try again or email us directly at support@gatherhub.app.',
    }
  }
}
