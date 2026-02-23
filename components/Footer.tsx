import Link from "next/link";

export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <h3>Wingxtra</h3>
            <p>Autonomous aerial logistics for African cities.</p>
          </div>
          <div>
            <h4>Company</h4>
            <p><Link href="/about-us">About</Link></p>
            <p><Link href="/technology">Technology</Link></p>
            <p><Link href="/solutions">Solutions</Link></p>
          </div>
          <div>
            <h4>Support</h4>
            <p><Link href="/contact">Contact</Link></p>
            <p><Link href="/get-delivery">Get delivery</Link></p>
          </div>
          <div>
            <h4>Legal</h4>
            <p><Link href="/legal/privacy-policy">Privacy policy</Link></p>
            <p><Link href="/legal/terms-of-service">Terms of service</Link></p>
            <p><Link href="/legal/cookie-policy">Cookie policy</Link></p>
          </div>
        </div>
      </div>
    </footer>
  );
}
