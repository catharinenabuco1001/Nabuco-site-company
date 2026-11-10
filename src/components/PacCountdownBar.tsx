"use client";

import { useEffect, useState } from "react";
import { pacTopBar } from "@/data/pac";
import { CHECKOUT_URL, getEstadoOferta, msAteAbertura, type EstadoOferta } from "@/lib/pac-launch";

// Barra do topo (todas as páginas). Antes da abertura: contagem até
// DATA_ABERTURA_PAC; durante a live: preço da live até PROMO_FIM; depois:
// "inscrições abertas". Datas em src/lib/pac-launch.ts; a cor de fundo é a
// variável --pac-bar-bg, em src/app/globals.css.
//
// No servidor e no primeiro render mostra "--" nas caixinhas; o tempo só é
// calculado depois de montar no navegador, com Date.now() contra a data fixa
// (fuso no próprio ISO). Não mostra número negativo nem reinicia.
function partes(ms: number) {
  const s = Math.floor(ms / 1000);
  return [
    { label: "Dias", v: Math.floor(s / 86400) },
    { label: "Horas", v: Math.floor((s % 86400) / 3600) },
    { label: "Minutos", v: Math.floor((s % 3600) / 60) },
    { label: "Segundos", v: s % 60 },
  ];
}

const ROTULOS = ["Dias", "Horas", "Minutos", "Segundos"];

export function PacCountdownBar() {
  const [agora, setAgora] = useState<{ restante: number; estado: EstadoOferta } | null>(null);

  useEffect(() => {
    const update = () => setAgora({ restante: msAteAbertura(), estado: getEstadoOferta() });
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, []);

  if (agora && agora.estado !== "antes") {
    return (
      <div className="bg-[var(--pac-bar-bg)] text-[#F2F0EB]">
        <div className="mx-auto flex w-full max-w-8xl flex-col items-center justify-center gap-2 px-5 py-2.5 text-center sm:flex-row sm:gap-5 sm:px-8 lg:px-12">
          <p className="text-[12px] sm:text-sm font-bold uppercase tracking-wide">
            {agora.estado === "live" ? pacTopBar.live : `✅ ${pacTopBar.depois}`}
          </p>
          <a
            href={CHECKOUT_URL}
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

  const caixas =
    agora === null
      ? ROTULOS.map((label) => ({ label, txt: "--" }))
      : partes(agora.restante).map((p) => ({ label: p.label, txt: String(p.v).padStart(2, "0") }));

  return (
    <div className="bg-[var(--pac-bar-bg)] text-[#F2F0EB]">
      <div
        role="timer"
        aria-live="off"
        className="mx-auto flex w-full max-w-8xl flex-col items-center justify-center gap-2 px-5 py-2.5 text-center sm:flex-row sm:justify-between sm:gap-6 sm:px-8 sm:text-left lg:px-12"
      >
        <span className="sr-only">Inscrições abertas em 16 de novembro, às 20h</span>
        <div>
          <p aria-hidden="true" className="text-[11px] sm:text-sm font-bold uppercase tracking-wide">
            ⚠️ As inscrições do PAC abrem dia 16 de novembro, às 20h
          </p>
          <p className="mt-0.5 text-[11px] sm:text-xs opacity-90">{pacTopBar.antesLinha2}</p>
        </div>
        <div aria-hidden="true" className="flex shrink-0 gap-1.5 sm:gap-2">
          {caixas.map((c) => (
            <div
              key={c.label}
              className="flex min-w-[46px] flex-col items-center rounded-md border border-white/25 bg-white/10 px-1.5 py-1 sm:min-w-[54px]"
            >
              <span className="font-sans text-base sm:text-xl font-bold leading-none tabular-nums">
                {c.txt}
              </span>
              <span className="mt-0.5 text-[9px] sm:text-[10px] uppercase tracking-wide opacity-80">
                {c.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
