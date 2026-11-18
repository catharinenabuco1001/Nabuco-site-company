"use client";

import { useCtaUrl } from "@/components/PacLaunch";
import { pacTopBarAberto } from "@/data/pac";

// Barra do topo (todas as páginas): inscrições abertas, com o botão de
// compra. A cor de fundo é a variável --pac-bar-bg, em src/app/globals.css.
export function PacCountdownBar() {
  const href = useCtaUrl();
  return (
    <div className="bg-[var(--pac-bar-bg)] text-[#F2F0EB]">
      <div className="mx-auto flex w-full max-w-8xl flex-col items-center justify-center gap-2 px-5 py-2.5 text-center sm:flex-row sm:gap-5 sm:px-8 lg:px-12">
        <p className="text-[12px] sm:text-sm font-bold uppercase tracking-wide">✅ {pacTopBarAberto}</p>
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-[#F2F0EB] px-4 py-1.5 text-[11px] sm:text-xs font-semibold uppercase tracking-wide text-[var(--pac-bar-bg)] transition-opacity hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F2F0EB]"
        >
          Garantir minha vaga
        </a>
      </div>
    </div>
  );
}
