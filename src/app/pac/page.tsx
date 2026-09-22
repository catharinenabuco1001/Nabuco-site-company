import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { CTA } from "@/components/ui/CTA";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { pacSteps } from "@/components/PacBlock";
import { siteConfig } from "@/data/site";
import {
  pacPricing,
  pacFit,
  pacTestimonial,
  pacAuthorBio,
  pacAuthorStats,
  pacCurriculum,
} from "@/data/pac";
import { publicImageExists } from "@/lib/media";
import { formatPrice } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Método PAC",
  description:
    "Pense Antes de Calcular. A aula te faz aprender; o PAC garante que o aprendizado se consolide. Turma de outubro com inscrições abertas.",
};

export default function PacPage() {
  const hasHeroImage = publicImageExists("images/pac-hero.jpg");

  return (
    <>
      <section className="pt-12 sm:pt-16 pb-20">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7">
              <p className="text-xs sm:text-sm font-sans font-semibold tracking-widest2 uppercase text-plum-500 mb-6">
                Método
              </p>
              <h1 className="font-serif text-5xl sm:text-6xl text-ink-900 leading-[1.02]">
                MÉTODO PAC
              </h1>
              <p className="mt-4 font-serif italic text-2xl sm:text-3xl text-plum-600">
                Pense Antes de Calcular.
              </p>
              <p className="mt-6 max-w-lg text-base sm:text-lg text-ink-700/80 leading-relaxed">
                A aula te faz aprender. O PAC garante que o aprendizado se consolide — porque não
                adianta dominar a matéria e perder a questão na última linha da conta.
              </p>

              {siteConfig.pacCohort && (
                <p className="mt-6 text-sm font-sans font-semibold uppercase tracking-wide text-gold-700">
                  {siteConfig.pacCohort}
                </p>
              )}

              <div className="mt-8 flex flex-wrap gap-4">
                <CTA href={siteConfig.links.pacCheckout} variant="primary" external>
                  Garantir minha vaga
                </CTA>
                <CTA href="#conhecer" variant="secondary">
                  Conhecer o método
                </CTA>
              </div>
            </div>
            <div className="lg:col-span-5">
              {hasHeroImage ? (
                <div className="relative aspect-square w-full overflow-hidden">
                  <Image
                    src="/images/pac-hero.jpg"
                    alt="Método PAC"
                    fill
                    sizes="(min-width: 1024px) 40vw, 90vw"
                    className="object-cover"
                  />
                </div>
              ) : (
                <ImagePlaceholder label="Método PAC" ratio="aspect-square" />
              )}
            </div>
          </div>
        </Container>
      </section>

      <section id="conhecer" className="py-20 sm:py-28 border-t border-ink-900/10 bg-cream-100/50">
        <Container>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-ink-900/10">
            {pacSteps.map((step) => (
              <div key={step.n} className="bg-cream p-10 flex flex-col">
                <span className="font-serif text-6xl text-plum-600/30">{step.n}</span>
                <h2 className="mt-4 font-serif text-2xl text-ink-900">{step.title.toUpperCase()}</h2>
                <p className="mt-3 text-sm text-ink-700/80 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Pra quem é */}
      <section className="py-20 sm:py-28 border-t border-ink-900/10">
        <Container>
          <p className="text-xs font-sans font-semibold uppercase tracking-widest2 text-plum-500 mb-3">
            Pra quem é
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl text-ink-900 max-w-xl mb-8">
            {pacFit.title}
          </h2>

          <div className="flex flex-col">
            {pacFit.isFor.map((item, i) => (
              <div
                key={`is-${i}`}
                className="flex gap-5 py-5 items-baseline border-b border-ink-900/12"
              >
                <span className="font-serif italic text-plum-600 text-base shrink-0 w-6">é</span>
                <span className="text-sm sm:text-base text-ink-900 leading-relaxed">{item}</span>
              </div>
            ))}
            {pacFit.isNotFor.map((item, i) => (
              <div
                key={`not-${i}`}
                className="flex gap-5 py-5 items-baseline border-b border-ink-900/12"
              >
                <span className="font-serif italic text-ink-900/35 text-base shrink-0 w-6">
                  não
                </span>
                <span className="text-sm sm:text-base text-ink-900/50 leading-relaxed">{item}</span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Prova social + autoridade */}
      <section className="py-20 sm:py-28 bg-cream-200">
        <Container>
          <div className="flex flex-col gap-14">
            <div className="max-w-xl">
              <p className="text-xs font-sans font-semibold uppercase tracking-widest2 text-plum-500 mb-4">
                Quem já fez
              </p>
              <p className="font-serif italic text-2xl sm:text-3xl leading-snug text-ink-900">
                &ldquo;{pacTestimonial.quote}&rdquo;
              </p>
              <p className="mt-4 text-xs font-sans font-semibold uppercase tracking-wide text-plum-500">
                {pacTestimonial.attribution}
              </p>
            </div>

            <div className="max-w-2xl">
              <p className="text-xs font-sans font-semibold uppercase tracking-widest2 text-plum-500 mb-4">
                Quem te guia
              </p>
              <p className="text-sm sm:text-base leading-relaxed text-ink-900/85">{pacAuthorBio}</p>

              <div className="mt-8 flex flex-wrap gap-x-10 gap-y-5">
                {pacAuthorStats.map((stat) => (
                  <div key={stat.label}>
                    <p className="font-serif text-2xl text-plum-600">{stat.value}</p>
                    <p className="mt-1 text-xs text-ink-900/55">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* O que tem no curso */}
      <section className="py-20 sm:py-28 border-t border-ink-900/10">
        <Container>
          <p className="text-xs font-sans font-semibold uppercase tracking-widest2 text-plum-500 mb-3">
            O que tem no curso
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl text-ink-900 max-w-xl mb-8">
            Tudo pra destravar a base.
          </h2>

          <div className="flex flex-col">
            {pacCurriculum.map((item) => (
              <div
                key={item.title}
                className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1.5 py-5 border-b border-ink-900/12"
              >
                <p className="text-base font-sans font-semibold text-ink-900">{item.title}</p>
                <p className="max-w-[380px] text-right text-sm text-ink-900/60">{item.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA final */}
      <section className="py-20 border-t border-ink-900/10">
        <Container>
          <div className="bg-ink-900 text-cream px-8 py-16 sm:px-16 sm:py-20 text-center">
            <h2 className="font-serif text-3xl sm:text-4xl max-w-xl mx-auto text-balance">
              Recupere sua base e ganhe segurança pra prova.
            </h2>
            <div className="mt-5 flex items-baseline justify-center gap-3.5">
              <span className="text-base text-cream/45 line-through">
                {formatPrice(pacPricing.originalPrice)}
              </span>
              <span className="font-serif text-3xl text-plum-700">
                {formatPrice(pacPricing.price)}
              </span>
            </div>
            <p className="mt-3 text-cream/60 text-sm">
              {siteConfig.pacCohort ?? "Valor e turmas em breve."}
            </p>
            <div className="mt-8">
              <CTA
                href={siteConfig.links.pacCheckout}
                variant="primary"
                external
                className="bg-cream text-ink-900 hover:bg-gold-500 hover:text-cream-900"
              >
                Garantir minha vaga
              </CTA>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
