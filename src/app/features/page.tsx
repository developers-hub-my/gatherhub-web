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
  BoltIcon,
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
  FilmIcon,
  GiftIcon,
  GlobeAltIcon,
  IdentificationIcon,
  KeyIcon,
  MegaphoneIcon,
  MicrophoneIcon,
  QrCodeIcon,
  ShieldCheckIcon,
  ShoppingCartIcon,
  SparklesIcon,
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
          description="Build comprehensive events with sessions, activities, and venue management. From one-day workshops to multi-day conferences, with reusable templates and a public event directory."
          features={[
            {
              name: 'Rich event builder',
              description:
                'Create events with rich text descriptions, SEO settings, custom fields, images, visibility controls, and capacity with waitlists.',
              icon: CalendarDaysIcon,
            },
            {
              name: 'Session & activity scheduling',
              description:
                'Organize time-blocked sessions and parallel activities with capacity limits, speaker assignments, and individual attendance tracking.',
              icon: ClockIcon,
            },
            {
              name: 'Venue library',
              description:
                'Save and reuse venues across events with address, geolocation, capacity, amenities, and photos.',
              icon: BuildingOfficeIcon,
            },
            {
              name: 'Event cloning & templates',
              description:
                'Duplicate events with selective data copying, or save event configurations as reusable templates for faster setup.',
              icon: DocumentDuplicateIcon,
            },
            {
              name: 'Public event directory',
              description:
                'List your events on a discoverable public directory so participants can find and register directly.',
              icon: GlobeAltIcon,
            },
          ]}
        />

        {/* Section 2: Registration & Ticketing */}
        <FeatureSection
          title="Registration & Ticketing"
          description="Flexible registration options for free and paid events. Collect the information you need with customizable forms, discount codes, and promotional pricing."
          reverse
          features={[
            {
              name: 'Multiple ticket types',
              description:
                'Create different ticket tiers with varying prices, benefits, discount codes, and availability windows.',
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
                'Import participants from CSV or paste for corporate events and pre-registered attendees with validation and error reporting.',
              icon: UserPlusIcon,
            },
            {
              name: 'Bundle discounts & flash sales',
              description:
                'Offer buy-X-get-Y-free bundle deals, early bird pricing, and flash sale countdown timers to drive registrations.',
              icon: BoltIcon,
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
          description="Accept payments securely with multiple Malaysian payment methods. Full refund management and organizer payout workflows built in."
          features={[
            {
              name: 'Online banking (FPX) & DuitNow QR',
              description:
                'Accept instant payments from all major Malaysian banks through FPX or let participants scan a DuitNow QR code.',
              icon: BanknotesIcon,
            },
            {
              name: 'Manual bank transfer',
              description:
                'Accept bank transfers with receipt upload and admin approval workflow.',
              icon: CreditCardIcon,
            },
            {
              name: 'Refund management',
              description:
                'Handle refund requests with a multi-stage approval workflow, bank detail collection, proof uploads, and finance processing.',
              icon: DocumentCheckIcon,
            },
            {
              name: 'Organizer payouts',
              description:
                'Request payouts with admin approval, bulk processing, commission tracking, and earnings dashboard.',
              icon: ChartBarIcon,
            },
          ]}
        />

        {/* Section 4: Check-in & Attendance */}
        <FeatureSection
          title="Check-in & Attendance"
          description="Track attendance accurately at every level with QR codes, manual check-in, and virtual event support with secret codes."
          reverse
          features={[
            {
              name: 'QR code scanning',
              description:
                'Fast, contactless check-in with unique QR codes for each participant. Supports time validation and grace periods.',
              icon: QrCodeIcon,
            },
            {
              name: 'Multi-level tracking',
              description:
                'Track attendance at the event, session, and activity level for detailed participation records.',
              icon: CheckBadgeIcon,
            },
            {
              name: 'Online QR & secret codes',
              description:
                'Support virtual events with online QR check-in and secret code redemption for remote participation.',
              icon: KeyIcon,
            },
            {
              name: 'Mobile check-in',
              description:
                'Check in participants from any device with our mobile-friendly interface and real-time dashboards.',
              icon: DevicePhoneMobileIcon,
            },
          ]}
        />

        {/* Section 5: Certificates & Recognition */}
        <FeatureSection
          title="Certificates & Recognition"
          description="Generate professional certificates with flexible eligibility rules. Reward participation with verified, QR-verifiable credentials."
          features={[
            {
              name: 'Customizable templates',
              description:
                'Design certificate templates with your branding, colors, and layout preferences.',
              icon: AcademicCapIcon,
            },
            {
              name: 'Eligibility rules & scoring',
              description:
                'Set attendance requirements, activity completion, and point-based scoring criteria for certificate issuance.',
              icon: DocumentCheckIcon,
            },
            {
              name: 'QR verification',
              description:
                'Each certificate includes a unique QR code for instant authenticity verification by employers and institutions.',
              icon: ShieldCheckIcon,
            },
            {
              name: 'Gamification',
              description:
                'Award points, badges, and track leaderboards with streaks to boost participant engagement and recognize top participants.',
              icon: TrophyIcon,
            },
          ]}
        />

        {/* Section 6: Team & Collaboration */}
        <FeatureSection
          title="Team & Collaboration"
          description="Work together to deliver great events. Assign roles, manage speakers and sponsors with self-service portals, and accept session proposals."
          reverse
          features={[
            {
              name: 'Crew management',
              description:
                'Assign team members with 5 predefined roles, 10 granular permissions, custom overrides, and invitation workflows.',
              icon: UserGroupIcon,
            },
            {
              name: 'Speaker & sponsor portals',
              description:
                'Speakers and sponsors manage their own profiles, upload materials, and view assignments through self-service portals.',
              icon: MicrophoneIcon,
            },
            {
              name: 'Call for papers',
              description:
                'Accept session proposals from speakers with a submission and review workflow for conference planning.',
              icon: ClipboardDocumentListIcon,
            },
            {
              name: 'Kit distribution',
              description:
                'Track swag and kit item collection with variant support, eligibility rules, and collection statistics.',
              icon: GiftIcon,
            },
          ]}
        />

        {/* Section 7: Engagement & Interaction */}
        <FeatureSection
          title="Engagement & Interaction"
          description="Boost attendee participation with interactive polls, Q&A, surveys, social sharing, and networking tools during and after your events."
          features={[
            {
              name: 'Live polling',
              description:
                'Create real-time polls with single or multiple choice options, instant results display, and presenter mode.',
              icon: ChartBarIcon,
            },
            {
              name: 'Q&A sessions',
              description:
                'Enable attendees to submit questions with upvoting, moderation, featured questions, and presenter view.',
              icon: ChatBubbleLeftRightIcon,
            },
            {
              name: 'Post-event surveys',
              description:
                'Collect feedback with multiple question types, NPS scoring, analytics, and CSV export.',
              icon: ClipboardDocumentListIcon,
            },
            {
              name: 'Social wall & sharing',
              description:
                'Display a moderated social media wall with masonry layout, plus share buttons for 6 platforms.',
              icon: MegaphoneIcon,
            },
            {
              name: 'Virtual business cards',
              description:
                'Exchange digital business cards via QR codes with vCard download and a contacts management page.',
              icon: IdentificationIcon,
            },
          ]}
        />

        {/* Section 8: Communication & Insights */}
        <FeatureSection
          title="Communication & Insights"
          description="Keep participants informed with email and WhatsApp campaigns. Access detailed analytics, generate marketing content, and export comprehensive reports."
          reverse
          features={[
            {
              name: 'Blast email & WhatsApp',
              description:
                'Send targeted emails and WhatsApp messages to participants with templates, scheduling, personalization, and delivery tracking.',
              icon: EnvelopeIcon,
            },
            {
              name: 'Marketing content studio',
              description:
                'Generate promotional content for your events to share across channels and drive registrations.',
              icon: SparklesIcon,
            },
            {
              name: 'Analytics dashboard',
              description:
                'Track registrations, attendance rates, revenue, email open rates, and participant engagement with tabbed charts and reports.',
              icon: ChartPieIcon,
            },
            {
              name: 'Data export',
              description:
                'Export participant lists, attendance records, financial reports, and analytics to Excel or CSV.',
              icon: ArrowDownTrayIcon,
            },
          ]}
        />

        {/* Section 9: Recordings & Vendor Marketplace */}
        <FeatureSection
          title="Recordings & Vendor Marketplace"
          description="Monetize event content with recordings and materials, and connect with vendors for services like catering, AV, and photography."
          features={[
            {
              name: 'Recordings & materials',
              description:
                'Upload session recordings and materials with paid access, purchase flow, and a dedicated viewer page.',
              icon: FilmIcon,
            },
            {
              name: 'Vendor marketplace',
              description:
                'Browse a directory of 16 vendor service types, request itemized quotations, and communicate through built-in messaging.',
              icon: ShoppingCartIcon,
            },
            {
              name: 'Sponsor management',
              description:
                'Organize sponsors by tier with logos, benefits tracking, display ordering, and self-service portal access.',
              icon: MegaphoneIcon,
            },
            {
              name: 'Webhooks',
              description:
                'Integrate with external systems using managed webhook endpoints with retries and signature verification.',
              icon: BoltIcon,
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
              Two-factor authentication
            </h3>
            <p className="mt-2 text-sm/6 text-gray-600 dark:text-gray-400">
              Secure accounts with TOTP-based two-factor authentication and
              recovery codes.
            </p>
          </div>
          <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-gray-200 dark:bg-gray-800 dark:ring-gray-700">
            <CheckBadgeIcon className="size-8 text-blue-600 dark:text-blue-400" />
            <h3 className="mt-6 text-base font-semibold text-gray-950 dark:text-white">
              Data encryption
            </h3>
            <p className="mt-2 text-sm/6 text-gray-600 dark:text-gray-400">
              All data is encrypted in transit and at rest using
              industry-standard protocols.
            </p>
          </div>
          <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-gray-200 dark:bg-gray-800 dark:ring-gray-700">
            <DocumentCheckIcon className="size-8 text-blue-600 dark:text-blue-400" />
            <h3 className="mt-6 text-base font-semibold text-gray-950 dark:text-white">
              Audit trails
            </h3>
            <p className="mt-2 text-sm/6 text-gray-600 dark:text-gray-400">
              Complete audit logs for all activities, payments, attendance
              records, and API rate limiting.
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
