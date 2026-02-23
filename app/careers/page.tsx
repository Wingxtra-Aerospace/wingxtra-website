import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = { title: "Careers" };

export default function CareersPage() {
  return (
    <>
      <PageHero title="Careers" subtitle="Placeholder career page for open opportunities." />
      <section className="section-base">
        <div className="container-base">
          <h2>Open Roles</h2>
          <p className="mt-4 text-slate-600">Add departments, role listings, and hiring process details here.</p>
        </div>
      </section>
    </>
  );
}
