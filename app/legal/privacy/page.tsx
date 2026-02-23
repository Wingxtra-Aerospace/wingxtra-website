import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = { title: "Privacy" };

export default function PrivacyPage() {
  return (
    <>
      <PageHero title="Privacy Policy" subtitle="Placeholder privacy commitments and data handling information." />
      <section className="section-base">
        <div className="container-base">
          <h2>Privacy Overview</h2>
          <p className="mt-4 text-slate-600">Use this page to explain data collection, use, retention, and customer rights.</p>
        </div>
      </section>
    </>
  );
}
