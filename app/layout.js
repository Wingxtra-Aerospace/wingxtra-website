import Link from 'next/link';
import './globals.css';
import NewsletterForm from '@/components/forms/NewsletterForm';

export const metadata = {
  title: 'Wingxtra',
  description: 'Wingxtra website'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header className="header">
          <nav className="nav">
            <Link href="/">Home</Link>
            <Link href="/news">News</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/get-delivery">Get Delivery</Link>
          </nav>
        </header>
        <main className="site-container">{children}</main>
        <footer className="footer">
          <div className="site-container footer-inner">
            <p>Wingxtra</p>
            <NewsletterForm />
          </div>
        </footer>
      </body>
    </html>
  );
}
