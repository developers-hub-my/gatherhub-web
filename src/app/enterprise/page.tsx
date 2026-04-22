import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { Navbar } from '@/components/navbar'
import { Heading, Subheading } from '@/components/text'
import {
  AcademicCapIcon,
  ArchiveBoxIcon,
  ArrowPathIcon,
  BoltIcon,
  BuildingOffice2Icon,
  CheckBadgeIcon,
  CheckIcon,
  CircleStackIcon,
  CloudIcon,
  CodeBracketIcon,
  CommandLineIcon,
  CubeIcon,
  CubeTransparentIcon,
  DocumentMagnifyingGlassIcon,
  EnvelopeIcon,
  FingerPrintIcon,
  KeyIcon,
  LifebuoyIcon,
  LockClosedIcon,
  PaintBrushIcon,
  ServerStackIcon,
  ShieldCheckIcon,
  SignalSlashIcon,
  UserGroupIcon,
  WrenchScrewdriverIcon,
} from '@heroicons/react/24/outline'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Enterprise & On-Premise',
  description:
    'Run GatherHub on your own infrastructure. PDPA compliant, SOC 2 aligned, with SSO, audit logging, and dedicated implementation support.',
}

function Hero() {
  return (
    <div className="bg-white dark:bg-gray-950">
      <Container>
        <Navbar />
        <div className="pb-16 pt-8">
          <Subheading>Enterprise</Subheading>
          <Heading as="h1" className="mt-2 max-w-4xl">
            Run GatherHub on your own infrastructure.
          </Heading>
          <p className="mt-4 max-w-2xl text-base text-gray-600 dark:text-gray-400">
            A single-tenant deployment of GatherHub for organisations that
            require full data ownership, PDPA compliance, and integration with
            internal systems.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button href="/contact">Contact sales</Button>
            <Button variant="secondary" href="#deployment">
              View deployment options
            </Button>
          </div>
        </div>
      </Container>
    </div>
  )
}

