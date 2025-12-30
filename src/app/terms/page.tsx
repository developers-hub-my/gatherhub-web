import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { Navbar } from '@/components/navbar'
import { Heading, Subheading } from '@/components/text'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service',
  description:
    'Read the terms and conditions for using Gather Hub platform.',
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
      <h2 className="text-2xl font-semibold text-gray-950 dark:text-white">{title}</h2>
      <div className="mt-4 space-y-4 text-base/7 text-gray-600 dark:text-gray-400">{children}</div>
    </section>
  )
}

export default function TermsOfService() {
  return (
    <main className="overflow-hidden bg-white dark:bg-gray-950">
      <div className="bg-white dark:bg-gray-950">
        <Container>
          <Navbar />
          <div className="border-b border-gray-200 pb-8 pt-8 dark:border-gray-700">
            <Subheading>Legal</Subheading>
            <Heading as="h1" className="mt-2">
              Terms of Service
            </Heading>
            <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
              Last updated: December 25, 2025
            </p>
          </div>
        </Container>
      </div>

      <Container className="pb-24">
        <div className="prose prose-gray max-w-none">
          <Section title="Agreement to Terms">
            <p>
              By accessing or using Gather Hub (&quot;the Platform&quot;), you agree to be bound by these Terms of Service (&quot;Terms&quot;). If you disagree with any part of these terms, you do not have permission to access the Platform.
            </p>
          </Section>

          <Section title="Description of Service">
            <p>
              Gather Hub provides an online platform for managing events, workshops, activities, and related services including:
            </p>
            <ul className="ml-6 list-disc space-y-2">
              <li>Activity and event creation and management</li>
              <li>Registration and ticketing services</li>
              <li>Attendance tracking and validation</li>
              <li>Participation proof and certificate generation</li>
              <li>Payment processing</li>
              <li>Reporting and analytics</li>
            </ul>
          </Section>

          <Section title="User Accounts">
            <p>
              When you create an account with us, you must provide accurate, complete, and current information. Failure to do so constitutes a breach of the Terms.
            </p>
            <p>
              You are responsible for:
            </p>
            <ul className="ml-6 list-disc space-y-2">
              <li>Maintaining the confidentiality of your account and password</li>
              <li>All activities that occur under your account</li>
              <li>Notifying us immediately of any unauthorized use</li>
              <li>Ensuring your account information remains accurate and up to date</li>
            </ul>
          </Section>

          <Section title="Acceptable Use">
            <p>
              You agree not to use the Platform to:
            </p>
            <ul className="ml-6 list-disc space-y-2">
              <li>Violate any applicable laws or regulations</li>
              <li>Infringe on the rights of others</li>
              <li>Transmit harmful, offensive, or objectionable content</li>
              <li>Interfere with or disrupt the Platform or servers</li>
              <li>Attempt to gain unauthorized access to any part of the Platform</li>
              <li>Use the Platform for any fraudulent or unlawful purpose</li>
              <li>Impersonate any person or entity</li>
              <li>Collect or harvest any information from the Platform</li>
            </ul>
          </Section>

          <Section title="Payment Terms">
            <p>
              If you register for paid events or purchase services through the Platform:
            </p>
            <ul className="ml-6 list-disc space-y-2">
              <li>You agree to pay all fees associated with your registration</li>
              <li>All payments are processed through secure third-party payment processors</li>
              <li>Prices are subject to change, but you will be notified before any change</li>
              <li>Payment information must be current, complete, and accurate</li>
            </ul>
          </Section>

          <Section title="Refund Policy">
            <p>
              Refund policies are set by individual event organizers. Gather Hub acts as a platform facilitating transactions between event organizers and participants. Refund requests should be directed to the event organizer.
            </p>
            <p>
              For platform subscription fees, refunds may be provided at our discretion on a case-by-case basis.
            </p>
          </Section>

          <Section title="Event Organizer Responsibilities">
            <p>
              If you use the Platform to organize events, you agree to:
            </p>
            <ul className="ml-6 list-disc space-y-2">
              <li>Provide accurate event information</li>
              <li>Honor all registrations and ticket sales</li>
              <li>Comply with all applicable laws and regulations</li>
              <li>Handle participant data responsibly and in compliance with privacy laws</li>
              <li>Process refunds according to your stated refund policy</li>
              <li>Maintain appropriate insurance for your events</li>
            </ul>
          </Section>

          <Section title="Intellectual Property">
            <p>
              The Platform and its original content, features, and functionality are owned by Gather Hub and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.
            </p>
            <p>
              You retain ownership of any content you submit to the Platform. By submitting content, you grant us a worldwide, non-exclusive, royalty-free license to use, reproduce, and display your content in connection with the Platform.
            </p>
          </Section>

          <Section title="Termination">
            <p>
              We may terminate or suspend your account and access to the Platform immediately, without prior notice or liability, for any reason, including if you breach the Terms.
            </p>
            <p>
              Upon termination, your right to use the Platform will immediately cease. All provisions of the Terms which by their nature should survive termination shall survive, including ownership provisions, warranty disclaimers, indemnity, and limitations of liability.
            </p>
          </Section>

          <Section title="Limitation of Liability">
            <p>
              In no event shall Gather Hub, its directors, employees, or agents be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits, data, use, or other intangible losses resulting from:
            </p>
            <ul className="ml-6 list-disc space-y-2">
              <li>Your use or inability to use the Platform</li>
              <li>Unauthorized access to or alteration of your data</li>
              <li>Any conduct or content of any third party on the Platform</li>
              <li>Any content obtained from the Platform</li>
            </ul>
          </Section>

          <Section title="Disclaimer of Warranties">
            <p>
              The Platform is provided on an &quot;AS IS&quot; and &quot;AS AVAILABLE&quot; basis. The Platform is provided without warranties of any kind, whether express or implied, including but not limited to implied warranties of merchantability, fitness for a particular purpose, and non-infringement.
            </p>
          </Section>

          <Section title="Indemnification">
            <p>
              You agree to indemnify and hold harmless Gather Hub and its affiliates, officers, directors, employees, and agents from any claims, damages, losses, liabilities, and expenses (including legal fees) arising out of or related to:
            </p>
            <ul className="ml-6 list-disc space-y-2">
              <li>Your use of the Platform</li>
              <li>Your violation of these Terms</li>
              <li>Your violation of any rights of another</li>
              <li>Your conduct in connection with the Platform</li>
            </ul>
          </Section>

          <Section title="Changes to Terms">
            <p>
              We reserve the right to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days&apos; notice prior to any new terms taking effect.
            </p>
            <p>
              By continuing to access or use the Platform after revisions become effective, you agree to be bound by the revised terms.
            </p>
          </Section>

          <Section title="Governing Law">
            <p>
              These Terms shall be governed by and construed in accordance with the laws of the jurisdiction in which Gather Hub operates, without regard to its conflict of law provisions.
            </p>
          </Section>

          <Section title="Contact Information">
            <p>
              If you have any questions about these Terms, please contact us:
            </p>
            <ul className="ml-6 list-disc space-y-2">
              <li>Email: legal@gatherhub.app</li>
              <li>Website: gatherhub.app/contact</li>
            </ul>
          </Section>
        </div>
      </Container>

      <Footer />
    </main>
  )
}
