import { CTABand } from "@/components/CTABand";
import { FAQ } from "@/components/FAQ";
import { FeatureGrid } from "@/components/FeatureGrid";
import { Hero } from "@/components/Hero";

export default function SolutionsPage() {
  return (
    <>
      <Hero title="Solutions built for high-demand delivery" copy="Wingxtra works with operators that need speed, consistency, and visibility from checkout to doorstep." />
      <FeatureGrid
        items={[
          { title: "Rapid fulfillment", body: "Move orders faster than road dispatch in dense traffic corridors." },
          { title: "Operational visibility", body: "Track every leg of the route with real-time status updates." },
          { title: "Scalable capacity", body: "Add drone lanes to absorb lunchtime and evening spikes." },
        ]}
      />

      <section className="section"><div className="container"><p><strong>Easy to use:</strong> integrate Wingxtra via lightweight ordering APIs or partner dashboards.</p></div></section>

      <FeatureGrid
        title="Restaurants"
        columns={2}
        items={[
          { title: "Hot food, faster", body: "Reduce handoff times and protect food quality on every route." },
          { title: "Reliable busy-hour dispatch", body: "Avoid rider shortages and missed promises during peak demand." },
        ]}
      />
      <FeatureGrid
        title="Convenience & Grocery"
        columns={2}
        items={[
          { title: "Top-up shopping in minutes", body: "Own the quick-refill category with consistent sub-20 minute arrivals." },
          { title: "Higher retention", body: "Faster repeat fulfillment improves customer loyalty and order frequency." },
        ]}
      />
      <FeatureGrid
        title="Healthcare"
        columns={2}
        items={[
          { title: "Critical deliveries", body: "Transport urgent medications and diagnostics with verified chain-of-custody." },
          { title: "Sensitive payload control", body: "Operational protocols support secure handling and documented transfer." },
        ]}
      />

      <FeatureGrid
        title="Impact"
        items={[
          { title: "<20 mins", body: "Average target delivery SLA in active urban zones." },
          { title: "3 min 43 sec", body: "Fastest recorded short-corridor dispatch from dock to destination." },
          { title: "Higher conversion", body: "Businesses report stronger checkout completion with instant delivery options." },
        ]}
      />

      <FAQ items={[
        { q: "Can Wingxtra integrate with my order stack?", a: "Yes, integrations are available for modern POS, e-commerce, and custom systems." },
        { q: "How do you handle weather?", a: "Our systems evaluate flight conditions continuously and reroute or pause if required." },
        { q: "How quickly can we launch?", a: "Most partners can onboard in weeks depending on location and operational readiness." },
      ]} />
      <CTABand title="Build your instant delivery lane" body="Talk to our team about onboarding your stores and service zones." href="/contact" label="Contact sales" />
    </>
  );
}
