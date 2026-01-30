function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

interface ContactEmailData {
  firstName: string
  lastName: string
  email: string
  organisation?: string
  subject: string
  message: string
}

const SUBJECT_LABELS: Record<string, string> = {
  general: 'General inquiry',
  support: 'Technical support',
  sales: 'Sales and pricing',
  partnership: 'Partnership opportunities',
  feedback: 'Feedback and suggestions',
}

export async function sendContactEmail(data: ContactEmailData): Promise<void> {
  const apiKey = process.env.SPARKPOST_API_KEY
  if (!apiKey) {
    throw new Error('SPARKPOST_API_KEY environment variable is not set')
  }

  const recipient =
    process.env.CONTACT_FORM_RECIPIENT || 'support@gatherhub.app'
  const sender = process.env.CONTACT_FORM_SENDER || 'noreply@gatherhub.app'

  const fullName = escapeHtml(`${data.firstName} ${data.lastName}`)
  const topicLabel = SUBJECT_LABELS[data.subject] || escapeHtml(data.subject)
  const emailSubject = `[Contact] ${topicLabel} - ${data.firstName} ${data.lastName}`

  const html = `
<div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto;">
  <h2 style="color: #1e3a5f; border-bottom: 2px solid #3b82f6; padding-bottom: 12px;">
    New Contact Form Submission
  </h2>
  <table style="width: 100%; border-collapse: collapse; margin-top: 16px;">
    <tr>
      <td style="padding: 8px 12px; font-weight: 600; color: #374151; width: 140px; vertical-align: top;">Name</td>
      <td style="padding: 8px 12px; color: #1f2937;">${fullName}</td>
    </tr>
    <tr style="background-color: #f9fafb;">
      <td style="padding: 8px 12px; font-weight: 600; color: #374151; vertical-align: top;">Email</td>
      <td style="padding: 8px 12px; color: #1f2937;">${escapeHtml(data.email)}</td>
    </tr>
    <tr>
      <td style="padding: 8px 12px; font-weight: 600; color: #374151; vertical-align: top;">Organisation</td>
      <td style="padding: 8px 12px; color: #1f2937;">${data.organisation ? escapeHtml(data.organisation) : '—'}</td>
    </tr>
    <tr style="background-color: #f9fafb;">
      <td style="padding: 8px 12px; font-weight: 600; color: #374151; vertical-align: top;">Topic</td>
      <td style="padding: 8px 12px; color: #1f2937;">${escapeHtml(topicLabel)}</td>
    </tr>
  </table>
  <div style="margin-top: 24px; padding: 16px; background-color: #f3f4f6; border-radius: 8px;">
    <h3 style="margin: 0 0 8px; color: #374151; font-size: 14px; text-transform: uppercase; letter-spacing: 0.05em;">Message</h3>
    <p style="margin: 0; color: #1f2937; white-space: pre-wrap; line-height: 1.6;">${escapeHtml(data.message)}</p>
  </div>
  <p style="margin-top: 24px; font-size: 12px; color: #9ca3af;">
    Sent via GatherHub contact form
  </p>
</div>`.trim()

  const response = await fetch(
    'https://api.sparkpost.com/api/v1/transmissions',
    {
      method: 'POST',
      headers: {
        Authorization: apiKey,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        recipients: [{ address: { email: recipient } }],
        content: {
          from: { email: sender, name: 'GatherHub' },
          reply_to: `${data.firstName} ${data.lastName} <${data.email}>`,
          subject: emailSubject,
          html,
        },
      }),
    },
  )

  if (!response.ok) {
    const body = await response.text()
    console.error('SparkPost API error:', response.status, body)
    throw new Error('Failed to send email')
  }
}
