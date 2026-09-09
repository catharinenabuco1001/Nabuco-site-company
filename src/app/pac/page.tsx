import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { CTA } from "@/components/ui/CTA";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { pacSteps } from "@/components/PacBlock";

export const metadata: Metadata = {
  title: "Método PAC",
  description:
    "Pense Antes de Calcular. A aula te faz aprender; o PAC garante que o aprendizado se consolide.",
};

export default function PacPage() {
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
              <div className="mt-10">
                <CTA href="#conhecer" variant="primary">
                  Conhecer o PAC
                </CTA>
              </div>
            </div>
            <div className="lg:col-span-5">
              <ImagePlaceholder label="Método PAC" ratio="aspect-square" />
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

      <section className="py-20 border-t border-ink-900/10">
        <Container>
          <div className="bg-ink-900 text-cream px-8 py-16 sm:px-16 sm:py-20 text-center">
            <h2 className="font-serif text-3xl sm:text-4xl max-w-xl mx-auto text-balance">
              Pronta para aplicar o PAC na sua rotina?
            </h2>
            <p className="mt-4 text-cream/60 text-sm">Valor e turmas em breve.</p>
            <div className="mt-8">
              <CTA
                href="/produtos"
                variant="primary"
                className="bg-cream text-ink-900 hover:bg-gold-500 hover:text-cream-900"
              >
                Conhecer o PAC
              </CTA>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
