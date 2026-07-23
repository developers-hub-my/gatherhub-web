import Script from 'next/script'

import { config } from '@/lib/config'

/**
 * Google Analytics (gtag.js). Renders nothing unless NEXT_PUBLIC_GA_ID is set
 * at build time — no key, no tag.
 */
export function GoogleAnalytics() {
  if (!config.gaId) {
    return null
  }

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${config.gaId}`}
        strategy="afterInteractive"
      />
      <Script id="ga-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${config.gaId}');
        `}
      </Script>
    </>
  )
}
