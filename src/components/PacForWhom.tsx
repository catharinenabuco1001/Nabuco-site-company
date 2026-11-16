"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { CTA } from "@/components/ui/CTA";
import { pacForWhomQuotes, pacForWhomTabs } from "@/data/pac";
import { useCtaUrl } from "@/components/PacLaunch";

type Foto = { src: string; w: number; h: number; alt: string; legenda: string };

// Seção "Será que o PAC é para mim?": 3 abas acessíveis (setas, Home/End),
// empilhadas à esquerda, com a foto de bastidores à direita no desktop.
export function PacForWhom({ foto }: { foto?: Foto | null }) {
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
    <div
      className={`mt-12 grid grid-cols-1 gap-10 ${
        foto ? "lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] lg:gap-12" : "mx-auto max-w-3xl"
      }`}
    >
      <div className="min-w-0">
        <div
          role="tablist"
          aria-label="Escolha o seu caso"
          aria-orientation="vertical"
          className="flex flex-col gap-3"
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
              className={`pac-tab-pulse flex min-h-[56px] w-full items-center justify-between gap-4 rounded-2xl border px-5 py-3 text-left text-lg sm:text-xl font-bold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C9A24C] ${
                active === i
                  ? "border-[#C9A24C] bg-[var(--pac-aba-ativa-bg)] text-[var(--pac-aba-ativa-texto)]"
                  : "border-[#C9A24C] bg-[var(--pac-aba-bg)] text-[var(--pac-aba-texto)]"
              }`}
            >
              <span>{tab.label}</span>
              <span aria-hidden className="text-2xl leading-none">
                ›
              </span>
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
              className="mt-6 rounded-2xl border border-gold-500/40 bg-gold-500/[0.06] p-7 sm:p-10"
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

      {foto && (
        <figure className="mx-auto w-full max-w-[420px] self-start lg:mx-0 lg:justify-self-end">
          <Image
            src={foto.src}
            alt={foto.alt}
            width={foto.w}
            height={foto.h}
            quality={90}
            loading="lazy"
            sizes="(min-width: 1024px) 420px, 100vw"
            className="h-auto w-full rounded-2xl border border-[var(--pac-foto-borda)] shadow-[var(--pac-foto-sombra)]"
          />
          <figcaption className="mt-2 text-sm text-[var(--pac-legenda)]">{foto.legenda}</figcaption>
        </figure>
      )}
    </div>
  );
}
