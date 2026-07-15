# Game Plan Golf Performance — Marketing Website

Marketing website for Game Plan Golf Performance, a data-driven golf performance facility in San Marcos, CA. 

## Tech Stack

- **Framework:** Next.js 14 (App Router, TypeScript)
- **Styling:** Tailwind CSS (custom dark theme)
- **Animations:** Framer Motion (scroll-triggered reveals)
- **Fonts:** DM Sans (body) + Outfit (headings) via Google Fonts

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Pages

| Route          | Description                                    |
| -------------- | ---------------------------------------------- |
| `/`            | Home — hero, credibility, services, data viz   |
| `/lessons`     | Coaching methodology, tech stack, booking CTA   |
| `/memberships` | Practice tiers, pricing, "Become a Member" CTA |
| `/join`        | Membership inquiry form (emails via Resend)     |
| `/training`    | Personal training, credentials, adult & junior  |
| `/about`       | Ryan's story, Forbes, Sofia, the facility       |
| `/contact`     | Hours, form, map placeholder, appointment info  |

## Before Launch Checklist

Search the codebase for `[REPLACE]` and `[PERSONALIZE THIS]` tags. Here's everything that needs updating:

### Must Replace

- **`src/lib/constants.ts`** — Booking URL, membership URL, street address, zip code, phone, email, social media URLs
- **`src/lib/metadata.ts`** — Production domain (currently `gameplangolf.com`)
- **`src/app/layout.tsx`** — `metadataBase` URL
- **Logo** — Replace text logo in Header and Footer with actual logo image
- **All placeholder images** — Replace Unsplash URLs with real photography (each image has a comment describing what the shot should show and its ideal aspect ratio)
- **Google Maps embed** — Replace the map placeholder on `/contact` with an actual Google Maps iframe
- **Contact form & join form** — Add `RESEND_API_KEY` and `CONTACT_EMAIL` env vars in Vercel (see Deployment section)
- **Forbes article link** — Add link to the actual Forbes article on `/about`
- **OG image** — Create and add an Open Graph image for social sharing

### Must Personalize

- **Ryan's bio on `/about`** — Three paragraphs marked `[PERSONALIZE THIS]` need Ryan's actual story
- **Membership pricing** — Verify tier names, prices, and features on `/memberships`
- **SIM rental pricing** — Verify hourly rate on `/memberships`

### Photography Needed

Each image location has a comment describing:
1. What the shot should show
2. Ideal aspect ratio
3. Suggested alt text

Key shots needed:
- Facility interior / GC Quad bays (hero background)
- Coach working 1:1 with golfer mid-swing
- GC Quad screen showing launch data
- Force plate in use
- Athletic training session
- Ryan professional headshot (portrait)
- Sofia competing / training
- Exterior or San Diego local imagery

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with Header/Footer, fonts
│   ├── page.tsx            # Home page
│   ├── globals.css         # Base styles, scrollbar, selection
│   ├── actions/
│   │   └── inquiry.ts      # Server Action — sends email via Resend for /join and /contact forms
│   ├── join/
│   │   ├── layout.tsx      # SEO metadata
│   │   └── page.tsx        # Membership inquiry form
│   ├── lessons/
│   │   ├── layout.tsx      # SEO metadata
│   │   └── page.tsx
│   ├── memberships/
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── training/
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── about/
│   │   ├── layout.tsx
│   │   └── page.tsx
│   └── contact/
│       ├── layout.tsx
│       └── page.tsx
├── components/
│   ├── Button.tsx          # Primary/secondary/outline variants
│   ├── CredentialBadge.tsx  # Icon + label credential display
│   ├── FadeIn.tsx          # Scroll-triggered animation wrapper
│   ├── Footer.tsx          # Site footer with hours, links, social
│   ├── Header.tsx          # Sticky nav with mobile hamburger
│   ├── SectionHeader.tsx   # Reusable eyebrow + heading + description
│   ├── ServiceCard.tsx     # Icon + title + description link card
│   └── TestimonialCard.tsx # Quote card with attribution
└── lib/
    ├── constants.ts        # Business info, hours, nav links
    └── metadata.ts         # SEO metadata factory
```

## Deployment

Deployed on Vercel. The app runs as a full Next.js server (not static export), so serverless functions are active.

```bash
npm run build   # Production build
npm start       # Production server
```

### Required Environment Variables

Set these in the Vercel project settings (Settings → Environment Variables):

| Variable | Description |
|---|---|
| `RESEND_API_KEY` | From your [Resend dashboard](https://resend.com) — used to send form submission emails |
| `CONTACT_EMAIL` | The email address that receives membership and contact form submissions |
| `RESEND_FROM_EMAIL` | Optional. Set once you verify your domain in Resend (e.g. `Game Plan <hello@gameplangolf.com>`). Until then, emails send from `onboarding@resend.dev`. |

Forms (`/join` and `/contact`) will silently fail until `RESEND_API_KEY` and `CONTACT_EMAIL` are set.

## Design Decisions

- **Color palette:** Dark backgrounds (#0A0F0D) with #2ECC71 green accent — reads premium and athletic without being flashy
- **Typography:** Outfit for headlines (strong, geometric), DM Sans for body (clean, highly readable)
- **Animations:** Scroll-triggered FadeIn only — purposeful, not decorative. No parallax, no complex sequences
- **Data visualization:** Mock session data panel on home page demonstrates the data-driven approach visually
- **Mobile nav:** Hamburger with Framer Motion slide animation, auto-closes on route change
