import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { Navbar } from '@/components/navbar'
import { Heading, Subheading } from '@/components/text'
import { config } from '@/lib/config'
import {
  ClipboardDocumentCheckIcon,
  QrCodeIcon,
  TicketIcon,
  UserGroupIcon,
} from '@heroicons/react/24/outline'
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  alternates: {
    canonical: '/guides',
  },
  title: 'Event-Day Guides',
  description:
    'Step-by-step guides for organisers, event crew, pre-registered attendees and walk-ins: from sign-up to the check-in gate.',
}

type Step = { title: string; body: string }
type Guide = {
  id: string
  label: string
  title: string
  who: string
  icon: React.ComponentType<{ className?: string }>
  steps: Step[]
  tips: string[]
}

const guides: Guide[] = [
  {
    id: 'organiser',
    label: 'Organiser',
    title: 'Set up your event and add your crew',
    who: 'For the person running the event.',
    icon: ClipboardDocumentCheckIcon,
    steps: [
      {
        title: 'Create your account',
        body: `Sign up at ${config.appUrl.replace('https://', '')}/register and verify your email. A personal organisation is created for you, so you can start right away.`,
      },
      {
        title: 'Create the event',
        body: 'Go to Events → Create. The wizard has three steps: basic info (title, dates, visibility), location and category, then review. You land on Event Home, which lists what is left to do.',
      },
      {
        title: 'Add tickets',
        body: 'Add at least one ticket type. Expecting walk-ins? Add a free ticket type for them.',
      },
      {
        title: 'Turn on quick registration',
        body: 'In Details → Registration, switch on Quick registration. Guests on a free ticket can then register with only name, email and phone. No password needed.',
      },
      {
        title: 'Publish',
        body: 'On Event Home, the Publish step opens a preview of your event page. Publish from there. Registration opens and you can share the event link.',
      },
      {
        title: 'Add your crew',
        body: 'Go to Crew → Add Member → Invite by Email, enter their email and pick a role (for example Volunteer for door scanning, Staff for check-in and certificates). People who already use GatherHub are added at once. Everyone else gets an invitation email.',
      },
      {
        title: 'Print the Event QR',
        body: 'In Details, download the Event QR as PNG or SVG. It opens your event page and never expires. Put it on the entrance poster and your slides.',
      },
    ],
    tips: [
      'Add crew a few days before the event so they have time to sign up and accept.',
      'The Online QR in Run is different: it is valid for up to 60 minutes and is meant for a screen, not for printing.',
    ],
  },
  {
    id: 'crew',
    label: 'Crew',
    title: 'Get on board as event crew',
    who: 'For volunteers, staff and co-organisers.',
    icon: UserGroupIcon,
    steps: [
      {
        title: 'Open the invitation email',
        body: 'Look for "You\'re invited to join the crew: …" and tap Accept Invitation. Check your spam folder if it has not arrived. The link is valid for 7 days.',
      },
      {
        title: 'Accept, then sign up or log in',
        body: 'Tap Accept Invitation. If you are not signed in, choose Create Account (your invited email is already filled in, keep it) or Log In.',
      },
      {
        title: 'You are on the crew',
        body: 'You come straight back to the invitation and it is accepted. Tap Open crew app, and verify your email when asked.',
      },
      {
        title: 'Install the crew app',
        body: `The crew app lives at ${config.appUrl.replace('https://', '')}/ops and lists every event you crew. Add it to your home screen from the browser menu, allow camera access, and open it once on Wi-Fi before the day.`,
      },
      {
        title: 'On the day: Scan',
        body: 'Open the event and tap Scan. Scanning opens 1 hour before the event starts. Before that, the app opens on the Live view.',
      },
    ],
    tips: [
      'Signed up with a different email? Ask the organiser to invite that email instead.',
      'One account works for every event you crew.',
    ],
  },
  {
    id: 'pre-registered',
    label: 'Pre-registered',
    title: 'Registered early? Bring your ticket QR',
    who: 'For attendees who register or buy a ticket before the event.',
    icon: TicketIcon,
    steps: [
      {
        title: 'Open the event page',
        body: 'Use the link the organiser shared. Under Get Your Ticket, tap the ticket you want.',
      },
      {
        title: 'Fill in your details',
        body: 'Name, email and phone, plus any questions the organiser added. Free tickets on a quick-registration event need no account. Paid tickets ask you to sign in.',
      },
      {
        title: 'Pay (paid tickets only)',
        body: 'Choose FPX Online Banking or DuitNow QR, then Pay. A bank transfer order waits for the organiser to approve it. If you leave without paying, we send you a reminder.',
      },
      {
        title: 'Get your ticket by email',
        body: 'Your ticket arrives by email with a QR code and a PDF. Signed-in attendees also find it under the Ticket tab at /me. It opens offline once loaded.',
      },
      {
        title: 'Show the QR at the entrance',
        body: 'Crew scan it and you are checked in.',
      },
    ],
    tips: [
      'Lost the email? On the event page, choose "Email my ticket again". It is only sent to the address you registered with.',
    ],
  },
  {
    id: 'walk-in',
    label: 'Walk-in',
    title: 'Just arrived? Scan, register, show',
    who: 'For guests, students and participants who did not register beforehand.',
    icon: QrCodeIcon,
    steps: [
      {
        title: 'Scan the poster',
        body: 'Point your phone camera at the Event QR at the entrance. The event page opens. No app to install.',
      },
      {
        title: 'Tap Register',
        body: 'Choose the free ticket and fill in your name, email and phone.',
      },
      {
        title: 'Your ticket appears',
        body: '"You\'re registered!" shows your ticket QR on screen. A copy goes to your email, with a link to set a password if you want to use your account later.',
      },
      {
        title: 'Show the QR to crew',
        body: 'Registering does not check you in by itself. The crew scan your QR at the entrance, the same as for everyone else.',
      },
    ],
    tips: [
      'Already registered with that email? Tap "Email my ticket again" instead.',
      'Paid-only events: sign in and pay on your phone, or ask the crew to help.',
    ],
  },
]

