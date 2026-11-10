"use client";

import { useState } from "react";
import { CTA } from "@/components/ui/CTA";
import { PacNotice, useCtaUrl, useEstadoOferta } from "@/components/PacLaunch";
import {
  CUPOM_LIVE,
  pacFaqDesconto,
  pacMobileBar,
  pacOfferPrice,
  pacPromo,
} from "@/data/pac";
import { CHECKOUT_URL, COMUNIDADE_URL } from "@/lib/pac-launch";

// Tudo que muda com o estado da oferta ("antes" / "live" / "depois", ver
// getEstadoOferta em src/lib/pac-launch.ts). O primeiro render é sempre
// "antes", igual ao HTML do build; o estado real é decidido no navegador.

// Faixa da promoção da live (antes e durante). Antes da live, sem o preço.
function FaixaLive({ estado }: { estado: "antes" | "live" }) {
  return (
    <div className="rounded-2xl border-2 border-[#C9A24C] px-5 py-4 text-left">
      <p className="text-sm font-bold uppercase tracking-wide text-cream">{pacPromo.faixaTitulo}</p>
      <p className="mt-1 text-sm text-cream/85">
        {estado === "antes" ? pacPromo.faixaTextoAntes : pacPromo.faixaTextoLive}
      </p>
    </div>
  );
}

function CopiarCupom({ cupom }: { cupom: string }) {
  const [copiado, setCopiado] = useState(false);
  return (
    <div className="mt-3 flex flex-wrap items-center gap-2">
      <span className="text-sm font-semibold text-cream">{pacPromo.cupom(cupom)}</span>
      <button
        type="button"
        onClick={() => {
          navigator.clipboard?.writeText(cupom).then(
            () => setCopiado(true),
            () => setCopiado(false)
          );
        }}
        className="rounded-full border border-cream/30 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-cream hover:border-cream focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C9A24C]"
      >
        {copiado ? "Copiado" : "Copiar"}
      </button>
    </div>
  );
}

// Bloco de preço do card "Recupere sua base…": faixa (antes/live), 2 cartões
// e um único botão principal.
export function PacOfertaPreco() {
  const estado = useEstadoOferta();
  const href = useCtaUrl();
  const live = estado === "live";

  return (
    <div className="mt-10 border-t border-cream/15 pt-8 text-center">
      {estado !== "depois" && <FaixaLive estado={estado} />}

      <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3 text-left">
        {/* À vista: no celular fica em cima. */}
        <div
          className={`relative rounded-2xl p-5 pt-7 ${
            live ? "border-2 border-[#C9A24C]" : "border border-cream/30"
          }`}
        >
          {live && (
            <span className="absolute -top-3 left-5 rounded-full bg-[#C9A24C] px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-[#0F2E22]">
              {pacPromo.selo}
            </span>
          )}
          <p className="text-xs font-semibold uppercase tracking-wide text-cream/70">À vista</p>
          {live ? (
            <>
              <p className="mt-2 text-sm text-cream/70">
                <span className="sr-only">de </span>
                <s>{pacOfferPrice.cash}</s>
                <span className="sr-only"> por</span>
              </p>
              <p className="font-serif text-4xl sm:text-[2.6rem] leading-none text-cream">
                {pacOfferPrice.cashLive}
              </p>
              <p className="mt-3 text-sm font-semibold text-cream">{pacPromo.ate}</p>
              {CUPOM_LIVE && <CopiarCupom cupom={CUPOM_LIVE} />}
            </>
          ) : (
            <p className="mt-2 font-serif text-4xl sm:text-[2.6rem] leading-none text-cream">
              {pacOfferPrice.cash}
            </p>
          )}
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

      <CTA
        href={live ? CHECKOUT_URL : href}
        variant="primary"
        external
        className="mt-8 w-full py-4 bg-cream text-ink-900 hover:bg-gold-500 hover:text-cream-900"
      >
        Garantir minha vaga
      </CTA>
      {estado === "antes" && (
        <CTA href={COMUNIDADE_URL} variant="secondary" external className="mt-3 w-full py-3.5 normal-case border-cream/40 text-cream hover:bg-cream hover:text-ink-900">
          {pacPromo.comunidadeCta}
        </CTA>
      )}
      <PacNotice className="mt-6 block rounded-2xl border border-cream/15 px-5 py-4 text-sm font-semibold text-cream" />
    </div>
  );
}

// Preço da barra fixa do celular.
export function PacMobileBarPreco({ className }: { className?: string }) {
  const estado = useEstadoOferta();
  return <p className={className}>{pacMobileBar[estado]}</p>;
}

// Linha da promoção no bloco dos pais (só antes/durante a live).
export function PacPromoLinha() {
  const estado = useEstadoOferta();
  if (estado === "depois") return null;
  return (
    <div className="mt-4">
      <FaixaLiveClara estado={estado} />
    </div>
  );
}

function FaixaLiveClara({ estado }: { estado: "antes" | "live" }) {
  return (
    <p className="rounded-xl border border-[#C9A24C] px-4 py-3 text-sm text-ink-900/85">
      <strong className="font-semibold text-ink-900">{pacPromo.faixaTitulo}</strong>{" "}
      {estado === "antes" ? pacPromo.faixaTextoAntes : pacPromo.faixaTextoLive}
    </p>
  );
}

// Resposta do FAQ "Tem desconto?".
export function PacFaqDescontoResposta({ className }: { className?: string }) {
  const estado = useEstadoOferta();
  const a =
    estado === "antes"
      ? pacFaqDesconto.aAntes
      : estado === "live"
        ? pacFaqDesconto.aLive
        : pacFaqDesconto.aDepois;
  return <p className={className}>{a}</p>;
}
