# Next.js static export (SSG)

A small journal site that **prerenders every page at build time** and writes a
static tree into `out/`. After `next build` there is no Next.js server — any
file host can serve the HTML.

## What makes it static

- `output: "export"` in `next.config.ts`
- Pages use only build-time data (`data/posts.ts`)
- Dynamic routes list every slug in `generateStaticParams`
- No `cookies()`, `headers()`, `searchParams`, Route Handlers, middleware, or
  Server Actions

## Run

```bash
cd nextjs-static
npm install
npm run dev          # hot reload for local editing
npm run build        # writes static files to out/
npm run preview      # serve out/ on http://localhost:3000
```

Open `/`, `/about/`, `/posts/`, and `/posts/static-export/`. The “Built at”
stamp on the home page is baked in at compile time; it does not change until
you rebuild.
