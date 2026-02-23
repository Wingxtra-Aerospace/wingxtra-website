import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";

type ArticlePageProps = {
  params: { slug: string };
};

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const slugTitle = params.slug.replace(/-/g, " ");
  const title = slugTitle.charAt(0).toUpperCase() + slugTitle.slice(1);

  return { title: `News: ${title}` };
}

export default function NewsArticlePage({ params }: ArticlePageProps) {
  const readableSlug = params.slug.replace(/-/g, " ");

  return (
    <>
      <PageHero title="News Article" subtitle={`Placeholder content for the "${readableSlug}" article.`} />
      <section className="section-base">
        <div className="container-base">
          <h2>Article Details</h2>
          <p className="mt-4 text-slate-600">This dynamic route demonstrates how to render a news page using slug-based URLs.</p>
        </div>
      </section>
    </>
  );
}
