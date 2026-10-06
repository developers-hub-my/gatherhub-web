'use client'

import { readAttribution } from '@/components/attribution-capture'
import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Heading } from '@/components/text'
import {
  startTransition,
  useActionState,
  useEffect,
  useRef,
  type FormEvent,
} from 'react'
import { submitContactForm, type ContactFormState } from './actions'

function FieldError({ id, errors }: { id: string; errors?: string[] }) {
  if (!errors?.length) return null
  return (
    <p id={id} className="mt-2 text-sm text-red-600 dark:text-red-400">
      {errors.join(' ')}
    </p>
  )
}

export function ContactForm() {
  const [state, formAction, isPending] = useActionState<
    ContactFormState,
    FormData
  >(submitContactForm, null)
  const formRef = useRef<HTMLFormElement>(null)

  const errors = state?.errors ?? {}

  useEffect(() => {
    if (state?.success) {
      formRef.current?.reset()
    }
  }, [state])

  // onSubmit instead of action={...}: React resets a form after its action
  // runs, which would wipe the visitor's input on a failed submit.
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    for (const [key, value] of Object.entries(readAttribution())) {
      if (value) formData.set(key, value)
    }
    startTransition(() => formAction(formData))
  }

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
              role={state.success ? 'status' : 'alert'}
              className={`mt-8 rounded-lg px-4 py-3 text-sm font-medium ${
                state.success
                  ? 'bg-green-50 text-green-800 dark:bg-green-900/30 dark:text-green-300'
                  : 'bg-red-50 text-red-800 dark:bg-red-900/30 dark:text-red-300'
              }`}
            >
              {state.message}
            </div>
          )}

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-12 space-y-6"
          >
            {/* Honeypot — invisible to people; bots fill it and are dropped server-side */}
            <div aria-hidden="true" className="absolute -left-[9999px]">
              <label htmlFor="website">Website</label>
              <input
                type="text"
                id="website"
                name="website"
                tabIndex={-1}
                autoComplete="off"
              />
            </div>

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
                  autoComplete="given-name"
                  aria-describedby={errors.name ? 'name-error' : undefined}
                  disabled={isPending}
                  className="mt-2 block w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none disabled:opacity-50 dark:border-gray-600 dark:bg-gray-800 dark:text-white"
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
                  autoComplete="family-name"
                  aria-describedby={errors.name ? 'name-error' : undefined}
                  disabled={isPending}
                  className="mt-2 block w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none disabled:opacity-50 dark:border-gray-600 dark:bg-gray-800 dark:text-white"
                  required
                />
              </div>
            </div>
            <FieldError id="name-error" errors={errors.name} />

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
                autoComplete="email"
                maxLength={255}
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? 'email-error' : undefined}
                disabled={isPending}
                className="mt-2 block w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none disabled:opacity-50 dark:border-gray-600 dark:bg-gray-800 dark:text-white"
                required
              />
              <FieldError id="email-error" errors={errors.email} />
            </div>

            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-900 dark:text-gray-200"
              >
                Phone{' '}
                <span className="font-normal text-gray-500">(optional)</span>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                autoComplete="tel"
                placeholder="+60123456789"
                maxLength={50}
                aria-invalid={!!errors.phone}
                aria-describedby={errors.phone ? 'phone-error' : undefined}
                disabled={isPending}
                className="mt-2 block w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none disabled:opacity-50 dark:border-gray-600 dark:bg-gray-800 dark:text-white"
              />
              <FieldError id="phone-error" errors={errors.phone} />
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
                autoComplete="organization"
                maxLength={255}
                aria-invalid={!!errors.company}
                aria-describedby={errors.company ? 'company-error' : undefined}
                disabled={isPending}
                className="mt-2 block w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none disabled:opacity-50 dark:border-gray-600 dark:bg-gray-800 dark:text-white"
              />
              <FieldError id="company-error" errors={errors.company} />
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
                className="mt-2 block w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none disabled:opacity-50 dark:border-gray-600 dark:bg-gray-800 dark:text-white"
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
                maxLength={1900}
                aria-invalid={!!errors.message}
                aria-describedby={errors.message ? 'message-error' : undefined}
                disabled={isPending}
                className="mt-2 block w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none disabled:opacity-50 dark:border-gray-600 dark:bg-gray-800 dark:text-white"
                required
              />
              <FieldError id="message-error" errors={errors.message} />
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
                and consent to GatherHub contacting me about this inquiry.
              </label>
            </div>

            <p className="text-xs/5 text-gray-500 dark:text-gray-400">
              We use your details only to reply to this enquiry and follow up
              about GatherHub. They are stored in our customer records (and
              merged with any earlier enquiry from the same email or phone),
              never sold, and you can ask us to update or delete them at any
              time via support@gatherhub.app.
            </p>

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
