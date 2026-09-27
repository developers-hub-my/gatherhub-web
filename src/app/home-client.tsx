'use client'

import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { Navbar } from '@/components/navbar'
import { Heading, Subheading } from '@/components/text'
import { config } from '@/lib/config'
import { plans } from '@/lib/plans'
import {
  ArrowRightIcon,
  BuildingLibraryIcon,
  CameraIcon,
  ChartBarIcon,
  CheckBadgeIcon,
  CheckIcon,
  DocumentTextIcon,
  MapPinIcon,
  QrCodeIcon,
  SignalSlashIcon,
  StarIcon,
  UserGroupIcon,
} from '@heroicons/react/24/outline'
import { clsx } from 'clsx'
import Image from 'next/image'

// Real content only (doc 25): photos from G8Deck Uni Discovery at GMI Bangi,
// events from my.gatherhub.app. Numbers inside product illustrations are UI, not claims.

const directoryUrl = 'https://my.gatherhub.app/events'
const storyUrl =
  'https://devhub.my/resources/articles/g8deck-uni-discovery-workshop/'

function Hero() {
  return (
    <div className="dark relative overflow-hidden bg-ink text-slate-200">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(600px_400px_at_85%_10%,rgba(59,130,246,0.28),transparent_60%),radial-gradient(500px_360px_at_10%_90%,rgba(147,197,253,0.1),transparent_60%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.07)_1px,transparent_1px)] [mask-image:linear-gradient(to_bottom,#000_40%,transparent)] bg-[size:48px_48px]" />
      <Container className="relative">
        <Navbar />
        <div className="grid grid-cols-1 items-center gap-16 pt-12 pb-40 lg:grid-cols-[1.05fr_1fr] lg:pt-20">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 py-1.5 pr-3 pl-1.5 text-sm text-slate-300">
              <span className="rounded-full bg-blue-600 px-2 py-0.5 text-xs font-semibold text-white">
                New
              </span>
              People&apos;s Choice booth voting
            </span>
            <h1 className="mt-6 text-5xl/[0.98] font-bold tracking-tighter text-balance text-white sm:text-7xl/[0.95]">
              Run the day.{' '}
              <span className="bg-linear-to-r from-blue-300 to-blue-500 bg-clip-text text-transparent">
                Prove who was there.
              </span>
            </h1>
            <p className="mt-6 max-w-xl text-lg/8 text-slate-400">
              GatherHub takes an event from registration to certificate — and
              holds up on the day itself: gate scans that keep working when the
              Wi-Fi doesn&apos;t, a live headcount, and attendance records you
              can stand behind.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Button href={`${config.appUrl}/register`}>
                Start free <ArrowRightIcon className="ml-2 size-4" />
              </Button>
              <Button variant="secondary" href="#event-day">
                See event day
              </Button>
            </div>
            <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-400">
              {[
                'Free plan, no card',
                'FPX & DuitNow QR',
                'Online or at the venue',
              ].map((item) => (
                <li key={item} className="flex items-center gap-1.5">
                  <CheckIcon className="size-4 text-emerald-400" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <LiveConsole />
          </div>
        </div>
      </Container>
    </div>
  )
}

const scans = [
  {
    initials: 'NA',
    name: 'Nur Aisyah',
    meta: 'GH-0482-A · Gate A',
    time: '09:14',
    color: 'bg-blue-600',
  },
  {
    initials: 'HF',
    name: 'Haziq Firdaus',
    meta: 'GH-0477-C · Gate B',
    time: '09:13',
    color: 'bg-sky-500',
  },
  {
    initials: 'SR',
    name: 'Pn. Siti',
    meta: 'GH-0415-S · Staff ticket',
    time: '09:11',
    color: 'bg-indigo-500',
  },
  {
    initials: 'WK',
    name: 'Walk-in registration',
    meta: 'Paid at desk · confirmed by crew',
    time: '09:10',
    color: 'bg-slate-600',
  },
]

// Illustration of the live check-in screen — decorative, hidden from screen readers.
function LiveConsole() {
  return (
    <div
      aria-hidden="true"
      className="relative mx-auto h-[540px] max-w-lg select-none lg:mr-0"
    >
      <div className="absolute top-0 left-0 w-[88%] overflow-hidden rounded-2xl border border-white/10 bg-ink-2 shadow-2xl shadow-black/60">
        <div className="flex items-center justify-between border-b border-white/10 px-4 py-3.5">
          <div>
            <p className="text-sm font-semibold text-white">
              G8Deck Uni Discovery
            </p>
            <p className="text-xs text-slate-400">GMI Bangi · Main Hall</p>
          </div>
          <span className="flex items-center gap-1.5 rounded-md bg-emerald-500/15 px-2 py-1 font-mono text-[11px] text-emerald-300">
            <span className="size-1.5 rounded-full bg-emerald-400" />
            LIVE
          </span>
        </div>
        <div className="grid grid-cols-3 border-b border-white/10">
          {[
            ['Checked in', '58', '/64'],
            ['In venue', '52', ''],
            ['Walk-ins', '4', ''],
          ].map(([label, value, suffix]) => (
            <div
              key={label}
              className="border-r border-white/10 px-4 py-3.5 last:border-0"
            >
              <p className="text-[11px] tracking-wide text-slate-400 uppercase">
                {label}
              </p>
              <p className="mt-1 font-mono text-2xl text-white tabular-nums">
                {value}
                <span className="text-sm text-slate-500">{suffix}</span>
              </p>
            </div>
          ))}
        </div>
        <div className="border-b border-white/10 px-4 py-3.5">
          <div className="flex justify-between text-xs text-slate-400">
            <span>Hall capacity</span>
            <span className="font-mono">52 / 80</span>
          </div>
          <div className="mt-2 h-2 overflow-hidden rounded-full bg-ink-3">
            <div className="h-full w-[65%] rounded-full bg-linear-to-r from-blue-600 to-blue-300" />
          </div>
          <div className="mt-2.5 flex gap-2 font-mono text-[11px]">
            <span className="rounded-md border border-white/10 px-2 py-1 text-slate-300">
              Gate A · 41
            </span>
            <span className="rounded-md border border-white/10 px-2 py-1 text-slate-300">
              Gate B · 17
            </span>
            <span className="rounded-md border border-white/10 px-2 py-1 text-emerald-300">
              Lab · open
            </span>
          </div>
        </div>
        <ul className="py-1">
          {scans.map((s) => (
            <li
              key={s.meta}
              className="grid grid-cols-[32px_1fr_auto] items-center gap-3 px-4 py-2"
            >
              <span
                className={clsx(
                  'grid size-8 place-items-center rounded-full text-[11px] font-semibold text-white',
                  s.color,
                )}
              >
                {s.initials}
              </span>
              <span>
                <span className="block text-sm text-slate-200">{s.name}</span>
                <span className="block font-mono text-[11px] text-slate-500">
                  {s.meta}
                </span>
              </span>
              <span className="rounded-md bg-emerald-500/15 px-2 py-0.5 font-mono text-[11px] text-emerald-300">
                {s.time}
              </span>
            </li>
          ))}
        </ul>
        <div className="flex items-center justify-between border-t border-white/10 bg-amber-500/5 px-4 py-3 text-xs text-amber-300">
          <span className="flex items-center gap-2">
            <SignalSlashIcon className="size-4" />
            Gate B offline · 6 scans queued
          </span>
          <span className="hidden font-mono sm:inline">syncs on reconnect</span>
        </div>
      </div>

      <div className="absolute right-0 -bottom-12 w-48 rounded-[28px] border border-slate-200 bg-white p-2.5 shadow-2xl shadow-black/70">
        <div className="overflow-hidden rounded-[20px] bg-slate-50">
          <div className="bg-linear-to-br from-blue-900 to-blue-600 px-3.5 pt-4 pb-4 text-white">
            <p className="font-mono text-[10px] tracking-wider opacity-80">
              YOUR TICKET
            </p>
            <p className="mt-1 text-sm leading-tight font-semibold">
              G8Deck Uni Discovery
            </p>
            <p className="mt-1.5 font-mono text-[10px] opacity-80">
              23 SEP · 09:00 · GMI BANGI
            </p>
          </div>
          <QrCodeIcon
            className="mx-auto mt-3 size-28 text-ink"
            strokeWidth={1.1}
          />
          <p className="pb-3.5 text-center text-[11px] text-slate-500">
            Show at any gate
            <span className="block font-mono text-xs text-slate-900">
              GH-0482-A
            </span>
          </p>
        </div>
      </div>

      <div className="absolute -bottom-8 left-6 flex items-center gap-2.5 rounded-xl bg-white px-3.5 py-2.5 text-sm text-slate-900 shadow-xl shadow-black/50">
        <span className="grid size-7 place-items-center rounded-full bg-emerald-100 text-emerald-600">
          <CheckIcon className="size-4" />
        </span>
        <span>
          <span className="block font-semibold">Checked in</span>
          <span className="block text-[11px] text-slate-500">
            Gate A · 09:14
          </span>
        </span>
      </div>
    </div>
  )
}

const photos = [
  {
    src: '/stories/g8deck-gmi/group.webp',
    alt: 'Students, lecturers and the Developers Hub team at G8Deck Uni Discovery, GMI Bangi',
    caption: 'GMI Bangi · 23 Sep 2026',
  },
  {
    src: '/stories/g8deck-gmi/handson.webp',
    alt: 'Morning session in the hall',
    caption: 'Morning talks',
  },
  {
    src: '/stories/g8deck-gmi/coaching.webp',
    alt: 'Coaching at the tables during the hands-on session',
    caption: 'Afternoon hands-on',
  },
  {
    src: '/stories/g8deck-gmi/demo.webp',
    alt: 'Live deployment demo on the big screen',
    caption: 'Live demo',
  },
  {
    src: '/stories/g8deck-gmi/opening.webp',
    alt: 'Opening of the workshop',
    caption: 'Opening',
  },
]

function PhotoBand() {
  return (
    <Container className="relative -mt-16">
      <div className="grid grid-cols-2 gap-3 md:grid-cols-[1.6fr_1fr_1fr] md:grid-rows-[220px_220px]">
        {photos.map((photo, i) => (
          <figure
            key={photo.src}
            className={clsx(
              'relative overflow-hidden rounded-2xl bg-slate-200 dark:bg-gray-800',
              i === 0
                ? 'col-span-2 aspect-[4/3] md:col-span-1 md:row-span-2 md:aspect-auto'
                : 'aspect-[4/3] md:aspect-auto',
            )}
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              priority={i === 0}
              sizes={
                i === 0
                  ? '(min-width: 768px) 560px, 100vw'
                  : '(min-width: 768px) 340px, 50vw'
              }
              className="object-cover object-[center_70%]"
            />
            <figcaption className="absolute bottom-3 left-3 rounded-lg bg-ink/80 px-2.5 py-1.5 text-xs text-white backdrop-blur">
              {photo.caption}
            </figcaption>
          </figure>
        ))}
      </div>
      <div className="flex flex-col justify-between gap-3 pt-5 pb-20 text-sm text-slate-600 sm:flex-row sm:items-center dark:text-gray-400">
        <p>
          <strong className="text-slate-900 dark:text-white">
            G8Deck Uni Discovery
          </strong>{' '}
          — final-year students, lecturers and IT staff at German-Malaysian
          Institute. Run on GatherHub.
        </p>
        <a
          href="#story"
          className="shrink-0 font-semibold text-blue-600 hover:text-blue-700 dark:text-blue-400"
        >
          Read the story →
        </a>
      </div>
    </Container>
  )
}

const stages = [
  {
    key: 'Build',
    state: 'Draft',
    title: 'Set it up',
    body: "Details, venue, tickets, forms. A checklist tells you what's still missing before you publish.",
    rows: [
      ['Event details', '✓'],
      ['2 ticket types', '✓'],
      ['Registration form', '✓'],
      ['Certificate template', 'optional'],
    ],
  },
  {
    key: 'Sell',
    state: 'On sale',
    title: 'Fill the seats',
    body: 'FPX and DuitNow QR checkout, early bird, waitlist, and eligibility checks for student or member tickets.',
    rows: [
      ['Student · verified', 'RM 30'],
      ['Early bird', 'RM 399'],
      ['Seats left', 'last few'],
      ['Waitlist', '12'],
    ],
  },
  {
    key: 'Run',
    state: 'Live',
    title: 'Run the day',
    body: 'Crew scan at gates on any phone, walk-ins pay at the desk, polls and Q&A run from one screen.',
    rows: [
      ['Checked in', '58 / 64'],
      ['Gate A', '41'],
      ['Live poll', 'open'],
      ['Offline queue', '0'],
    ],
  },
  {
    key: 'Wrap',
    state: 'Ended',
    title: 'Prove it happened',
    body: 'Certificates only for people who attended, a survey, and a one-page PDF summary for your report.',
    rows: [
      ['Certificates issued', '58'],
      ['Survey responses', '41'],
      ['Summary PDF', 'ready'],
      ['Payout', 'requested'],
    ],
  },
]

function Lifecycle() {
  return (
    <div className="bg-slate-50 py-24 dark:bg-gray-900">
      <Container>
        <Subheading>How it works</Subheading>
        <Heading as="h2" className="mt-2 max-w-3xl">
          One event, four stages.
        </Heading>
        <p className="mt-6 max-w-2xl text-lg/8 text-slate-600 dark:text-gray-400">
          Your event moves Draft → On sale → Live → Ended. Each stage shows only
          the tools that matter then — so setting up never feels like flying a
          plane.
        </p>
        <ol className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stages.map((stage, i) => (
            <li
              key={stage.key}
              className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-white/10 dark:bg-gray-950"
            >
              <p className="flex justify-between font-mono text-xs text-blue-600 dark:text-blue-400">
                <span>
                  0{i + 1} · {stage.key.toUpperCase()}
                </span>
                <span>{stage.state}</span>
              </p>
              <h3 className="mt-3 text-xl font-semibold tracking-tight text-slate-950 dark:text-white">
                {stage.title}
              </h3>
              <p className="mt-2 text-sm/6 text-slate-600 dark:text-gray-400">
                {stage.body}
              </p>
              <dl
                aria-hidden="true"
                className="mt-5 rounded-xl border border-slate-200 bg-slate-50 px-3 py-1 text-xs dark:border-white/10 dark:bg-gray-900"
              >
                {stage.rows.map(([label, value]) => (
                  <div
                    key={label}
                    className="flex items-center justify-between border-b border-dashed border-slate-200 py-2 last:border-0 dark:border-white/10"
                  >
                    <dt className="text-slate-600 dark:text-gray-400">
                      {label}
                    </dt>
                    <dd className="font-mono font-medium text-slate-900 dark:text-white">
                      {value}
                    </dd>
                  </div>
                ))}
              </dl>
              <div className="mt-4 flex gap-1">
                {stages.map((_, j) => (
                  <span
                    key={j}
                    className={clsx(
                      'h-1 flex-1 rounded-full',
                      j <= i
                        ? 'bg-emerald-500'
                        : 'bg-slate-200 dark:bg-white/10',
                    )}
                  />
                ))}
              </div>
            </li>
          ))}
        </ol>
      </Container>
    </div>
  )
}

function BentoCard({
  icon: Icon,
  title,
  body,
  className,
  children,
}: {
  icon: React.ComponentType<React.ComponentProps<'svg'>>
  title: string
  body: string
  className?: string
  children?: React.ReactNode
}) {
  return (
    <div
      className={clsx(
        'rounded-3xl border border-white/10 bg-ink-2 p-6',
        className,
      )}
    >
      <h3 className="flex items-center gap-2.5 text-lg font-semibold text-white">
        <Icon className="size-5 text-blue-300" />
        {title}
      </h3>
      <p className="mt-2 max-w-md text-sm/6 text-slate-400">{body}</p>
      {children && (
        <div aria-hidden="true" className="mt-5">
          {children}
        </div>
      )}
    </div>
  )
}

function EventDay() {
  return (
    <div id="event-day" className="scroll-mt-8 bg-ink py-24 text-slate-200">
      <Container>
        <Subheading dark>Event day</Subheading>
        <Heading as="h2" dark className="mt-2 max-w-3xl">
          Built for the hour doors open.
        </Heading>
        <p className="mt-6 max-w-2xl text-lg/8 text-slate-400">
          Most event tools stop at the registration form. The part that goes
          wrong is the morning of — queues, patchy Wi-Fi, the wrong people in
          the wrong room. That&apos;s where GatherHub does its best work.
        </p>
        <div className="mt-12 grid grid-cols-1 gap-4 lg:grid-cols-6">
          <BentoCard
            icon={MapPinIcon}
            title="Gates & zones"
            body="Decide which tickets open which doors. A VIP lounge, a lab that's for workshop tickets only — the scanner says no, and says why."
            className="lg:col-span-4"
          >
            <div className="grid grid-cols-1 gap-2 text-xs sm:grid-cols-3">
              <div className="rounded-xl border border-white/10 p-3 text-slate-300">
                Main Hall
                <span className="mt-1 block font-mono text-base text-white">
                  All tickets
                </span>
              </div>
              <div className="rounded-xl border border-white/10 p-3 text-slate-300">
                Workshop Lab
                <span className="mt-1 block font-mono text-base text-white">
                  Hands-on
                </span>
              </div>
              <div className="rounded-xl border border-rose-500/40 bg-rose-500/5 p-3 text-slate-300">
                <span className="font-mono">Lab · GH-0490-G</span>
                <span className="mt-1 block text-sm font-medium text-rose-300">
                  General ticket — not admitted
                </span>
              </div>
            </div>
          </BentoCard>
          <BentoCard
            icon={SignalSlashIcon}
            title="Works offline"
            body="Scans save on the phone when the hall Wi-Fi drops and sync when it's back. Nobody gets scanned twice."
            className="lg:col-span-2"
          >
            <div className="grid gap-2 font-mono text-[11px]">
              <span className="flex justify-between rounded-md bg-amber-500/15 px-2.5 py-2 text-amber-300">
                6 scans queued<span>offline</span>
              </span>
              <span className="flex justify-between rounded-md bg-emerald-500/15 px-2.5 py-2 text-emerald-300">
                6 synced<span>09:21</span>
              </span>
            </div>
          </BentoCard>
          <BentoCard
            icon={ChartBarIcon}
            title="Live headcount"
            body="Entries minus exits, per gate, by the hour."
            className="lg:col-span-2"
          >
            <div className="flex h-24 items-end gap-1.5">
              {[20, 55, 92, 80, 62, 70, 48, 30].map((h, i) => (
                <span
                  key={i}
                  className="flex-1 rounded-t bg-linear-to-t from-blue-600 to-blue-300 opacity-85"
                  style={{ height: `${h}%` }}
                />
              ))}
            </div>
          </BentoCard>
          <BentoCard
            icon={StarIcon}
            title="People's Choice"
            body="Visitors scan a booth QR and vote. The leaderboard goes on the big screen."
            className="lg:col-span-2"
          >
            <div className="grid gap-2.5">
              {[
                [88, 112, 'bg-amber-400'],
                [64, 81, 'bg-blue-500'],
                [47, 60, 'bg-blue-500'],
              ].map(([w, votes, color], i) => (
                <div
                  key={i}
                  className="grid grid-cols-[16px_1fr_36px] items-center gap-2.5 font-mono text-xs text-slate-400"
                >
                  <span className={i === 0 ? 'text-amber-300' : ''}>
                    {i + 1}
                  </span>
                  <span className="h-1.5 overflow-hidden rounded-full bg-ink-3">
                    <span
                      className={clsx('block h-full rounded-full', color)}
                      style={{ width: `${w}%` }}
                    />
                  </span>
                  <span className="text-right">{votes}</span>
                </div>
              ))}
            </div>
          </BentoCard>
          <BentoCard
            icon={CameraIcon}
            title="Check-in photo"
            body="Optional selfie at check-in as attendance proof. Two separate consents, deleted after 30 days. No face matching."
            className="lg:col-span-2"
          >
            <div className="flex gap-2.5">
              {[
                'from-blue-700 to-blue-400',
                'from-sky-700 to-sky-400',
                'from-indigo-700 to-indigo-400',
              ].map((g, i) => (
                <span
                  key={g}
                  className={clsx(
                    'grid size-14 place-items-center rounded-xl bg-linear-to-br font-semibold text-white',
                    g,
                  )}
                >
                  {['NA', 'HF', 'SR'][i]}
                </span>
              ))}
            </div>
          </BentoCard>
          <BentoCard
            icon={CheckBadgeIcon}
            title="Certificates that check out"
            body="Issued only to people who were actually scanned in. Each has a QR anyone can scan to verify it's real."
            className="lg:col-span-3"
          >
            <div className="flex items-center gap-4 rounded-xl bg-white p-4 text-slate-900">
              <QrCodeIcon className="size-10 text-blue-600" />
              <div>
                <p className="text-[11px] text-slate-500">
                  Certificate of Participation
                </p>
                <p className="font-semibold">Nur Aisyah binti Rahman</p>
                <p className="font-mono text-[11px] text-blue-600">
                  GH-CERT-2026-0482 · Verified
                </p>
              </div>
            </div>
          </BentoCard>
          <BentoCard
            icon={DocumentTextIcon}
            title="The report writes itself"
            body="One PDF after the event: registrations, attendance by session, survey results and revenue — the thing your manager or sponsor asks for."
            className="lg:col-span-3"
          >
            <div className="flex flex-wrap gap-2 font-mono text-[11px] text-blue-300">
              {[
                'Attendance by session',
                'Survey summary',
                'Certificates issued',
              ].map((t) => (
                <span key={t} className="rounded-md bg-blue-500/15 px-2 py-1">
                  {t}
                </span>
              ))}
            </div>
          </BentoCard>
        </div>
      </Container>
    </div>
  )
}

const timeline = [
  ['Before', 'Registration and seat confirmation through GatherHub.'],
  ['Morning', 'Intro to DevOps, why G8Deck, and a live deployment demo.'],
  [
    'Afternoon',
    'Hands-on: deploy a sample, then their own final-year project, with push-to-deploy.',
  ],
  ['After', 'Certification briefing. Accounts stay active.'],
]

function Story() {
  return (
    <section id="story" className="scroll-mt-8">
      <Container className="py-24">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-[1.1fr_1fr]">
          <figure className="relative aspect-[4/3] overflow-hidden rounded-3xl">
            <Image
              src="/stories/g8deck-gmi/coaching.webp"
              alt="Coaching during the hands-on session at GMI"
              fill
              sizes="(min-width: 1024px) 600px, 100vw"
              className="object-cover"
            />
            <span className="absolute top-4 left-4 flex items-center gap-2 rounded-lg bg-white px-3 py-1.5 text-xs font-semibold text-slate-900">
              <span className="size-2 rounded-full bg-emerald-500" />
              Run on GatherHub
            </span>
          </figure>
          <div>
            <Subheading>Story · Education</Subheading>
            <Heading as="h2" className="mt-2">
              A full day at GMI — every student left with a live app.
            </Heading>
            <p className="mt-6 text-lg/8 text-slate-600 dark:text-gray-400">
              Developers Hub ran G8Deck Uni Discovery for final-year students,
              lecturers and IT staff at German-Malaysian Institute, Bangi.
            </p>
            <ol className="mt-8 grid gap-5 border-l-2 border-slate-200 pl-6 dark:border-white/10">
              {timeline.map(([when, what]) => (
                <li
                  key={when}
                  className="relative text-base/6 text-slate-700 dark:text-gray-300"
                >
                  <span className="absolute top-1 -left-[33px] size-3 rounded-full border-2 border-blue-600 bg-white dark:bg-gray-950" />
                  <span className="block font-mono text-[11px] tracking-wider text-blue-600 uppercase dark:text-blue-400">
                    {when}
                  </span>
                  {what}
                </li>
              ))}
            </ol>
            <a
              href={storyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-1.5 font-semibold text-blue-600 hover:text-blue-700 dark:text-blue-400"
            >
              Read the full write-up on devhub.my{' '}
              <ArrowRightIcon className="size-4" />
            </a>
          </div>
        </div>
      </Container>
    </section>
  )
}

const events = [
  {
    slug: 'ai-augmented-development-vibe-coding-with-claude-code',
    title: 'AI-Augmented Development: Vibe Coding with Claude Code',
    org: 'Developers Hub · Kulai, Johor',
    date: '6 Jun 2026',
    online: false,
    image: '/events/vibe-coding-claude-code.jpg',
  },
  {
    slug: 'g8stack-live-demo-api-management-made-simple-nx4j',
    title: 'G8Stack Live Demo — API Management Made Simple',
    org: 'Developers Hub',
    date: '6 Mar 2026',
    online: true,
    image: '/events/g8stack-live-demo.jpg',
  },
  {
    slug: 'santai-ramadhan-vibe-code-1-EDSBtl',
    title: 'Santai Ramadhan: Vibe Code #1',
    org: 'Cleanique Coders Resources',
    date: '21 Feb 2026',
    online: true,
    image: '/events/santai-ramadhan-vibe-code.jpg',
  },
  {
    slug: 'custom-wordpress-theme-plugin-with-ai',
    title: 'Custom WordPress Theme & Plugin Development with AI',
    org: 'Integra Solid',
    date: '26 May 2026',
    online: true,
    kind: 'Online class',
  },
  {
    slug: 'livewire-4-whats-new-how-to-migrate-from-v3',
    title: "Livewire 4: What's New & How to Migrate from v3",
    org: 'Cleanique Coders Resources',
    date: '14 Feb 2026',
    online: true,
    kind: 'Webinar',
  },
  {
    slug: 'satu-idea-satu-malam-reka-produk-digital-dengan-ai',
    title: 'Satu Idea, Satu Malam: Reka Produk Digital dengan AI',
    org: 'Developers Hub',
    date: '7 Feb 2026',
    online: true,
    kind: 'Bengkel',
  },
]

function RecentEvents() {
  return (
    <div className="bg-slate-50 py-24 dark:bg-gray-900">
      <Container>
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <Subheading>Recently on GatherHub</Subheading>
            <Heading as="h2" className="mt-2 max-w-3xl">
              Classes, demos and workshops — online and in the room.
            </Heading>
          </div>
          <Button variant="outline" href={directoryUrl} className="shrink-0">
            Browse events
          </Button>
        </div>
        <ul className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {events.map((event) => (
            <li key={event.slug}>
              <a
                href={`${directoryUrl}/${event.slug}`}
                className="group block h-full overflow-hidden rounded-2xl border border-slate-200 bg-white transition hover:-translate-y-0.5 hover:shadow-xl hover:shadow-slate-900/10 dark:border-white/10 dark:bg-gray-950"
              >
                <div className="relative aspect-[2/1] bg-ink">
                  {event.image ? (
                    <Image
                      src={event.image}
                      alt=""
                      fill
                      sizes="(min-width: 1024px) 380px, (min-width: 640px) 50vw, 100vw"
                      className="object-cover"
                    />
                  ) : (
                    <div className="flex h-full flex-col justify-end bg-linear-to-br from-ink to-blue-900 p-5">
                      <span className="font-mono text-[11px] tracking-wider text-blue-300 uppercase">
                        {event.kind}
                      </span>
                      <span className="mt-1 text-lg/6 font-semibold text-white">
                        {event.title}
                      </span>
                    </div>
                  )}
                </div>
                <div className="p-5">
                  <div className="flex gap-2 font-mono text-[11px]">
                    <span
                      className={clsx(
                        'rounded-md border px-2 py-0.5',
                        event.online
                          ? 'border-emerald-200 bg-emerald-50 text-emerald-700 dark:border-emerald-500/30 dark:bg-emerald-500/10 dark:text-emerald-300'
                          : 'border-blue-200 bg-blue-50 text-blue-700 dark:border-blue-500/30 dark:bg-blue-500/10 dark:text-blue-300',
                      )}
                    >
                      {event.online ? 'Online' : 'In person'}
                    </span>
                    <span className="rounded-md border border-slate-200 px-2 py-0.5 text-slate-500 dark:border-white/10 dark:text-gray-400">
                      {event.date}
                    </span>
                  </div>
                  <h3 className="mt-3 font-semibold text-slate-950 group-hover:text-blue-700 dark:text-white dark:group-hover:text-blue-300">
                    {event.title}
                  </h3>
                  <p className="mt-1 text-sm text-slate-500 dark:text-gray-400">
                    {event.org}
                  </p>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </Container>
    </div>
  )
}

const local = [
  {
    icon: BuildingLibraryIcon,
    title: 'FPX online banking',
    body: 'Via BayarCash. Participants pay from their own bank — no card needed.',
  },
  {
    icon: QrCodeIcon,
    title: 'DuitNow QR',
    body: 'Scan-to-pay at checkout. Walk-ins can pay at the desk and crew confirm it.',
  },
  {
    icon: DocumentTextIcon,
    title: 'Invoices & bank transfer',
    body: 'SST-ready invoices, and manual transfer for company or agency payments.',
  },
  {
    icon: UserGroupIcon,
    title: 'Student & member tickets',
    body: 'Verify by institution email, member ID or document before a discounted ticket unlocks.',
  },
]

function MadeForMalaysia() {
  return (
    <Container className="py-24">
      <Subheading>Made for Malaysia</Subheading>
      <Heading as="h2" className="mt-2 max-w-3xl">
        Payments and paperwork that fit how events run here.
      </Heading>
      <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {local.map((item) => (
          <div
            key={item.title}
            className="rounded-2xl border border-slate-200 p-5 dark:border-white/10"
          >
            <item.icon className="size-6 text-blue-600 dark:text-blue-400" />
            <h3 className="mt-4 font-semibold text-slate-950 dark:text-white">
              {item.title}
            </h3>
            <p className="mt-1.5 text-sm/6 text-slate-600 dark:text-gray-400">
              {item.body}
            </p>
          </div>
        ))}
      </div>
    </Container>
  )
}

const planHighlights: Record<string, string[]> = {
  free: [
    '2 active events, 2 staff seats',
    'QR check-in & certificates',
    'Polls, Q&A and surveys',
  ],
  pro: [
    '20 active events, 10 staff',
    'Sessions, blast emails, flash sales',
    '10,000 email credits / month',
  ],
  business: [
    'Unlimited events & staff',
    '50,000 email credits / month',
    'Sponsor analytics',
  ],
}

function PlansTeaser() {
  return (
    <div className="bg-slate-50 py-24 dark:bg-gray-900">
      <Container>
        <Subheading>Pricing</Subheading>
        <Heading as="h2" className="mt-2">
          Free to run. Pay when you grow.
        </Heading>
        <p className="mt-6 max-w-2xl text-lg/8 text-slate-600 dark:text-gray-400">
          Free events never pay a fee. Paid tickets carry a small platform fee
          that drops as your plan goes up.
        </p>
        <div className="mt-12 grid grid-cols-1 gap-4 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.key}
              className={clsx(
                'relative rounded-3xl border p-6',
                plan.featured
                  ? 'border-ink bg-ink text-slate-200'
                  : 'border-slate-200 bg-white dark:border-white/10 dark:bg-gray-950',
              )}
            >
              {plan.featured && (
                <span className="absolute top-6 right-6 rounded-md bg-blue-600 px-2 py-1 font-mono text-[11px] text-white">
                  Most organisers
                </span>
              )}
              <h3
                className={clsx(
                  'font-semibold',
                  plan.featured
                    ? 'text-white'
                    : 'text-slate-950 dark:text-white',
                )}
              >
                {plan.name}
              </h3>
              <p
                className={clsx(
                  'mt-3 text-4xl font-bold tracking-tight',
                  plan.featured
                    ? 'text-white'
                    : 'text-slate-950 dark:text-white',
                )}
              >
                {plan.price}{' '}
                <span className="text-sm font-medium text-slate-500">
                  {plan.cadence}
                </span>
              </p>
              <p
                className={clsx(
                  'mt-1.5 font-mono text-xs',
                  plan.featured
                    ? 'text-blue-300'
                    : 'text-blue-600 dark:text-blue-400',
                )}
              >
                {plan.fee}
              </p>
              <ul className="mt-5 grid gap-2.5 text-sm">
                {planHighlights[plan.key].map((item) => (
                  <li key={item} className="flex gap-2">
                    <CheckIcon className="size-5 shrink-0 text-emerald-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <Button variant="outline" href="/pricing" className="mt-8">
          Compare every feature
        </Button>
      </Container>
    </div>
  )
}

export default function HomeClient() {
  return (
    <>
      <Hero />
      <main>
        <PhotoBand />
        <Lifecycle />
        <EventDay />
        <Story />
        <RecentEvents />
        <MadeForMalaysia />
        <PlansTeaser />
      </main>
      <Footer />
    </>
  )
}
