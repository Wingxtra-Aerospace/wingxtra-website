import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = { title: "News" };

const sampleArticles = [
  { slug: "launching-national-delivery-network", title: "Launching Our National Delivery Network" },
  { slug: "new-technology-partnership-announced", title: "New Technology Partnership Announced" },
];

export default function NewsPage() {
  return (
    <>
      <PageHero title="News" subtitle="Placeholder newsroom page with links to dynamic article slugs." />
      <section className="section-base">
        <div className="container-base">
          <h2>Recent Articles</h2>
          <ul className="mt-6 space-y-3">
            {sampleArticles.map((article) => (
              <li key={article.slug}>
                <Link href={`/news/${article.slug}`} className="text-brand hover:underline">
                  {article.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
