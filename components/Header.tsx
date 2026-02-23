import Link from "next/link";

const links = [
  ["Home", "/"],
  ["Solutions", "/solutions"],
  ["Technology", "/technology"],
  ["About", "/about-us"],
  ["Contact", "/contact"],
  ["Get delivery", "/get-delivery"],
];

export function Header() {
  return (
    <header className="header">
      <div className="container nav-wrap">
        <Link href="/" aria-label="Wingxtra home">
          <strong>Wingxtra</strong>
        </Link>
        <nav aria-label="Primary" className="nav-links">
          {links.map(([label, href]) => (
            <Link key={href} href={href}>{label}</Link>
          ))}
        </nav>
        <Link href="/get-delivery" className="btn btn-primary">Book a delivery</Link>
      </div>
    </header>
  );
}
