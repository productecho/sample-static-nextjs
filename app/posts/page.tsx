import type { Metadata } from "next";
import Link from "next/link";
import { posts } from "@/data/posts";

export const metadata: Metadata = {
  title: "Posts",
};

export default function PostsPage() {
  return (
    <main>
      <h1>All posts</h1>
      <p className="lede">
        Each entry is a static route generated from local data at build time.
      </p>
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
