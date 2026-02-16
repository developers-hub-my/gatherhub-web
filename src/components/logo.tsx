'use client'

import { clsx } from 'clsx'

function MagneticPullIcon() {
  return (
    <g fill="currentColor">
      {/* Field lines */}
      <circle cx="20" cy="20" r="7" fill="none" stroke="currentColor" strokeWidth="0.8" opacity="0.2" />
      <circle cx="20" cy="20" r="12" fill="none" stroke="currentColor" strokeWidth="0.7" opacity="0.15" />
      {/* Central attractor */}
      <circle cx="20" cy="20" r="3.5" />
      <circle cx="20" cy="20" r="5" fill="none" stroke="currentColor" strokeWidth="0.8" opacity="0.4" />
      {/* Outer particles with trails */}
      <circle cx="20" cy="7" r="1.6" opacity="0.7" />
      <line x1="20" y1="4" x2="20" y2="7" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.4" />
      <circle cx="29" cy="11" r="1.4" opacity="0.75" />
      <line x1="32" y1="9" x2="29" y2="11" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.4" />
      <circle cx="33" cy="20" r="1.6" opacity="0.65" />
      <line x1="36" y1="20" x2="33" y2="20" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.35" />
      <circle cx="29" cy="29" r="1.4" opacity="0.75" />
      <line x1="32" y1="31" x2="29" y2="29" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.4" />
      <circle cx="20" cy="33" r="1.6" opacity="0.7" />
      <line x1="20" y1="36" x2="20" y2="33" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.4" />
      <circle cx="11" cy="29" r="1.4" opacity="0.75" />
      <line x1="8" y1="31" x2="11" y2="29" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.4" />
      <circle cx="7" cy="20" r="1.6" opacity="0.65" />
      <line x1="4" y1="20" x2="7" y2="20" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.35" />
      <circle cx="11" cy="11" r="1.4" opacity="0.75" />
      <line x1="8" y1="9" x2="11" y2="11" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.4" />
      {/* Inner ring particles */}
      <circle cx="20" cy="12.5" r="1.8" opacity="0.9" />
      <circle cx="26.5" cy="16" r="1.8" opacity="0.85" />
      <circle cx="26.5" cy="24" r="1.8" opacity="0.85" />
      <circle cx="20" cy="27.5" r="1.8" opacity="0.9" />
      <circle cx="13.5" cy="24" r="1.8" opacity="0.85" />
      <circle cx="13.5" cy="16" r="1.8" opacity="0.85" />
    </g>
  )
}

export function Logo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={clsx(className, 'overflow-visible')}
    >
      <MagneticPullIcon />
      {/* Text - GatherHub */}
      <text
        x="48"
        y="27"
        fontFamily="system-ui, -apple-system, sans-serif"
        fontSize="20"
        fontWeight="600"
        fill="currentColor"
        letterSpacing="-0.02em"
      >
        GatherHub
      </text>
    </svg>
  )
}

export function Mark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <MagneticPullIcon />
    </svg>
  )
}
