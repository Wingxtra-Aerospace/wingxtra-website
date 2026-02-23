import Image from "next/image";
import { CTABand } from "@/components/CTABand";
import { FAQ } from "@/components/FAQ";
import { FeatureGrid } from "@/components/FeatureGrid";
import { Hero } from "@/components/Hero";
import { Steps } from "@/components/Steps";

export default function HomePage() {
  return (
    <>
      <Hero
        eyebrow="Aerial logistics platform"
        title="Delivery in minutes, not hours."
        copy="Wingxtra is building autonomous drone logistics for restaurants, groceries, healthcare providers, and urban retailers across Ghana."
        cta={{ label: "Get delivery", href: "/get-delivery" }}
      />

      <section className="section">
        <div className="container">
          <Image src="/images/hero-drone.svg" alt="Wingxtra drone illustration" width={1200} height={700} />
        </div>
      </section>

      <section className="section">
        <div className="container hero-band">
          <h2>What you need, when you need it. Without the wait.</h2>
          <p style={{ color: "#dbebff" }}>From hot meals to urgent medical supplies, our dispatch network routes your request to the nearest micro-fulfillment point and flies it directly to you.</p>
        </div>
      </section>

      <FeatureGrid
        title="Solutions"
        columns={3}
        items={[
          { title: "Restaurants", body: "Preserve food quality, reduce dispatch friction, and scale dinner rush deliveries." },
          { title: "Convenience & Grocery", body: "Deliver top-up baskets in under 20 minutes and improve repeat order retention." },
          { title: "Healthcare", body: "Move prescriptions, labs, and first-response kits with dependable chain-of-custody." },
        ]}
      />

      <Steps
        title="It’s simpler than you imagine"
        steps={[
          { index: "01", title: "Order confirmed", body: "The merchant receives your order and sends it to a Wingxtra drone dock." },
          { index: "02", title: "Packed for flight", body: "Items are secured in a payload container with route and customer data." },
          { index: "03", title: "Autonomous dispatch", body: "The drone flies a predefined corridor monitored by remote operations." },
          { index: "04", title: "Safe handoff", body: "You receive your package with identity and delivery confirmation." },
        ]}
      />

      <FeatureGrid
        title="Benefits"
        columns={4}
        items={[
          { title: "Fast", body: "Consistent under-20 minute deliveries in active zones." },
          { title: "Convenient", body: "No traffic delays, no parking constraints, no dispatch bottlenecks." },
          { title: "Eco friendly", body: "Electric propulsion helps reduce delivery emissions and noise footprint." },
          { title: "Accessibility & Reach", body: "Serve customers across hard-to-reach neighborhoods and peak periods." },
        ]}
      />

      <FeatureGrid
        title="News"
        items={[
          { title: "Wingxtra launches expanded drone corridor in Accra", body: "Our latest urban route adds 42 new drop points across central Accra." },
          { title: "How medical logistics teams use Wingxtra", body: "A look at emergency and pharmacy partners reducing patient wait time." },
          { title: "Behind the tech: safer autonomous dispatch", body: "Meet the operations and safety systems powering every delivery." },
        ]}
      />

      <FAQ
        items={[
          { q: "How quickly can I receive an order?", a: "Most completed deliveries inside active zones land between 10 and 20 minutes." },
          { q: "What items can be sent by drone?", a: "Meals, groceries, pharmacy items, and lightweight retail products that meet safety rules." },
          { q: "Do I need an app?", a: "No. Partner checkout and website ordering can both trigger Wingxtra delivery." },
        ]}
      />

      <CTABand title="Ready to offer instant delivery?" body="Bring Wingxtra to your business and unlock faster customer experiences." href="/solutions" label="Explore solutions" />
    </>
  );
}
