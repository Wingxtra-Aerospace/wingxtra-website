import Link from "next/link";

type HeroProps = {
  eyebrow?: string;
  title: string;
  copy: string;
  cta?: { label: string; href: string };
};

export function Hero({ eyebrow, title, copy, cta }: HeroProps) {
  return (
    <section className="hero fade-up">
      <div className="container">
        {eyebrow ? <p><strong>{eyebrow}</strong></p> : null}
        <h1>{title}</h1>
        <p>{copy}</p>
        {cta ? <p><Link className="btn btn-primary" href={cta.href}>{cta.label}</Link></p> : null}
      </div>
    </section>
  );
}
