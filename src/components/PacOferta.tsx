"use client";

import { useEffect, useState } from "react";
import { CTA } from "@/components/ui/CTA";
import { PacNotice, useCtaUrl, useEstadoOferta } from "@/components/PacLaunch";
import {
  pacAvisoLog,
  pacComunidadeCta,
  pacMobileBarPreco,
  pacOfferPrice,
} from "@/data/pac";
import { COMUNIDADE_URL, LOG_FIM } from "@/lib/pac-launch";

// Aviso do módulo de logaritmo: só até LOG_FIM. Decide no navegador depois
// de montar (o HTML do build não mostra nada) e checa a cada 15s, pra sumir
// sozinho sem recarregar a página.
function useAvisoLog(): boolean {
  const [ativo, setAtivo] = useState(false);
  useEffect(() => {
    const fim = Date.parse(LOG_FIM);
    const update = () => setAtivo(Date.now() < fim);
    update();
    const id = setInterval(update, 15_000);
    return () => clearInterval(id);
  }, []);
  return ativo;
}

// Bloco de preço do card "Recupere sua base…": 2 cartões com o preço fixo e
// um único botão principal.
export function PacOfertaPreco() {
  const estado = useEstadoOferta();
  const href = useCtaUrl();
  const avisoLog = useAvisoLog();

  return (
    <div className="mt-10 border-t border-cream/15 pt-8 text-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left">
        {/* À vista: no celular fica em cima. */}
        <div className="rounded-2xl border-2 border-[#C9A24C] p-5 pt-7">
          <p className="text-xs font-semibold uppercase tracking-wide text-cream/70">À vista</p>
          <p className="mt-2 font-serif text-4xl sm:text-[2.6rem] leading-none text-cream">
            {pacOfferPrice.cash}
          </p>
        </div>
        {/* Parcelado. */}
        <div className="rounded-2xl border border-cream/20 p-5 pt-7">
          <p className="text-xs font-semibold uppercase tracking-wide text-cream/70">Parcelado</p>
          <p className="mt-2 font-serif text-2xl sm:text-3xl leading-tight text-cream">
            {pacOfferPrice.installments}
          </p>
          <p className="mt-2 text-xs text-cream/70">{pacOfferPrice.installmentsTotal}</p>
        </div>
      </div>
      <p className="mt-5 text-xs text-cream/70">{pacOfferPrice.access}</p>

      {avisoLog && (
        <p className="mt-8 rounded-2xl border-2 border-[#C9A24C] px-5 py-4 text-left text-sm font-semibold text-cream">
          {pacAvisoLog.faixa}
        </p>
      )}

      <CTA
        href={href}
        variant="primary"
        external
        className={`${avisoLog ? "mt-4" : "mt-8"} w-full py-4 bg-cream text-ink-900 hover:bg-gold-500 hover:text-cream-900`}
      >
        Garantir minha vaga
      </CTA>
      {estado === "antes" && (
        <CTA
          href={COMUNIDADE_URL}
          variant="secondary"
          external
          className="mt-3 w-full py-3.5 normal-case border-cream/40 text-cream hover:bg-cream hover:text-ink-900"
        >
          {pacComunidadeCta}
        </CTA>
      )}
      <PacNotice className="mt-6 block rounded-2xl border border-cream/15 px-5 py-4 text-sm font-semibold text-cream" />
    </div>
  );
}

// Preço da barra fixa do celular (+ linha curta do logaritmo, até LOG_FIM).
export function PacMobileBarPreco({ className }: { className?: string }) {
  const avisoLog = useAvisoLog();
  return (
    <>
      <p className={className}>{pacMobileBarPreco}</p>
      {avisoLog && (
        <p className="text-[11px] font-semibold text-plum-500">{pacAvisoLog.curto}</p>
      )}
    </>
  );
}
