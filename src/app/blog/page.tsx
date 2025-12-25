import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { Navbar } from '@/components/navbar'
import { Heading, Subheading } from '@/components/text'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Stay informed with product updates, best practices, and insights on running better events and activities.',
}

export default function Blog() {
  return (
    <main className="overflow-hidden">
      <div className="bg-white">
        <Container>
          <Navbar />
          <div className="pb-16 pt-8">
            <Subheading>Blog</Subheading>
            <Heading as="h1" className="mt-2">
              Coming soon.
            </Heading>
            <p className="mt-4 text-base text-gray-600 max-w-2xl">
              We&apos;re working on bringing you helpful content about running
              better events and activities. Check back soon for product updates,
              best practices, and insights.
            </p>
          </div>
        </Container>
      </div>
      <Footer />
    </main>
  )
}
