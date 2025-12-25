import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { Navbar } from '@/components/navbar'
import { Heading, Subheading } from '@/components/text'
import {
  RocketLaunchIcon,
  UserCircleIcon,
  CalendarDaysIcon,
  CreditCardIcon,
  WrenchScrewdriverIcon,
  DocumentTextIcon,
  ShieldCheckIcon,
  BellAlertIcon,
} from '@heroicons/react/24/outline'
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Help Center',
  description:
    'Find answers to common questions about using Gather Hub for your events and activities.',
}

function Hero() {
  return (
    <div className="bg-white">
      <Container>
        <Navbar />
        <div className="pb-16 pt-8">
          <Subheading>Help Center</Subheading>
          <Heading as="h1" className="mt-2">
            How can we help you?
          </Heading>
          <p className="mt-4 text-base text-gray-600 max-w-2xl">
            Find answers to common questions about using Gather Hub. If you
            can&apos;t find what you&apos;re looking for, contact our support
            team.
          </p>
        </div>
      </Container>
    </div>
  )
}

function CategoryCard({
  title,
  description,
  icon: Icon,
  href,
}: {
  title: string
  description: string
  icon: React.ComponentType<{ className?: string }>
  href: string
}) {
  return (
    <Link
      href={href}
      className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:border-blue-200 hover:shadow-md"
    >
      <div className="flex size-12 items-center justify-center rounded-xl bg-blue-50 transition-colors group-hover:bg-blue-100">
        <Icon className="size-6 text-blue-600" />
      </div>
      <h3 className="mt-4 text-lg font-semibold text-gray-950">{title}</h3>
      <p className="mt-2 text-sm/6 text-gray-600">{description}</p>
    </Link>
  )
}

function Categories() {
  const categories = [
    {
      title: 'Getting Started',
      description: 'New to Gather Hub? Learn the basics and set up your account.',
      icon: RocketLaunchIcon,
      href: '#getting-started',
    },
    {
      title: 'Account Management',
      description: 'Manage your profile, settings, and team members.',
      icon: UserCircleIcon,
      href: '#account',
    },
    {
      title: 'Events & Activities',
      description: 'Create, manage, and run your events successfully.',
      icon: CalendarDaysIcon,
      href: '#events',
    },
    {
      title: 'Payments & Billing',
      description: 'Handle payments, invoicing, and financial reporting.',
      icon: CreditCardIcon,
      href: '#payments',
    },
    {
      title: 'Attendance & Check-in',
      description: 'Track attendance and validate participation.',
      icon: ShieldCheckIcon,
      href: '#attendance',
    },
    {
      title: 'Certificates & Reports',
      description: 'Generate certificates and export reports.',
      icon: DocumentTextIcon,
      href: '#certificates',
    },
    {
      title: 'Notifications',
      description: 'Set up automated emails and reminders.',
      icon: BellAlertIcon,
      href: '#notifications',
    },
    {
      title: 'Technical Support',
      description: 'Troubleshooting and technical assistance.',
      icon: WrenchScrewdriverIcon,
      href: '#technical',
    },
  ]

  return (
    <Container className="pb-24">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {categories.map((category) => (
          <CategoryCard key={category.title} {...category} />
        ))}
      </div>
    </Container>
  )
}

