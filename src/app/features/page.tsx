import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { config } from '@/lib/config'
import { Navbar } from '@/components/navbar'
import { Heading, Lead, Subheading } from '@/components/text'
import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BanknotesIcon,
  BuildingOfficeIcon,
  CalendarDaysIcon,
  ChartBarIcon,
  ChartPieIcon,
  ChatBubbleLeftRightIcon,
  CheckBadgeIcon,
  ClipboardDocumentListIcon,
  ClockIcon,
  CreditCardIcon,
  DevicePhoneMobileIcon,
  DocumentCheckIcon,
  DocumentDuplicateIcon,
  EnvelopeIcon,
  GiftIcon,
  MegaphoneIcon,
  MicrophoneIcon,
  PresentationChartLineIcon,
  QrCodeIcon,
  ShieldCheckIcon,
  TicketIcon,
  TrophyIcon,
  UserGroupIcon,
  UserPlusIcon,
  UsersIcon,
} from '@heroicons/react/24/outline'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Features',
  description:
    'Discover all the features that make Gather Hub the best platform for managing events, workshops, and activities.',
}

function Hero() {
  return (
    <div className="bg-white dark:bg-gray-950">
      <Container>
        <Navbar />
        <div className="pb-16 pt-8">
          <Subheading>Features</Subheading>
          <Heading as="h1" className="mt-2 max-w-4xl">
            Everything you need to run professional events.
          </Heading>
          <Lead className="mt-4 max-w-3xl">
            From event creation to certificates, Gather Hub provides all the
            tools you need to manage activities efficiently and professionally.
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
        <p className="mt-4 text-base/7 text-gray-600 dark:text-gray-400">
          {description}
        </p>
      </div>
      <div className={reverse ? 'lg:col-start-1 lg:row-start-1' : ''}>
        <div className="space-y-6">
          {features.map((feature) => (
            <div key={feature.name} className="flex gap-4">
              <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 dark:bg-blue-500/20">
                <feature.icon className="size-6 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <h4 className="text-base font-semibold text-gray-950 dark:text-white">
                  {feature.name}
                </h4>
                <p className="mt-1 text-sm/6 text-gray-600 dark:text-gray-400">
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
        {/* Section 1: Event Creation & Scheduling */}
        <FeatureSection
          title="Event Creation & Scheduling"
          description="Build comprehensive events with sessions, activities, and venue management. From one-day workshops to multi-day conferences."
          features={[
            {
              name: 'Rich event builder',
              description:
                'Create events with descriptions, custom fields, images, and all the details your participants need.',
              icon: CalendarDaysIcon,
            },
            {
              name: 'Session & activity scheduling',
              description:
                'Organize time-blocked sessions and parallel activities with capacity limits and speaker assignments.',
              icon: ClockIcon,
            },
            {
              name: 'Venue library',
              description:
                'Save and reuse venues across events with address, capacity, and amenity information.',
              icon: BuildingOfficeIcon,
            },
            {
              name: 'Event cloning',
              description:
                'Duplicate events for recurring programs with one click, including all settings and configurations.',
              icon: DocumentDuplicateIcon,
            },
          ]}
        />

        {/* Section 2: Registration & Ticketing */}
        <FeatureSection
          title="Registration & Ticketing"
          description="Flexible registration options for free and paid events. Collect the information you need with customizable forms."
          reverse
          features={[
            {
              name: 'Multiple ticket types',
              description:
                'Create different ticket tiers with varying prices, benefits, and availability windows.',
              icon: TicketIcon,
            },
            {
              name: 'Custom registration forms',
              description:
                'Collect buyer and participant details with customizable fields for any information you need.',
              icon: ClipboardDocumentListIcon,
            },
            {
              name: 'Bulk participant import',
              description:
                'Import participants from CSV or Excel for corporate events and pre-registered attendees.',
              icon: UserPlusIcon,
            },
            {
              name: 'Capacity & waitlists',
              description:
                'Set attendance limits and automatically manage waitlists when events fill up.',
              icon: UsersIcon,
            },
          ]}
        />

        {/* Section 3: Payment Processing */}
        <FeatureSection
          title="Payment Processing"
          description="Accept payments securely with multiple payment options. Support for Malaysian payment methods and manual bank transfers."
          features={[
            {
              name: 'Online banking (FPX)',
              description:
                'Accept instant payments from all major Malaysian banks through secure FPX integration.',
              icon: BanknotesIcon,
            },
            {
              name: 'DuitNow QR',
              description:
                'Let participants pay instantly by scanning a QR code with their banking app.',
              icon: QrCodeIcon,
            },
            {
              name: 'Manual bank transfer',
              description:
                'Accept bank transfers with receipt upload and admin approval workflow.',
              icon: CreditCardIcon,
            },
            {
              name: 'Transaction tracking',
              description:
                'Monitor all payments with detailed transaction history and status updates.',
              icon: ChartBarIcon,
            },
          ]}
        />

        {/* Section 4: Check-in & Attendance */}
        <FeatureSection
          title="Check-in & Attendance"
          description="Track attendance accurately at every level. From event-wide check-in to individual session and activity tracking."
          reverse
          features={[
            {
              name: 'QR code scanning',
              description:
                'Fast, contactless check-in with unique QR codes for each participant.',
              icon: QrCodeIcon,
            },
            {
              name: 'Multi-level tracking',
              description:
                'Track attendance at the event, session, and activity level for detailed participation records.',
              icon: CheckBadgeIcon,
            },
            {
              name: 'Mobile check-in',
              description:
                'Check in participants from any device with our mobile-friendly interface.',
              icon: DevicePhoneMobileIcon,
            },
            {
              name: 'Real-time dashboards',
              description:
                'Monitor check-in progress and attendance rates as your event unfolds.',
              icon: PresentationChartLineIcon,
            },
          ]}
        />

        {/* Section 5: Certificates & Recognition */}
        <FeatureSection
          title="Certificates & Recognition"
          description="Generate professional certificates with flexible eligibility rules. Reward participation with verified credentials."
          features={[
            {
              name: 'Customizable templates',
              description:
                'Design certificate templates with your branding, colors, and layout preferences.',
              icon: AcademicCapIcon,
            },
            {
              name: 'Eligibility rules',
              description:
                'Set attendance requirements, activity completion, and other criteria for certificate issuance.',
              icon: DocumentCheckIcon,
            },
            {
              name: 'Point-based scoring',
              description:
                'Award points for sessions, activities, and achievements to recognize top participants.',
              icon: TrophyIcon,
            },
            {
              name: 'QR verification',
              description:
                'Each certificate includes a QR code for instant authenticity verification.',
              icon: ShieldCheckIcon,
            },
          ]}
        />

        {/* Section 6: Team & Collaboration */}
        <FeatureSection
          title="Team & Collaboration"
          description="Work together to deliver great events. Assign roles, manage speakers and sponsors, and coordinate your crew."
          reverse
          features={[
            {
              name: 'Crew management',
              description:
                'Assign team members with specific roles and permissions for check-in, certificates, and more.',
              icon: UserGroupIcon,
            },
            {
              name: 'Speaker profiles',
              description:
                'Showcase your speakers with photos, bios, expertise tags, and social links.',
              icon: MicrophoneIcon,
            },
            {
              name: 'Sponsor management',
              description:
                'Organize sponsors by tier with logos, benefits tracking, and visibility options.',
              icon: MegaphoneIcon,
            },
            {
              name: 'Kit distribution',
              description:
                'Track swag and kit item collection with variant support and collection status.',
              icon: GiftIcon,
            },
          ]}
        />

        {/* Section 7: Engagement & Interaction */}
        <FeatureSection
          title="Engagement & Interaction"
          description="Boost attendee participation with interactive tools. Collect feedback, run live polls, and foster networking."
          features={[
            {
              name: 'Event Surveys',
              description:
                'Create and send post-event surveys to collect feedback with NPS scoring and analytics.',
              icon: ClipboardDocumentListIcon,
            },
            {
              name: 'Live Polling',
              description:
                'Create real-time polls during events with instant results display and audience engagement.',
              icon: ChartBarIcon,
            },
            {
              name: 'Q&A Sessions',
              description:
                'Enable attendees to submit questions with upvoting, moderation, and real-time display.',
              icon: ChatBubbleLeftRightIcon,
            },
            {
              name: 'Social Wall',
              description:
                'Display a social media wall aggregating posts with your event hashtag.',
              icon: MegaphoneIcon,
            },
            {
              name: 'Gamification',
              description:
                'Award points, badges, and track leaderboards to boost participant engagement.',
              icon: TrophyIcon,
            },
          ]}
        />

        {/* Section 8: Communication & Insights */}
        <FeatureSection
          title="Communication & Insights"
          description="Keep participants informed and gain valuable insights. Send targeted emails and access detailed analytics."
          reverse
          features={[
            {
              name: 'Blast email campaigns',
              description:
                'Send targeted emails to all participants or specific groups with personalization.',
              icon: EnvelopeIcon,
            },
            {
              name: 'Email templates',
              description:
                'Use pre-built templates for reminders, confirmations, and post-event follow-ups.',
              icon: ChatBubbleLeftRightIcon,
            },
            {
              name: 'Analytics dashboard',
              description:
                'Track registrations, attendance rates, revenue, and participant engagement.',
              icon: ChartPieIcon,
            },
            {
              name: 'Data export',
              description:
                'Export participant lists, attendance records, and reports to CSV or Excel.',
              icon: ArrowDownTrayIcon,
            },
          ]}
        />
      </div>
    </Container>
  )
}

function SecurityCompliance() {
  return (
    <div className="bg-gray-50 py-24 dark:bg-gray-900">
      <Container>
        <div className="text-center">
          <Subheading>Security & Compliance</Subheading>
          <Heading as="h2" className="mt-2">
            Built with security and privacy in mind.
          </Heading>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-gray-200 dark:bg-gray-800 dark:ring-gray-700">
            <ShieldCheckIcon className="size-8 text-blue-600 dark:text-blue-400" />
            <h3 className="mt-6 text-base font-semibold text-gray-950 dark:text-white">
              Data encryption
            </h3>
            <p className="mt-2 text-sm/6 text-gray-600 dark:text-gray-400">
              All data is encrypted in transit and at rest using
              industry-standard protocols.
            </p>
          </div>
          <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-gray-200 dark:bg-gray-800 dark:ring-gray-700">
            <CheckBadgeIcon className="size-8 text-blue-600 dark:text-blue-400" />
            <h3 className="mt-6 text-base font-semibold text-gray-950 dark:text-white">
              GDPR compliant
            </h3>
            <p className="mt-2 text-sm/6 text-gray-600 dark:text-gray-400">
              Full compliance with GDPR and other data protection regulations.
            </p>
          </div>
          <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-gray-200 dark:bg-gray-800 dark:ring-gray-700">
            <DocumentCheckIcon className="size-8 text-blue-600 dark:text-blue-400" />
            <h3 className="mt-6 text-base font-semibold text-gray-950 dark:text-white">
              Audit trails
            </h3>
            <p className="mt-2 text-sm/6 text-gray-600 dark:text-gray-400">
              Complete audit logs for all activities, payments, and attendance
              records.
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
        <p className="mt-6 text-lg text-gray-600 dark:text-gray-400">
          Create your first event in minutes. No credit card required.
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
    <main className="overflow-hidden bg-white dark:bg-gray-950">
      <Hero />
      <MainFeatures />
      <SecurityCompliance />
      <CTA />
      <Footer />
    </main>
  )
}
