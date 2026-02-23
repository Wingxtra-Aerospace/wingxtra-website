import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="mx-auto flex max-w-container flex-col gap-6 px-4 py-10 text-sm text-slate-600 md:flex-row md:items-center md:justify-between md:px-6">
        <p>© {new Date().getFullYear()} WingXtra. All rights reserved.</p>
        <div className="flex flex-wrap gap-4">
          <Link href="/legal/terms" className="hover:text-brand">
            Terms
          </Link>
          <Link href="/legal/privacy" className="hover:text-brand">
            Privacy
          </Link>
          <Link href="/contact" className="hover:text-brand">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}
