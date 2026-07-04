# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is "GatherHub", a Next.js 15 marketing website for an event management platform. It's built using:
- **Next.js 15** with React 19 and App Router
- **Tailwind CSS v4** for styling
- **TypeScript** with strict mode enabled
- **Framer Motion** for animations
- **Headless UI** for accessible components

## Common Commands

### Development
```bash
npm run dev          # Start development server (http://localhost:3000)
npm run build        # Build production bundle
npm run start        # Start production server
npm run lint         # Run ESLint
```

### Code Formatting
Prettier is configured with:
- Single quotes, no semicolons
- Auto-organize imports
- Tailwind CSS class sorting
- Custom tailwind functions: `clsx`

## Architecture

### Next.js App Structure

- **App Router** with TypeScript
- Routes: `/`, `/features`, `/pricing`, `/contact`, `/help`, `/privacy`, `/terms`
- Path alias: `@/*` maps to `src/*`

### Component Organization

Components in `src/components/` are reusable UI elements:
- Design system components: `Button`, `Text`, `Container`, `Link`, `Navbar`, `Footer`
- Complex components: `BentoCard`, `Testimonials`, `LogoCloud`, `LinkedAvatars`
- Animation components: `AnimatedNumber`, `Gradient`, `PlusGrid`
- Visual components: `Keyboard`, `Screenshot`, `Map`, `LogoTimeline`

### Styling Approach

- Tailwind CSS v4 with custom config in `src/styles/tailwind.css`
- Uses `clsx` for conditional class names
- Prettier auto-sorts Tailwind classes
- Blue color scheme throughout (#e0f2fe → #93c5fd → #3b82f6)
- Smooth scrolling enabled globally for anchor links

## Important Patterns

### Brand Guidelines

GatherHub follows a calm, professional, operations-focused brand:
- **Tone**: Professional, trustworthy, organized, human
- **Avoid**: Hype, buzzwords, exaggerated marketing language
- **Color scheme**: Blue gradients (#e0f2fe → #93c5fd → #3b82f6)
- **Typography**: Clean, readable, no unnecessary emojis

### Page Structure

All sub-pages (Features, Pricing, Contact, etc.) follow a consistent pattern:
- Simple, clean header (no large gradients)
- Minimal hero section with Subheading and Heading
- White background for clarity
- Consistent spacing and typography

Homepage uses a larger hero section with gradient and animations.

### Configuration

The main app URL (for login/register links) is configurable via environment variable:
- Located in `src/lib/config.ts`
- Uses `NEXT_PUBLIC_APP_URL` from `.env.local`
- Defaults to `https://gatherhub.app`

### Environment Variables

Required variables (see `.env.example`):
- `NEXT_PUBLIC_APP_URL` - The main application URL for login/register links (defaults to https://gatherhub.app)

These are configured in `.env.local` (not committed to git).

## Pricing Model

GatherHub uses a **plans-only** model — Free, Pro, and Business. Paid features come
bundled with a plan; they are **not** sold individually (à la carte). The single
source of truth is `src/lib/plans.ts` (which mirrors the app's `PlanSeeder` /
`FeatureSeeder`); the `<PlanComparison />` component renders the full matrix on
`/pricing`. Keep `plans.ts` in sync with the app when plans change.

**Plans:**
- **Free — RM 0**: run events end to end, up to 2 active events + 2 staff seats, all
  free features. Platform fee 3% + RM 1 per paid ticket.
- **Pro — RM 99/month**: 20 active events, 10 staff, 10,000 email credits/mo, and the
  Pro feature bundle (sessions, activities, blast emails, advanced reporting, flash
  sales, attendee networking, call for papers, unlimited events). Fee **2% + RM 1**.
- **Business — RM 299/month**: unlimited events + staff, 50,000 email credits/mo, every
  Pro feature plus sponsor analytics, community templates, vendor listing, and API
  access. Fee **1.5% + RM 1**.

**Free features (every plan):** QR check-in & multi-level attendance, participant
management + bulk import, registration forms + waitlists, refunds & payouts, public
directory, certificates, live polling, Q&A, surveys, social wall, gamification, kit
collection, crew management, custom fields, speakers & sponsors.

**Not yet built:** Custom Branding (roadmap).

**Platform fee:** per paid ticket, varies by plan (3% / 2% / 1.5% + RM 1). Free events
never incur a fee.

**Payments:** BayarCash — FPX online banking, DuitNow QR, and manual bank transfer.
**No credit-card processing.** Do not advertise Visa/Mastercard/PCI. Enterprise SSO
(SAML/OIDC) is **roadmap, not shipped** — never list it as "included".

## Key Features

The platform provides:
- Unlimited activities and events with event cloning and reusable templates
- QR code check-in and multi-level attendance tracking (event/session/activity)
- Online QR and secret codes for virtual events
- Certificate generation with QR verification and eligibility rules (free add-on)
- Email and WhatsApp blast campaigns with scheduling and delivery tracking (coming soon)
- Marketing content studio for event promotion
- Registration forms with capacity management and waitlists
- Bundle discounts, early bird pricing, and flash sale timers
- Refund management with multi-stage approval workflow
- Organizer payout management with earnings dashboard
- Speaker and sponsor self-service portals
- Call for papers for session proposal submission
- Live polling, Q&A sessions, surveys, social wall, and gamification
- Virtual business card exchange
- Vendor marketplace with 16 service types
- Public event directory
- Reports, analytics dashboard, and data export
- Webhooks for external integrations
- Two-factor authentication and audit logging
