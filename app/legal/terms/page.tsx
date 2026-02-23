import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = { title: "Terms" };

export default function TermsPage() {
  return (
    <>
      <PageHero title="Terms & Conditions" subtitle="Placeholder legal terms for using WingXtra services." />
      <section className="section-base">
        <div className="container-base">
          <h2>Terms Overview</h2>
          <p className="mt-4 text-slate-600">Replace this with legal text covering account use, service responsibilities, and limitations.</p>
        </div>
      </section>
    </>
  );
}
