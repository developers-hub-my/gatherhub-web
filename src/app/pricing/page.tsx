import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { Navbar } from '@/components/navbar'
import { PlanComparison } from '@/components/plan-comparison'
import { Heading, Subheading } from '@/components/text'
import { config } from '@/lib/config'
import {
  BanknotesIcon,
  BuildingOffice2Icon,
  CheckIcon,
  QrCodeIcon,
} from '@heroicons/react/24/outline'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pricing',
  description:
    'Start free and upgrade as you grow. Free, Pro, and Business plans with a platform fee that only applies to paid tickets.',
}

function Hero() {
  return (
    <div className="bg-white dark:bg-gray-950">
      <Container>
        <Navbar />
        <div className="pb-16 pt-8">
          <Subheading>Pricing</Subheading>
          <Heading as="h1" className="mt-2 max-w-4xl">
            Start free, upgrade as you grow.
          </Heading>
          <p className="mt-4 max-w-2xl text-base text-gray-600 dark:text-gray-400">
            Every plan runs an event end to end. Paid plans add more events, a
            lower platform fee, included email credits, and advanced features.
            The platform fee applies only when you collect payments — free events
            never incur a fee.
          </p>
        </div>
      </Container>
    </div>
  )
}

function TransactionFees() {
  const points = [
    {
      title: 'Only on successful paid tickets',
      body: 'Free registrations and free events have no fee at all.',
    },
    {
      title: 'Your plan lowers the rate',
      body: 'Free is 3%, Pro is 2%, and Business is 1.5% — plus RM 1 per paid ticket.',
    },
    {
      title: 'Automatic and transparent',
      body: 'The fee is calculated and deducted from your payout automatically. No hidden charges.',
    },
  ]

  return (
    <div className="bg-gray-50 py-24 dark:bg-gray-900">
      <Container>
        <div className="mx-auto max-w-3xl">
          <div className="text-center">
            <Subheading>Platform fee</Subheading>
            <Heading as="h2" className="mt-2">
              Pay a small fee only when you get paid.
            </Heading>
            <p className="mt-4 text-base text-gray-600 dark:text-gray-400">
              On top of your plan, a per-ticket platform fee applies to paid
              registrations. Your plan sets the rate.
            </p>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-3">
            {[
              { name: 'Free', fee: '3% + RM 1' },
              { name: 'Pro', fee: '2% + RM 1' },
              { name: 'Business', fee: '1.5% + RM 1' },
            ].map((tier) => (
              <div
                key={tier.name}
                className="rounded-2xl border border-gray-200 bg-white p-6 text-center shadow-sm dark:border-gray-700 dark:bg-gray-800"
              >
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  {tier.name}
                </p>
                <p className="mt-2 text-2xl font-semibold text-gray-950 dark:text-white">
                  {tier.fee}
                </p>
                <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                  per paid ticket
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 space-y-4 rounded-2xl border border-gray-200 bg-white p-8 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            {points.map((point) => (
              <div key={point.title} className="flex items-start gap-3">
                <CheckIcon className="mt-0.5 size-5 shrink-0 text-blue-600 dark:text-blue-400" />
                <div>
                  <p className="text-sm font-medium text-gray-950 dark:text-white">
                    {point.title}
                  </p>
                  <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                    {point.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  )
}

function PaymentMethods() {
  const methods = [
    {
      name: 'Online banking (FPX)',
      description: 'Pay directly from any Malaysian bank account.',
      icon: BanknotesIcon,
    },
    {
      name: 'DuitNow QR',
      description: 'Scan-to-pay with any DuitNow-enabled wallet or bank app.',
      icon: QrCodeIcon,
    },
    {
      name: 'Manual bank transfer',
      description: 'Upload a transfer receipt for organizer approval.',
      icon: BuildingOffice2Icon,
    },
  ]

  return (
    <Container className="pb-24">
      <div className="mx-auto max-w-3xl">
        <div className="text-center">
          <Subheading>Payment methods</Subheading>
          <Heading as="h2" className="mt-2">
            How participants pay.
          </Heading>
          <p className="mt-4 text-base text-gray-600 dark:text-gray-400">
            Powered by BayarCash. Participants pay with Malaysian rails — no card
            details are handled by GatherHub.
          </p>
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

function Enterprise() {
  const highlights = [
    'Self-hosted / on-premise deployment',
    'Dedicated infrastructure and custom SLAs',
    'Custom integrations and onboarding support',
  ]

  return (
    <div className="bg-gray-50 py-24 dark:bg-gray-900">
      <Container>
        <div className="mx-auto max-w-3xl rounded-3xl border border-gray-200 bg-white p-10 shadow-sm dark:border-gray-700 dark:bg-gray-800">
          <BuildingOffice2Icon className="size-8 text-blue-600 dark:text-blue-400" />
          <Heading as="h2" className="mt-3 text-3xl">
            Enterprise
          </Heading>
          <p className="mt-4 text-base text-gray-600 dark:text-gray-400">
            Running at scale or need to host GatherHub yourself? Enterprise is a
            tailored engagement — pricing and scope are scoped with our team.
          </p>
          <ul className="mt-6 space-y-3">
            {highlights.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <CheckIcon className="mt-0.5 size-5 shrink-0 text-blue-600 dark:text-blue-400" />
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  {item}
                </span>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-xs text-gray-500 dark:text-gray-400">
            Single sign-on (SAML / OIDC) is on the enterprise roadmap — ask us
            about timelines for your deployment.
          </p>
          <div className="mt-8">
            <Button href="/contact">Talk to sales</Button>
          </div>
        </div>
      </Container>
    </div>
  )
}

function FAQ() {
  const faqs = [
    {
      question: 'Is there a free plan?',
      answer:
        'Yes. The Free plan runs an event end to end — up to 2 active events with every core feature and the free add-ons. Upgrade to Pro or Business when you need more events, a lower platform fee, or advanced features.',
    },
    {
      question: 'What do the paid plans cost?',
      answer:
        'Pro is RM 99/month and Business is RM 299/month. They bundle more events, additional features, included email credits, and a lower per-ticket platform fee (2% on Pro, 1.5% on Business).',
    },
    {
      question: 'Can I buy a single feature without a plan?',
      answer:
        'Features come with plans rather than being sold individually — pick the plan that includes what you need. This keeps pricing simple and predictable.',
    },
    {
      question: 'What if I run free events?',
      answer:
        'Free events have no platform fee at all, on any plan. The per-ticket fee only applies when a participant pays for a ticket.',
    },
    {
      question: 'How is the platform fee charged?',
      answer:
        'It is calculated per paid ticket as your plan’s percentage plus RM 1, and deducted automatically before funds are transferred to you.',
    },
    {
      question: 'Can I pass the fee to participants?',
      answer:
        'Yes. You can absorb the fee or add it to the participant’s total at checkout — it’s your choice per event.',
    },
    {
      question: 'Are refunds charged a fee?',
      answer:
        'No. When you issue a refund the platform fee is returned too, and refunds go through a multi-stage approval workflow for transparency.',
    },
    {
      question: 'How do participants pay, and how do I get paid?',
      answer:
        'Participants pay via FPX online banking, DuitNow QR, or manual bank transfer (powered by BayarCash). You request payouts from the earnings dashboard, deposited to your bank account after approval.',
    },
  ]

  return (
    <div className="bg-white py-24 dark:bg-gray-950">
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
          Create your account today and run your first event on the free plan. No
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
      <PlanComparison />
      <TransactionFees />
      <PaymentMethods />
      <Enterprise />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  )
}
