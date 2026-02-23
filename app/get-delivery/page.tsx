import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = { title: "Get Delivery" };

export default function GetDeliveryPage() {
  return (
    <>
      <PageHero title="Get Delivery" subtitle="Placeholder onboarding page for delivery requests." />
      <section className="section-base">
        <div className="container-base">
          <h2>Start Your Shipment</h2>
          <p className="mt-4 text-slate-600">This section can include service options, quote forms, and account signup flows.</p>
        </div>
      </section>
    </>
  );
}
