"use client";

import { useRef, useState } from "react";
import { CTA } from "@/components/ui/CTA";
import { pacForWhomQuotes, pacForWhomTabs } from "@/data/pac";
import { useCtaUrl } from "@/components/PacLaunch";

// Seção "Será que o PAC é para mim?": 3 abas acessíveis (setas, Home/End).
export function PacForWhom() {
  const [active, setActive] = useState(0);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const href = useCtaUrl();

  const focusTab = (i: number) => {
    const n = pacForWhomTabs.length;
    const next = (i + n) % n;
    setActive(next);
    tabRefs.current[next]?.focus();
  };

  const onKeyDown = (e: React.KeyboardEvent, i: number) => {
    if (e.key === "ArrowRight" || e.key === "ArrowDown") focusTab(i + 1);
    else if (e.key === "ArrowLeft" || e.key === "ArrowUp") focusTab(i - 1);
    else if (e.key === "Home") focusTab(0);
    else if (e.key === "End") focusTab(pacForWhomTabs.length - 1);
    else return;
    e.preventDefault();
  };

  return (
    <div className="mt-12 max-w-4xl mx-auto">
      <div
        role="tablist"
        aria-label="Escolha o seu caso"
        className="flex gap-2 overflow-x-auto no-scrollbar -mx-5 px-5 sm:mx-0 sm:px-0 sm:justify-center"
      >
        {pacForWhomTabs.map((tab, i) => (
          <button
            key={tab.id}
            ref={(el) => {
              tabRefs.current[i] = el;
            }}
            id={`pac-tab-${tab.id}`}
            role="tab"
            type="button"
            aria-selected={active === i}
            aria-controls={`pac-panel-${tab.id}`}
            tabIndex={active === i ? 0 : -1}
            onClick={() => setActive(i)}
            onKeyDown={(e) => onKeyDown(e, i)}
            className={`shrink-0 whitespace-nowrap rounded-full border px-5 py-2.5 text-sm font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-500 ${
              active === i
                ? "border-gold-500 bg-gold-500 text-cream-900"
                : "border-ink-900/20 text-ink-900/75 hover:border-gold-500/60 hover:text-ink-900"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {pacForWhomTabs.map((tab, i) => {
        const quotes = pacForWhomQuotes[tab.id] ?? [];
        return (
          <div
            key={tab.id}
            id={`pac-panel-${tab.id}`}
            role="tabpanel"
            aria-labelledby={`pac-tab-${tab.id}`}
            tabIndex={0}
            hidden={active !== i}
            className="mt-8 rounded-2xl border border-gold-500/40 bg-gold-500/[0.06] p-7 sm:p-10"
          >
            <p className="font-serif text-2xl sm:text-3xl text-gold-300 leading-snug text-balance">
              {tab.title}
            </p>
            <p className="mt-5 text-base sm:text-lg text-ink-900/80 leading-relaxed">{tab.text}</p>

            {quotes.length > 0 && (
              <ul className="mt-7 grid grid-cols-1 sm:grid-cols-2 gap-3">
                {quotes.map((q) => (
                  <li
                    key={q}
                    className="border-l-2 border-gold-500 pl-4 font-serif text-lg italic text-ink-900/85"
                  >
                    “{q}”
                  </li>
                ))}
              </ul>
            )}

            {tab.extra && (
              <p className="mt-7 text-sm text-ink-900/65 leading-relaxed">{tab.extra}</p>
            )}

            <CTA href={href} variant="primary" external className="mt-8 px-8 py-4">
              Quero entrar no PAC
            </CTA>
          </div>
        );
      })}
    </div>
  );
}