function FAQSection({
  id,
  title,
  icon: Icon,
  faqs,
}: {
  id: string
  title: string
  icon: React.ComponentType<{ className?: string }>
  faqs: Array<{ question: string; answer: string }>
}) {
  return (
    <section id={id} className="scroll-mt-16">
      <div className="flex items-center gap-3">
        <div className="flex size-10 items-center justify-center rounded-lg bg-blue-50">
          <Icon className="size-5 text-blue-600" />
        </div>
        <Heading as="h2" className="text-2xl">
          {title}
        </Heading>
      </div>
      <div className="mt-8 space-y-8">
        {faqs.map((faq, index) => (
          <div key={index}>
            <h3 className="text-lg font-semibold text-gray-950">
              {faq.question}
            </h3>
            <p className="mt-3 text-base/7 text-gray-600">{faq.answer}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

function FAQContent() {
  return (
    <Container className="pb-24">
      <div className="mx-auto max-w-3xl space-y-24">
        <FAQSection
          id="getting-started"
          title="Getting Started"
          icon={RocketLaunchIcon}
          faqs={[
            {
              question: 'How do I create my first activity?',
              answer:
                'After signing in, click "Create Activity" from your dashboard. Fill in the activity details including title, description, date, location, and capacity. Set up your ticketing options and publish when ready. You can save drafts and preview before publishing.',
            },
            {
              question: 'What types of activities can I create?',
              answer:
                'Gather Hub supports workshops, seminars, conferences, training sessions, community events, and any type of gathering that requires registration, attendance tracking, and participation proof.',
            },
            {
              question: 'Is there a trial period?',
              answer:
                'Yes, you can start with a free account to explore the platform. Paid plans are available for organisations that need advanced features like custom branding, higher capacity limits, and priority support.',
            },
            {
              question: 'How long does setup take?',
              answer:
                'Most organisers create their first activity within 10-15 minutes. The platform guides you through each step, and you can always save your progress and return later.',
            },
          ]}
        />

        <FAQSection
          id="account"
          title="Account Management"
          icon={UserCircleIcon}
          faqs={[
            {
              question: 'How do I add team members?',
              answer:
                'Go to Settings > Team Members and click "Invite Team Member". Enter their email address and select their role (Admin, Organiser, or Viewer). They will receive an invitation email to join your organisation.',
            },
            {
              question: 'Can I change my organisation name?',
              answer:
                'Yes, go to Settings > Organisation and update your organisation name. Note that this will affect how your organisation appears to participants.',
            },
            {
              question: 'How do I reset my password?',
              answer:
                'Click "Forgot Password" on the login page and enter your email address. You will receive a password reset link. If you do not receive the email within a few minutes, check your spam folder.',
            },
            {
              question: 'What happens if I cancel my account?',
              answer:
                'You can cancel your subscription at any time. You will retain access until the end of your billing period. After cancellation, you can export your data, but active events will be archived and no longer accessible to participants.',
            },
          ]}
        />

        <FAQSection
          id="events"
          title="Events & Activities"
          icon={CalendarDaysIcon}
          faqs={[
            {
              question: 'How do I set capacity limits?',
              answer:
                'When creating or editing an activity, enter the maximum number of participants in the Capacity field. Once this limit is reached, registration will automatically close. You can also enable a waitlist for overflow registrations.',
            },
            {
              question: 'Can I create recurring events?',
              answer:
                'Each activity is created individually, but you can duplicate an existing activity to quickly set up recurring sessions. This gives you flexibility to adjust details for each session while maintaining consistency.',
            },
            {
              question: 'How do I cancel or reschedule an event?',
              answer:
                'Go to your activity dashboard, select the activity, and choose "Edit Details" to reschedule, or "Cancel Activity" to cancel. If you cancel, you can choose whether to issue refunds and send automated notifications to registered participants.',
            },
            {
              question: 'Can participants transfer their registration?',
              answer:
                'Yes, participants can transfer their registration to another person from their registration confirmation page. You can enable or disable this feature for each activity in the activity settings.',
            },
          ]}
        />

        <FAQSection
          id="payments"
          title="Payments & Billing"
          icon={CreditCardIcon}
          faqs={[
            {
              question: 'What payment methods do you support?',
              answer:
                'We support credit cards, debit cards, and bank transfers through our secure payment processors. The available payment methods may vary by region.',
            },
            {
              question: 'When do I receive payments?',
              answer:
                'Payments are processed through our payment partners and typically deposited to your account within 3-5 business days after the transaction. You can view pending and completed payouts in your dashboard.',
            },
            {
              question: 'What are the transaction fees?',
              answer:
                'Transaction fees vary by plan and payment method. Standard processing fees apply to all transactions. View our pricing page for detailed fee information for your plan.',
            },
            {
              question: 'How do refunds work?',
              answer:
                'You can process refunds from the activity dashboard. Refunds are returned to the original payment method within 5-10 business days. You can choose to refund the full amount or a partial amount, and you can set refund deadlines for each activity.',
            },
          ]}
        />

        <FAQSection
          id="attendance"
          title="Attendance & Check-in"
          icon={ShieldCheckIcon}
          faqs={[
            {
              question: 'How does QR code check-in work?',
              answer:
                'Each participant receives a unique QR code with their registration confirmation. At the event, scan their QR code using the Gather Hub mobile app or web dashboard to mark them as present. The check-in is recorded instantly.',
            },
            {
              question: 'Can I check people in manually?',
              answer:
                'Yes, you can manually mark participants as present from your activity dashboard. This is useful if you need to check someone in without scanning their QR code, or for walk-in participants.',
            },
            {
              question: 'Can I track partial attendance?',
              answer:
                'Yes, you can set up multiple check-in points for multi-day or multi-session events. Each check-in is recorded separately, allowing you to track attendance for specific sessions.',
            },
            {
              question: 'What if someone forgets their QR code?',
              answer:
                'You can search for the participant by name or email in your dashboard and check them in manually. Participants can also retrieve their QR code from their registration confirmation email.',
            },
          ]}
        />

        <FAQSection
          id="certificates"
          title="Certificates & Reports"
          icon={DocumentTextIcon}
          faqs={[
            {
              question: 'How do I create certificate templates?',
              answer:
                'Go to Settings > Certificates and click "Create Template". Upload your template design, then add placeholders for participant name, activity name, date, and other details. You can create multiple templates for different activity types.',
            },
            {
              question: 'When are certificates issued?',
              answer:
                'Certificates can be issued automatically after the event based on attendance requirements you set, or you can issue them manually. Participants receive their certificate via email and can download it as a PDF.',
            },
            {
              question: 'Can I export attendance data?',
              answer:
                'Yes, you can export attendance data, payment records, and participant information to CSV or PDF format from your activity dashboard. Exports include all relevant details and can be filtered by date, status, or other criteria.',
            },
            {
              question: 'How do I verify a certificate is authentic?',
              answer:
                'Each certificate includes a unique verification code. Anyone can verify the certificate by entering the code on your organisation verification page (if you have enabled this feature in settings).',
            },
          ]}
        />

        <FAQSection
          id="notifications"
          title="Notifications"
          icon={BellAlertIcon}
          faqs={[
            {
              question: 'What automated emails are sent?',
              answer:
                'Gather Hub automatically sends registration confirmations, payment receipts, event reminders, and certificates. You can customise the timing and content of these emails in your activity settings.',
            },
            {
              question: 'Can I customise email templates?',
              answer:
                'Yes, you can customise email templates with your branding, logos, and custom messaging. Go to Settings > Email Templates to edit the default templates for your organisation.',
            },
            {
              question: 'How do I send a broadcast message?',
              answer:
                'From your activity dashboard, select "Send Message" to compose a broadcast email to all participants or specific groups (e.g., only those who have checked in, or only VIP ticket holders).',
            },
            {
              question: 'Can participants unsubscribe from emails?',
              answer:
                'Participants can opt out of promotional emails but will still receive essential transactional emails (registration confirmations, payment receipts, activity updates) related to activities they have registered for.',
            },
          ]}
        />

        <FAQSection
          id="technical"
          title="Technical Support"
          icon={WrenchScrewdriverIcon}
          faqs={[
            {
              question: 'What browsers are supported?',
              answer:
                'Gather Hub works best on the latest versions of Chrome, Firefox, Safari, and Edge. For the best experience, ensure your browser is up to date.',
            },
            {
              question: 'Is there a mobile app?',
              answer:
                'Yes, we have a mobile app for iOS and Android that allows organisers to check in participants and monitor events on the go. Participants can access their registrations through the mobile-optimised website.',
            },
            {
              question: 'How secure is my data?',
              answer:
                'We use industry-standard encryption for data in transit and at rest. All payment processing is handled by PCI-compliant payment processors. We undergo regular security audits and are GDPR compliant. See our Privacy Policy for details.',
            },
            {
              question: 'Do you have an API?',
              answer:
                'Yes, we offer an API for enterprise customers who need to integrate Gather Hub with other systems. Contact our sales team to learn more about API access and documentation.',
            },
          ]}
        />
      </div>
    </Container>
  )
}

function StillNeedHelp() {
  return (
    <div className="bg-gray-50 py-24">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <Heading as="h2">Still need help?</Heading>
          <p className="mt-6 text-lg text-gray-600">
            Can&apos;t find the answer you&apos;re looking for? Our support
            team is here to help.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg bg-gray-950 px-6 py-3 text-base font-medium text-white shadow-sm transition-all hover:bg-gray-800"
            >
              Contact Support
            </a>
            <a
              href="mailto:support@gatherhub.app"
              className="inline-flex items-center justify-center rounded-lg border border-gray-300 bg-white px-6 py-3 text-base font-medium text-gray-950 shadow-sm transition-all hover:bg-gray-50"
            >
              Email Us
            </a>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default function Help() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <Categories />
      <FAQContent />
      <StillNeedHelp />
      <Footer />
    </main>
  )
}
