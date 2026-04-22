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

GatherHub is a free platform. Every currently available add-on is included at no cost; a few new capabilities are in development with pricing to be announced.

**Free Platform (RM 0/month):**
- Unlimited activities and events
- Unlimited participants
- QR code check-in and multi-level attendance tracking
- Email notifications and reminders
- Registration forms and capacity management with waitlists
- Participant management and bulk import
- Public event directory

**Free Add-ons (all currently available):**
- Event Sessions, Event Activities
- Live Polling, Q&A Sessions, Social Wall, Gamification
- Event Surveys, Advanced Reporting
- Certificates, Kit Collection, Crew Management
- Custom Fields, Partners
- Event Templates, Virtual Business Cards, Call for Papers, Bundle Discounts

**Coming Soon (pricing TBA):**
- Blast Emails & WhatsApp
- Attendee Networking
- Custom Branding
- API Access

**Transaction Fees:**
- 3% + RM 1 per transaction (only on paid registrations)
- Free events have no fees

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
