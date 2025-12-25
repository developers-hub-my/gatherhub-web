import type { Metadata } from 'next'
import HomeClient from './home-client'

export const metadata: Metadata = {
  description:
    'The operational hub for events and activities — from registration and payment to attendance validation and participation proof.',
}

export default function Home() {
  return <HomeClient />
}
