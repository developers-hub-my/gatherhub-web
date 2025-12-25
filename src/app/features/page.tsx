import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { config } from '@/lib/config'
import { Navbar } from '@/components/navbar'
import { Heading, Lead, Subheading } from '@/components/text'
import {
  BellAlertIcon,
  ChartBarIcon,
  CheckBadgeIcon,
  ClipboardDocumentListIcon,
  CreditCardIcon,
  DocumentCheckIcon,
  EnvelopeIcon,
  GlobeAltIcon,
  QrCodeIcon,
  ShieldCheckIcon,
  TicketIcon,
  UserGroupIcon,
} from '@heroicons/react/24/outline'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Features',
  description:
    'Discover all the features that make Gather Hub the best platform for managing events, workshops, and activities.',
}

function Hero() {
  return (
    <div className="bg-white">
      <Container>
        <Navbar />
        <div className="pb-16 pt-8">
          <Subheading>Features</Subheading>
          <Heading as="h1" className="mt-2 max-w-4xl">
            Everything you need to run professional events.
          </Heading>
          <Lead className="mt-4 max-w-3xl">
            From registration to participation proof, Gather Hub provides all
            the tools you need to manage activities efficiently and
            professionally.
          </Lead>
        </div>
      </Container>
    </div>
  )
}

