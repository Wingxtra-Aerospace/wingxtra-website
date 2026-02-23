import { Button } from "@/components/Button";
import { PageHero } from "@/components/PageHero";

export default function HomePage() {
  return (
    <>
      <PageHero title="Delivering Reliable Logistics Solutions" subtitle="Welcome to WingXtra. This home page is a starter section with a reusable design system, responsive navigation, and route scaffolding." />
      <section className="section-base">
        <div className="container-base">
          <h2>Featured Sections</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            <article className="rounded-2xl border border-slate-200 p-6">
              <h3>Solutions</h3>
              <p className="mt-3 text-slate-600">Explore placeholder logistics offerings for enterprise and retail shipping.</p>
            </article>
            <article className="rounded-2xl border border-slate-200 p-6">
              <h3>Technology</h3>
              <p className="mt-3 text-slate-600">Learn about the technology foundation and data capabilities powering operations.</p>
            </article>
            <article className="rounded-2xl border border-slate-200 p-6">
              <h3>Latest News</h3>
              <p className="mt-3 text-slate-600">Read updates and announcements through static and dynamic news routes.</p>
            </article>
          </div>
          <div className="mt-8">
            <Button href="/get-delivery">Get Delivery</Button>
          </div>
        </div>
      </section>
    </>
  );
}
