'use client'

import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { Link } from '@/components/link'
import { Navbar } from '@/components/navbar'
import { config } from '@/lib/config'
import { plans } from '@/lib/plans'
import {
  AcademicCapIcon,
  ArrowRightIcon,
  BriefcaseIcon,
  BuildingLibraryIcon,
  BuildingOffice2Icon,
  ChartBarIcon,
  CheckBadgeIcon,
  CheckIcon,
  ComputerDesktopIcon,
  DocumentTextIcon,
  MicrophoneIcon,
  QrCodeIcon,
  TicketIcon,
  UserGroupIcon,
} from '@heroicons/react/24/outline'
import { clsx } from 'clsx'
import Image from 'next/image'

// Warm landing (doc 25 proposal B). Real content only: photos from G8Deck Uni
// Discovery at GMI Bangi, events from my.gatherhub.app.

const directoryUrl = 'https://my.gatherhub.app/events'
const storyUrl =
  'https://devhub.my/resources/articles/g8deck-uni-discovery-workshop/'
const photo = (name: string) => `/stories/g8deck-gmi/${name}.webp`

function Serif({ children }: { children: React.ReactNode }) {
  return (
    <span className="font-serif text-[1.1em] font-normal tracking-normal text-blue-600 italic dark:text-blue-400">
      {children}
    </span>
  )
}

function Eyebrow({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <p
      className={clsx(
        'inline-flex items-center gap-2 text-sm font-semibold text-orange-600 before:h-0.5 before:w-4.5 before:rounded-full before:bg-current dark:text-orange-400',
        className,
      )}
    >
      {children}
    </p>
  )
}

function H2({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <h2
      className={clsx(
        'mt-3.5 text-4xl/[1.05] font-semibold tracking-tighter text-balance text-stone-ink sm:text-5xl/[1.04] dark:text-white',
        className,
      )}
    >
      {children}
    </h2>
  )
}

function CtaButton({
  href,
  variant = 'dark',
  children,
}: {
  href: string
  variant?: 'dark' | 'light'
  children: React.ReactNode
}) {
  return (
    <Link
      href={href}
      className={clsx(
        'inline-flex h-12.5 items-center gap-2 rounded-2xl px-6 text-[15px] font-semibold transition hover:-translate-y-px',
        variant === 'dark'
          ? 'bg-stone-ink text-white hover:shadow-lg hover:shadow-stone-900/30 dark:bg-blue-600'
          : 'border border-line bg-white text-stone-ink dark:border-white/15 dark:bg-white/5 dark:text-white',
      )}
    >
      {children}
    </Link>
  )
}

const stickers = [
  {
    icon: CheckIcon,
    title: 'Checked in',
    note: 'Doors open, no queue',
    tone: 'bg-emerald-100 text-emerald-600',
    pos: '-left-3.5 bottom-28',
  },
  {
    icon: TicketIcon,
    title: 'Registration open',
    note: 'Seats filling up',
    tone: 'bg-blue-100 text-blue-600',
    pos: 'left-[44%] -top-2.5',
  },
  {
    icon: CheckBadgeIcon,
    title: 'Certificates sent',
    note: 'Right after the event',
    tone: 'bg-orange-100 text-orange-600',
    pos: '-right-2.5 top-[270px]',
  },
]

