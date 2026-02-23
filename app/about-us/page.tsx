import { FeatureGrid } from "@/components/FeatureGrid";
import { Hero } from "@/components/Hero";

export default function AboutPage() {
  return (
    <>
      <Hero title="Building the future of everyday logistics" copy="Wingxtra is a Ghanaian technology company reimagining how cities move food, essentials, and healthcare in real time." />
      <section className="section"><div className="container"><h2>Our mission</h2><p>Make reliable same-minute delivery accessible to every neighborhood through safe autonomous aviation.</p></div></section>
      <section className="section"><div className="container"><h2>Our vision</h2><p>Become the infrastructure layer for on-demand commerce and care across Africa’s fastest-growing cities.</p></div></section>
      <FeatureGrid title="Our values" items={[
        { title: "Safety first", body: "We build trust through rigorous operations and transparent standards." },
        { title: "Customer obsession", body: "Every experience is designed for speed, confidence, and simplicity." },
        { title: "Build for impact", body: "We prioritize solutions that improve access at city scale." },
      ]} />
    </>
  );
}
