# Repository Guidelines

## Project Structure & Module Organization

This is a TypeScript React app built with Vite and TanStack Start. Application code lives in `src/`. Route files are in `src/routes/`, with the generated route tree in `src/routeTree.gen.ts`. Shared UI components live in `src/components/`, including shadcn-style primitives under `src/components/ui/` and site components under `src/components/site/`. Utilities, auth, Stripe, i18n, booking, and admin logic are in `src/lib/`. Supabase clients and generated types are in `src/integrations/supabase/`; migrations live in `supabase/migrations/`. Visual assets are stored in `src/assets/`.

## Build, Test, and Development Commands

- `npm run dev`: start the local Vite development server.
- `npm run build`: create the production build.
- `npm run build:dev`: build with development mode settings.
- `npm run preview`: preview the built app locally.
- `npm run lint`: run ESLint and Prettier checks across the repo.
- `npm run format`: format files with Prettier.

Prefer npm commands because `package-lock.json` is present. Other lockfiles exist; do not update them unless intentionally changing package manager workflow.

## Coding Style & Naming Conventions

Use TypeScript and React function components. Keep route modules in `src/routes/` named after URL paths, for example `booking-confirmation.tsx`. Use PascalCase for components, camelCase for functions and variables, and `*.server.ts` for server-only modules. Use the `@/*` alias for internal imports where it improves readability.

Formatting is managed by Prettier: 100-character print width, semicolons, double quotes, and trailing commas. ESLint uses TypeScript, React Hooks, React Refresh, and Prettier rules. Do not import Next.js-only helpers such as `server-only`.

## Testing Guidelines

No test runner or test script is currently configured. For now, verify with `npm run lint` and `npm run build`. When adding tests, colocate them near covered code using `*.test.ts` or `*.test.tsx`, and add the corresponding npm script in `package.json`.

## Commit & Pull Request Guidelines

Recent commits use short messages such as `fix`, `booking changes`, and `remove extra`. Keep new commit messages concise but specific enough to identify the changed area, for example `fix booking payment redirect`.

Pull requests should include a brief summary, verification steps, linked issue or task context when available, and screenshots for visible UI changes. Note any Supabase migration, Stripe, Cloudflare, or environment variable impact explicitly.

## Security & Configuration Tips

Keep secrets in local `.env` files and out of version control. Review changes touching `src/lib/stripe*`, Supabase clients, auth middleware, webhooks, `wrangler.jsonc`, and `supabase/migrations/` carefully because they affect payments, auth, deployment, or data shape.
