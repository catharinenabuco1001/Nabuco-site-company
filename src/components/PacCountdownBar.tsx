"use client";

import { useCtaUrl, usePromo } from "@/components/PacLaunch";
import { pacTopBar } from "@/data/pac";
import { formatarRestante } from "@/lib/pac-launch";

// Barra do topo (todas as páginas). Na promoção: aviso + contagem HH:MM:SS
// até PROMO_FIM; depois, "inscrições abertas". Botão de compra nos dois.
// A cor de fundo é a variável --pac-bar-bg, em src/app/globals.css.
export function PacCountdownBar() {
  const href = useCtaUrl();
  const { estado, ms } = usePromo();
  const promo = estado === "promo";

  return (
    <div className="bg-[var(--pac-bar-bg)] text-[#F2F0EB]">
      <div className="mx-auto flex w-full max-w-8xl flex-col items-center justify-center gap-2 px-5 py-2.5 text-center sm:flex-row sm:gap-5 sm:px-8 lg:px-12">
        <p className="text-[12px] sm:text-sm font-bold uppercase tracking-wide">
          {promo ? pacTopBar.promo : pacTopBar.cheio}
        </p>
        {promo && (
          <span
            role="timer"
            aria-live="off"
            aria-label="Tempo até o fim do preço especial"
            className="rounded-md border border-white/30 bg-white/10 px-2.5 py-1 font-sans text-sm font-bold tabular-nums"
          >
            {ms === null ? "--:--:--" : formatarRestante(ms)}
          </span>
        )}
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
