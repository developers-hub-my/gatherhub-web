import { ImageResponse } from 'next/og'

export const alt = 'Gather Hub - Event Platform That Proves Participation'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

/**
 * Generated Open Graph image for social cards — branded gradient, wordmark,
 * and tagline. Built at request/build time by Next.js; no design asset needed.
 */
export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '80px',
        background:
          'linear-gradient(135deg, #030712 0%, #111827 55%, #1d4ed8 160%)',
        color: '#ffffff',
        fontFamily: 'sans-serif',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '20px',
        }}
      >
        <div
          style={{
            width: '64px',
            height: '64px',
            borderRadius: '16px',
            background: '#2563eb',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '36px',
            fontWeight: 700,
          }}
        >
          G
        </div>
        <div style={{ fontSize: '44px', fontWeight: 700 }}>Gather Hub</div>
      </div>
      <div
        style={{
          marginTop: '48px',
          fontSize: '72px',
          fontWeight: 700,
          lineHeight: 1.1,
          maxWidth: '980px',
        }}
      >
        The event platform that proves participation.
      </div>
      <div
        style={{
          marginTop: '32px',
          fontSize: '32px',
          color: '#9ca3af',
          maxWidth: '900px',
        }}
      >
        QR check-in · verifiable certificates · attendance tracking
      </div>
    </div>,
    size,
  )
}
