import { JsonLd } from '@/components/json-ld'
import type { Metadata } from 'next'
import HomeClient from './home-client'

export const metadata: Metadata = {
  title: 'Gather Hub - Event Platform That Proves Participation',
  description:
    'Run events with clarity and proof. QR check-in, verifiable certificates, and attendance tracking — all free to start.',
}

const siteUrl = 'https://gatherhub.app'

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Gather Hub',
  url: siteUrl,
  logo: `${siteUrl}/apple-icon.png`,
  description:
    'Event management platform with QR check-in, verifiable certificates, and attendance tracking.',
}

const webSiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Gather Hub',
  url: siteUrl,
}

export default function Home() {
  return (
    <>
      <JsonLd schema={organizationSchema} />
      <JsonLd schema={webSiteSchema} />
      <HomeClient />
    </>
  )
}
