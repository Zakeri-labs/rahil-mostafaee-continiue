# Repository Guidelines

## Project Structure & Module Organization

This is a TypeScript React app built with Next.js 15 App Router. Route files live in
`app/`, including route handlers under `app/api/`. Shared UI components live in
`components/`, including shadcn-style primitives under `components/ui/` and site
components under `components/site/`. Utilities, Stripe, i18n, and static booking
logic are in `lib/`. Visual assets are stored in `assets/`.

## Build, Test, and Development Commands

- `npm run dev`: start the local Next.js development server.
- `npm run build`: create the production build.
- `npm run start`: start the production server after a build.
- `npm run lint`: run ESLint and Prettier checks across the repo.
- `npm run format`: format files with Prettier.

Prefer npm commands because `package-lock.json` is present. Other lockfiles exist; do not update them unless intentionally changing package manager workflow.

## Coding Style & Naming Conventions

Use TypeScript and React function components. Keep App Router pages named `page.tsx`
and route handlers named `route.ts`. Use PascalCase for components, camelCase for
functions and variables, and keep server-only Stripe and API logic out of client
components. Use the `@/*` alias for internal imports where it improves readability.

Formatting is managed by Prettier: 100-character print width, semicolons, double quotes, and trailing commas. ESLint uses TypeScript, React Hooks, React Refresh, and Prettier rules. Do not import Next.js-only helpers such as `server-only`.

## Testing Guidelines

No test runner or test script is currently configured. For now, verify with `npm run lint` and `npm run build`. When adding tests, colocate them near covered code using `*.test.ts` or `*.test.tsx`, and add the corresponding npm script in `package.json`.

## Commit & Pull Request Guidelines

Recent commits use short messages such as `fix`, `booking changes`, and `remove extra`. Keep new commit messages concise but specific enough to identify the changed area, for example `fix booking payment redirect`.

Pull requests should include a brief summary, verification steps, linked issue or task
context when available, and screenshots for visible UI changes. Note any Stripe or
environment variable impact explicitly.

## Security & Configuration Tips

Keep secrets in local `.env` files and out of version control. Review changes touching
`lib/stripe`, booking route handlers, payment webhooks, or environment variables
carefully because they affect payments or deployment behavior.
