export const config = {
  appUrl: process.env.NEXT_PUBLIC_APP_URL || 'https://my.gatherhub.app',
  docsUrl: process.env.NEXT_PUBLIC_DOCS_URL || 'https://docs.gatherhub.app',
  gaId: process.env.NEXT_PUBLIC_GA_ID || '',
  // g8crm "GatherHub (API)" channel. The token only creates leads, so it is safe to default here.
  crmIntakeUrl:
    process.env.CRM_INTAKE_URL ||
    'https://crm.devhub.my/api/intake/RYymZttVqP5qG8wONkmQPBfQY2ge3imKyHDrqBJi2I9XS23WAuJlZhfpF6URn56W9JQsFWd8KJrjxezAeoufvWAheqfrcKVLZ5f3MxjsAZqQT6ZVcEwHGB0wd6T9RzbT',
} as const
