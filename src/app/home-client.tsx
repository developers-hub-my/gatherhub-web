'use client'

import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { config } from '@/lib/config'
import { Navbar } from '@/components/navbar'
import { Heading, Subheading } from '@/components/text'
import {
  CheckCircleIcon,
  ClipboardDocumentListIcon,
  QrCodeIcon,
  TicketIcon,
  UserGroupIcon,
  ShieldCheckIcon,
  ClockIcon,
  CurrencyDollarIcon,
  UserPlusIcon,
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
  CheckBadgeIcon,
  StarIcon,
} from '@heroicons/react/24/solid'
import { motion } from 'framer-motion'

function Hero() {
  return (
    <div className="relative overflow-hidden bg-white dark:bg-gray-950">
      {/* Modern gradient orbs */}
      <div className="absolute -top-40 -right-40 size-80 rounded-full bg-blue-100 opacity-60 blur-3xl dark:bg-blue-500/20" />
      <div className="absolute -bottom-40 -left-40 size-80 rounded-full bg-blue-50 opacity-80 blur-3xl dark:bg-blue-600/10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-96 rounded-full bg-sky-50 opacity-50 blur-3xl dark:bg-sky-500/10" />

      <Container className="relative">
        <Navbar />
        <div className="pt-16 pb-24 sm:pt-24 sm:pb-32 md:pt-32 md:pb-48">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="font-display text-5xl/[0.9] font-medium tracking-tight text-balance text-gray-950 dark:text-white sm:text-7xl/[0.85] md:text-8xl/[0.85]">
              The event platform that proves participation.
            </h1>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-8 max-w-xl text-lg/7 font-medium text-gray-600 dark:text-gray-300 sm:text-xl/8"
          >
            From registration to QR check-in to verifiable certificates — every
            step is recorded, every participant is tracked, every certificate is
            authentic.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-12 flex flex-col gap-x-6 gap-y-4 sm:flex-row"
          >
            <Button href={`${config.appUrl}/register`}>Start for free</Button>
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
    {
      label: 'Average check-in time',
      value: '3 sec',
      icon: ClockIcon,
    },
    {
      label: 'Verifiable certificates',
      value: '100%',
      icon: ShieldCheckIcon,
    },
    {
      label: 'Monthly platform fee',
      value: 'RM 0',
      icon: CurrencyDollarIcon,
    },
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
            className="flex flex-col items-center text-center"
          >
            <div className="mb-3 flex size-12 items-center justify-center rounded-full bg-blue-50 dark:bg-blue-500/20">
              <stat.icon className="size-6 text-blue-600 dark:text-blue-400" />
            </div>
            <div className="text-4xl font-semibold text-gray-950 dark:text-white">
              {stat.value}
            </div>
            <div className="mt-2 text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
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
            No proof means no credibility.
          </Heading>
          <div className="mt-8 space-y-4">
            {[
              'Attendance disputes with no verifiable records',
              'Hours spent manually creating certificates',
              'Registration scattered across spreadsheets and emails',
              'No audit trail when stakeholders ask questions',
            ].map((problem, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="flex items-start gap-3"
              >
                <div className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-red-100 dark:bg-red-500/20">
                  <div className="size-2 rounded-full bg-red-500 dark:bg-red-400" />
                </div>
                <p className="text-base text-gray-600 dark:text-gray-300">{problem}</p>
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
            Proof at every step.
          </Heading>
          <div className="mt-8 space-y-4">
            {[
              'QR-verified attendance that anyone can validate',
              'One-click certificate generation with unique IDs',
              'Centralized registration with real-time tracking',
              'Complete audit trail and exportable reports',
            ].map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="flex items-start gap-3"
              >
                <CheckCircleIcon className="mt-0.5 size-5 shrink-0 text-blue-600 dark:text-blue-400" />
                <p className="text-base text-gray-600 dark:text-gray-300">{solution}</p>
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
      color: 'bg-blue-600',
    },
    {
      number: 2,
      title: 'Sell tickets',
      description: 'Participants register and pay online in real time.',
      icon: TicketIcon,
      color: 'bg-blue-500',
    },
    {
      number: 3,
      title: 'Validate attendance',
      description: 'Use QR codes or manual check-in to track attendance.',
      icon: QrCodeIcon,
      color: 'bg-sky-500',
    },
    {
      number: 4,
      title: 'Issue proof',
      description: 'Generate certificates instantly with one click.',
      icon: DocumentCheckIcon,
      color: 'bg-blue-500',
    },
    {
      number: 5,
      title: 'Export reports',
      description: 'Download complete attendance and payment records.',
      icon: ChartBarIcon,
      color: 'bg-blue-600',
    },
  ]

  return (
    <div id="how-it-works" className="scroll-mt-20">
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
              <h3 className="text-base font-semibold text-gray-950 dark:text-white">
                {step.title}
              </h3>
              <p className="mt-2 text-sm/6 text-gray-600 dark:text-gray-400">
                {step.description}
              </p>
              {index < steps.length - 1 && (
                <div className="absolute -right-4 top-7 hidden lg:block">
                  <svg
                    className="size-8 text-gray-300 dark:text-gray-600"
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

function CertificateVerification() {
  return (
    <div className="relative overflow-hidden bg-linear-to-b from-gray-50 to-white py-24 dark:from-gray-900 dark:to-gray-950">
      {/* Decorative background */}
      <div className="absolute top-0 right-0 size-96 rounded-full bg-blue-50 opacity-50 blur-3xl dark:bg-blue-500/10" />
      <div className="absolute bottom-0 left-0 size-80 rounded-full bg-sky-50 opacity-60 blur-3xl dark:bg-sky-500/10" />

      <Container className="relative">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Subheading>Verifiable Certificates</Subheading>
            <Heading as="h2" className="mt-2">
              Every certificate is authentic and verifiable.
            </Heading>
            <p className="mt-6 text-base/7 text-gray-600 dark:text-gray-300">
              Each certificate includes a unique QR code that links to a
              verification page. Employers, institutions, and stakeholders can
              instantly verify authenticity — no phone calls or emails needed.
            </p>
            <div className="mt-8 space-y-4">
              {[
                {
                  title: 'Unique certificate ID',
                  description: 'Every certificate has a unique identifier for tracking',
                },
                {
                  title: 'QR code verification',
                  description: 'Scan to instantly verify certificate authenticity',
                },
                {
                  title: 'Tamper-proof records',
                  description: 'All certificates are linked to verified attendance data',
                },
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircleIcon className="mt-0.5 size-5 shrink-0 text-blue-600 dark:text-blue-400" />
                  <div>
                    <p className="font-medium text-gray-950 dark:text-white">{item.title}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="relative mx-auto max-w-md">
              {/* Certificate mockup */}
              <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-xl ring-1 ring-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:ring-gray-700">
                <div className="flex items-center justify-between border-b border-gray-100 pb-4 dark:border-gray-700">
                  <div className="text-lg font-semibold text-gray-950 dark:text-white">
                    Certificate of Completion
                  </div>
                  <CheckBadgeIcon className="size-8 text-blue-600 dark:text-blue-400" />
                </div>
                <div className="mt-6 space-y-4 text-center">
                  <p className="text-sm text-gray-500 dark:text-gray-400">This certifies that</p>
                  <p className="text-xl font-semibold text-gray-950 dark:text-white">
                    Ahmad bin Abdullah
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    has successfully completed
                  </p>
                  <p className="font-medium text-gray-950 dark:text-white">
                    Professional Development Workshop
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">on 15 January 2025</p>
                </div>
                <div className="mt-6 flex items-center justify-between border-t border-gray-100 pt-4 dark:border-gray-700">
                  <div className="flex items-center gap-2">
                    <QrCodeIcon className="size-12 text-gray-400 dark:text-gray-500" />
                    <div className="text-xs text-gray-500 dark:text-gray-400">
                      <p>Scan to verify</p>
                      <p className="font-mono">GH-2025-00123</p>
                    </div>
                  </div>
                  <div className="rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700 dark:bg-green-500/20 dark:text-green-400">
                    Verified
                  </div>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -right-4 -top-4 size-24 rounded-full bg-blue-100 opacity-40 blur-2xl dark:bg-blue-500/20" />
              <div className="absolute -bottom-4 -left-4 size-32 rounded-full bg-sky-100 opacity-40 blur-2xl dark:bg-sky-500/20" />
            </div>
          </motion.div>
        </div>
      </Container>
    </div>
  )
}

function FeaturesGrid() {
  const features = [
    {
      name: 'Event Management',
      description:
        'Create unlimited events with rich descriptions, venue details, and custom scheduling.',
      icon: ClipboardDocumentListIcon,
    },
    {
      name: 'QR Code Check-In',
      description:
        'Fast, contactless check-in with unique QR codes for each participant.',
      icon: QrCodeIcon,
    },
    {
      name: 'Sessions & Activities',
      description:
        'Organize multi-track events with time-blocked sessions and capacity limits.',
      icon: CalendarDaysIcon,
    },
    {
      name: 'Certificate Generation',
      description:
        'Professional certificates with QR verification, generated in one click.',
      icon: DocumentCheckIcon,
    },
    {
      name: 'Crew Management',
      description:
        '5 predefined roles plus custom roles with granular permissions for your team.',
      icon: UserGroupIcon,
    },
    {
      name: 'Reports & Analytics',
      description:
        'Complete attendance reports, revenue tracking, and data export for compliance.',
      icon: ChartBarIcon,
    },
  ]

  return (
    <Container className="pb-24">
      <div className="text-center">
        <Subheading>Key Features</Subheading>
        <Heading as="h2" className="mt-2">
          Everything you need to run professional events.
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
            className="group relative rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition-all hover:shadow-md dark:border-gray-700 dark:bg-gray-800 dark:hover:shadow-gray-900/50"
          >
            <div className="flex size-12 items-center justify-center rounded-xl bg-blue-50 transition-colors group-hover:bg-blue-100 dark:bg-blue-500/20 dark:group-hover:bg-blue-500/30">
              <feature.icon className="size-6 text-blue-600 dark:text-blue-400" />
            </div>
            <h3 className="mt-6 text-base font-semibold text-gray-950 dark:text-white">
              {feature.name}
            </h3>
            <p className="mt-2 text-sm/6 text-gray-600 dark:text-gray-400">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </div>
    </Container>
  )
}

function TeamManagement() {
  const roles = [
    { name: 'Organizer', description: 'Full event control and oversight' },
    { name: 'Coordinator', description: 'Manage sessions and participants' },
    { name: 'Staff', description: 'Handle check-in and on-site operations' },
    { name: 'Volunteer', description: 'Assist with specific tasks' },
    { name: 'Speaker', description: 'Access to session materials and info' },
  ]

  const permissions = [
    'Manage events',
    'Check in participants',
    'Generate certificates',
    'View reports',
    'Manage crew',
    'Handle payments',
  ]

  return (
    <div className="bg-gray-50 py-24 dark:bg-gray-900">
      <Container>
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Subheading>Team Management</Subheading>
            <Heading as="h2" className="mt-2">
              Delegate with confidence.
            </Heading>
            <p className="mt-6 text-base/7 text-gray-600 dark:text-gray-300">
              Build your event team with predefined roles or create custom ones.
              Assign granular permissions so everyone has exactly the access they
              need — nothing more, nothing less.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-4">
              {permissions.map((permission, index) => (
                <motion.div
                  key={permission}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="flex items-center gap-2"
                >
                  <CheckCircleIcon className="size-4 text-blue-600 dark:text-blue-400" />
                  <span className="text-sm text-gray-600 dark:text-gray-400">{permission}</span>
                </motion.div>
              ))}
            </div>
            <p className="mt-6 text-sm text-gray-500 dark:text-gray-400">
              10 granular permissions available for fine-grained access control
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="space-y-3">
              {roles.map((role, index) => (
                <motion.div
                  key={role.name}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="flex items-center gap-4 rounded-xl bg-white p-4 shadow-sm ring-1 ring-gray-200 dark:bg-gray-800 dark:ring-gray-700"
                >
                  <div className="flex size-10 items-center justify-center rounded-full bg-blue-50 dark:bg-blue-500/20">
                    <UserCircleIcon className="size-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-950 dark:text-white">{role.name}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{role.description}</p>
                  </div>
                </motion.div>
              ))}
              <div className="mt-4 rounded-xl border-2 border-dashed border-gray-200 p-4 text-center dark:border-gray-700">
                <UserPlusIcon className="mx-auto size-6 text-gray-400 dark:text-gray-500" />
                <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                  Create custom roles for your specific needs
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </div>
  )
}

function UseCasesSection() {
  const useCases = [
    {
      name: 'Training Providers',
      tagline: 'Issue CPD certificates automatically',
      description:
        'Run professional courses and automatically issue verifiable certificates when participants complete training.',
      icon: AcademicCapIcon,
    },
    {
      name: 'Corporate L&D',
      tagline: 'Track employee training completion',
      description:
        'Manage internal training programmes with attendance tracking and completion records for HR compliance.',
      icon: BuildingOffice2Icon,
    },
    {
      name: 'Conferences',
      tagline: 'Manage multi-track sessions',
      description:
        'Organize complex events with parallel sessions, speaker management, and real-time attendance tracking.',
      icon: UsersIcon,
    },
    {
      name: 'Universities',
      tagline: 'Workshop attendance with proof',
      description:
        'Track student participation in workshops and extracurricular activities with verifiable records.',
      icon: AcademicCapIcon,
    },
    {
      name: 'Community Events',
      tagline: 'Free events, free platform',
      description:
        'Run meetups and volunteer programmes at no cost. Only pay when you charge for tickets.',
      icon: UserCircleIcon,
    },
  ]

  return (
    <Container className="pb-24">
      <div className="text-center">
        <Subheading>Use Cases</Subheading>
        <Heading as="h2" className="mt-2 max-w-3xl">
          Built for every type of event.
        </Heading>
        <p className="mx-auto mt-4 max-w-2xl text-base text-gray-600 dark:text-gray-400">
          Whether you&apos;re running corporate training, academic workshops, or
          community meetups — GatherHub adapts to your needs.
        </p>
      </div>
      <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {useCases.map((useCase, index) => (
          <motion.div
            key={useCase.name}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative overflow-hidden rounded-2xl bg-white p-8 shadow-sm ring-1 ring-gray-200 transition-all hover:shadow-md hover:ring-blue-200 dark:bg-gray-800 dark:ring-gray-700 dark:hover:ring-blue-500/30"
          >
            <div className="flex size-12 items-center justify-center rounded-xl bg-blue-50 transition-colors group-hover:bg-blue-100 dark:bg-blue-500/20 dark:group-hover:bg-blue-500/30">
              <useCase.icon className="size-6 text-blue-600 dark:text-blue-400" />
            </div>
            <h3 className="mt-6 text-lg font-semibold text-gray-950 dark:text-white">
              {useCase.name}
            </h3>
            <p className="mt-1 text-sm font-medium text-blue-600 dark:text-blue-400">
              {useCase.tagline}
            </p>
            <p className="mt-3 text-sm/6 text-gray-600 dark:text-gray-400">
              {useCase.description}
            </p>
          </motion.div>
        ))}
      </div>
    </Container>
  )
}

function Testimonials() {
  const testimonials = [
    {
      quote:
        'We used to spend 3 days creating certificates manually. Now we generate 500+ certificates in one click after each training session.',
      author: 'Sarah Lim',
      role: 'Training Manager',
      company: 'Professional Development Institute',
    },
    {
      quote:
        'The QR verification feature is a game-changer. Our HR team can instantly verify training completion without digging through files.',
      author: 'Ahmad Razak',
      role: 'HR Director',
      company: 'Tech Solutions Sdn Bhd',
    },
    {
      quote:
        'Managing a 3-day conference with 12 parallel tracks was seamless. Real-time check-in data helped us make decisions on the fly.',
      author: 'Dr. Mei Ling',
      role: 'Conference Chair',
      company: 'Malaysian Medical Association',
    },
    {
      quote:
        'Free for our community meetups, and the certificate feature helps our members build their professional portfolios.',
      author: 'Ravi Kumar',
      role: 'Community Lead',
      company: 'KL Tech Community',
    },
  ]

  return (
    <div className="bg-gray-50 py-24 dark:bg-gray-900">
      <Container>
        <div className="text-center">
          <Subheading>Testimonials</Subheading>
          <Heading as="h2" className="mt-2">
            Trusted by event organisers.
          </Heading>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative rounded-2xl bg-white p-8 shadow-sm ring-1 ring-gray-200 dark:bg-gray-800 dark:ring-gray-700"
            >
              <StarIcon className="size-8 text-yellow-400" />
              <p className="mt-4 text-base/7 text-gray-600 dark:text-gray-300">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <div className="mt-6 flex items-center gap-4">
                <div className="flex size-12 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-500/20">
                  <span className="text-lg font-semibold text-blue-600 dark:text-blue-400">
                    {testimonial.author.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-gray-950 dark:text-white">
                    {testimonial.author}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </div>
  )
}

function WhyGatherHub() {
  const reasons = [
    {
      title: 'Proof-first design',
      description:
        'Every action is recorded and verifiable. Certificates, attendance, payments — all with an audit trail.',
      icon: DocumentCheckIcon,
    },
    {
      title: 'Free until you charge',
      description:
        'No monthly fees. Run unlimited free events at no cost. Only pay when you collect payments.',
      icon: CurrencyDollarIcon,
    },
    {
      title: 'Built for teams',
      description:
        'Delegate check-in, certificate generation, and reporting to your crew with role-based permissions.',
      icon: UsersIcon,
    },
    {
      title: 'No clutter, just results',
      description:
        'Simple, focused tools that do exactly what you need. No feature bloat or learning curve.',
      icon: SparklesIcon,
    },
  ]

  return (
    <div className="relative overflow-hidden bg-gray-900 py-24 sm:py-32">
      {/* Subtle blue gradient overlay */}
      <div className="absolute inset-0 bg-linear-to-br from-blue-600/10 via-blue-500/5 to-sky-500/10" />
      <div className="absolute -top-40 -right-40 size-80 rounded-full bg-blue-500/10 blur-3xl" />
      <div className="absolute -bottom-40 -left-40 size-80 rounded-full bg-sky-500/10 blur-3xl" />

      <Container className="relative">
        <div className="text-center">
          <Subheading dark>Why GatherHub</Subheading>
          <Heading as="h2" dark className="mt-2">
            Built for organisers who need proof.
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
              className="relative rounded-2xl bg-white/5 p-8 backdrop-blur-sm ring-1 ring-white/10 transition-all hover:bg-white/10 hover:ring-blue-500/20"
            >
              <div className="flex size-12 items-center justify-center rounded-xl bg-blue-500/20">
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

function FinalCTA() {
  return (
    <Container className="py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="relative overflow-hidden rounded-3xl bg-gray-900 px-8 py-16 text-center sm:px-16"
      >
        {/* Decorative elements */}
        <div className="absolute -top-20 -right-20 size-60 rounded-full bg-blue-500/20 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 size-60 rounded-full bg-sky-500/20 blur-3xl" />

        <div className="relative">
          <Heading as="h2" dark>
            Create your first event in 5 minutes.
          </Heading>
          <p className="mx-auto mt-6 max-w-xl text-base text-gray-300">
            No credit card required. No monthly fees. Start managing events with
            verifiable proof today.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Button href={`${config.appUrl}/register`}>Start for free</Button>
            <Button variant="secondary" href="/pricing">
              View pricing
            </Button>
          </div>
        </div>
      </motion.div>
    </Container>
  )
}

export default function HomeClient() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <main>
        <div className="bg-linear-to-b from-white from-50% to-gray-50 py-24 dark:from-gray-950 dark:to-gray-900">
          <TrustIndicators />
          <ProblemSolution />
        </div>
        <div className="bg-white py-24 dark:bg-gray-950">
          <HowItWorksSection />
        </div>
        <CertificateVerification />
        <div className="bg-white py-24 dark:bg-gray-950">
          <FeaturesGrid />
        </div>
        <TeamManagement />
        <div className="bg-white py-24 dark:bg-gray-950">
          <UseCasesSection />
        </div>
        <Testimonials />
        <WhyGatherHub />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}
