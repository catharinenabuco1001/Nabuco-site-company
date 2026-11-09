"use client";

import { useEffect, useState } from "react";
import { CHECKOUT_URL, msAteAbertura } from "@/lib/pac-launch";

// Barra de contagem do topo (todas as páginas), até DATA_ABERTURA_PAC
// (src/lib/pac-launch.ts). A cor de fundo é a variável --pac-bar-bg, em
// src/app/globals.css.
//
// No servidor e no primeiro render mostra "--" nas caixinhas; o tempo só é
// calculado depois de montar no navegador, com Date.now() contra a data fixa
// (fuso no próprio ISO). Na abertura vira a barra de "inscrições abertas",
// sem contagem negativa e sem reiniciar.
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
  const [restante, setRestante] = useState<number | null>(null);

  useEffect(() => {
    const update = () => setRestante(msAteAbertura());
    update();
    const id = setInterval(() => {
      const ms = msAteAbertura();
      setRestante(ms);
      if (ms === 0) clearInterval(id);
    }, 1000);
    return () => clearInterval(id);
  }, []);

  if (restante === 0) {
    return (
      <div className="bg-[var(--pac-bar-bg)] text-[#F2F0EB]">
        <div className="mx-auto flex w-full max-w-8xl flex-col items-center justify-center gap-2 px-5 py-2.5 text-center sm:flex-row sm:gap-5 sm:px-8 lg:px-12">
          <p className="text-[12px] sm:text-sm font-bold uppercase tracking-wide">
            ✅ Inscrições abertas: entre no PAC agora
          </p>
          <a
            href={CHECKOUT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-[#F2F0EB] px-4 py-1.5 text-[11px] sm:text-xs font-semibold uppercase tracking-wide text-[var(--pac-bar-bg)] transition-opacity hover:opacity-90"
          >
            Garantir minha vaga
          </a>
        </div>
      </div>
    );
  }

  const caixas =
    restante === null
      ? ROTULOS.map((label) => ({ label, txt: "--" }))
      : partes(restante).map((p) => ({ label: p.label, txt: String(p.v).padStart(2, "0") }));

  return (
    <div className="bg-[var(--pac-bar-bg)] text-[#F2F0EB]">
      <div
        role="timer"
        aria-live="off"
        className="mx-auto flex w-full max-w-8xl flex-col items-center justify-center gap-2 px-5 py-2.5 text-center sm:flex-row sm:justify-between sm:gap-6 sm:px-8 sm:text-left lg:px-12"
      >
        <span className="sr-only">Inscrições abertas em 16 de novembro, às 20h</span>
        <p aria-hidden="true" className="text-[11px] sm:text-sm font-bold uppercase tracking-wide">
          ⚠️ As inscrições do PAC abrem dia 16 de novembro, às 20h
        </p>
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
