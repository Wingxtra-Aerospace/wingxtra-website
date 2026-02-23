import Link from 'next/link';

export default function HomePage() {
  return (
    <section>
      <h1>Wingxtra Website</h1>
      <p>News content is powered by Sanity.</p>
      <ul>
        <li><Link href="/news">Go to news</Link></li>
        <li><Link href="/contact">Contact form</Link></li>
        <li><Link href="/get-delivery">Get delivery form</Link></li>
      </ul>
    </section>
  );
}