function Hero() {
  return (
    <div className="bg-paper dark:bg-gray-950">
      <Container>
        <Navbar />
        <div className="grid grid-cols-1 items-center gap-12 pt-12 pb-20 lg:grid-cols-[1fr_1.05fr] lg:pt-16">
          <div>
            <Eyebrow>Event management for Malaysia</Eyebrow>
            <h1 className="mt-4.5 text-5xl/none font-semibold tracking-tighter text-balance text-stone-ink sm:text-7xl/none dark:text-white">
              Events that run <Serif>seamlessly</Serif>, from sign-up to
              thank-you.
            </h1>
            <p className="mt-5 max-w-xl text-lg/8 text-stone-600 dark:text-gray-400">
              Registration, payments, check-in, certificates and everything in
              between — in one place your whole team can use. So on the day, you
              get to be with your people instead of your spreadsheets.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <CtaButton href={`${config.appUrl}/register`}>
                Start your first event <ArrowRightIcon className="size-5" />
              </CtaButton>
              <CtaButton href="#event-day" variant="light">
                See how a day runs
              </CtaButton>
            </div>
            <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm text-stone-600 dark:text-gray-400">
              {['Free plan', 'FPX & DuitNow QR', 'Online or in person'].map(
                (item) => (
                  <li key={item} className="flex items-center gap-1.5">
                    <CheckIcon className="size-4 text-emerald-600" />
                    {item}
                  </li>
                ),
              )}
            </ul>
          </div>

          <div className="relative h-[440px] sm:h-[560px]">
            <figure className="absolute top-7.5 left-0 h-[300px] w-[66%] -rotate-2 overflow-hidden rounded-3xl shadow-2xl shadow-stone-900/30 sm:h-[380px]">
              <Image
                src={photo('group')}
                alt="Group photo at G8Deck Uni Discovery, GMI Bangi"
                fill
                priority
                sizes="(min-width: 1024px) 400px, 66vw"
                className="object-cover object-[center_65%]"
              />
            </figure>
            <figure className="absolute top-0 right-0 h-[200px] w-[44%] rotate-3 overflow-hidden rounded-3xl border-6 border-white shadow-2xl shadow-stone-900/30 sm:h-[250px] dark:border-gray-800">
              <Image
                src={photo('coaching')}
                alt="Hands-on coaching at the tables"
                fill
                sizes="(min-width: 1024px) 270px, 44vw"
                className="object-cover"
              />
            </figure>
            <figure className="absolute right-6 bottom-0 h-[200px] w-[52%] -rotate-1 overflow-hidden rounded-3xl border-6 border-white shadow-2xl shadow-stone-900/30 sm:h-[250px] dark:border-gray-800">
              <Image
                src={photo('demo')}
                alt="Live demo session on the big screen"
                fill
                sizes="(min-width: 1024px) 320px, 52vw"
                className="object-cover"
              />
            </figure>
            {stickers.map((s) => (
              <div
                key={s.title}
                aria-hidden="true"
                className={clsx(
                  'absolute z-10 hidden items-center gap-2.5 rounded-2xl bg-white px-3.5 py-2.5 text-[13px] text-stone-ink shadow-xl shadow-stone-900/25 sm:flex',
                  s.pos,
                )}
              >
                <span
                  className={clsx(
                    'grid size-8 place-items-center rounded-xl',
                    s.tone,
                  )}
                >
                  <s.icon className="size-5" />
                </span>
                <span>
                  <b className="block text-sm">{s.title}</b>
                  <span className="text-xs text-stone-500">{s.note}</span>
                </span>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  )
}

const audiences = [
  { icon: AcademicCapIcon, label: 'University workshops' },
  { icon: BriefcaseIcon, label: 'Training & classes' },
  { icon: UserGroupIcon, label: 'Community meetups' },
  { icon: BuildingOffice2Icon, label: 'Company events' },
  { icon: MicrophoneIcon, label: 'Webinars' },
]

function MadeFor() {
  return (
    <div className="border-y border-line bg-white py-7 dark:border-white/10 dark:bg-gray-900">
      <Container>
        <div className="flex flex-wrap items-center gap-7">
          <p className="text-sm text-stone-600 dark:text-gray-400">
            Made for people who run
          </p>
          <ul className="flex flex-wrap gap-2.5">
            {audiences.map((a) => (
              <li
                key={a.label}
                className="flex items-center gap-2 rounded-full border border-line bg-paper py-2 pr-3.5 pl-2.5 text-sm font-medium text-stone-ink dark:border-white/10 dark:bg-white/5 dark:text-white"
              >
                <a.icon className="size-4.5 text-blue-600 dark:text-blue-400" />
                {a.label}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </div>
  )
}

const day = [
  {
    time: '08:30',
    icon: BuildingOffice2Icon,
    img: 'opening',
    title: 'Doors open',
    body: 'Everyone shows the QR in their email. Crew scan with their own phones.',
    tag: 'QR check-in',
  },
  {
    time: '09:00',
    icon: MicrophoneIcon,
    img: 'handson',
    title: 'Opening talks',
    body: 'The agenda is on every phone, so nobody asks "what\'s next?".',
    tag: 'Sessions & agenda',
  },
  {
    time: '11:00',
    icon: ChartBarIcon,
    img: 'demo',
    title: 'Live demo',
    body: 'Questions come in from the floor; a quick poll keeps the room involved.',
    tag: 'Polls & Q&A',
  },
  {
    time: '14:00',
    icon: ComputerDesktopIcon,
    img: 'coaching',
    title: 'Hands-on',
    body: "Materials open for everyone who's registered, from the same link.",
    tag: 'Materials',
  },
  {
    time: '17:00',
    icon: CheckBadgeIcon,
    img: 'group',
    title: 'Wrap up',
    body: 'Group photo, a short feedback survey, and certificates on their way.',
    tag: 'Certificates & survey',
  },
]

function EventDay() {
  return (
    <section
      id="event-day"
      className="scroll-mt-8 bg-paper py-24 dark:bg-gray-950"
    >
      <Container>
        <Eyebrow>A day with GatherHub</Eyebrow>
        <H2 className="max-w-3xl">
          Less work. <Serif>More time</Serif> for your event.
        </H2>
        <p className="mt-4 max-w-xl text-lg/8 text-stone-600 dark:text-gray-400">
          The admin is done before doors open, so the day is yours. Here&apos;s
          how G8Deck Uni Discovery ran at German-Malaysian Institute, Bangi — 23
          September 2026.
        </p>
        <ol className="relative mt-13 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5 lg:gap-4 lg:before:absolute lg:before:inset-x-0 lg:before:top-[19px] lg:before:h-0.5 lg:before:bg-[repeating-linear-gradient(90deg,var(--color-line)_0_8px,transparent_8px_14px)]">
          {day.map((slot) => (
            <li key={slot.time} className="relative">
              <span className="relative inline-flex items-center gap-2 bg-paper pr-2.5 font-mono text-xs text-stone-500 dark:bg-gray-950 dark:text-gray-400">
                <span className="grid size-10 place-items-center rounded-full border-2 border-blue-600 bg-white text-blue-600 dark:bg-gray-900">
                  <slot.icon className="size-5" />
                </span>
                {slot.time}
              </span>
              <figure className="relative mt-4 aspect-[4/3] overflow-hidden rounded-2xl bg-paper-2">
                <Image
                  src={photo(slot.img)}
                  alt={slot.title}
                  fill
                  sizes="(min-width: 1024px) 230px, (min-width: 640px) 50vw, 100vw"
                  className="object-cover object-[center_70%]"
                />
              </figure>
              <h3 className="mt-3.5 text-[17px] font-semibold tracking-tight text-stone-ink dark:text-white">
                {slot.title}
              </h3>
              <p className="mt-1.5 text-sm/6 text-stone-600 dark:text-gray-400">
                {slot.body}
              </p>
              <span className="mt-2.5 inline-block rounded-full bg-blue-100 px-2.5 py-1 text-xs font-semibold text-blue-700 dark:bg-blue-500/15 dark:text-blue-300">
                {slot.tag}
              </span>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  )
}

const features = [
  {
    icon: TicketIcon,
    tone: 'bg-blue-100 text-blue-600',
    title: 'Registration & tickets',
    body: 'A clean event page and a form that asks exactly what you need.',
    points: [
      'Early bird, waitlist, bundle discounts',
      'Student and member prices',
    ],
  },
  {
    icon: QrCodeIcon,
    tone: 'bg-emerald-100 text-emerald-600',
    title: 'Check-in that keeps moving',
    body: 'Any phone becomes a scanner. It carries on even if the hall Wi-Fi drops.',
    points: [
      'Several doors, one live headcount',
      'Walk-ins registered on the spot',
    ],
  },
  {
    icon: ChartBarIcon,
    tone: 'bg-orange-100 text-orange-600',
    title: 'A room that joins in',
    body: "Polls, Q&A, surveys — and People's Choice voting for showcases and expos.",
    points: ['Results on the big screen', 'No app to install'],
  },
  {
    icon: CheckBadgeIcon,
    tone: 'bg-violet-100 text-violet-700',
    title: 'A tidy finish',
    body: 'Certificates, a feedback survey and a one-page summary for your report.',
    points: ['Sent to everyone who attended', 'Payout to your bank account'],
  },
]

function Features() {
  return (
    <section className="bg-paper pb-24 dark:bg-gray-950">
      <Container>
        <Eyebrow>Everything in one place</Eyebrow>
        <H2>
          One place for the <Serif>whole</Serif> event.
        </H2>
        <div className="mt-12 grid grid-cols-1 gap-5 lg:grid-cols-2">
          {features.map((f) => (
            <div
              key={f.title}
              className="grid grid-cols-[52px_1fr] gap-4.5 rounded-3xl border border-line bg-white p-7.5 dark:border-white/10 dark:bg-gray-900"
            >
              <span
                className={clsx(
                  'grid size-13 place-items-center rounded-2xl',
                  f.tone,
                )}
              >
                <f.icon className="size-6" />
              </span>
              <div>
                <h3 className="text-xl font-semibold tracking-tight text-stone-ink dark:text-white">
                  {f.title}
                </h3>
                <p className="mt-1.5 text-[15px]/6 text-stone-600 dark:text-gray-400">
                  {f.body}
                </p>
                <ul className="mt-3.5 grid gap-2 text-sm text-stone-ink dark:text-gray-200">
                  {f.points.map((p) => (
                    <li key={p} className="flex gap-2">
                      <CheckIcon className="size-4.5 shrink-0 text-emerald-600" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}

const facts = [
  ['Where', 'GMI, Bangi'],
  ['When', '23 Sep 2026'],
  ['Who', 'Students, lecturers, IT staff'],
  ['Format', 'Talks + hands-on lab'],
]

function Story() {
  return (
    <section
      id="story"
      className="scroll-mt-8 bg-paper px-4 sm:px-6 dark:bg-gray-950"
    >
      <div className="mx-auto max-w-7xl rounded-4xl bg-stone-ink py-18 text-stone-100">
        <Container>
          <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2">
            <figure className="relative aspect-[4/3] overflow-hidden rounded-3xl">
              <Image
                src={photo('coaching')}
                alt="Students working with a coach at GMI"
                fill
                sizes="(min-width: 1024px) 560px, 100vw"
                className="object-cover"
              />
            </figure>
            <div>
              <Eyebrow className="text-orange-300 dark:text-orange-300">
                Story
              </Eyebrow>
              <H2 className="text-white">
                A full day at GMI, and every student <Serif>left with</Serif> a
                live app.
              </H2>
              <p className="mt-4 text-lg/8 text-stone-400">
                Developers Hub ran G8Deck Uni Discovery for final-year students,
                lecturers and IT staff — talks in the morning, hands-on in the
                afternoon.
              </p>
              <dl className="mt-7 grid grid-cols-2 gap-3">
                {facts.map(([label, value]) => (
                  <div
                    key={label}
                    className="rounded-2xl border border-white/12 p-3.5"
                  >
                    <dt className="font-mono text-[11px] tracking-wider text-stone-400 uppercase">
                      {label}
                    </dt>
                    <dd className="mt-1 font-semibold">{value}</dd>
                  </div>
                ))}
              </dl>
              <a
                href={storyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 inline-flex items-center gap-1.5 font-semibold text-blue-300 hover:text-blue-200"
              >
                Read the full write-up on devhub.my
                <ArrowRightIcon className="size-4" />
              </a>
            </div>
          </div>
        </Container>
      </div>
    </section>
  )
}

const events = [
  {
    slug: 'ai-augmented-development-vibe-coding-with-claude-code',
    title: 'AI-Augmented Development: Vibe Coding with Claude Code',
    org: 'Developers Hub',
    place: 'Kulai, Johor',
    day: '6',
    month: 'Jun',
    online: false,
    image: '/events/vibe-coding-claude-code.jpg',
  },
  {
    slug: 'santai-ramadhan-vibe-code-1-EDSBtl',
    title: 'Santai Ramadhan: Vibe Code #1',
    org: 'Cleanique Coders',
    place: 'Resources',
    day: '21',
    month: 'Feb',
    online: true,
    image: '/events/santai-ramadhan-vibe-code.jpg',
  },
  {
    slug: 'satu-idea-satu-malam-reka-produk-digital-dengan-ai',
    title: 'Satu Idea, Satu Malam: Reka Produk Digital dengan AI',
    org: 'Developers Hub',
    day: '7',
    month: 'Feb',
    online: true,
    cover: 'Satu Idea, Satu Malam',
  },
]

function RecentEvents() {
  return (
    <section className="bg-paper py-24 dark:bg-gray-950">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-5">
          <div>
            <Eyebrow>Recently on GatherHub</Eyebrow>
            <H2>
              Real events, <Serif>real</Serif> organisers.
            </H2>
          </div>
          <CtaButton href={directoryUrl} variant="light">
            Browse all events
          </CtaButton>
        </div>
        <ul className="mt-11 grid grid-cols-1 gap-5 md:grid-cols-3">
          {events.map((e) => (
            <li key={e.slug}>
              <a
                href={`${directoryUrl}/${e.slug}`}
                className="block h-full overflow-hidden rounded-3xl border border-line bg-white transition hover:-translate-y-0.5 hover:shadow-xl hover:shadow-stone-900/15 dark:border-white/10 dark:bg-gray-900"
              >
                <div className="relative aspect-video bg-paper-2">
                  {e.image ? (
                    <Image
                      src={e.image}
                      alt=""
                      fill
                      sizes="(min-width: 768px) 380px, 100vw"
                      className="object-cover"
                    />
                  ) : (
                    <div className="flex h-full items-end bg-linear-to-br from-orange-100 to-sky-100 p-5">
                      <b className="font-serif text-[26px]/tight font-normal text-stone-ink italic">
                        {e.cover}
                      </b>
                    </div>
                  )}
                </div>
                <div className="px-5 pt-4.5 pb-5.5">
                  <div className="flex items-center gap-2.5 text-[13px] text-stone-500 dark:text-gray-400">
                    <span className="rounded-xl border border-line bg-paper px-2.5 py-1 text-center leading-tight dark:border-white/10 dark:bg-white/5">
                      <b className="block text-lg text-stone-ink dark:text-white">
                        {e.day}
                      </b>
                      <span className="font-mono text-[10px] uppercase">
                        {e.month}
                      </span>
                    </span>
                    <span>
                      {e.org}
                      {e.place && (
                        <>
                          <br />
                          {e.place}
                        </>
                      )}
                    </span>
                    <span
                      className={clsx(
                        'ml-auto rounded-full px-2.5 py-0.5 text-xs font-semibold',
                        e.online
                          ? 'bg-emerald-100 text-emerald-700'
                          : 'bg-blue-100 text-blue-700',
                      )}
                    >
                      {e.online ? 'Online' : 'In person'}
                    </span>
                  </div>
                  <h3 className="mt-3.5 leading-snug font-semibold text-stone-ink dark:text-white">
                    {e.title}
                  </h3>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}

const payments = [
  { icon: BuildingLibraryIcon, label: 'FPX' },
  { icon: QrCodeIcon, label: 'DuitNow QR' },
  { icon: DocumentTextIcon, label: 'Bank transfer & invoices' },
]

const planHighlights: Record<string, string[]> = {
  free: [
    '2 active events, 2 staff',
    'QR check-in & certificates',
    'Polls, Q&A, surveys',
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

// Pricing cards follow proposal C — clearer than B's compact list.
function Pricing() {
  return (
    <section className="bg-paper-2 py-24 dark:bg-gray-900">
      <Container>
        <div className="grid grid-cols-1 items-end gap-8 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <Eyebrow>Made for Malaysia</Eyebrow>
            <H2>
              Get paid the way <Serif>your</Serif> participants pay.
            </H2>
            <p className="mt-4 max-w-xl text-lg/8 text-stone-600 dark:text-gray-400">
              No credit card needed. Free events stay free. Paid tickets carry a
              small fee that drops as your plan grows.
            </p>
          </div>
          <ul className="flex flex-wrap gap-3.5 lg:justify-end">
            {payments.map((p) => (
              <li
                key={p.label}
                className="flex items-center gap-2 rounded-xl border border-line bg-white px-4 py-3 text-sm font-semibold text-stone-ink dark:border-white/10 dark:bg-white/5 dark:text-white"
              >
                <p.icon className="size-5 text-blue-600 dark:text-blue-400" />
                {p.label}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-11 grid grid-cols-1 gap-4 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.key}
              className={clsx(
                'relative rounded-3xl bg-white p-6.5 dark:bg-gray-950',
                plan.featured
                  ? 'border-2 border-blue-600 shadow-xl shadow-blue-600/25'
                  : 'border border-line dark:border-white/10',
              )}
            >
              {plan.featured && (
                <span className="absolute top-6 right-6 rounded-full bg-blue-600 px-2.5 py-1 text-xs font-semibold text-white">
                  Most organisers
                </span>
              )}
              <h3 className="font-semibold text-stone-ink dark:text-white">
                {plan.name}
              </h3>
              <p className="mt-2.5 text-4xl font-bold tracking-tight text-stone-ink dark:text-white">
                {plan.price}{' '}
                <small className="text-sm font-medium text-stone-500">
                  {plan.cadence}
                </small>
              </p>
              <p className="mt-1 font-mono text-xs text-blue-600 dark:text-blue-400">
                {plan.fee}
              </p>
              <ul className="mt-4 grid gap-2.5 text-sm text-stone-ink dark:text-gray-200">
                {planHighlights[plan.key].map((item) => (
                  <li key={item} className="flex gap-2">
                    <CheckIcon className="size-4.5 shrink-0 text-emerald-600" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <Link
          href="/pricing"
          className="mt-8 inline-flex items-center gap-1.5 font-semibold text-blue-600 hover:text-blue-700 dark:text-blue-400"
        >
          Compare every feature <ArrowRightIcon className="size-4" />
        </Link>
      </Container>
    </section>
  )
}

function FinalCta() {
  return (
    <section className="bg-paper py-28 text-center dark:bg-gray-950">
      <Container>
        <h2 className="text-5xl/none font-semibold tracking-tighter text-stone-ink sm:text-6xl/none dark:text-white">
          Your next event, <Serif>sorted.</Serif>
        </h2>
        <p className="mx-auto mt-4.5 max-w-xl text-lg/8 text-stone-600 dark:text-gray-400">
          Set it up in an afternoon. Run it without the scramble.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <CtaButton href={`${config.appUrl}/register`}>Start free</CtaButton>
          <CtaButton href="/contact" variant="light">
            Talk to us
          </CtaButton>
        </div>
      </Container>
    </section>
  )
}

export default function HomeClient() {
  return (
    <>
      <Hero />
      <main>
        <MadeFor />
        <EventDay />
        <Features />
        <Story />
        <RecentEvents />
        <Pricing />
        <FinalCta />
      </main>
      <Footer />
    </>
  )
}
