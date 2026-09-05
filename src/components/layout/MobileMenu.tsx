"use client";

import { useEffect } from "react";
import Link from "next/link";
import { siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";

export function MobileMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <div
      className={cn(
        "fixed inset-0 z-50 lg:hidden transition-opacity duration-300",
        open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      )}
      role="dialog"
      aria-modal="true"
      aria-label="Menu de navegação"
    >
      <div
        className="absolute inset-0 bg-ink-900/40 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />
      <div
        className={cn(
          "absolute right-0 top-0 h-full w-[86%] max-w-sm bg-cream shadow-2xl transition-transform duration-300 ease-out flex flex-col",
          open ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex items-center justify-between px-6 h-16 border-b border-ink-900/10">
          <span className="font-serif text-lg text-ink-900">Menu</span>
          <button
            type="button"
            onClick={onClose}
            aria-label="Fechar menu"
            className="h-10 w-10 inline-flex items-center justify-center rounded-full border border-ink-900/20"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M1 1L13 13M13 1L1 13" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          </button>
        </div>

        <nav className="flex flex-col gap-1 px-6 py-8" aria-label="Navegação mobile">
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="py-3 text-xl font-serif text-ink-900 border-b border-ink-900/5"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="mt-auto px-6 pb-8">
          <Link
            href={siteConfig.navCta.href}
            className="block text-center rounded-full bg-ink-900 text-cream py-3 text-sm font-semibold uppercase tracking-wide"
          >
            {siteConfig.navCta.label}
          </Link>
        </div>
      </div>
    </div>
  );
}
