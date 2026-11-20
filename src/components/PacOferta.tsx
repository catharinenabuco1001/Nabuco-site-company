"use client";

import { CTA } from "@/components/ui/CTA";
import { PacNotice, useCtaUrl, usePromo } from "@/components/PacLaunch";
import { pacOfferPrice, textosPreco } from "@/data/pac";

// Bloco de preço do card "Recupere sua base…": 2 cartões com o preço do
// momento (promo até 23h59 de quinta, cheio depois) e um único botão.
export function PacOfertaPreco() {
  const href = useCtaUrl();
  const { estado } = usePromo();
  const t = textosPreco(estado);

  return (
    <div className="mt-10 border-t border-cream/15 pt-8 text-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left">
        {/* À vista: no celular fica em cima. */}
        <div className="relative rounded-2xl border-2 border-[#C9A24C] p-5 pt-7">
          {estado === "promo" && (
            <span className="absolute -top-3 left-5 rounded-full bg-[#B3261E] px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-white">
              {pacOfferPrice.chip}
            </span>
          )}
          <p className="text-xs font-semibold uppercase tracking-wide text-cream/70">À vista</p>
          {t.riscado && (
            <p className="mt-2 text-sm text-cream/70">
              <s>de {t.riscado}</s>
              <span className="sr-only"> por</span>
            </p>
          )}
          <p className={`${t.riscado ? "" : "mt-2 "}font-serif text-4xl sm:text-[2.6rem] leading-none text-cream`}>
            {t.avista}
          </p>
        </div>
        {/* Parcelado. */}
        <div className="rounded-2xl border border-cream/20 p-5 pt-7">
          <p className="text-xs font-semibold uppercase tracking-wide text-cream/70">Parcelado</p>
          <p className="mt-2 font-serif text-2xl sm:text-3xl leading-tight text-cream">{t.parcelado}</p>
          <p className="mt-2 text-xs text-cream/70">{t.total}</p>
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
  const { estado } = usePromo();
  return <p className={className}>{textosPreco(estado).curto}</p>;
}

// Qualquer texto de preço solto (bloco dos pais, FAQ, card de /produtos).
export function PacTextoPreco({
  tipo,
  className,
}: {
  tipo: "parcelado" | "ouAvista" | "faq";
  className?: string;
}) {
  const { estado } = usePromo();
  return <span className={className}>{textosPreco(estado)[tipo]}</span>;
}
