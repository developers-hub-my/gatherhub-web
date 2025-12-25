'use client'

import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { Gradient } from '@/components/gradient'
import { Navbar } from '@/components/navbar'
import { Heading, Subheading } from '@/components/text'
import {
  CheckCircleIcon,
  ClipboardDocumentListIcon,
  QrCodeIcon,
  TicketIcon,
  UserGroupIcon,
} from '@heroicons/react/24/outline'
import {
  AcademicCapIcon,
  BuildingOffice2Icon,
  CalendarDaysIcon,
  ChartBarIcon,
  DocumentCheckIcon,
  SparklesIcon,
  UserCircleIcon,
  UsersIcon,
} from '@heroicons/react/24/solid'
import { motion } from 'framer-motion'

function Hero() {
  return (
    <div className="relative">
      <Gradient className="absolute inset-2 bottom-0 rounded-4xl ring-1 ring-black/5 ring-inset" />
      <Container className="relative">
        <Navbar />
        <div className="pt-16 pb-24 sm:pt-24 sm:pb-32 md:pt-32 md:pb-48">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="font-display text-6xl/[0.9] font-medium tracking-tight text-balance text-gray-950 sm:text-8xl/[0.8] md:text-9xl/[0.8]">
              Run activities with clarity and proof.
            </h1>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-8 max-w-lg text-xl/7 font-medium text-gray-950/75 sm:text-2xl/8"
          >
            Gather Hub handles registration, payments, attendance, and
            participation proof — so you can focus on running your events well.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-12 flex flex-col gap-x-6 gap-y-4 sm:flex-row"
          >
            <Button href="#">Start for free</Button>
            <Button variant="secondary" href="#how-it-works">
              See how it works
            </Button>
          </motion.div>
        </div>
      </Container>
    </div>
  )
}

function TrustIndicators() {
  const stats = [
    { label: 'Events managed', value: '10K+' },
    { label: 'Participants served', value: '500K+' },
    { label: 'Avg. time saved', value: '12hrs/event' },
  ]

  return (
    <Container className="pb-24">
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="text-center"
          >
            <div className="text-4xl font-semibold text-gray-950">
              {stat.value}
            </div>
            <div className="mt-2 text-sm text-gray-600">{stat.label}</div>
          </motion.div>
        ))}
      </div>
    </Container>
  )
}