const gateResults = [
  { result: 'Check-in successful', tone: 'green', action: 'Let them in.' },
  {
    result: 'Ticket already checked in',
    tone: 'amber',
    action:
      'Usually a second scan. If it is a different person, the ticket was shared.',
  },
  {
    result: 'Ticket not found',
    tone: 'red',
    action:
      'Ticket for another event, or not a ticket. Send them to the walk-in poster.',
  },
  {
    result: 'Ticket not paid',
    tone: 'red',
    action: 'They can finish paying on their phone from the order page.',
  },
  {
    result: 'Check-in not open yet',
    tone: 'red',
    action: 'Check-in opens shortly before the event starts. Try again then.',
  },
  {
    result: 'No phone or no QR',
    tone: 'gray',
    action: 'Open Guests, search their name or email and mark them attended.',
  },
  {
    result: 'No signal',
    tone: 'gray',
    action:
      'Keep scanning. Scans are saved on the phone and sync when you are back online.',
  },
]

const toneClass: Record<string, string> = {
  green: 'bg-green-50 text-green-700 dark:bg-green-500/15 dark:text-green-400',
  amber: 'bg-amber-50 text-amber-700 dark:bg-amber-500/15 dark:text-amber-400',
  red: 'bg-red-50 text-red-700 dark:bg-red-500/15 dark:text-red-400',
  gray: 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300',
}

function Hero() {
  return (
    <div className="bg-white dark:bg-gray-950">
      <Container>
        <Navbar />
        <div className="pt-8 pb-16">
          <Subheading>Guides</Subheading>
          <Heading as="h1" className="mt-2">
            From sign-up to the gate
          </Heading>
          <p className="mt-4 max-w-2xl text-base text-gray-600 dark:text-gray-400">
            Organisers and crew need a GatherHub account. Attendees register
            early from the event page, or scan the QR at the entrance on the
            day. Everyone ends at the same place: the crew scan their ticket QR.
          </p>
        </div>
      </Container>
    </div>
  )
}

function RolePicker() {
  return (
    <Container className="pb-16">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {guides.map(({ id, label, who, icon: Icon }) => (
          <Link
            key={id}
            href={`#${id}`}
            className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:border-blue-200 hover:shadow-md dark:border-gray-700 dark:bg-gray-800 dark:hover:border-blue-500/30"
          >
            <div className="flex size-12 items-center justify-center rounded-xl bg-blue-50 transition-colors group-hover:bg-blue-100 dark:bg-blue-500/20 dark:group-hover:bg-blue-500/30">
              <Icon className="size-6 text-blue-600 dark:text-blue-400" />
            </div>
            <h2 className="mt-4 text-lg font-semibold text-gray-950 dark:text-white">
              {label}
            </h2>
            <p className="mt-2 text-sm/6 text-gray-600 dark:text-gray-400">
              {who}
            </p>
          </Link>
        ))}
      </div>
    </Container>
  )
}

function FlowOverview() {
  const lanes = [
    {
      who: 'Pre-registered',
      path: ['Event page', 'Register or pay', 'Ticket QR by email'],
    },
    {
      who: 'Walk-in',
      path: ['Scan poster', 'Quick form', 'Ticket QR on phone'],
    },
  ]

  return (
    <div className="bg-gray-50 py-16 dark:bg-gray-900">
      <Container>
        <Heading as="h2" className="text-2xl">
          Two ways in, one gate
        </Heading>
        <p className="mt-3 max-w-2xl text-base/7 text-gray-600 dark:text-gray-400">
          Crew don&apos;t need to know how someone registered. Every attendee
          arrives with a ticket QR, and the crew scan it the same way.
        </p>
        <div className="mt-8 grid items-center gap-4 lg:grid-cols-[1fr_auto_14rem]">
          <div className="space-y-4">
            {lanes.map(({ who, path }) => (
              <div key={who}>
                <p className="text-sm font-semibold text-gray-950 dark:text-white">
                  {who}
                </p>
                <ol className="mt-2 flex flex-wrap items-center gap-2 text-sm">
                  {path.map((step, i) => (
                    <li key={step} className="flex items-center gap-2">
                      <span className="rounded-lg border border-gray-200 bg-white px-3 py-2 text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300">
                        {step}
                      </span>
                      {i < path.length - 1 && (
                        <span aria-hidden="true" className="text-gray-400">
                          →
                        </span>
                      )}
                    </li>
                  ))}
                </ol>
              </div>
            ))}
          </div>
          <span
            aria-hidden="true"
            className="hidden text-2xl text-gray-400 lg:block"
          >
            →
          </span>
          <div className="rounded-2xl bg-blue-600 p-6 text-white shadow-sm">
            <QrCodeIcon className="size-8" />
            <p className="mt-3 text-lg font-semibold">Crew scan at the gate</p>
            <p className="mt-1 text-sm text-blue-100">Checked in</p>
          </div>
        </div>
      </Container>
    </div>
  )
}

