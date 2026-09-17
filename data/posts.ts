export type Post = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  body: string[];
};

export const posts: Post[] = [
  {
    slug: "static-export",
    title: "What static export actually produces",
    date: "2026-09-01",
    excerpt:
      "next build writes HTML, CSS, and JS into out/. Any file server or CDN can host it.",
    body: [
      "With output: \"export\", Next.js prerenders every page during next build. The result is a folder of static files — not a long-running Node process.",
      "That makes this app a fit for S3, GitHub Pages, nginx, or a CDN. Request-time APIs such as cookies(), headers(), Route Handlers, and Server Actions are not available.",
      "Dynamic segments are allowed only when generateStaticParams lists every path up front. This post exists because its slug was returned from that function.",
    ],
  },
  {
    slug: "ssg-vs-ssr",
    title: "SSG versus request-time rendering",
    date: "2026-09-08",
    excerpt:
      "Static generation bakes data into HTML at build time. SSR recomputes a response for each request.",
    body: [
      "Static Site Generation (SSG) runs data fetching while the site is built. Visitors receive the same HTML until you rebuild and redeploy.",
      "Server-side rendering (SSR) and other dynamic features need a Next.js server so each request can read cookies, query strings, or live backends.",
      "If your pages never depend on the incoming request, static export is the simpler deployment model: build once, copy out/, done.",
    ],
  },
  {
    slug: "hosting",
    title: "Hosting the out/ directory",
    date: "2026-09-12",
    excerpt:
      "Serve the exported files with any static host. trailingSlash: true keeps paths friendly for file servers.",
    body: [
      "After npm run build, preview locally with npm run preview (serves the out/ folder).",
      "trailingSlash: true emits posts/static-export/index.html instead of posts/static-export.html, which most static hosts resolve as /posts/static-export/.",
      "next/image optimization requires a server, so this project sets images.unoptimized. Use plain img tags or a CDN image pipeline if you need transforms.",
    ],
  },
];

export function getPost(slug: string): Post | undefined {
  return posts.find((post) => post.slug === slug);
}
