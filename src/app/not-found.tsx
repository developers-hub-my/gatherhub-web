import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Navbar } from '@/components/navbar'
import { Heading } from '@/components/text'
import {
  HomeIcon,
  MagnifyingGlassIcon,
  QuestionMarkCircleIcon,
  EnvelopeIcon,
} from '@heroicons/react/24/outline'
import Link from 'next/link'

export default function NotFound() {
  const quickLinks = [
    {
      name: 'Home',
      href: '/',
      icon: HomeIcon,
      description: 'Return to the homepage',
    },
    {
      name: 'Features',
      href: '/features',
      icon: MagnifyingGlassIcon,
      description: 'Explore what Gather Hub can do',
    },
    {
      name: 'Help Center',
      href: '/help',
      icon: QuestionMarkCircleIcon,
      description: 'Find answers to common questions',
    },
    {
      name: 'Contact',
      href: '/contact',
      icon: EnvelopeIcon,
      description: 'Get in touch with our team',
    },
  ]

  return (
    <main className="overflow-hidden">
      <div className="min-h-screen bg-white">
        <Container>
          <Navbar />
          <div className="flex min-h-[calc(100vh-200px)] flex-col items-center justify-center py-16 text-center">
            <div className="mb-8 flex size-20 items-center justify-center rounded-full bg-blue-50">
              <span className="text-4xl font-bold text-blue-600">404</span>
            </div>
            <Heading as="h1" className="mt-2">
              Page not found
            </Heading>
            <p className="mt-6 max-w-lg text-lg text-gray-600">
              The page you&apos;re looking for doesn&apos;t exist or has been
              moved.
            </p>

            <div className="mt-12 grid w-full max-w-4xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {quickLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="group flex flex-col items-center rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:border-blue-200 hover:shadow-md"
                >
                  <div className="flex size-12 items-center justify-center rounded-xl bg-blue-50 transition-colors group-hover:bg-blue-100">
                    <link.icon className="size-6 text-blue-600" />
                  </div>
                  <h3 className="mt-4 text-base font-semibold text-gray-950">
                    {link.name}
                  </h3>
                  <p className="mt-2 text-sm/6 text-center text-gray-600">
                    {link.description}
                  </p>
                </Link>
              ))}
            </div>

            <div className="mt-12">
              <Button href="/">Back to home</Button>
            </div>
          </div>
        </Container>
      </div>
    </main>
  )
}
