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
} from '@heroicons/react/24/outline'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pricing',
  description:
    'Gather Hub is free to use. We only charge a small transaction fee when you collect payments.',
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
            No monthly fees. No hidden charges. Pay only when you collect
            payments from participants.
          </p>
        </div>
      </Container>
    </div>
  )
}

function PricingCard() {
  const features = [
    'Unlimited activities and events',
    'Unlimited participants',
    'QR code check-in',
    'Attendance tracking and validation',
    'Certificate generation',
    'Email notifications and reminders',
    'Registration forms',
    'Capacity management',
    'Participant management',
    'Reports and data export',
    'Email support',
  ]

  return (
    <Container className="pb-24">
      <div className="mx-auto max-w-2xl">
        <div className="rounded-3xl border border-gray-200 bg-white p-10 shadow-lg dark:border-gray-700 dark:bg-gray-800">
          <div className="text-center">
            <Heading as="h2" className="text-3xl">
              Free Platform
            </Heading>
            <p className="mt-4 text-base text-gray-600 dark:text-gray-400">
              Access all features at no monthly cost.
            </p>
          </div>

          <div className="mt-8 rounded-2xl bg-blue-50 p-6 dark:bg-blue-500/20">
            <div className="text-center">
              <div className="text-5xl font-semibold text-gray-950 dark:text-white">RM 0</div>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">per month</p>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="text-base font-semibold text-gray-950 dark:text-white">
              Everything included:
            </h3>
            <ul className="mt-4 space-y-3">
              {features.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <CheckIcon className="mt-0.5 size-5 shrink-0 text-blue-600 dark:text-blue-400" />
                  <span className="text-sm text-gray-600 dark:text-gray-400">{feature}</span>
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
      question: 'Are there any monthly fees?',
      answer:
        'No. Gather Hub is completely free to use. There are no monthly subscription fees, setup fees, or hidden charges. You only pay transaction fees when you collect payments from participants.',
    },
    {
      question: 'What if I run free events?',
      answer:
        'Free events have no fees at all. You can create unlimited free events and registrations without any charges. Transaction fees only apply when you collect payments from participants.',
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
      question: 'Is there a free trial?',
      answer:
        'You don\'t need a trial because the platform is already free to use. Create your account, set up your first event, and start accepting registrations immediately without entering payment information.',
    },
    {
      question: 'Can I upgrade to remove transaction fees?',
      answer:
        'Currently, we only offer the pay-per-transaction model. This keeps our pricing simple and ensures you only pay when you\'re making money from your events.',
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
      <PricingCard />
      <TransactionFees />
      <PaymentMethods />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  )
}
