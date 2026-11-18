"use client";

import { CTA } from "@/components/ui/CTA";
import { PacNotice, useCtaUrl } from "@/components/PacLaunch";
import { pacMobileBarPreco, pacOfferPrice } from "@/data/pac";

// Bloco de preço do card "Recupere sua base…": 2 cartões com o preço fixo e
// um único botão principal.
export function PacOfertaPreco() {
  const href = useCtaUrl();

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

      <CTA
        href={href}
        variant="primary"
        external
        className="mt-8 w-full py-4 bg-cream text-ink-900 hover:bg-gold-500 hover:text-cream-900"
      >
        Garantir minha vaga
      </CTA>
      <PacNotice className="mt-6 block rounded-2xl border border-cream/15 px-5 py-4 text-sm font-semibold text-cream" />
    </div>
  );
}

// Preço da barra fixa do celular.
export function PacMobileBarPreco({ className }: { className?: string }) {
  return <p className={className}>{pacMobileBarPreco}</p>;
}
