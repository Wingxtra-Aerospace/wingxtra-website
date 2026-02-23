import { notFound } from 'next/navigation';
import { PortableText } from '@portabletext/react';
import { sanityFetch } from '@/lib/sanity/client';
import { POST_BY_SLUG_QUERY, POSTS_QUERY } from '@/lib/sanity/queries';

export const revalidate = 60;

export async function generateStaticParams() {
  const posts = await sanityFetch({ query: POSTS_QUERY });
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }) {
  const post = await sanityFetch({ query: POST_BY_SLUG_QUERY, params: { slug: params.slug } });

  if (!post) {
    return { title: 'Post not found | Wingxtra' };
  }

  return {
    title: `${post.seo?.metaTitle || post.title} | Wingxtra`,
    description: post.seo?.metaDescription || post.excerpt
  };
}

export default async function NewsPostPage({ params }) {
  const post = await sanityFetch({ query: POST_BY_SLUG_QUERY, params: { slug: params.slug } });

  if (!post) {
    notFound();
  }

  return (
    <article>
      <p><a href="/news">← Back to news</a></p>
      <h1>{post.title}</h1>
      <p className="meta">
        {post.author?.name ? `By ${post.author.name} · ` : ''}
        {post.publishedAt ? new Date(post.publishedAt).toLocaleDateString() : 'Draft'}
      </p>
      {post.coverImage ? <img className="cover" src={post.coverImage} alt={post.title} /> : null}
      {post.excerpt ? <p>{post.excerpt}</p> : null}
      <div className="prose">
        <PortableText value={post.body || []} />
      </div>
    </article>
  );
}
