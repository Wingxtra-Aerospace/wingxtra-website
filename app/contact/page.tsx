import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <>
      <PageHero title="Contact" subtitle="Placeholder contact information and support channels." />
      <section className="section-base">
        <div className="container-base">
          <h2>Get in Touch</h2>
          <p className="mt-4 text-slate-600">Add your office addresses, phone numbers, and a contact form in this section.</p>
        </div>
      </section>
    </>
  );
}
