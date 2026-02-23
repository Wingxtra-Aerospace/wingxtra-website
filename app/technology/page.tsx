import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = { title: "Technology" };

export default function TechnologyPage() {
  return (
    <>
      <PageHero title="Technology" subtitle="Placeholder details about the platform and infrastructure." />
      <section className="section-base">
        <div className="container-base">
          <h2>Platform Highlights</h2>
          <p className="mt-4 text-slate-600">Use this area to explain routing intelligence, tracking tools, and API capabilities.</p>
        </div>
      </section>
    </>
  );
}
