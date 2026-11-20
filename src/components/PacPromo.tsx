"use client";

import { useEffect, useState } from "react";
import { useCtaUrl, usePromo } from "@/components/PacLaunch";
import { textosPreco } from "@/data/pac";
import { BOLA_DESTINO, formatarRestante } from "@/lib/pac-launch";

// Banner e bola da promoção (/pac). Só aparecem no estado "promo"; quando o
// preço volta ao cheio, não renderizam nada.

const BANNER = {
  titulo: "ÚLTIMAS HORAS: PROMOÇÃO ATÉ 23H59 DE HOJE",
  tituloCurto: "PROMOÇÃO ATÉ 23H59 DE HOJE",
  subtitulo:
    "Não deixa essa oportunidade passar. Amanhã o PAC volta pra R$ 349,90 à vista ou 12x de R$ 36,19.",
  botao: "Garantir meu preço agora",
};

function partes(ms: number | null) {
  if (ms === null) return ["--", "--", "--"];
  const s = Math.floor(ms / 1000);
  return [Math.floor(s / 3600), Math.floor((s % 3600) / 60), s % 60].map((n) =>
    String(n).padStart(2, "0")
  );
}

export function PacPromoBanner({ variant = "grande" }: { variant?: "grande" | "compacto" }) {
  const { estado, ms } = usePromo();
  const href = useCtaUrl();
  if (estado !== "promo") return null;
  const t = textosPreco("promo");
  const [h, m, s] = partes(ms);
  const grande = variant === "grande";

  const contagem = (
    <div
      role="timer"
      aria-live="off"
      aria-label="Tempo até o fim da promoção"
      className="flex items-center justify-center gap-2"
    >
      {[
        { v: h, l: "Horas" },
        { v: m, l: "Min" },
        { v: s, l: "Seg" },
      ].map((c, i) => (
        <div key={c.l} className="flex items-center gap-2">
          {i > 0 && <span className="text-2xl font-bold">:</span>}
          <div
            className={`flex flex-col items-center rounded-xl border border-white/40 bg-white/15 ${
              grande ? "min-w-[78px] px-3 py-2" : "min-w-[60px] px-2 py-1.5"
            }`}
          >
            <span className={`font-bold tabular-nums leading-none ${grande ? "text-4xl sm:text-5xl" : "text-2xl"}`}>
              {c.v}
            </span>
            <span className="mt-1 text-[10px] font-semibold uppercase tracking-wide">{c.l}</span>
          </div>
        </div>
      ))}
    </div>
  );

  const botao = (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex w-full items-center justify-center rounded-full bg-white font-bold uppercase tracking-wide text-[#B3261E] transition-opacity hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:w-auto ${
        grande ? "px-8 py-4 text-base" : "px-6 py-3 text-sm"
      }`}
    >
      {BANNER.botao}
    </a>
  );

  if (!grande) {
    return (
      <div className="mx-auto mb-8 flex max-w-xl flex-col items-center gap-4 rounded-2xl bg-gradient-to-br from-[#C62828] to-[#B3261E] px-5 py-6 text-center text-white sm:px-8">
        <p className="text-lg font-bold uppercase tracking-wide">{BANNER.tituloCurto}</p>
        {contagem}
        {botao}
      </div>
    );
  }

  return (
    <section
      aria-label="Promoção até 23h59 de hoje"
      className="bg-gradient-to-br from-[#C62828] to-[#B3261E] text-white"
    >
      <div className="mx-auto flex w-full max-w-5xl flex-col items-center gap-6 px-5 py-12 text-center sm:px-8 sm:py-16">
        <h2 className="font-sans text-[28px] font-extrabold uppercase leading-tight sm:text-5xl">{BANNER.titulo}</h2>
        <p className="max-w-2xl text-base sm:text-lg">{BANNER.subtitulo}</p>
        {contagem}
        <p className="text-lg font-semibold sm:text-xl">
          {t.avista} à vista · ou {t.parcelado}
        </p>
        {botao}
      </div>
    </section>
  );
}

// Bola flutuante no canto inferior direito, com a contagem. Some quando o
// bloco de preço (#oferta) está visível e pode ser fechada (vale pra sessão).
// Fica acima do botão de WhatsApp, que ocupa o canto.
export function PacPromoBola() {
  const { estado, ms } = usePromo();
  const [fechada, setFechada] = useState(true);
  const [ofertaVisivel, setOfertaVisivel] = useState(false);

  useEffect(() => {
    try {
      setFechada(sessionStorage.getItem("pac-bola-fechada") === "1");
    } catch {
      setFechada(false);
    }
    const alvo = document.getElementById("oferta");
    if (!alvo) return;
    // Bloco de preço na tela? (pelo menos ~120px dele visíveis)
    const checar = () => {
      const r = alvo.getBoundingClientRect();
      setOfertaVisivel(r.top < window.innerHeight - 120 && r.bottom > 120);
    };
    checar();
    window.addEventListener("scroll", checar, { passive: true });
    window.addEventListener("resize", checar);
    return () => {
      window.removeEventListener("scroll", checar);
      window.removeEventListener("resize", checar);
    };
  }, []);

  if (estado !== "promo" || fechada || ofertaVisivel) return null;

  const fechar = () => {
    setFechada(true);
    try {
      sessionStorage.setItem("pac-bola-fechada", "1");
    } catch {
      /* sem sessionStorage: some só até recarregar */
    }
  };

  return (
    <div className="pac-bola fixed right-4 z-30 sm:right-6">
      <a
        href={BOLA_DESTINO}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Acaba hoje: garantir o preço especial do PAC. Faltam ${
          ms === null ? "algumas horas" : formatarRestante(ms)
        }.`}
        className="pac-bola-anel relative flex h-[88px] w-[88px] flex-col items-center justify-center rounded-full border-[3px] border-white bg-[#C62828] text-center text-white shadow-xl shadow-black/30 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C9A24C] sm:h-[104px] sm:w-[104px]"
      >
        <span className="text-[10px] font-bold uppercase tracking-wide sm:text-[11px]">Acaba hoje</span>
        <span className="mt-0.5 text-sm font-extrabold tabular-nums sm:text-base">
          {ms === null ? "--:--:--" : formatarRestante(ms)}
        </span>
      </a>
      <button
        type="button"
        onClick={fechar}
        aria-label="Fechar aviso da promoção"
        className="absolute -left-1 -top-1 flex h-7 w-7 items-center justify-center rounded-full border border-white bg-[#0F2E22] text-sm text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#C9A24C]"
      >
        ×
      </button>
    </div>
  );
}
