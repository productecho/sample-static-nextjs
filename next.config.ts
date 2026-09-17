import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Emit a static HTML/CSS/JS tree into `out/` at build time.
  // There is no Next.js server after `next build`.
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
