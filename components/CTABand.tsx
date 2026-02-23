import Link from "next/link";

export function CTABand({ title, body, href = "/contact", label = "Talk to us" }: { title: string; body: string; href?: string; label?: string }) {
  return (
    <section className="section">
      <div className="container">
        <div className="cta-band">
          <h2>{title}</h2>
          <p style={{ color: "#dce8ff" }}>{body}</p>
          <Link className="btn btn-secondary" href={href}>{label}</Link>
        </div>
      </div>
    </section>
  );
}
