import { CTABand } from "@/components/CTABand";
import { FAQ } from "@/components/FAQ";
import { Hero } from "@/components/Hero";
import { Steps } from "@/components/Steps";

export default function GetDeliveryPage() {
  return (
    <>
      <Hero title="Get delivery with Wingxtra" copy="Fastest drone fulfillment in active zones. Typical dispatch targets under 20 minutes." cta={{ label: "Start a request", href: "/contact" }} />
      <section className="section"><div className="container"><h2>Drone delivery zones</h2><div className="grid" style={{gridTemplateColumns:'repeat(3,minmax(0,1fr))'}}><div className="card">Kumasi</div><div className="card">Accra</div><div className="card">Nkawkaw</div></div></div></section>
      <Steps title="How it works" steps={[
        { index: "01", title: "Choose a partner", body: "Order from a Wingxtra-enabled restaurant, pharmacy, or retailer." },
        { index: "02", title: "Confirm location", body: "Select your preferred drop-off point and receive ETA updates." },
        { index: "03", title: "Receive delivery", body: "Meet your order at the assigned safe handoff location." },
        { index: "04", title: "Reorder anytime", body: "Save your favorite partners for even faster checkout." },
      ]} />
      <CTABand title="Partner references" body="Wingxtra works with local merchants and service operators to deliver everyday essentials." />
      <FAQ items={[
        { q: "What is the delivery fee?", a: "Fees vary by partner and zone and are shown before checkout." },
        { q: "Can I track my order?", a: "Yes, live status updates are available from dispatch to handoff." },
      ]} />
    </>
  );
}
