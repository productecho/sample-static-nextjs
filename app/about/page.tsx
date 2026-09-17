import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <main>
      <h1>About this export</h1>
      <p className="lede">
        Harbor Journal is a sample of Next.js static export. There is no
        request-time server.
      </p>
      <article>
        <p>
          Pages in this project do not read cookies, headers, or search params.
          They do not define Route Handlers, middleware, or Server Actions.
          Those features need a Node.js server and cannot be used with{" "}
          <code>output: &quot;export&quot;</code>.
        </p>
        <p>
          Blog paths come from <code>generateStaticParams</code>, so Next.js
          knows every URL at build time and writes an HTML file for each one.
        </p>
      </article>
    </main>
  );
}
