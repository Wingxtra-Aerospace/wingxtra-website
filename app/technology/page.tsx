import { FAQ } from "@/components/FAQ";
import { FeatureGrid } from "@/components/FeatureGrid";
import { Hero } from "@/components/Hero";
import { Steps } from "@/components/Steps";
import { CTABand } from "@/components/CTABand";

export default function TechnologyPage() {
  return (
    <>
      <Hero title="Technology that makes fast delivery dependable" copy="Wingxtra combines autonomous aircraft, remote operations, and intelligence systems for safe urban logistics." />
      <FeatureGrid
        title="Specifications"
        columns={4}
        items={[
          { title: "Speed", body: "Up to 120 km/h cruise speed" },
          { title: "Carrying capacity", body: "2.5 kg optimized payload" },
          { title: "Range", body: "25 km operational radius" },
          { title: "Altitude", body: "Low-altitude mapped corridors" },
        ]}
      />

      <section className="section"><div className="container"><h2>Meet your delivery guy</h2><p>Each dispatch is flown by an autonomous mission stack and supervised by certified remote operators who monitor route safety, payload status, and handoff precision.</p></div></section>

      <Steps title="Order experience timeline" steps={[
        { index: "00:00", title: "Order placed", body: "Customer checks out with Wingxtra-enabled delivery." },
        { index: "02:10", title: "Dock prep", body: "Merchant package is weighed, sealed, and assigned." },
        { index: "05:40", title: "In flight", body: "Autonomous drone departs and sends live status updates." },
        { index: "11:30", title: "Delivered", body: "Package arrives and customer confirms secure handoff." },
      ]} />

      <FeatureGrid title="Remote Operations" columns={2} items={[
        { title: "Mission control", body: "Continuous fleet telemetry, geofence monitoring, and flight health checks." },
        { title: "Safety overlays", body: "Automated contingencies with manual intervention pathways when needed." },
      ]} />
      <FeatureGrid title="Operational Intelligence" columns={2} items={[
        { title: "Demand forecasting", body: "Predictive routing allocates assets before spikes start." },
        { title: "Performance analytics", body: "SLA, route efficiency, and customer timing data improve every cycle." },
      ]} />
      <FAQ items={[
        { q: "Is Wingxtra fully autonomous?", a: "Flights are autonomous with human supervision and intervention protocols." },
        { q: "How do you ensure safety?", a: "By combining redundancy, geofencing, route validation, and operator oversight." },
        { q: "Can the system expand city-wide?", a: "Yes, the network is built to scale corridor-by-corridor as demand grows." },
      ]} />
      <CTABand title="See the Wingxtra platform in action" body="Book a technical walkthrough with our operations and engineering team." />
    </>
  );
}
