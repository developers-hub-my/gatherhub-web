'use client'

import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Heading } from '@/components/text'
import { useActionState, useEffect, useRef } from 'react'
import { submitContactForm, type ContactFormState } from './actions'

export function ContactForm() {
  const [state, formAction, isPending] = useActionState<
    ContactFormState,
    FormData
  >(submitContactForm, null)
  const formRef = useRef<HTMLFormElement>(null)

  useEffect(() => {
    if (state?.success) {
      formRef.current?.reset()
    }
  }, [state])

  return (
    <div className="bg-gray-50 py-24 dark:bg-gray-900">
      <Container>
        <div className="mx-auto max-w-2xl">
          <div className="text-center">
            <Heading as="h2">Send us a message</Heading>
            <p className="mt-4 text-base text-gray-600 dark:text-gray-400">
              Fill out the form below and we&apos;ll get back to you as soon as
              possible.
            </p>
          </div>

          {state && (
            <div
              className={`mt-8 rounded-lg px-4 py-3 text-sm font-medium ${
                state.success
                  ? 'bg-green-50 text-green-800 dark:bg-green-900/30 dark:text-green-300'
                  : 'bg-red-50 text-red-800 dark:bg-red-900/30 dark:text-red-300'
              }`}
            >
              {state.message}
            </div>
          )}

          <form ref={formRef} action={formAction} className="mt-12 space-y-6">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="first-name"
                  className="block text-sm font-medium text-gray-900 dark:text-gray-200"
                >
                  First name
                </label>
                <input
                  type="text"
                  id="first-name"
                  name="first-name"
                  disabled={isPending}
                  className="mt-2 block w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50 dark:border-gray-600 dark:bg-gray-800 dark:text-white"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="last-name"
                  className="block text-sm font-medium text-gray-900 dark:text-gray-200"
                >
                  Last name
                </label>
                <input
                  type="text"
                  id="last-name"
                  name="last-name"
                  disabled={isPending}
                  className="mt-2 block w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50 dark:border-gray-600 dark:bg-gray-800 dark:text-white"
                  required
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-900 dark:text-gray-200"
              >
                Email address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                disabled={isPending}
                className="mt-2 block w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50 dark:border-gray-600 dark:bg-gray-800 dark:text-white"
                required
              />
            </div>

            <div>
              <label
                htmlFor="organisation"
                className="block text-sm font-medium text-gray-900 dark:text-gray-200"
              >
                Organisation
              </label>
              <input
                type="text"
                id="organisation"
                name="organisation"
                disabled={isPending}
                className="mt-2 block w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50 dark:border-gray-600 dark:bg-gray-800 dark:text-white"
              />
            </div>

            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-medium text-gray-900 dark:text-gray-200"
              >
                Subject
              </label>
              <select
                id="subject"
                name="subject"
                disabled={isPending}
                className="mt-2 block w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50 dark:border-gray-600 dark:bg-gray-800 dark:text-white"
                required
              >
                <option value="">Select a topic</option>
                <option value="general">General inquiry</option>
                <option value="support">Technical support</option>
                <option value="sales">Sales and pricing</option>
                <option value="partnership">Partnership opportunities</option>
                <option value="feedback">Feedback and suggestions</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-900 dark:text-gray-200"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                disabled={isPending}
                className="mt-2 block w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50 dark:border-gray-600 dark:bg-gray-800 dark:text-white"
                required
              />
            </div>

            <div className="flex items-start">
              <input
                id="privacy-policy"
                name="privacy-policy"
                type="checkbox"
                disabled={isPending}
                className="mt-1 size-4 rounded border-gray-300 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600"
                required
              />
              <label
                htmlFor="privacy-policy"
                className="ml-3 text-sm text-gray-600 dark:text-gray-400"
              >
                I agree to the{' '}
                <a
                  href="/privacy"
                  className="font-medium text-blue-600 hover:text-blue-500 dark:text-blue-400"
                >
                  Privacy Policy
                </a>{' '}
                and consent to Gather Hub contacting me about this inquiry.
              </label>
            </div>

            <div>
              <Button type="submit" disabled={isPending} className="w-full">
                {isPending ? 'Sending...' : 'Send message'}
              </Button>
            </div>
          </form>
        </div>
      </Container>
    </div>
  )
}
