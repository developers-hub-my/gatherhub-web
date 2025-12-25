import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { Navbar } from '@/components/navbar'
import { Heading, Subheading } from '@/components/text'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'Learn how Gather Hub collects, uses, and protects your personal information.',
}

function Section({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <section className="mt-12">
      <h2 className="text-2xl font-semibold text-gray-950">{title}</h2>
      <div className="mt-4 space-y-4 text-base/7 text-gray-600">{children}</div>
    </section>
  )
}

export default function PrivacyPolicy() {
  return (
    <main className="overflow-hidden">
      <div className="bg-white">
        <Container>
          <Navbar />
          <div className="border-b border-gray-200 pb-8 pt-8">
            <Subheading>Legal</Subheading>
            <Heading as="h1" className="mt-2">
              Privacy Policy
            </Heading>
            <p className="mt-4 text-sm text-gray-600">
              Last updated: December 25, 2025
            </p>
          </div>
        </Container>
      </div>

      <Container className="pb-24">
        <div className="prose prose-gray max-w-none">
          <Section title="Introduction">
            <p>
              Gather Hub (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our platform.
            </p>
            <p>
              Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the platform.
            </p>
          </Section>

          <Section title="Information We Collect">
            <p>
              We collect information that you provide directly to us when you:
            </p>
            <ul className="ml-6 list-disc space-y-2">
              <li>Create an account</li>
              <li>Register for an event or activity</li>
              <li>Make a payment</li>
              <li>Contact our support team</li>
              <li>Subscribe to our newsletter</li>
            </ul>
            <p className="mt-4">This information may include:</p>
            <ul className="ml-6 list-disc space-y-2">
              <li>Name and contact information (email, phone number)</li>
              <li>Payment information (credit card details, billing address)</li>
              <li>Profile information (organization name, job title)</li>
              <li>Event participation data (registration details, attendance records)</li>
            </ul>
          </Section>

          <Section title="How We Use Your Information">
            <p>We use the information we collect to:</p>
            <ul className="ml-6 list-disc space-y-2">
              <li>Provide, maintain, and improve our services</li>
              <li>Process your transactions and send you related information</li>
              <li>Send you technical notices, updates, and support messages</li>
              <li>Respond to your comments and questions</li>
              <li>Generate participation certificates and proof of attendance</li>
              <li>Analyze usage patterns to improve our platform</li>
              <li>Detect, prevent, and address technical issues and fraud</li>
            </ul>
          </Section>

          <Section title="Information Sharing and Disclosure">
            <p>
              We do not sell, trade, or rent your personal information to third parties. We may share your information in the following circumstances:
            </p>
            <ul className="ml-6 list-disc space-y-2">
              <li>
                <strong>Event Organizers:</strong> When you register for an event, we share your registration information with the event organizer.
              </li>
              <li>
                <strong>Service Providers:</strong> We may share your information with third-party service providers who perform services on our behalf (payment processing, email delivery, hosting).
              </li>
              <li>
                <strong>Legal Requirements:</strong> We may disclose your information if required by law or in response to valid requests by public authorities.
              </li>
              <li>
                <strong>Business Transfers:</strong> If we are involved in a merger, acquisition, or sale of assets, your information may be transferred.
              </li>
            </ul>
          </Section>

          <Section title="Data Security">
            <p>
              We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:
            </p>
            <ul className="ml-6 list-disc space-y-2">
              <li>Encryption of data in transit and at rest</li>
              <li>Regular security assessments and monitoring</li>
              <li>Restricted access to personal information</li>
              <li>Secure payment processing through certified payment providers</li>
            </ul>
            <p className="mt-4">
              However, no method of transmission over the Internet or electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your information, we cannot guarantee absolute security.
            </p>
          </Section>

          <Section title="Your Data Rights">
            <p>
              Depending on your location, you may have certain rights regarding your personal information:
            </p>
            <ul className="ml-6 list-disc space-y-2">
              <li>
                <strong>Access:</strong> Request access to your personal information
              </li>
              <li>
                <strong>Correction:</strong> Request correction of inaccurate data
              </li>
              <li>
                <strong>Deletion:</strong> Request deletion of your personal information
              </li>
              <li>
                <strong>Portability:</strong> Request a copy of your data in a structured format
              </li>
              <li>
                <strong>Objection:</strong> Object to certain processing of your data
              </li>
              <li>
                <strong>Withdraw Consent:</strong> Withdraw consent where we rely on consent to process your data
              </li>
            </ul>
            <p className="mt-4">
              To exercise these rights, please contact us at privacy@gatherhub.app.
            </p>
          </Section>

          <Section title="Cookies and Tracking Technologies">
            <p>
              We use cookies and similar tracking technologies to track activity on our platform and hold certain information. Cookies are files with a small amount of data which may include an anonymous unique identifier.
            </p>
            <p>
              You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our platform.
            </p>
          </Section>

          <Section title="Data Retention">
            <p>
              We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law. When we no longer need your information, we will securely delete or anonymize it.
            </p>
          </Section>

          <Section title="Children&apos;s Privacy">
            <p>
              Our platform is not intended for children under the age of 13. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child has provided us with personal information, please contact us.
            </p>
          </Section>

          <Section title="International Data Transfers">
            <p>
              Your information may be transferred to and maintained on computers located outside of your state, province, country, or other governmental jurisdiction where data protection laws may differ from those in your jurisdiction.
            </p>
            <p>
              If you are located outside our operating region and choose to provide information to us, please note that we transfer the data to our region and process it there.
            </p>
          </Section>

          <Section title="Changes to This Privacy Policy">
            <p>
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the &quot;Last updated&quot; date.
            </p>
            <p>
              You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
            </p>
          </Section>

          <Section title="Contact Us">
            <p>
              If you have any questions about this Privacy Policy, please contact us:
            </p>
            <ul className="ml-6 list-disc space-y-2">
              <li>Email: privacy@gatherhub.app</li>
              <li>Website: gatherhub.app/contact</li>
            </ul>
          </Section>
        </div>
      </Container>

      <Footer />
    </main>
  )
}
