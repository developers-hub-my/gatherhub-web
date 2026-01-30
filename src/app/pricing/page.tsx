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
  CalendarDaysIcon,
  PuzzlePieceIcon,
  PaintBrushIcon,
  ChartBarIcon,
  EnvelopeIcon,
  CodeBracketIcon,
  UserGroupIcon,
} from '@heroicons/react/24/outline'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pricing',
  description:
    'GatherHub offers free core features with optional paid add-ons. Transaction fees only when you collect payments.',
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
          <p className="mt-4 text-base text-gray-600 dark:text-gray-400 max-w-2xl">
            Start free with essential features. Add powerful capabilities as you
            grow. Transaction fees only when you collect payments.
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
    'Capacity management',
    'Participant management',
    'Basic reports and data export',
    'Email support',
  ]

  const freeAddons = [
    {
      name: 'Kit Collection',
      description: 'Track event kit distribution to participants.',
    },
    {
      name: 'Crew Management',
      description: 'Manage team members and assign roles for events.',
    },
    {
      name: 'Custom Fields',
      description: 'Create custom registration forms with advanced field types.',
    },
    {
      name: 'Partners',
      description: 'Manage speakers, sponsors and other event partners.',
    },
    {
      name: 'Certificates',
      description: 'Generate and issue participation certificates with customizable templates.',
    },
    {
      name: 'Event Surveys',
      description: 'Create and send post-event surveys to collect feedback with NPS scoring and analytics.',
    },
    {
      name: 'Live Polling',
      description: 'Create real-time polls during events with instant results display and audience engagement.',
    },
    {
      name: 'Q&A Sessions',
      description: 'Enable attendees to submit questions with upvoting, moderation, and real-time display.',
    },
    {
      name: 'Social Wall',
      description: 'Display a social media wall aggregating posts with your event hashtag.',
    },
    {
      name: 'Gamification',
      description: 'Award points, badges, and track leaderboards to boost participant engagement.',
    },
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

          <div className="mt-8 grid gap-8 md:grid-cols-2">
            <div>
              <h3 className="text-base font-semibold text-gray-950 dark:text-white">
                Core Features:
              </h3>
              <ul className="mt-4 space-y-3">
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

            <div>
              <h3 className="text-base font-semibold text-gray-950 dark:text-white">
                Free Add-ons:
              </h3>
              <ul className="mt-4 space-y-4">
                {freeAddons.map((addon) => (
                  <li key={addon.name} className="flex items-start gap-3">
                    <SparklesIcon className="mt-0.5 size-5 shrink-0 text-blue-600 dark:text-blue-400" />
                    <div>
                      <span className="text-sm font-medium text-gray-950 dark:text-white">
                        {addon.name}
                      </span>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {addon.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
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

function PaidAddons() {
  const oneTimeAddons = [
    {
      name: 'Event Sessions',
      slug: 'event-sessions',
      price: 'RM 29',
      period: 'one-time',
      description: 'Create and manage sessions within events with attendance tracking.',
      icon: CalendarDaysIcon,
      comingSoon: true,
    },
    {
      name: 'Event Activities',
      slug: 'event-activities',
      price: 'RM 29',
      period: 'one-time',
      description: 'Manage activities and workshops with participant registration.',
      icon: PuzzlePieceIcon,
      comingSoon: true,
    },
    {
      name: 'Custom Branding',
      slug: 'custom-branding',
      price: 'RM 99',
      period: 'one-time',
      description: 'Customize event pages with organization branding.',
      icon: PaintBrushIcon,
      comingSoon: true,
    },
    {
      name: 'Attendee Networking',
      slug: 'attendee-networking',
      price: 'RM 99',
      period: 'one-time',
      description: 'Enable attendee directory and networking profiles for professional connections.',
      icon: UserGroupIcon,
      comingSoon: true,
    },
  ]

  const recurringAddons = [
    {
      name: 'Advanced Reporting',
      slug: 'advanced-reporting',
      price: 'RM 19',
      period: '/month',
      description: 'Access detailed analytics and export capabilities for events.',
      icon: ChartBarIcon,
      comingSoon: true,
    },
    {
      name: 'Blast Emails',
      slug: 'blast-emails',
      price: 'RM 29',
      period: '/month',
      description: 'Send bulk emails to event participants with tracking and analytics.',
      icon: EnvelopeIcon,
      comingSoon: true,
    },
    {
      name: 'API Access',
      slug: 'api-access',
      price: 'RM 199',
      period: '/year',
      description: 'Access REST API for integrations with external systems.',
      icon: CodeBracketIcon,
      comingSoon: true,
    },
  ]

  return (
    <div className="bg-gray-50 py-24 dark:bg-gray-900">
      <Container>
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <Subheading>Paid Add-ons</Subheading>
            <Heading as="h2" className="mt-2">
              Extend your capabilities.
            </Heading>
            <p className="mt-4 text-base text-gray-600 dark:text-gray-400">
              Add powerful features as your needs grow. Pay once or subscribe
              monthly.
            </p>
          </div>

          <div className="mt-12">
            <h3 className="text-lg font-semibold text-gray-950 dark:text-white">
              One-Time Purchase
            </h3>
            <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {oneTimeAddons.map((addon) => (
                <div
                  key={addon.slug}
                  className="relative rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800"
                >
                  {addon.comingSoon && (
                    <span className="absolute right-4 top-4 rounded-full bg-blue-100 px-2 py-0.5 text-xs font-medium text-blue-700 dark:bg-blue-900/50 dark:text-blue-300">
                      Coming Soon
                    </span>
                  )}
                  <addon.icon className="size-8 text-blue-600 dark:text-blue-400" />
                  <h4 className="mt-4 text-base font-semibold text-gray-950 dark:text-white">
                    {addon.name}
                  </h4>
                  <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                    {addon.description}
                  </p>
                  <div className="mt-4">
                    {addon.comingSoon ? (
                      <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
                        Coming Soon
                      </span>
                    ) : (
                      <>
                        <span className="text-2xl font-semibold text-gray-950 dark:text-white">
                          {addon.price}
                        </span>
                        <span className="text-sm text-gray-600 dark:text-gray-400">
                          {' '}
                          {addon.period}
                        </span>
                      </>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12">
            <h3 className="text-lg font-semibold text-gray-950 dark:text-white">
              Monthly / Annual Subscriptions
            </h3>
            <div className="mt-6 grid gap-6 sm:grid-cols-3">
              {recurringAddons.map((addon) => (
                <div
                  key={addon.slug}
                  className="relative rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800"
                >
                  {addon.comingSoon && (
                    <span className="absolute right-4 top-4 rounded-full bg-blue-100 px-2 py-0.5 text-xs font-medium text-blue-700 dark:bg-blue-900/50 dark:text-blue-300">
                      Coming Soon
                    </span>
                  )}
                  <addon.icon className="size-8 text-blue-600 dark:text-blue-400" />
                  <h4 className="mt-4 text-base font-semibold text-gray-950 dark:text-white">
                    {addon.name}
                  </h4>
                  <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                    {addon.description}
                  </p>
                  <div className="mt-4">
                    {addon.comingSoon ? (
                      <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
                        Coming Soon
                      </span>
                    ) : (
                      <>
                        <span className="text-2xl font-semibold text-gray-950 dark:text-white">
                          {addon.price}
                        </span>
                        <span className="text-sm text-gray-600 dark:text-gray-400">
                          {addon.period}
                        </span>
                      </>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </div>
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
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">per transaction</p>
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
                <span className="text-gray-600 dark:text-gray-400">Ticket price:</span>
                <span className="font-medium text-gray-950 dark:text-white">RM 100.00</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">Transaction fee (3%):</span>
                <span className="font-medium text-gray-950 dark:text-white">RM 3.00</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">Fixed fee:</span>
                <span className="font-medium text-gray-950 dark:text-white">RM 1.00</span>
              </div>
              <div className="flex justify-between border-t border-gray-200 pt-2 dark:border-gray-600">
                <span className="font-semibold text-gray-950 dark:text-white">You receive:</span>
                <span className="font-semibold text-gray-950 dark:text-white">RM 96.00</span>
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
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{method.description}</p>
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
        'No. GatherHub core platform is completely free to use with no monthly subscription fees. You get unlimited events, participants, and all core features at no cost. Paid add-ons are optional and only for advanced capabilities.',
    },
    {
      question: 'What are paid add-ons?',
      answer:
        'Paid add-ons are optional features that extend your event management capabilities. Some are one-time purchases (like Event Sessions and Activities), while others are subscriptions (like Advanced Reporting and Blast Emails). You only pay for what you need.',
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
        'Yes, you can choose to include transaction fees in your ticket price, or you can enable a setting that adds the fees to the participant\'s total at checkout. This is entirely your choice.',
    },
    {
      question: 'Are there refund fees?',
      answer:
        'When you issue a refund, the transaction fees are also refunded to you. There are no additional fees for processing refunds.',
    },
    {
      question: 'How do I receive my payments?',
      answer:
        'Payments are processed through our secure payment partners and deposited directly to your bank account. Payouts are typically processed within 3-5 business days after the transaction.',
    },
    {
      question: 'What does "Coming Soon" mean for add-ons?',
      answer:
        'Features marked as "Coming Soon" are currently in development. Event Sessions, Event Activities, Custom Branding, Attendee Networking, Advanced Reporting, Blast Emails, and API Access will be available in future updates. Sign up to be notified when they launch.',
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
                <p className="mt-3 text-sm/6 text-gray-600 dark:text-gray-400">{faq.answer}</p>
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
          Create your account today and run your first event for free. No
          credit card required.
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
      <PaidAddons />
      <TransactionFees />
      <PaymentMethods />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  )
}
