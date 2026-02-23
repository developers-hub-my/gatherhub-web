import type { Metadata } from 'next'
import HomeClient from './home-client'

export const metadata: Metadata = {
  title: 'Gather Hub - Event Platform That Proves Participation',
  description:
    'Run events with clarity and proof. QR check-in, verifiable certificates, and attendance tracking — all free to start.',
}

export default function Home() {
  return <HomeClient />
}
