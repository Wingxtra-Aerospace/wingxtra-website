import Link from 'next/link';
import { sanityFetch } from '@/lib/sanity/client';
import { POSTS_QUERY } from '@/lib/sanity/queries';

export const revalidate = 60;

export const metadata = {
  title: 'News | Wingxtra'
};

export default async function NewsPage() {
  const posts = await sanityFetch({ query: POSTS_QUERY });

  return (
    <section>
      <h1>News</h1>
      {posts.length === 0 ? <p>No posts found. Add content in Sanity Studio.</p> : null}
      {posts.map((post) => (
        <article key={post._id} className="article-card">
          <h2>
            <Link href={`/news/${post.slug}`}>{post.title}</Link>
          </h2>
          <p className="meta">
            {post.author ? `By ${post.author} · ` : ''}
            {post.publishedAt ? new Date(post.publishedAt).toLocaleDateString() : 'Draft'}
          </p>
          {post.excerpt ? <p>{post.excerpt}</p> : null}
        </article>
      ))}
    </section>
  );
}
