import { GoogleAnalytics } from '@/components/google-analytics'
import { ThemeProvider } from '@/components/theme-provider'
import '@/styles/tailwind.css'
import type { Metadata } from 'next'
import { JetBrains_Mono } from 'next/font/google'

const mono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
})

const siteUrl = 'https://gatherhub.app'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    template: '%s - Gather Hub',
    default: 'Gather Hub - Event Management, From Sign-up to Wrap-up',
  },
  description:
    'Plan, sell, run and wrap up your events in one place — registration, FPX and DuitNow payments, QR check-in and certificates. Free to start.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Gather Hub',
    title: 'Gather Hub - Event Management, From Sign-up to Wrap-up',
    description:
      'Plan, sell, run and wrap up your events in one place — registration, FPX and DuitNow payments, QR check-in and certificates. Free to start.',
    url: siteUrl,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gather Hub - Event Management, From Sign-up to Wrap-up',
    description:
      'Plan, sell, run and wrap up your events in one place — registration, FPX and DuitNow payments, QR check-in and certificates. Free to start.',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={mono.variable} suppressHydrationWarning>
      <head>
        {/* Preload critical font weights for faster text rendering */}
        <link
          rel="preload"
          href="/fonts/switzer-400.woff2"
          as="font"
          type="font/woff2"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/switzer-600.woff2"
          as="font"
          type="font/woff2"
          crossOrigin=""
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  if (theme === 'dark' || (!theme && prefersDark)) {
                    document.documentElement.classList.add('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="bg-white text-gray-950 antialiased transition-colors dark:bg-gray-950 dark:text-gray-50">
        <ThemeProvider>{children}</ThemeProvider>
        <GoogleAnalytics />
      </body>
    </html>
  )
}
