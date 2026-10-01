import { JsonLd } from '@/components/json-ld'
import type { Metadata } from 'next'
import HomeClient from './home-client'

export const metadata: Metadata = {
  title: 'Gather Hub - Event Management, From Sign-up to Wrap-up',
  description:
    'Plan, sell, run and wrap up your events in one place — registration, FPX and DuitNow payments, QR check-in and certificates. Free to start.',
}

const siteUrl = 'https://gatherhub.app'

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Gather Hub',
  url: siteUrl,
  logo: `${siteUrl}/apple-icon.png`,
  description:
    'Event management platform for registration, payments, QR check-in and certificates.',
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