function WhyOnPremise() {
  const reasons = [
    {
      name: 'Data residency',
      description:
        'Keep all event, participant, and payment data inside your organisation or jurisdiction.',
      icon: BuildingOffice2Icon,
    },
    {
      name: 'PDPA compliance',
      description:
        'Meet Personal Data Protection Act requirements with data stored on infrastructure you control.',
      icon: ShieldCheckIcon,
    },
    {
      name: 'Full data ownership',
      description:
        'Direct access to the database and storage. Export, audit, or migrate at any time.',
      icon: KeyIcon,
    },
    {
      name: 'Single sign-on',
      description:
        'Integrate with your existing identity provider via SAML 2.0, OIDC, or LDAP / Active Directory.',
      icon: FingerPrintIcon,
    },
    {
      name: 'Custom integrations',
      description:
        'Connect to internal HR systems, CRMs, finance platforms, and ticketing tools through the API.',
      icon: CodeBracketIcon,
    },
    {
      name: 'Dedicated performance',
      description:
        'Resources scoped to your organisation alone. No noisy neighbours, no shared rate limits.',
      icon: BoltIcon,
    },
  ]

  return (
    <div className="bg-gray-50 py-24 dark:bg-gray-900">
      <Container>
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <Subheading>Why on-premise</Subheading>
            <Heading as="h2" className="mt-2">
              Built for organisations with strict requirements.
            </Heading>
            <p className="mt-4 text-base text-gray-600 dark:text-gray-400">
              When the SaaS edition isn&apos;t a fit, the on-premise edition
              keeps everything inside your perimeter.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {reasons.map((reason) => (
              <div
                key={reason.name}
                className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800"
              >
                <reason.icon className="size-8 text-blue-600 dark:text-blue-400" />
                <h3 className="mt-4 text-base font-semibold text-gray-950 dark:text-white">
                  {reason.name}
                </h3>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  )
}

function DeploymentOptions() {
  const options = [
    {
      name: 'Docker Compose',
      description:
        'Single-host install for organisations up to roughly 5,000 users. One install script, one environment file.',
      best: 'Best for: smaller deployments, pilots, dedicated VMs.',
      icon: CubeIcon,
    },
    {
      name: 'Kubernetes (Helm)',
      description:
        'High-availability Helm chart for multi-node clusters. Horizontal scaling, rolling updates, pod-level isolation.',
      best: 'Best for: large deployments, existing K8s platforms.',
      icon: CubeTransparentIcon,
    },
    {
      name: 'Private cloud',
      description:
        'We operate the same artifact inside a dedicated VPC on your preferred cloud provider. Same isolation, less operational overhead.',
      best: 'Best for: organisations without an internal platform team.',
      icon: CloudIcon,
    },
  ]

  return (
    <Container className="py-24">
      <div id="deployment" className="mx-auto max-w-5xl scroll-mt-24">
        <div className="text-center">
          <Subheading>Deployment options</Subheading>
          <Heading as="h2" className="mt-2">
            Choose how GatherHub runs.
          </Heading>
          <p className="mt-4 text-base text-gray-600 dark:text-gray-400">
            One product, three deployment models. Pick the option that matches
            your platform team&apos;s operating model.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {options.map((option) => (
            <div
              key={option.name}
              className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800"
            >
              <option.icon className="size-8 text-blue-600 dark:text-blue-400" />
              <h3 className="mt-4 text-base font-semibold text-gray-950 dark:text-white">
                {option.name}
              </h3>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                {option.description}
              </p>
              <p className="mt-3 text-sm font-medium text-gray-950 dark:text-white">
                {option.best}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Container>
  )
}

function SecurityCompliance() {
  const items = [
    {
      name: 'PDPA compliant',
      description:
        'Designed to meet Malaysian Personal Data Protection Act 2010 requirements. Data subject rights, consent records, retention controls.',
      icon: ShieldCheckIcon,
    },
    {
      name: 'SOC 2 aligned controls',
      description:
        'Engineering and operational controls aligned to SOC 2 Trust Services Criteria for security, availability, and confidentiality.',
      icon: CheckBadgeIcon,
    },
    {
      name: 'Encryption everywhere',
      description:
        'TLS 1.2+ in transit. AES-256 encryption at rest for database, object storage, and backups.',
      icon: LockClosedIcon,
    },
    {
      name: 'Comprehensive audit logging',
      description:
        'Every administrative action recorded with actor, timestamp, source IP, and before/after state. Exportable to your SIEM.',
      icon: DocumentMagnifyingGlassIcon,
    },
    {
      name: 'Single sign-on',
      description:
        'SAML 2.0, OpenID Connect, and LDAP / Active Directory. Just-in-time provisioning and group-to-role mapping.',
      icon: FingerPrintIcon,
    },
    {
      name: 'Air-gapped install',
      description:
        'Offline image bundle for fully disconnected environments. No outbound calls required after activation.',
      icon: SignalSlashIcon,
    },
    {
      name: 'Role-based access',
      description:
        'Granular permissions across event, organisation, and platform scopes. Custom roles supported.',
      icon: UserGroupIcon,
    },
    {
      name: 'Automated backups',
      description:
        'Scheduled database and object storage snapshots to your S3-compatible target or NAS. Point-in-time restore.',
      icon: ArchiveBoxIcon,
    },
  ]

  return (
    <div className="bg-gray-50 py-24 dark:bg-gray-900">
      <Container>
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <Subheading>Security & compliance</Subheading>
            <Heading as="h2" className="mt-2">
              Engineered for regulated environments.
            </Heading>
            <p className="mt-4 text-base text-gray-600 dark:text-gray-400">
              PDPA-compliant by design and aligned to SOC 2 controls so your
              security review goes faster.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {items.map((item) => (
              <div
                key={item.name}
                className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800"
              >
                <item.icon className="size-8 text-blue-600 dark:text-blue-400" />
                <h3 className="mt-4 text-base font-semibold text-gray-950 dark:text-white">
                  {item.name}
                </h3>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  )
}

function SystemRequirements() {
  const stack = [
    {
      name: 'Operating system',
      detail: 'Ubuntu 22.04 LTS, RHEL 9, Rocky Linux 9, or Debian 12',
      icon: ServerStackIcon,
    },
    {
      name: 'Application runtime',
      detail: 'Laravel 11 + Livewire 3 + Alpine.js, served by PHP-FPM 8.3+',
      icon: CommandLineIcon,
    },
    {
      name: 'Database',
      detail: 'PostgreSQL 15+ (recommended) or MySQL 8.0+',
      icon: CircleStackIcon,
    },
    {
      name: 'Cache & queue',
      detail: 'Redis 7+ for sessions, cache, and background jobs',
      icon: BoltIcon,
    },
    {
      name: 'Object storage',
      detail: 'MinIO or any S3-compatible store for kits, certificates, exports',
      icon: ArchiveBoxIcon,
    },
    {
      name: 'SMTP relay',
      detail: 'Customer-provided outbound mail server with TLS',
      icon: EnvelopeIcon,
    },
  ]

  const tiers = [
    {
      name: 'Small',
      users: 'Up to 2,000 users',
      cpu: '4 vCPU',
      ram: '8 GB',
      disk: '100 GB SSD',
    },
    {
      name: 'Medium',
      users: 'Up to 10,000 users',
      cpu: '8 vCPU',
      ram: '16 GB',
      disk: '250 GB SSD',
    },
    {
      name: 'Large',
      users: '10,000+ users',
      cpu: '16+ vCPU',
      ram: '32+ GB',
      disk: '500 GB+ SSD',
    },
  ]

  return (
    <Container className="py-24">
      <div className="mx-auto max-w-5xl">
        <div className="text-center">
          <Subheading>System requirements</Subheading>
          <Heading as="h2" className="mt-2">
            Standard Linux infrastructure.
          </Heading>
          <p className="mt-4 text-base text-gray-600 dark:text-gray-400">
            GatherHub runs on the same components your platform team already
            knows. No exotic dependencies.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {stack.map((item) => (
            <div
              key={item.name}
              className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800"
            >
              <item.icon className="size-8 text-blue-600 dark:text-blue-400" />
              <h3 className="mt-4 text-base font-semibold text-gray-950 dark:text-white">
                {item.name}
              </h3>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                {item.detail}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-700">
          <table className="w-full text-left text-sm">
            <thead className="bg-gray-50 dark:bg-gray-800">
              <tr>
                <th className="px-6 py-4 font-semibold text-gray-950 dark:text-white">
                  Tier
                </th>
                <th className="px-6 py-4 font-semibold text-gray-950 dark:text-white">
                  Capacity
                </th>
                <th className="px-6 py-4 font-semibold text-gray-950 dark:text-white">
                  CPU
                </th>
                <th className="px-6 py-4 font-semibold text-gray-950 dark:text-white">
                  Memory
                </th>
                <th className="px-6 py-4 font-semibold text-gray-950 dark:text-white">
                  Storage
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white dark:divide-gray-700 dark:bg-gray-900">
              {tiers.map((tier) => (
                <tr key={tier.name}>
                  <td className="px-6 py-4 font-medium text-gray-950 dark:text-white">
                    {tier.name}
                  </td>
                  <td className="px-6 py-4 text-gray-600 dark:text-gray-400">
                    {tier.users}
                  </td>
                  <td className="px-6 py-4 text-gray-600 dark:text-gray-400">
                    {tier.cpu}
                  </td>
                  <td className="px-6 py-4 text-gray-600 dark:text-gray-400">
                    {tier.ram}
                  </td>
                  <td className="px-6 py-4 text-gray-600 dark:text-gray-400">
                    {tier.disk}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mt-6 text-center text-xs text-gray-500 dark:text-gray-400">
          Sizing assumes a single all-in-one host. High-availability and
          Kubernetes deployments use distributed resources across nodes.
        </p>
      </div>
    </Container>
  )
}

function WhatsIncluded() {
  const items = [
    {
      name: 'Dedicated implementation',
      description:
        'A delivery engineer guides install, SSO setup, data migration, and go-live across a 4-8 week project plan.',
      icon: WrenchScrewdriverIcon,
    },
    {
      name: 'Priority support with SLA',
      description:
        'Named support channel with response-time guarantees and an escalation path to engineering.',
      icon: LifebuoyIcon,
    },
    {
      name: 'Custom branding',
      description:
        'Your logo, colours, fonts, and email templates applied across every participant touchpoint.',
      icon: PaintBrushIcon,
    },
    {
      name: 'Training & onboarding',
      description:
        'Live sessions for organisers, crew, and platform administrators. Recordings and runbooks included.',
      icon: AcademicCapIcon,
    },
    {
      name: 'Custom development',
      description:
        'Optional engineering hours for bespoke integrations, reports, or workflows specific to your operation.',
      icon: CodeBracketIcon,
    },
    {
      name: 'Quarterly updates',
      description:
        'Tested releases with migration guides and an upgrade window. Security patches delivered out-of-band.',
      icon: ArrowPathIcon,
    },
  ]

  return (
    <div className="bg-gray-50 py-24 dark:bg-gray-900">
      <Container>
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <Subheading>What&apos;s included</Subheading>
            <Heading as="h2" className="mt-2">
              More than software.
            </Heading>
            <p className="mt-4 text-base text-gray-600 dark:text-gray-400">
              Every Enterprise contract includes the people, process, and
              tooling needed to run GatherHub successfully.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((item) => (
              <div
                key={item.name}
                className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800"
              >
                <item.icon className="size-8 text-blue-600 dark:text-blue-400" />
                <h3 className="mt-4 text-base font-semibold text-gray-950 dark:text-white">
                  {item.name}
                </h3>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  )
}

function ComparisonTable() {
  const rows = [
    { feature: 'Hosting', saas: 'Multi-tenant (managed)', enterprise: 'Single-tenant (your infrastructure)' },
    { feature: 'Data residency', saas: 'GatherHub region', enterprise: 'Your choice' },
    { feature: 'SSO (SAML/OIDC/LDAP)', saas: 'Not available', enterprise: 'Included' },
    { feature: 'Audit log export', saas: 'Limited', enterprise: 'Full export to SIEM' },
    { feature: 'Custom branding', saas: 'Coming soon', enterprise: 'Included' },
    { feature: 'Air-gapped install', saas: 'Not applicable', enterprise: 'Supported' },
    { feature: 'Implementation support', saas: 'Self-serve', enterprise: 'Dedicated delivery engineer' },
    { feature: 'Support SLA', saas: 'Email support', enterprise: 'Contracted SLA with escalation' },
    { feature: 'Pricing', saas: 'Free + transaction fees', enterprise: 'Annual licence + setup' },
  ]

  return (
    <Container className="py-24">
      <div className="mx-auto max-w-5xl">
        <div className="text-center">
          <Subheading>SaaS vs Enterprise</Subheading>
          <Heading as="h2" className="mt-2">
            Pick the right edition.
          </Heading>
        </div>

        <div className="mt-12 overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-700">
          <table className="w-full text-left text-sm">
            <thead className="bg-gray-50 dark:bg-gray-800">
              <tr>
                <th className="px-6 py-4 font-semibold text-gray-950 dark:text-white">
                  Capability
                </th>
                <th className="px-6 py-4 font-semibold text-gray-950 dark:text-white">
                  SaaS (Free)
                </th>
                <th className="px-6 py-4 font-semibold text-gray-950 dark:text-white">
                  Enterprise (On-Premise)
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white dark:divide-gray-700 dark:bg-gray-900">
              {rows.map((row) => (
                <tr key={row.feature}>
                  <td className="px-6 py-4 font-medium text-gray-950 dark:text-white">
                    {row.feature}
                  </td>
                  <td className="px-6 py-4 text-gray-600 dark:text-gray-400">
                    {row.saas}
                  </td>
                  <td className="px-6 py-4 text-gray-600 dark:text-gray-400">
                    {row.enterprise}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Container>
  )
}

function FAQ() {
  const faqs = [
    {
      question: 'Can GatherHub run in a fully air-gapped environment?',
      answer:
        'Yes. We provide an offline image bundle and an offline activation key for environments with no outbound internet access. Updates are delivered as signed bundles your team applies on a schedule.',
    },
    {
      question: 'How are updates and security patches handled?',
      answer:
        'Feature updates ship quarterly with migration guides and a tested upgrade procedure. Security patches are released out-of-band as needed and can be applied without a feature upgrade.',
    },
    {
      question: 'What does the licence model look like?',
      answer:
        'Enterprise is sold as an annual subscription per instance. The licence covers unlimited events, unlimited participants, and all add-ons. There are no per-user or per-event fees.',
    },
    {
      question: 'Can we integrate with our existing identity provider?',
      answer:
        'Yes. SAML 2.0, OpenID Connect, and LDAP / Active Directory are supported with just-in-time user provisioning and group-to-role mapping.',
    },
    {
      question: 'How long does implementation take?',
      answer:
        'Most deployments go live in 4-8 weeks depending on SSO complexity, data migration scope, and integration requirements. Your delivery engineer manages the project plan end-to-end.',
    },
    {
      question: 'Can we migrate from the SaaS edition?',
      answer:
        'Yes. We provide a documented migration path that exports your events, participants, certificates, and historical attendance data into the on-premise instance.',
    },
    {
      question: 'How is payment handled on-premise?',
      answer:
        'You connect GatherHub to your existing payment gateway (Stripe, Billplz, or other supported providers). Funds settle directly to your merchant account; GatherHub never touches the money.',
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
                <p className="mt-3 text-sm/6 text-gray-600 dark:text-gray-400">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  )
}

function CTA() {
  const highlights = [
    'PDPA compliant',
    'SOC 2 aligned controls',
    'SSO included',
    'Dedicated delivery engineer',
  ]

  return (
    <Container className="pb-24 pt-24">
      <div className="rounded-3xl bg-gray-950 px-6 py-16 text-center sm:px-16">
        <Heading as="h2" dark>
          Let&apos;s talk about your deployment.
        </Heading>
        <p className="mx-auto mt-6 max-w-xl text-base text-gray-300">
          Tell us about your organisation, your compliance requirements, and
          your timeline. We&apos;ll respond with a tailored proposal.
        </p>

        <ul className="mx-auto mt-8 flex max-w-2xl flex-wrap justify-center gap-x-6 gap-y-3">
          {highlights.map((highlight) => (
            <li
              key={highlight}
              className="flex items-center gap-2 text-sm text-gray-300"
            >
              <CheckIcon className="size-5 text-blue-400" />
              {highlight}
            </li>
          ))}
        </ul>

        <div className="mt-8 flex justify-center gap-4">
          <Button href="/contact">Contact sales</Button>
          <Button variant="secondary" href="/pricing">
            View SaaS pricing
          </Button>
        </div>
      </div>
    </Container>
  )
}

export default function Enterprise() {
  return (
    <main className="overflow-hidden bg-white dark:bg-gray-950">
      <Hero />
      <WhyOnPremise />
      <DeploymentOptions />
      <SecurityCompliance />
      <SystemRequirements />
      <WhatsIncluded />
      <ComparisonTable />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  )
}
