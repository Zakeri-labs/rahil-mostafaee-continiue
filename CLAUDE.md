# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

Marketing + booking site for a Dubai-based lawyer serving Iranian clients. Bilingual (English / Farsi) with Farsi/RTL as the default. Next.js 15 App Router, React 19, TypeScript (strict), Tailwind CSS v4, shadcn/ui. Generated from Lovable; deployed on Vercel.

See also `AGENTS.md` for contributor conventions (commit style, PR expectations, security notes).

## Commands

- `npm run dev` — local dev server
- `npm run build` — production build
- `npm run start` — serve the production build
- `npm run lint` — ESLint + Prettier check (this is the primary gate; **there is no test runner**)
- `npm run format` — Prettier write

Use **npm** (`package-lock.json` is the source of truth). `bun.lock` and `yarn.lock` also exist — do not update them unless intentionally switching package managers. Verify changes with `npm run lint` and `npm run build`.

## Architecture

### Server/client page split (applies to every route)

Each route is two files:

- `app/<route>/page.tsx` — server component that exports `metadata` and renders the client component. Nothing else.
- `app/<route>/page-client.tsx` — `"use client"` component with all the actual UI/interactivity.

When adding a page, follow this pattern: put SEO metadata in `page.tsx`, put everything interactive in `page-client.tsx`. Keep server-only logic (Stripe, secrets) out of `*-client.tsx`. Do not import `server-only`.

### Automatic sitemap and robots

The native `app/sitemap.ts` and `app/robots.ts` metadata routes use the public origin from
`NEXT_PUBLIC_SITE_URL`. Before every production build, `prebuild` scans the actual `app/`
route tree and regenerates `lib/seo/generated-routes.ts`; it does not use navigation links or
a manually maintained URL list. Static `page.*` routes are included automatically, route groups
are removed, and dynamic, private, technical, confirmation, redirect, Coming Soon, and
noindex-marked routes are excluded. The generated manifest keeps runtime sitemap generation
independent of source files being present after deployment.

To add an indexable landing page, create its normal static route folder with `page.tsx` and the
matching `page-client.tsx`, then run `npm run build`. To keep a route out of search, mark its
server page metadata with `robots: { index: false, follow: false }`; use a `coming-soon` route
segment for unfinished pages. Dynamic route segments are not emitted literally. If dynamic
pages are introduced later, their published slugs must be resolved from the same published
content registry that renders them before being added to the generated manifest.

Set the final production origin in `NEXT_PUBLIC_SITE_URL` (see `.env.example`). Verify locally
with `NEXT_PUBLIC_SITE_URL=http://127.0.0.1:3000 npm run build`, then inspect `/sitemap.xml` and
`/robots.txt` from the clean production server.

### i18n / RTL (`lib/i18n.tsx`)

Custom lightweight context — no i18n library. English and Farsi dictionaries are inline objects (`en`, `fa`); `useI18n()` exposes `{ lang, setLang, t, dir }` and `t("some.key")` looks up the string (falls back to English, then the key). **Default language is `fa` (RTL).** The active language persists to `localStorage["lang"]`; an inline script in `app/layout.tsx` sets `<html dir/lang>` before hydration to avoid a flash. When adding user-facing copy, add both `en` and `fa` entries in `lib/i18n.tsx` and render via `t()` — do not hardcode strings.

### Booking system (`lib/booking/`)

- `catalog.ts` — services are a **hardcoded static array** (no database), each with a Stripe `price_id` lookup key, AED price, duration, and EN/FA names.
- `availability.ts` — slots are **computed**, not stored: fixed weekly rules (Sun–Thu, 09:00–18:00 Dubai time, 30-min steps), filtered to future times. Timezone math is manual (`dubaiOffsetMin`).
- `schemas.ts` — Zod schemas validating every API payload.
- `api-client.ts` — browser-side fetch wrappers that call the route handlers below.

Flow: pick service → `POST /api/booking/slots` → guest details → `POST /api/booking/checkout` (creates Stripe embedded checkout) → Stripe redirects to `/booking-confirmation` → `POST /api/booking/confirm` verifies `payment_status`.

### Stripe (`lib/stripe/`)

- `server.ts` — **all Stripe API calls are proxied through a Lovable connector gateway** (`connector-gateway.lovable.dev/stripe`) via a custom `fetch` that rewrites `api.stripe.com` and adds `X-Connection-Api-Key` / `Lovable-API-Key` headers. `createStripeClient(env)` takes `"sandbox" | "live"`. `verifyWebhook` implements Stripe signature checking manually with WebCrypto HMAC (no `stripe.webhooks.constructEvent`).
- `client.ts` — picks sandbox vs live purely from whether `NEXT_PUBLIC_PAYMENTS_CLIENT_TOKEN` starts with `pk_test_`.
- Route handlers under `app/api/booking/` and `app/api/public/payments/webhook/` set `export const runtime = "nodejs"`. Prices are resolved by `lookup_keys`, not hardcoded price IDs.

Treat anything touching `lib/stripe/`, the booking route handlers, or the webhook as payment-critical — review carefully.

### Components

- `components/ui/` — shadcn/ui primitives (new-york style, ~46 files). Regenerate/add via the shadcn CLI (`components.json`), don't hand-write.
- `components/site/` — bespoke site pieces: `Nav`, `Footer`, `MobileBottomNav`, `WhatsAppFab`, `SplashLoader`, and animation helpers (`Reveal`, `Parallax`, `Marquee`, `RotatingWord`, `ProcessConnector`).

### Conventions

- `@/*` path alias → project root (e.g. `@/components/site/Nav`, `@/lib/i18n`).
- Fonts: local Peyda font family loaded via `next/font/local` in `app/layout.tsx`, exposed as `--font-peyda`.
- Prettier: 100-col, semicolons, double quotes, trailing commas. `@typescript-eslint/no-unused-vars` and `@next/next/no-img-element` are intentionally off.

## Environment variables

Server (used by `lib/stripe/server.ts`): `STRIPE_SANDBOX_API_KEY`, `STRIPE_LIVE_API_KEY`, `LOVABLE_API_KEY`, `PAYMENTS_SANDBOX_WEBHOOK_SECRET`, `PAYMENTS_LIVE_WEBHOOK_SECRET`.

Client: `NEXT_PUBLIC_PAYMENTS_CLIENT_TOKEN` (a `pk_test_…` value selects sandbox). Keep secrets in local `.env*` files, never commit them.
