import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = { title: "About Us" };

export default function AboutUsPage() {
  return (
    <>
      <PageHero title="About Us" subtitle="Placeholder company story, mission, and values." />
      <section className="section-base">
        <div className="container-base">
          <h2>Our Mission</h2>
          <p className="mt-4 text-slate-600">Use this section to describe your mission, leadership team, and business timeline.</p>
        </div>
      </section>
    </>
  );
}
