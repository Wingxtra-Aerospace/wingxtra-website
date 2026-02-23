import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = { title: "Solutions" };

export default function SolutionsPage() {
  return (
    <>
      <PageHero title="Solutions" subtitle="Placeholder overview of logistics and delivery solutions." />
      <section className="section-base">
        <div className="container-base">
          <h2>Service Categories</h2>
          <p className="mt-4 text-slate-600">This section can describe same-day delivery, freight forwarding, and fulfillment services.</p>
        </div>
      </section>
    </>
  );
}
