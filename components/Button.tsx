import Link from "next/link";
import { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
};

export function Button({ href, children }: ButtonProps) {
  return (
    <Link
      href={href}
      className="inline-flex items-center justify-center rounded-full bg-brand px-6 py-3 font-semibold text-white transition hover:bg-brand-dark"
    >
      {children}
    </Link>
  );
}
