import Link from "next/link";
import type { ReactNode } from "react";

const styles = {
  charcoal: "bg-charcoal text-lime hover:bg-blue hover:text-white",
  lime: "bg-lime text-charcoal hover:bg-orange",
  orange: "bg-orange text-charcoal hover:bg-charcoal hover:text-lime",
};

export function Button({
  href,
  children,
  variant = "charcoal",
}: {
  href: string;
  children: ReactNode;
  variant?: keyof typeof styles;
}) {
  const external = href.startsWith("http") || href.startsWith("mailto:");
  const cls = `inline-block px-7 py-4 text-base font-bold lowercase transition-colors ${styles[variant]}`;
  return external ? (
    <a href={href} className={cls} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
      {children}
    </a>
  ) : (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}