function GuideSection({
  id,
  label,
  title,
  who,
  icon: Icon,
  steps,
  tips,
}: Guide) {
  return (
    <section id={id} className="scroll-mt-16">
      <div className="flex items-center gap-3">
        <div className="flex size-10 items-center justify-center rounded-lg bg-blue-50 dark:bg-blue-500/20">
          <Icon className="size-5 text-blue-600 dark:text-blue-400" />
        </div>
        <Subheading>{label}</Subheading>
      </div>
      <Heading as="h2" className="mt-3 text-2xl">
        {title}
      </Heading>
      <p className="mt-2 text-base text-gray-600 dark:text-gray-400">{who}</p>
      <ol className="mt-8 space-y-6">
        {steps.map((step, i) => (
          <li key={step.title} className="flex gap-4">
            <span className="flex size-8 flex-none items-center justify-center rounded-full bg-blue-600 text-sm font-semibold text-white">
              {i + 1}
            </span>
            <div>
              <h3 className="text-lg font-semibold text-gray-950 dark:text-white">
                {step.title}
              </h3>
              <p className="mt-1 text-base/7 text-gray-600 dark:text-gray-400">
                {step.body}
              </p>
            </div>
          </li>
        ))}
      </ol>
      <div className="mt-8 rounded-2xl border border-gray-200 bg-gray-50 p-6 dark:border-gray-700 dark:bg-gray-900">
        <p className="text-sm font-semibold text-gray-950 dark:text-white">
          Good to know
        </p>
        <ul className="mt-2 list-disc space-y-1 pl-5 text-sm/6 text-gray-600 dark:text-gray-400">
          {tips.map((tip) => (
            <li key={tip}>{tip}</li>
          ))}
        </ul>
      </div>
    </section>
  )
}

function GateResults() {
  return (
    <section id="gate" className="scroll-mt-16">
      <Subheading>Crew</Subheading>
      <Heading as="h2" className="mt-3 text-2xl">
        At the gate: what each scan result means
      </Heading>
      <div className="mt-8 overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-700">
        <table className="w-full text-left text-sm">
          <thead className="bg-gray-50 text-gray-950 dark:bg-gray-900 dark:text-white">
            <tr>
              <th scope="col" className="px-4 py-3 font-semibold">
                You see
              </th>
              <th scope="col" className="px-4 py-3 font-semibold">
                What to do
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
            {gateResults.map(({ result, tone, action }) => (
              <tr key={result}>
                <td className="px-4 py-3 align-top">
                  <span
                    className={`inline-block rounded-md px-2 py-1 font-medium ${toneClass[tone]}`}
                  >
                    {result}
                  </span>
                </td>
                <td className="px-4 py-3 text-gray-600 dark:text-gray-400">
                  {action}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}

function GetStarted() {
  return (
    <div className="bg-gray-50 py-24 dark:bg-gray-900">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <Heading as="h2">Ready to start?</Heading>
          <p className="mt-6 text-lg text-gray-600 dark:text-gray-400">
            Create a free account. Organisers can set up an event in minutes,
            and crew need an account before they can be added.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <a
              href={`${config.appUrl}/register`}
              className="inline-flex items-center justify-center rounded-lg bg-gray-950 px-6 py-3 text-base font-medium text-white shadow-sm transition-all hover:bg-gray-800 dark:bg-blue-600 dark:hover:bg-blue-500"
            >
              Create account
            </a>
            <a
              href="/help"
              className="inline-flex items-center justify-center rounded-lg border border-gray-300 bg-white px-6 py-3 text-base font-medium text-gray-950 shadow-sm transition-all hover:bg-gray-50 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700"
            >
              Help Center
            </a>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default function Guides() {
  return (
    <main className="overflow-hidden bg-white dark:bg-gray-950">
      <Hero />
      <RolePicker />
      <FlowOverview />
      <Container className="py-24">
        <div className="mx-auto max-w-3xl space-y-24">
          {guides.map((guide) => (
            <GuideSection key={guide.id} {...guide} />
          ))}
          <GateResults />
        </div>
      </Container>
      <GetStarted />
      <Footer />
    </main>
  )
}
