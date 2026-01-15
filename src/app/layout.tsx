import '@/styles/tailwind.css'
import type { Metadata } from 'next'
import { ThemeProvider } from '@/components/theme-provider'

export const metadata: Metadata = {
  title: {
    template: '%s - Gather Hub',
    default: 'Gather Hub - Run activities with clarity and proof',
  },
  description:
    'The operational hub for events and activities — from registration and payment to attendance validation and participation proof.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
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
        <link
          rel="alternate"
          type="application/rss+xml"
          title="Gather Hub Blog"
          href="/blog/feed.xml"
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
      </body>
    </html>
  )
}
