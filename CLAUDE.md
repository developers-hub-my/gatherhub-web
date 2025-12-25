# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is "Radiant", a Next.js 15 application with a Sanity CMS-powered blog. It's built using:
- **Next.js 15** with React 19 and App Router
- **Sanity CMS** for content management (blog posts, authors, categories)
- **Tailwind CSS v4** for styling
- **TypeScript** with strict mode enabled
- **Framer Motion** for animations

## Common Commands

### Development
```bash
npm run dev          # Start development server (http://localhost:3000)
npm run build        # Build production bundle
npm run start        # Start production server
npm run lint         # Run ESLint
```

### Sanity CMS
```bash
# Initial setup (first time only)
npm create sanity@^4.2 -- --env=.env.local --create-project "Radiant Blog" --dataset production

# Import seed data (optional)
npx sanity@^4.2 dataset import seed.tar.gz

# Regenerate TypeScript types from Sanity schema
npm run typegen
```

**Sanity Studio** is embedded at `/studio` route (http://localhost:3000/studio)

### Code Formatting
Prettier is configured with:
- Single quotes, no semicolons
- Auto-organize imports
- Tailwind CSS class sorting
- Custom tailwind functions: `clsx`

## Architecture

### Sanity Integration

The Sanity integration follows a specific pattern:

1. **Schema Definition** (`src/sanity/schema.ts`):
   - Content types: `post`, `author`, `category`, `blockContent`
   - Schema files in `src/sanity/types/`
   - Posts have a featured flag (max 3 featured posts enforced via validation)

2. **Client Setup** (`src/sanity/client.ts`):
   - Uses `next-sanity` for integration
   - CDN disabled in development, enabled in production
   - Environment variables required: `NEXT_PUBLIC_SANITY_PROJECT_ID`, `NEXT_PUBLIC_SANITY_DATASET`

3. **Live Data Fetching** (`src/sanity/live.ts`):
   - Uses `defineLive` from `next-sanity` for live preview capability
   - `sanityFetch` wrapper for all queries (not regular client)
   - Currently has `browserToken: false` and `serverToken: false` (visual editing not enabled)

4. **Queries** (`src/sanity/queries.ts`):
   - All queries use `defineQuery` with GROQ syntax
   - Functions: `getPosts()`, `getFeaturedPosts()`, `getPost()`, `getCategories()`, `getPostsForFeed()`
   - Posts can be filtered by category
   - **IMPORTANT**: Always use `sanityFetch` from `src/sanity/live.ts`, NOT the raw client

5. **Type Generation**:
   - Run `npm run typegen` after schema changes
   - Generates TypeScript types in `src/sanity/types.ts`
   - Temporary `extract.json` file is auto-cleaned

### Next.js App Structure

- **App Router** with TypeScript
- Routes: `/`, `/blog`, `/blog/[slug]`, `/pricing`, `/login`, `/company`, `/studio`
- RSS feed route: `/blog/feed.xml`
- Path alias: `@/*` maps to `src/*`
- Sanity Studio mounted at `/studio` via catch-all route `[[...tool]]`

### Component Organization

Components in `src/components/` are reusable UI elements:
- Design system components: `Button`, `Text`, `Container`, `Link`
- Complex components: `BentoCard`, `Navbar`, `Footer`, `Testimonials`
- Animation components: `AnimatedNumber`, `Gradient`, `PlusGrid`
- Visual components: `Keyboard`, `Screenshot`, `Map`, `LogoTimeline`, `LogoCloud`, `LinkedAvatars`

### Styling Approach

- Tailwind CSS v4 with custom config in `src/styles/tailwind.css`
- Uses `clsx` for conditional class names
- Prettier auto-sorts Tailwind classes
- Headless UI for accessible components

## Important Patterns

### When Adding New Sanity Content Types

1. Create type definition in `src/sanity/types/[name].ts`
2. Add to schema in `src/sanity/schema.ts`
3. Run `npm run typegen` to generate TypeScript types
4. Create queries in `src/sanity/queries.ts` using `defineQuery` and `sanityFetch`

### When Querying Sanity Data

Always use `sanityFetch` from `src/sanity/live.ts`:
```typescript
import { sanityFetch } from '@/sanity/live'
import { defineQuery } from 'next-sanity'

const QUERY = defineQuery(/* groq */ `...`)
const data = await sanityFetch({ query: QUERY, params: {...} })
```

### Environment Variables

Required for Sanity:
- `NEXT_PUBLIC_SANITY_PROJECT_ID` - Sanity project ID
- `NEXT_PUBLIC_SANITY_DATASET` - Dataset name (typically "production")
- `NEXT_PUBLIC_SANITY_API_VERSION` - Optional, defaults to "2025-07-10"

These are configured in `.env.local` (not committed to git).
