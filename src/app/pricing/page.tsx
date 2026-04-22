import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { config } from '@/lib/config'
import { Navbar } from '@/components/navbar'
import { Heading, Subheading } from '@/components/text'
import {
  CheckIcon,
  CreditCardIcon,
  ShieldCheckIcon,
  BanknotesIcon,
  SparklesIcon,
  PaintBrushIcon,
  EnvelopeIcon,
  CodeBracketIcon,
  UserGroupIcon,
} from '@heroicons/react/24/outline'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pricing',
  description:
    'GatherHub gives you all current features for free. Transaction fees only when you collect payments.',
}

function Hero() {
  return (
    <div className="bg-white dark:bg-gray-950">
      <Container>
        <Navbar />
        <div className="pb-16 pt-8">
          <Subheading>Pricing</Subheading>
          <Heading as="h1" className="mt-2 max-w-4xl">
            Simple, transparent pricing.
          </Heading>
          <p className="mt-4 max-w-2xl text-base text-gray-600 dark:text-gray-400">
            Every current feature is free, including all add-ons. Transaction
            fees only apply when you collect payments from participants.
          </p>
        </div>
      </Container>
    </div>
  )
}

function FreeFeatures() {
  const coreFeatures = [
    'Unlimited activities and events',
    'Unlimited participants',
    'QR code check-in',
    'Attendance tracking and validation',
    'Email notifications and reminders',
    'Registration forms',
    'Capacity management and waitlists',
    'Participant management',
    'Public event directory',
    'Email support',
  ]

  return (
    <Container className="pb-24">
      <div className="mx-auto max-w-4xl">
        <div className="rounded-3xl border border-gray-200 bg-white p-10 shadow-lg dark:border-gray-700 dark:bg-gray-800">
          <div className="text-center">
            <Heading as="h2" className="text-3xl">
              Free Platform
            </Heading>
            <p className="mt-4 text-base text-gray-600 dark:text-gray-400">
              Everything you need to run successful events at no cost.
            </p>
          </div>

          <div className="mt-8 rounded-2xl bg-blue-50 p-6 dark:bg-blue-500/20">
            <div className="text-center">
              <div className="text-5xl font-semibold text-gray-950 dark:text-white">
                RM 0
              </div>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                per month, forever
              </p>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="text-base font-semibold text-gray-950 dark:text-white">
              Core Features:
            </h3>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {coreFeatures.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <CheckIcon className="mt-0.5 size-5 shrink-0 text-blue-600 dark:text-blue-400" />
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8">
            <Button href={`${config.appUrl}/register`} className="w-full">
              Get started for free
            </Button>
          </div>
        </div>
      </div>
    </Container>
  )
}

function FreeAddons() {
  const freeAddons = [
    {
      name: 'Event Sessions',
      description:
        'Create and manage sessions within events with speaker assignments and attendance tracking.',
    },
    {
      name: 'Event Activities',
      description:
        'Manage activities and workshops with participant registration and capacity limits.',
    },
    {
      name: 'Kit Collection',
      description:
        'Track event kit distribution with variants, eligibility rules, and collection statistics.',
    },
    {
      name: 'Certificates',
      description:
        'Generate participation certificates with customizable templates, eligibility rules, and QR verification.',
    },
    {
      name: 'Crew Management',
      description:
        'Manage team members with roles, permissions, custom overrides, and invitations.',
    },
    {
      name: 'Custom Fields',
      description:
        'Create custom registration forms with advanced field types.',
    },
    {
      name: 'Partners',
      description:
        'Manage speakers and sponsors with profiles, self-service portals, and event assignments.',
    },
    {
      name: 'Live Polling',
      description:
        'Run real-time polls with instant results display and presenter mode.',
    },
    {
      name: 'Q&A Sessions',
      description:
        'Enable attendee questions with upvoting, moderation, and presenter view.',
    },
    {
      name: 'Social Wall',
      description:
        'Display a moderated social wall with masonry layout aggregating posts with your event hashtag.',
    },
    {
      name: 'Gamification',
      description:
        'Award points, badges, and leaderboards with streaks to boost participant engagement.',
    },
    {
      name: 'Event Surveys',
      description:
        'Send post-event surveys with multiple question types, NPS scoring, analytics, and CSV export.',
    },
    {
      name: 'Advanced Reporting',
      description:
        'Detailed analytics, financial reports, and export capabilities for every event.',
    },
    {
      name: 'Event Templates',
      description:
        'Save event configurations as reusable templates to speed up future event setup.',
    },
    {
      name: 'Virtual Business Cards',
      description:
        'Exchange digital business cards via QR codes with vCard download and contacts management.',
    },
    {
      name: 'Call for Papers',
      description:
        'Accept session proposals from speakers with a submission and review workflow.',
    },
    {
      name: 'Bundle Discounts',
      description:
        'Offer buy-X-get-Y-free deals combinable with discount codes and early bird pricing.',
    },
  ]

  return (
    <div className="bg-gray-50 py-24 dark:bg-gray-900">
      <Container>
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <Subheading>Free Add-ons</Subheading>
            <Heading as="h2" className="mt-2">
              All add-ons included at no cost.
            </Heading>
            <p className="mt-4 text-base text-gray-600 dark:text-gray-400">
              Enable any of these capabilities anytime. No upgrades, no
              surprises, no extra fees.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {freeAddons.map((addon) => (
              <div
                key={addon.name}
                className="relative rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800"
              >
                <SparklesIcon className="size-8 text-blue-600 dark:text-blue-400" />
                <h4 className="mt-4 text-base font-semibold text-gray-950 dark:text-white">
                  {addon.name}
                </h4>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                  {addon.description}
                </p>
                <div className="mt-4">
                  <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
                    Free
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  )
}

function ComingSoonAddons() {
  const addons = [
    {
      name: 'Blast Emails & WhatsApp',
      description:
        'Send bulk emails and WhatsApp messages to participants with templates, scheduling, and delivery tracking.',
      icon: EnvelopeIcon,
    },
    {
      name: 'Attendee Networking',
      description:
        'Enable attendee directory and networking profiles for professional connections.',
      icon: UserGroupIcon,
    },
    {
      name: 'Custom Branding',
      description:
        'Customize event pages with organization branding and colors.',
      icon: PaintBrushIcon,
    },
    {
      name: 'API Access',
      description:
        'Access REST API for integrations with external systems and webhooks.',
      icon: CodeBracketIcon,
    },
  ]

  return (
    <Container className="py-24">
      <div className="mx-auto max-w-5xl">
        <div className="text-center">
          <Subheading>Coming Soon</Subheading>
          <Heading as="h2" className="mt-2">
            On the way.
          </Heading>
          <p className="mt-4 text-base text-gray-600 dark:text-gray-400">
            New capabilities currently in development. Pricing will be announced
            closer to launch.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {addons.map((addon) => (
            <div
              key={addon.name}
              className="relative rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800"
            >
              <span className="absolute right-4 top-4 rounded-full bg-blue-100 px-2 py-0.5 text-xs font-medium text-blue-700 dark:bg-blue-900/50 dark:text-blue-300">
                Coming Soon
              </span>
              <addon.icon className="size-8 text-blue-600 dark:text-blue-400" />
              <h4 className="mt-4 text-base font-semibold text-gray-950 dark:text-white">
                {addon.name}
              </h4>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                {addon.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Container>
  )
}

function TransactionFees() {
  return (
    <div className="bg-gray-50 py-24 dark:bg-gray-900">
      <Container>
        <div className="mx-auto max-w-3xl">
          <div className="text-center">
            <Subheading>Transaction Fees</Subheading>
            <Heading as="h2" className="mt-2">
              Pay only when you collect payments.
            </Heading>
            <p className="mt-4 text-base text-gray-600 dark:text-gray-400">
              We charge a small fee for each paid registration to keep the
              platform running.
            </p>
          </div>

          <div className="mt-12 rounded-2xl border border-gray-200 bg-white p-8 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <div className="flex items-center justify-center gap-3">
              <CreditCardIcon className="size-8 text-blue-600 dark:text-blue-400" />
              <div className="text-center">
                <div className="text-4xl font-semibold text-gray-950 dark:text-white">
                  3% + RM 1
                </div>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                  per transaction
                </p>
              </div>
            </div>

            <div className="mt-8 space-y-4 border-t border-gray-200 pt-8 dark:border-gray-700">
              <div className="flex items-start gap-3">
                <CheckIcon className="mt-0.5 size-5 shrink-0 text-blue-600 dark:text-blue-400" />
                <div>
                  <p className="text-sm font-medium text-gray-950 dark:text-white">
                    Only charged on successful payments
                  </p>
                  <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                    Free registrations have no fees.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckIcon className="mt-0.5 size-5 shrink-0 text-blue-600 dark:text-blue-400" />
                <div>
                  <p className="text-sm font-medium text-gray-950 dark:text-white">
                    Transparent pricing
                  </p>
                  <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                    No hidden fees or surprise charges.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckIcon className="mt-0.5 size-5 shrink-0 text-blue-600 dark:text-blue-400" />
                <div>
                  <p className="text-sm font-medium text-gray-950 dark:text-white">
                    Automatic calculation
                  </p>
                  <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                    Fees are automatically deducted from payouts.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 rounded-2xl bg-blue-50 p-6 dark:bg-blue-500/20">
            <h3 className="text-base font-semibold text-gray-950 dark:text-white">
              Example calculation
            </h3>
            <div className="mt-4 space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">
                  Ticket price:
                </span>
                <span className="font-medium text-gray-950 dark:text-white">
                  RM 100.00
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">
                  Transaction fee (3%):
                </span>
                <span className="font-medium text-gray-950 dark:text-white">
                  RM 3.00
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">
                  Fixed fee:
                </span>
                <span className="font-medium text-gray-950 dark:text-white">
                  RM 1.00
                </span>
              </div>
              <div className="flex justify-between border-t border-gray-200 pt-2 dark:border-gray-600">
                <span className="font-semibold text-gray-950 dark:text-white">
                  You receive:
                </span>
                <span className="font-semibold text-gray-950 dark:text-white">
                  RM 96.00
                </span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

function PaymentMethods() {
  const methods = [
    {
      name: 'Credit & Debit Cards',
      description: 'Visa, Mastercard, and other major cards',
      icon: CreditCardIcon,
    },
    {
      name: 'Secure Processing',
      description: 'PCI-compliant payment processing',
      icon: ShieldCheckIcon,
    },
    {
      name: 'Bank Transfers',
      description: 'Direct bank transfers and FPX',
      icon: BanknotesIcon,
    },
  ]

  return (
    <Container className="pb-24">
      <div className="mx-auto max-w-3xl">
        <div className="text-center">
          <Subheading>Payment Methods</Subheading>
          <Heading as="h2" className="mt-2">
            Accept payments your way.
          </Heading>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {methods.map((method) => (
            <div
              key={method.name}
              className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800"
            >
              <method.icon className="size-8 text-blue-600 dark:text-blue-400" />
              <h3 className="mt-4 text-base font-semibold text-gray-950 dark:text-white">
                {method.name}
              </h3>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                {method.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Container>
  )
}

function FAQ() {
  const faqs = [
    {
      question: 'Are there any monthly fees for the platform?',
      answer:
        'No. GatherHub is completely free to use with no monthly subscription fees. You get unlimited events, unlimited participants, and every currently available add-on at no cost.',
    },
    {
      question: 'What add-ons do I get for free?',
      answer:
        'All currently available add-ons are free, including Event Sessions, Event Activities, Live Polling, Q&A Sessions, Social Wall, Gamification, Event Surveys, Advanced Reporting, Certificates, Kit Collection, Crew Management, Custom Fields, and Partners. Enable any of them anytime with no extra charges.',
    },
    {
      question: 'Will any of these free add-ons become paid later?',
      answer:
        'We have no plans to convert currently free add-ons into paid features. If pricing ever changes for a specific module, existing organizations using it will be notified well in advance.',
    },
    {
      question: 'What if I run free events?',
      answer:
        'Free events have no transaction fees at all. You can create unlimited free events and registrations without any charges. Transaction fees only apply when you collect payments from participants.',
    },
    {
      question: 'When are transaction fees charged?',
      answer:
        'Transaction fees are automatically deducted when participants pay for registration. The fee is calculated as 3% of the transaction amount plus RM 1, and is deducted before funds are transferred to your account.',
    },
    {
      question: 'Can I pass the fees to participants?',
      answer:
        "Yes, you can choose to include transaction fees in your ticket price, or you can enable a setting that adds the fees to the participant's total at checkout. This is entirely your choice.",
    },
    {
      question: 'Are there refund fees?',
      answer:
        'When you issue a refund, the transaction fees are also refunded to you. There are no additional fees for processing refunds. Refund requests go through a multi-stage approval workflow for full transparency.',
    },
    {
      question: 'How do I receive my payments?',
      answer:
        'Payments are processed through our secure payment partners and deposited directly to your bank account. You can request payouts through the earnings dashboard, which are processed after admin approval.',
    },
    {
      question: 'What does "Coming Soon" mean for add-ons?',
      answer:
        'Features marked as "Coming Soon" are currently in development. Blast Emails & WhatsApp, Attendee Networking, Custom Branding, and API Access will be available in future updates. Pricing for these add-ons will be announced closer to launch.',
    },
  ]

  return (
    <div className="bg-gray-50 py-24 dark:bg-gray-900">
      <Container>
        <div className="mx-auto max-w-3xl">
          <div className="text-center">
            <Subheading>FAQ</Subheading>
            <Heading as="h2" className="mt-2">
              Common questions
            </Heading>
          </div>

          <div className="mt-12 space-y-8">
            {faqs.map((faq) => (
              <div key={faq.question}>
                <h3 className="text-base font-semibold text-gray-950 dark:text-white">
                  {faq.question}
                </h3>
                <p className="mt-3 text-sm/6 text-gray-600 dark:text-gray-400">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-base text-gray-600 dark:text-gray-400">
              Have more questions?{' '}
              <a
                href="/contact"
                className="font-medium text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300"
              >
                Contact our team
              </a>
            </p>
          </div>
        </div>
      </Container>
    </div>
  )
}

function CTA() {
  return (
    <Container className="pb-24">
      <div className="rounded-3xl bg-gray-950 px-6 py-16 text-center sm:px-16">
        <Heading as="h2" dark>
          Ready to get started?
        </Heading>
        <p className="mx-auto mt-6 max-w-xl text-base text-gray-300">
          Create your account today and run your first event for free. No credit
          card required.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Button href={`${config.appUrl}/register`}>Start for free</Button>
          <Button variant="secondary" href="/contact">
            Talk to sales
          </Button>
        </div>
      </div>
    </Container>
  )
}

export default function Pricing() {
  return (
    <main className="overflow-hidden bg-white dark:bg-gray-950">
      <Hero />
      <FreeFeatures />
      <FreeAddons />
      <ComingSoonAddons />
      <TransactionFees />
      <PaymentMethods />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  )
}
