import Link from "next/link";
import { posts } from "@/data/posts";

const builtAt = new Date().toISOString();

export default function HomePage() {
  return (
    <main>
      <h1>A journal that ships as files.</h1>
      <p className="lede">
        This Next.js app uses Static Site Generation and{" "}
        <code>output: &quot;export&quot;</code>. Every page is HTML before a
        visitor arrives.
      </p>
      <p className="stamp">Built at {builtAt}</p>
      <ul className="post-list">
        {posts.map((post) => (
          <li key={post.slug}>
            <time dateTime={post.date}>{post.date}</time>
            <h2>
              <Link href={`/posts/${post.slug}`}>{post.title}</Link>
            </h2>
            <p>{post.excerpt}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}
