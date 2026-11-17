"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { site } from "@/content/site";

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="relative z-40 bg-lime">
      <div className="flex items-center justify-between px-5 py-5 md:px-12 md:py-7">
        <Link
          href="/"
          onClick={() => setOpen(false)}
          className="text-xl font-extrabold [font-stretch:125%] md:text-2xl"
        >
          {site.name}
        </Link>
        <nav aria-label="Main" className="hidden gap-7 text-base font-semibold md:flex">
          {site.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={pathname.startsWith(item.href) ? "page" : undefined}
              className="underline-offset-8 decoration-2 hover:underline aria-[current=page]:underline"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <button
          type="button"
          className="min-h-11 px-1 text-base font-bold md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "close" : "menu"}
        </button>
      </div>
      {open && (
        <nav
          id="mobile-menu"
          aria-label="Main"
          className="absolute inset-x-0 top-full flex h-[calc(100dvh-100%)] flex-col justify-center gap-2 bg-blue px-5 md:hidden"
        >
          {site.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="display py-2 text-6xl text-lime"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