function FeatureSection({
  title,
  description,
  features,
  reverse = false,
}: {
  title: string
  description: string
  features: Array<{
    name: string
    description: string
    icon: React.ComponentType<{ className?: string }>
  }>
  reverse?: boolean
}) {
  return (
    <div
      className={`grid grid-cols-1 gap-16 lg:grid-cols-2 ${reverse ? 'lg:grid-flow-dense' : ''}`}
    >
      <div className={reverse ? 'lg:col-start-2' : ''}>
        <Heading as="h3" className="text-3xl">
          {title}
        </Heading>
        <p className="mt-4 text-base/7 text-gray-600">{description}</p>
      </div>
      <div className={reverse ? 'lg:col-start-1 lg:row-start-1' : ''}>
        <div className="space-y-6">
          {features.map((feature) => (
            <div key={feature.name} className="flex gap-4">
              <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-blue-50">
                <feature.icon className="size-6 text-blue-600" />
              </div>
              <div>
                <h4 className="text-base font-semibold text-gray-950">
                  {feature.name}
                </h4>
                <p className="mt-1 text-sm/6 text-gray-600">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function MainFeatures() {
  return (
    <Container className="py-24">
      <div className="space-y-32">
        <FeatureSection
          title="Activity Management"
          description="Create and manage all types of events from a single dashboard. Set up registration forms, ticket tiers, and capacity limits in minutes."
          features={[
            {
              name: 'Multiple activity types',
              description:
                'Support for workshops, seminars, conferences, training sessions, and community events.',
              icon: ClipboardDocumentListIcon,
            },
            {
              name: 'Custom registration forms',
              description:
                'Collect exactly the information you need with customizable registration fields.',
              icon: DocumentCheckIcon,
            },
            {
              name: 'Capacity management',
              description:
                'Set attendance limits and manage waitlists automatically.',
              icon: UserGroupIcon,
            },
          ]}
        />

        <FeatureSection
          title="Ticketing & Payments"
          description="Sell tickets and accept payments seamlessly. Support for multiple ticket types, early bird pricing, and promotional codes."
          reverse
          features={[
            {
              name: 'Multiple ticket types',
              description:
                'Create different ticket tiers with varying prices and benefits.',
              icon: TicketIcon,
            },
            {
              name: 'Secure payment processing',
              description:
                'Accept credit cards, bank transfers, and other payment methods securely.',
              icon: CreditCardIcon,
            },
            {
              name: 'Automated invoicing',
              description:
                'Generate and send invoices automatically upon registration.',
              icon: DocumentCheckIcon,
            },
          ]}
        />

        <FeatureSection
          title="Attendance Validation"
          description="Track attendance accurately with QR code scanning or manual check-in. Real-time attendance monitoring and reports."
          features={[
            {
              name: 'QR code check-in',
              description:
                'Generate unique QR codes for each participant for fast, contactless check-in.',
              icon: QrCodeIcon,
            },
            {
              name: 'Manual attendance tracking',
              description:
                'Mark attendance manually when needed with an easy-to-use interface.',
              icon: CheckBadgeIcon,
            },
            {
              name: 'Real-time monitoring',
              description:
                'See who has checked in and who is still expected in real time.',
              icon: ChartBarIcon,
            },
          ]}
        />

        <FeatureSection
          title="Participation Proof & Certificates"
          description="Generate professional certificates and proof of attendance instantly. Customizable templates with your branding."
          reverse
          features={[
            {
              name: 'Instant certificate generation',
              description:
                'Create and distribute certificates with one click after the event.',
              icon: DocumentCheckIcon,
            },
            {
              name: 'Custom templates',
              description:
                'Design certificate templates with your logo, colors, and branding.',
              icon: GlobeAltIcon,
            },
            {
              name: 'Automated distribution',
              description:
                'Certificates are automatically sent to participants who met attendance requirements.',
              icon: EnvelopeIcon,
            },
          ]}
        />

        <FeatureSection
          title="Reports & Analytics"
          description="Get complete visibility into your events with detailed reports and analytics. Export data for compliance and auditing."
          features={[
            {
              name: 'Attendance reports',
              description:
                'Detailed reports showing who attended, when they checked in, and participation duration.',
              icon: ChartBarIcon,
            },
            {
              name: 'Revenue tracking',
              description:
                'Track ticket sales, revenue by ticket type, and payment status.',
              icon: CreditCardIcon,
            },
            {
              name: 'Export capabilities',
              description:
                'Export all data to CSV or PDF for your records and compliance needs.',
              icon: DocumentCheckIcon,
            },
          ]}
        />

        <FeatureSection
          title="Communication & Notifications"
          description="Keep participants informed with automated emails and notifications. Send updates, reminders, and important information."
          reverse
          features={[
            {
              name: 'Automated email confirmations',
              description:
                'Send registration confirmations, payment receipts, and tickets automatically.',
              icon: EnvelopeIcon,
            },
            {
              name: 'Event reminders',
              description:
                'Schedule reminder emails to reduce no-shows and keep participants engaged.',
              icon: BellAlertIcon,
            },
            {
              name: 'Broadcast messages',
              description:
                'Send announcements and updates to all participants or specific groups.',
              icon: GlobeAltIcon,
            },
          ]}
        />
      </div>
    </Container>
  )
}

function SecurityCompliance() {
  return (
    <div className="bg-gray-50 py-24">
      <Container>
        <div className="text-center">
          <Subheading>Security & Compliance</Subheading>
          <Heading as="h2" className="mt-2">
            Built with security and privacy in mind.
          </Heading>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-gray-200">
            <ShieldCheckIcon className="size-8 text-blue-600" />
            <h3 className="mt-6 text-base font-semibold text-gray-950">
              Data encryption
            </h3>
            <p className="mt-2 text-sm/6 text-gray-600">
              All data is encrypted in transit and at rest using industry-standard protocols.
            </p>
          </div>
          <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-gray-200">
            <CheckBadgeIcon className="size-8 text-blue-600" />
            <h3 className="mt-6 text-base font-semibold text-gray-950">
              GDPR compliant
            </h3>
            <p className="mt-2 text-sm/6 text-gray-600">
              Full compliance with GDPR and other data protection regulations.
            </p>
          </div>
          <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-gray-200">
            <DocumentCheckIcon className="size-8 text-blue-600" />
            <h3 className="mt-6 text-base font-semibold text-gray-950">
              Audit trails
            </h3>
            <p className="mt-2 text-sm/6 text-gray-600">
              Complete audit logs for all activities, payments, and attendance records.
            </p>
          </div>
        </div>
      </Container>
    </div>
  )
}

function CTA() {
  return (
    <Container className="py-24">
      <div className="text-center">
        <Heading as="h2">Ready to get started?</Heading>
        <p className="mt-6 text-lg text-gray-600">
          Create your first activity in minutes. No credit card required.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Button href={`${config.appUrl}/register`}>Start for free</Button>
          <Button variant="secondary" href="/pricing">
            View pricing
          </Button>
        </div>
      </div>
    </Container>
  )
}

export default function Features() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <MainFeatures />
      <SecurityCompliance />
      <CTA />
      <Footer />
    </main>
  )
}
