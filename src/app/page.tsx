import type { Metadata } from 'next'
import HomeClient from './home-client'

export const metadata: Metadata = {
  title:
    'Gather Hub - Run Activities with Clarity and Proof | Event Management Platform',
  description:
    'Run activities with clarity and proof. Gather Hub is the event management platform that proves participation — from registration and payment to QR check-in, attendance validation, and verifiable certificates.',
}

export default function Home() {
  return <HomeClient />
}
