# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Gourd SME Frontend — a Next.js 16 scaffold/starter built with React 19, TypeScript (strict mode), Tailwind CSS 3, and Radix UI primitives. Uses the App Router. Package manager is **pnpm**.

## Commands

```bash
pnpm dev              # Start dev server (Next.js)
pnpm build            # Production build
pnpm build:dev        # Build with APP_ENV=development
pnpm build:uat        # Build with APP_ENV=uat
pnpm start            # Start production server (port 3000)
pnpm lint             # ESLint (flat config)
pnpm typecheck        # TypeScript type checking (tsc --noEmit)
pnpm check            # Run both lint + typecheck
pnpm format           # Prettier auto-format all files
```

## Architecture

- **`src/app/`** — Next.js App Router. `layout.tsx` is the root layout wrapping all pages with ThemeProvider → AuthProvider → Toaster.
- **`src/components/ui/`** — Radix UI-based component library (shadcn/ui style). Each file exports a single component. Use these as building blocks.
- **`src/components/app/layouts/`** — App shell components (AppHeader, AppFooter, AppSidebar), barrel-exported via `index.tsx`.
- **`src/components/app/provider/`** — Context providers. `ThemeProvider` wraps `next-themes`; `AuthProvider` provides mock auth via React context with localStorage persistence.
- **`src/lib/`** — Utilities. `cn()` (clsx + tailwind-merge) for class merging. `browser-storage.ts` provides a typed `getStorageManager<T>()` for localStorage/sessionStorage with JSON serialization. `keyboard-shortcuts.ts` defines app keyboard shortcuts.
- **`src/hooks/`** — Custom hooks: `useIsMobile`, `useDebounce`, `useMounted`, `useToast`.
- **`src/config/`** — App-level configuration constants (`siteConfig`, `IS_BROWSER`).
- **`src/styles/`** — Global CSS with design tokens (CSS custom properties for colors, radii, shadows) and layout utilities (`v-stack`, `h-stack`, `center`, `card-surface`). Local fonts (SF Pro) configured in `fonts.ts`.
- **`src/types/`** — Shared TypeScript types (currently empty).
- **`scripts/`** — `clean.ts` removes `.next`/`node_modules`, `initial-env.ts` copies `.env.example` to `.env` if missing.

## Code Conventions

- **Imports**: Always use `@/*` path aliases (mapped to `./src/*`). Relative `../` traversals are banned by ESLint rule.
- **Type definitions**: Use `type` keyword, not `interface` (enforced by `@typescript-eslint/consistent-type-definitions`).
- **TypeScript strictness**: `strict: true`, `noUncheckedIndexedAccess`, `exactOptionalPropertyTypes`, `verbatimModuleSyntax` are all enabled.
- **Formatting**: Prettier with 4-space indent, 120 char width, no semicolons, single quotes, no trailing commas, `arrowParens: 'avoid'`.
- **Commits**: Conventional Commits enforced via commitlint (`@commitlint/config-conventional`). Lint-staged runs ESLint fix + Prettier on pre-commit via Husky.
- **Unused imports/vars**: Auto-removed by `eslint-plugin-unused-imports`. Variables prefixed with `_` are allowed to be unused.
- **Promises**: `no-floating-promises` is enforced — always `await` or explicitly `void` fire-and-forget promises.
- **Client components**: Must have `'use client'` directive. Providers and browser-dependent code already use this.

## Environment

Two env vars defined in `.env.example`: `NEXT_PUBLIC_APP_NAME` and `NEXT_PUBLIC_API_BASE_URL`. Copy `.env.example` to `.env` (or run `scripts/initial-env.ts`).

## Docker

Multi-stage Dockerfile. Build arg `APP_ENV` selects environment (`development`, `uat`, `prod`). Production image runs on port 3000.
