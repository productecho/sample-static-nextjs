import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Harbor Journal",
    template: "%s · Harbor Journal",
  },
  description:
    "A statically generated journal exported as plain HTML, CSS, and JS.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="wrap">
          <header className="site-header">
            <Link href="/" className="brand">
              Harbor Journal
            </Link>
            <nav>
              <Link href="/">Home</Link>
              <Link href="/posts">Posts</Link>
              <Link href="/about">About</Link>
            </nav>
          </header>
          {children}
          <footer className="site-footer">
            Prerendered at build time. Served as static files from{" "}
            <code>out/</code>.
          </footer>
        </div>
      </body>
    </html>
  );
}
