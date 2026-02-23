import Link from 'next/link';

export default function HomePage() {
  return (
    <section>
      <h1>Wingxtra Website</h1>
      <p>News content is powered by Sanity.</p>
      <Link href="/news">Go to news</Link>
    </section>
  );
}
