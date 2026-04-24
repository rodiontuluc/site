# site

Monorepo managed with pnpm + Turborepo.

## Structure

- `apps/marketing` — public Next.js marketing site (static export, deployed to Cloudflare Pages)
- `apps/studio` — closed Next.js app backed by Supabase
- `packages/ui` — shared ShadCN UI library

## Scripts

```
pnpm install
pnpm dev          # turbo run dev
pnpm build        # turbo run build
pnpm lint
pnpm type-check
```

## Remote caching

Turbo is configured to use Vercel Remote Cache. Run `pnpm dlx turbo login && pnpm dlx turbo link` locally, and set `TURBO_TOKEN` + `TURBO_TEAM` in CI to enable it.
