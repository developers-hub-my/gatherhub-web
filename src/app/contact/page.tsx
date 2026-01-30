import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { Navbar } from '@/components/navbar'
import { Heading, Subheading } from '@/components/text'
import {
  EnvelopeIcon,
  ClockIcon,
  MapPinIcon,
} from '@heroicons/react/24/outline'
import type { Metadata } from 'next'
import { ContactForm } from './contact-form'

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Get in touch with the Gather Hub team. We are here to help you run better events.',
}

function Hero() {
  return (
    <div className="bg-white dark:bg-gray-950">
      <Container>
        <Navbar />
        <div className="pb-16 pt-8">
          <Subheading>Contact</Subheading>
          <Heading as="h1" className="mt-2">
            We&apos;re here to help.
          </Heading>
          <p className="mt-4 text-base text-gray-600 dark:text-gray-400 max-w-2xl">
            Have a question about Gather Hub? Need help with your account or
            event setup? Our team is ready to assist you.
          </p>
        </div>
      </Container>
    </div>
  )
}

function ContactInfo() {
  const contactMethods = [
    {
      icon: EnvelopeIcon,
      title: 'Email Support',
      detail: 'support@gatherhub.app',
      description: 'For general inquiries and support questions.',
    },
    {
      icon: EnvelopeIcon,
      title: 'Sales Inquiries',
      detail: 'sales@gatherhub.app',
      description: 'Interested in Gather Hub for your organisation?',
    },
    {
      icon: ClockIcon,
      title: 'Response Time',
      detail: 'Within 24 hours',
      description: 'We typically respond during business hours (Mon-Fri).',
    },
    {
      icon: MapPinIcon,
      title: 'Office',
      detail: 'Remote-first company',
      description: 'Our team works across multiple time zones.',
    },
  ]

  return (
    <Container className="pb-24">
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {contactMethods.map((method) => (
          <div
            key={method.title}
            className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800"
          >
            <div className="flex size-12 items-center justify-center rounded-xl bg-blue-50 dark:bg-blue-500/20">
              <method.icon className="size-6 text-blue-600 dark:text-blue-400" />
            </div>
            <h3 className="mt-4 text-base font-semibold text-gray-950 dark:text-white">
              {method.title}
            </h3>
            <p className="mt-2 text-sm font-medium text-gray-900 dark:text-gray-200">
              {method.detail}
            </p>
            <p className="mt-2 text-sm/6 text-gray-600 dark:text-gray-400">{method.description}</p>
          </div>
        ))}
      </div>
    </Container>
  )
}

function FAQ() {
  const faqs = [
    {
      question: 'How quickly will I receive a response?',
      answer:
        'We aim to respond to all inquiries within 24 hours during business days (Monday to Friday). For urgent technical issues, please indicate this in your message subject.',
    },
    {
      question: 'Do you offer phone support?',
      answer:
        'Currently, our primary support channels are email and in-app messaging. This allows us to provide detailed, documented assistance and maintain a record of our conversations.',
    },
    {
      question: 'Can I schedule a demo or consultation?',
      answer:
        'Yes. Please contact sales@gatherhub.app with your availability and organisation details, and we will arrange a personalised demonstration of the platform.',
    },
    {
      question: 'Where can I find technical documentation?',
      answer:
        'Our Help Center contains guides, tutorials, and technical documentation. You can also contact support for specific technical questions.',
    },
  ]

  return (
    <Container className="pb-24">
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
              <h3 className="text-lg font-semibold text-gray-950 dark:text-white">
                {faq.question}
              </h3>
              <p className="mt-3 text-base/7 text-gray-600 dark:text-gray-400">{faq.answer}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <p className="text-base text-gray-600 dark:text-gray-400">
            Have more questions?{' '}
            <a
              href="/help"
              className="font-medium text-blue-600 hover:text-blue-500 dark:text-blue-400"
            >
              Visit our Help Center
            </a>
          </p>
        </div>
      </div>
    </Container>
  )
}

export default function Contact() {
  return (
    <main className="overflow-hidden bg-white dark:bg-gray-950">
      <Hero />
      <ContactInfo />
      <ContactForm />
      <FAQ />
      <Footer />
    </main>
  )
}
