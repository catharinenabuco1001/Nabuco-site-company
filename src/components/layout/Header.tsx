"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";
import { CTA } from "@/components/ui/CTA";
import { MobileMenu } from "@/components/layout/MobileMenu";

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 w-full transition-all duration-300",
        scrolled
          ? "bg-cream/90 backdrop-blur-md border-b border-ink-900/10"
          : "bg-transparent border-b border-transparent"
      )}
    >
      <div className="mx-auto w-full max-w-8xl px-5 sm:px-8 lg:px-12">
        <div className="flex h-16 sm:h-20 items-center justify-between">
          <Link
            href="/"
            className="font-serif text-lg sm:text-xl tracking-wide text-ink-900"
          >
            CATHARINE NABUCO
          </Link>

          <nav className="hidden lg:flex items-center gap-8" aria-label="Navegação principal">
            {siteConfig.nav.map((item) => {
              const active =
                item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "text-sm font-sans font-medium uppercase tracking-wide underline-grow transition-colors",
                    active ? "text-plum-600" : "text-ink-800 hover:text-plum-600"
                  )}
                  aria-current={active ? "page" : undefined}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden lg:block">
            <CTA href={siteConfig.navCta.href} variant="primary" className="text-xs px-5 py-2.5">
              {siteConfig.navCta.label}
            </CTA>
          </div>

          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            className="lg:hidden inline-flex items-center justify-center h-10 w-10 rounded-full border border-ink-900/20 text-ink-900"
            aria-label="Abrir menu"
            aria-expanded={menuOpen}
          >
            <svg width="18" height="14" viewBox="0 0 18 14" fill="none" aria-hidden="true">
              <path d="M0 1H18" stroke="currentColor" strokeWidth="1.5" />
              <path d="M0 7H18" stroke="currentColor" strokeWidth="1.5" />
              <path d="M0 13H18" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          </button>
        </div>
      </div>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </header>
  );
}