function ProblemSolution() {
  return (
    <Container className="pb-24">
      <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Subheading>The Problem</Subheading>
          <Heading as="h2" className="mt-2">
            Scattered systems create chaos.
          </Heading>
          <div className="mt-8 space-y-4">
            {[
              'Managing activities across spreadsheets and email threads',
              'Manual attendance tracking that wastes hours',
              'Unclear payment records and reconciliation headaches',
              'Scattered information when you need to audit or report',
            ].map((problem, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="flex items-start gap-3"
              >
                <div className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-red-100">
                  <div className="size-2 rounded-full bg-red-500" />
                </div>
                <p className="text-base text-gray-600">{problem}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Subheading>The Solution</Subheading>
          <Heading as="h2" className="mt-2">
            Everything in one place.
          </Heading>
          <div className="mt-8 space-y-4">
            {[
              'Centralized activity management and registration',
              'Automated attendance tracking with QR codes',
              'Clear payment records and instant reconciliation',
              'Complete audit trail with one-click reports',
            ].map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="flex items-start gap-3"
              >
                <CheckCircleIcon className="mt-0.5 size-5 shrink-0 text-blue-600" />
                <p className="text-base text-gray-600">{solution}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </Container>
  )
}

function HowItWorksSection() {
  const steps = [
    {
      number: 1,
      title: 'Create an activity',
      description:
        'Set up your event, workshop, or programme with ticketing options.',
      icon: CalendarDaysIcon,
      color: 'bg-blue-500',
    },
    {
      number: 2,
      title: 'Sell tickets',
      description: 'Participants register and pay online in real time.',
      icon: TicketIcon,
      color: 'bg-indigo-500',
    },
    {
      number: 3,
      title: 'Validate attendance',
      description: 'Use QR codes or manual check-in to track attendance.',
      icon: QrCodeIcon,
      color: 'bg-purple-500',
    },
    {
      number: 4,
      title: 'Issue proof',
      description: 'Generate certificates instantly with one click.',
      icon: DocumentCheckIcon,
      color: 'bg-pink-500',
    },
    {
      number: 5,
      title: 'Export reports',
      description: 'Download complete attendance and payment records.',
      icon: ChartBarIcon,
      color: 'bg-rose-500',
    },
  ]

  return (
    <div id="how-it-works">
      <Container className="pb-24">
        <div className="text-center">
        <Subheading>How It Works</Subheading>
        <Heading as="h2" className="mt-2">
          Five steps to cleaner operations.
        </Heading>
      </div>
      <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5">
        {steps.map((step, index) => (
          <motion.div
            key={step.number}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative flex flex-col"
          >
            <div
              className={`mb-4 flex size-14 items-center justify-center rounded-2xl ${step.color} shadow-lg`}
            >
              <step.icon className="size-7 text-white" />
            </div>
            <h3 className="text-base font-semibold text-gray-950">
              {step.title}
            </h3>
            <p className="mt-2 text-sm/6 text-gray-600">{step.description}</p>
            {index < steps.length - 1 && (
              <div className="absolute -right-4 top-7 hidden lg:block">
                <svg
                  className="size-8 text-gray-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            )}
          </motion.div>
        ))}
      </div>
      </Container>
    </div>
  )
}

function FeaturesGrid() {
  const features = [
    {
      name: 'Activity Management',
      description:
        'Create and manage events, workshops, and programmes in one dashboard.',
      icon: ClipboardDocumentListIcon,
    },
    {
      name: 'Ticketing & Payments',
      description: 'Accept payments and track revenue. Issue tickets automatically.',
      icon: TicketIcon,
    },
    {
      name: 'Attendance Validation',
      description:
        'Check participants in with QR codes. Track attendance in real time.',
      icon: QrCodeIcon,
    },
    {
      name: 'Participation Proof',
      description: 'Generate certificates or proof of attendance instantly.',
      icon: DocumentCheckIcon,
    },
    {
      name: 'Reports & Exports',
      description:
        'Export attendance, payment, and participation data for compliance.',
      icon: ChartBarIcon,
    },
    {
      name: 'Participant Management',
      description: 'Manage registrations, communications, and participant data.',
      icon: UserGroupIcon,
    },
  ]

  return (
    <Container className="pb-24">
      <div className="text-center">
        <Subheading>Key Features</Subheading>
        <Heading as="h2" className="mt-2">
          Everything you need. Nothing you don&apos;t.
        </Heading>
      </div>
      <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature, index) => (
          <motion.div
            key={feature.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition-all hover:shadow-md"
          >
            <div className="flex size-12 items-center justify-center rounded-xl bg-blue-50 transition-colors group-hover:bg-blue-100">
              <feature.icon className="size-6 text-blue-600" />
            </div>
            <h3 className="mt-6 text-base font-semibold text-gray-950">
              {feature.name}
            </h3>
            <p className="mt-2 text-sm/6 text-gray-600">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </div>
    </Container>
  )
}

function WhoItsForSection() {
  const audiences = [
    {
      name: 'Corporate programmes',
      description: 'Internal training, workshops, and employee development.',
      icon: BuildingOffice2Icon,
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      name: 'Training providers',
      description: 'Professional courses, certifications, and skill-building.',
      icon: AcademicCapIcon,
      gradient: 'from-indigo-500 to-blue-500',
    },
    {
      name: 'Universities',
      description: 'Workshops, seminars, and extracurricular activities.',
      icon: AcademicCapIcon,
      gradient: 'from-purple-500 to-indigo-500',
    },
    {
      name: 'Community events',
      description: 'Meetups, volunteer programmes, and public workshops.',
      icon: UsersIcon,
      gradient: 'from-pink-500 to-purple-500',
    },
    {
      name: 'Professional seminars',
      description: 'Conferences, industry events, and continuing education.',
      icon: UserCircleIcon,
      gradient: 'from-rose-500 to-pink-500',
    },
  ]

  return (
    <Container className="pb-24">
      <div className="text-center">
        <Subheading>Who It&apos;s For</Subheading>
        <Heading as="h2" className="mt-2 max-w-3xl">
          Built for organisations that run activities.
        </Heading>
      </div>
      <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {audiences.map((audience, index) => (
          <motion.div
            key={audience.name}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative overflow-hidden rounded-2xl bg-white p-8 shadow-sm ring-1 ring-gray-200 transition-all hover:shadow-lg"
          >
            <div
              className={`absolute inset-0 bg-linear-to-br ${audience.gradient} opacity-0 transition-opacity group-hover:opacity-5`}
            />
            <audience.icon className="size-8 text-gray-700" />
            <h3 className="mt-6 text-lg font-semibold text-gray-950">
              {audience.name}
            </h3>
            <p className="mt-2 text-sm/6 text-gray-600">
              {audience.description}
            </p>
          </motion.div>
        ))}
      </div>
    </Container>
  )
}

function WhyGatherHub() {
  const reasons = [
    {
      title: 'Built for calm operations',
      description: 'No clutter. Just what you need to run activities cleanly.',
      icon: SparklesIcon,
    },
    {
      title: 'Proof-first design',
      description: 'Every action is recorded and auditable.',
      icon: DocumentCheckIcon,
    },
    {
      title: 'Made for real organisers',
      description: 'Designed around how events actually run.',
      icon: UserGroupIcon,
    },
    {
      title: 'No complexity tax',
      description: 'Simple to use without unnecessary features.',
      icon: CheckCircleIcon,
    },
  ]

  return (
    <div className="relative overflow-hidden bg-gray-950 py-24 sm:py-32">
      <div className="absolute inset-0 bg-linear-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10" />
      <Container className="relative">
        <div className="text-center">
          <Subheading dark>Why Gather Hub</Subheading>
          <Heading as="h2" dark className="mt-2">
            Designed for confident operations.
          </Heading>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative rounded-2xl bg-white/5 p-8 backdrop-blur-sm ring-1 ring-white/10 transition-all hover:bg-white/10"
            >
              <div className="flex size-12 items-center justify-center rounded-xl bg-blue-500/10">
                <reason.icon className="size-6 text-blue-400" />
              </div>
              <h3 className="mt-6 text-lg font-semibold text-white">
                {reason.title}
              </h3>
              <p className="mt-2 text-sm/6 text-gray-300">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </div>
  )
}

export default function HomeClient() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <main>
        <div className="bg-linear-to-b from-white from-50% to-gray-50 py-24">
          <TrustIndicators />
          <ProblemSolution />
        </div>
        <div className="bg-white py-24">
          <HowItWorksSection />
        </div>
        <div className="bg-gray-50 py-24">
          <FeaturesGrid />
        </div>
        <div className="bg-white py-24">
          <WhoItsForSection />
        </div>
        <WhyGatherHub />
      </main>
      <Footer />
    </div>
  )
}
