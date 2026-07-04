import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Heading, Subheading } from '@/components/text'
import { config } from '@/lib/config'
import { featureGroups, plans, type CellValue, type PlanKey } from '@/lib/plans'
import { CheckIcon, MinusIcon } from '@heroicons/react/16/solid'
import { clsx } from 'clsx'
import { Fragment } from 'react'

const planKeys: PlanKey[] = ['free', 'pro', 'business']

function ctaHref(key: PlanKey) {
  return key === 'free'
    ? `${config.appUrl}/register`
    : `${config.appUrl}/register?plan=${key}`
}

function Cell({ value }: { value: CellValue }) {
  if (value === true) {
    return (
      <>
        <CheckIcon className="mx-auto size-5 text-blue-600 dark:text-blue-400" />
        <span className="sr-only">Included</span>
      </>
    )
  }
  if (value === false) {
    return (
      <>
        <MinusIcon className="mx-auto size-5 text-gray-300 dark:text-gray-600" />
        <span className="sr-only">Not included</span>
      </>
    )
  }
  return (
    <span className="text-sm font-medium text-gray-950 dark:text-white">
      {value}
    </span>
  )
}

export function PlanComparison() {
  return (
    <div className="bg-white py-24 dark:bg-gray-950">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <Subheading>Compare plans</Subheading>
          <Heading as="h2" className="mt-2">
            One plan for every stage
          </Heading>
          <p className="mt-4 text-base text-gray-600 dark:text-gray-400">
            Start free and upgrade as you grow. Paid plans add more events, a
            lower platform fee, included email credits, and advanced features.
          </p>
        </div>

        {/* Plan header cards */}
        <div className="mx-auto mt-14 grid max-w-5xl gap-6 sm:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.key}
              className={clsx(
                'rounded-3xl border bg-white p-6 shadow-sm dark:bg-gray-900',
                plan.featured
                  ? 'border-blue-600 ring-1 ring-blue-600 dark:border-blue-500 dark:ring-blue-500'
                  : 'border-gray-200 dark:border-gray-700',
              )}
            >
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-950 dark:text-white">
                  {plan.name}
                </h3>
                {plan.featured && (
                  <span className="rounded-full bg-blue-600 px-2.5 py-0.5 text-xs font-medium text-white">
                    Most popular
                  </span>
                )}
              </div>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-4xl font-semibold text-gray-950 dark:text-white">
                  {plan.price}
                </span>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {plan.cadence}
                </span>
              </div>
              <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                {plan.fee}
              </p>
              <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
                {plan.tagline}
              </p>
              <div className="mt-6">
                <Button
                  href={ctaHref(plan.key)}
                  variant={plan.featured ? 'primary' : 'secondary'}
                  className="w-full"
                >
                  {plan.cta}
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Feature matrix */}
        <div className="mx-auto mt-16 max-w-5xl overflow-x-auto">
          <table className="w-full min-w-[640px] border-collapse text-left">
            <thead>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <th className="py-4 pr-4 text-sm font-semibold text-gray-950 dark:text-white">
                  Features
                </th>
                {plans.map((plan) => (
                  <th
                    key={plan.key}
                    className={clsx(
                      'w-32 px-4 py-4 text-center text-sm font-semibold',
                      plan.featured
                        ? 'text-blue-600 dark:text-blue-400'
                        : 'text-gray-950 dark:text-white',
                    )}
                  >
                    {plan.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {featureGroups.map((group) => (
                <Fragment key={group.title}>
                  <tr className="bg-gray-50 dark:bg-gray-900">
                    <th
                      colSpan={4}
                      className="px-1 py-3 text-xs font-semibold tracking-wide text-gray-500 uppercase dark:text-gray-400"
                    >
                      {group.title}
                    </th>
                  </tr>
                  {group.rows.map((row) => (
                    <tr
                      key={group.title + row.name}
                      className="border-b border-gray-100 dark:border-gray-800"
                    >
                      <td className="py-3 pr-4 text-sm text-gray-700 dark:text-gray-300">
                        {row.name}
                        {row.note && (
                          <span className="ml-1 text-xs text-gray-400">
                            {row.note}
                          </span>
                        )}
                      </td>
                      {planKeys.map((key) => (
                        <td
                          key={key}
                          className="px-4 py-3 text-center align-middle"
                        >
                          <Cell value={row.values[key]} />
                        </td>
                      ))}
                    </tr>
                  ))}
                </Fragment>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mx-auto mt-8 max-w-2xl text-center text-xs text-gray-500 dark:text-gray-400">
          Free features are included on every plan. The platform fee applies only
          to paid tickets — free events never incur a fee.
        </p>
      </Container>
    </div>
  )
}
