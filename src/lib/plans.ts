// Plan + feature comparison data. Mirrors the app's PlanSeeder / FeatureSeeder
// (platform/gatherhub-app/database/seeders) — keep in sync when plans change.
// See docs/05-features/38-subscription-plans-billing.md for the source of truth.

export type PlanKey = 'free' | 'pro' | 'business'

export interface Plan {
  key: PlanKey
  name: string
  price: string
  cadence: string
  fee: string
  tagline: string
  featured?: boolean
  cta: string
}

export const plans: Plan[] = [
  {
    key: 'free',
    name: 'Free',
    price: 'RM 0',
    cadence: 'forever',
    fee: '3% + RM 1 per paid ticket',
    tagline: 'Run small events end to end at no cost.',
    cta: 'Start free',
  },
  {
    key: 'pro',
    name: 'Pro',
    price: 'RM 99',
    cadence: 'per month',
    fee: '2% + RM 1 per paid ticket',
    tagline: 'For regular organizers who want more events and a lower fee.',
    featured: true,
    cta: 'Choose Pro',
  },
  {
    key: 'business',
    name: 'Business',
    price: 'RM 299',
    cadence: 'per month',
    fee: '1.5% + RM 1 per paid ticket',
    tagline: 'Every feature, the lowest fee, unlimited events and API access.',
    cta: 'Choose Business',
  },
]

// A row value: `true` = included, `false` = not included, string = a specific value.
export type CellValue = boolean | string

export interface FeatureRow {
  name: string
  note?: string
  values: Record<PlanKey, CellValue>
}

export interface FeatureGroup {
  title: string
  rows: FeatureRow[]
}

const all = { free: true, pro: true, business: true } as const
const proUp = { free: false, pro: true, business: true } as const
const businessOnly = { free: false, pro: false, business: true } as const

export const featureGroups: FeatureGroup[] = [
  {
    title: 'Plans & limits',
    rows: [
      {
        name: 'Active events',
        values: { free: '2', pro: '20', business: 'Unlimited' },
      },
      {
        name: 'Staff / crew seats',
        values: { free: '2', pro: '10', business: 'Unlimited' },
      },
      {
        name: 'Included email credits',
        values: { free: '—', pro: '10,000 / mo', business: '50,000 / mo' },
      },
      {
        name: 'Platform fee (paid tickets)',
        values: { free: '3% + RM 1', pro: '2% + RM 1', business: '1.5% + RM 1' },
      },
    ],
  },
  {
    title: 'Core event management',
    rows: [
      { name: 'Events, tickets & orders', values: all },
      { name: 'QR check-in & attendance', values: all },
      { name: 'Participant management & bulk import', values: all },
      { name: 'Registration forms, capacity & waitlists', values: all },
      { name: 'Refunds & payout management', values: all },
      { name: 'Public event directory', values: all },
    ],
  },
  {
    title: 'Engagement',
    rows: [
      { name: 'Certificates (QR-verified)', values: all },
      { name: 'Live polling', values: all },
      { name: 'Q&A sessions', values: all },
      { name: 'Post-event surveys (NPS)', values: all },
      { name: 'Social wall', values: all },
      { name: 'Gamification (points, badges, streaks)', values: all },
      { name: 'Kit collection', values: all },
      { name: 'Crew management', values: all },
      { name: 'Custom registration fields', values: all },
      { name: 'Speakers & sponsors', values: all },
      { name: 'Attendee networking', values: proUp },
    ],
  },
  {
    title: 'Sessions & agenda',
    rows: [
      { name: 'Event sessions', values: proUp },
      { name: 'Event activities & workshops', values: proUp },
      { name: 'Call for papers', values: proUp },
    ],
  },
  {
    title: 'Communications',
    rows: [{ name: 'Blast emails (scheduling + tracking)', values: proUp }],
  },
  {
    title: 'Growth & sales',
    rows: [
      { name: 'Discount codes & bundle deals', values: all },
      { name: 'Flash sales', values: proUp },
      { name: 'Unlimited events', values: proUp },
      { name: 'Sponsor analytics', values: businessOnly },
      { name: 'Vendor marketplace listing', values: businessOnly },
      { name: 'Community templates', values: businessOnly },
    ],
  },
  {
    title: 'Reporting & integrations',
    rows: [
      { name: 'Advanced reporting & exports', values: proUp },
      { name: 'REST API access', values: businessOnly },
      { name: 'Webhooks', values: all },
    ],
  },
]
