import Image from "next/image";
import { siteConfig } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { CTA } from "@/components/ui/CTA";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { publicImageExists } from "@/lib/media";

export function Hero() {
  const hasHeroPhoto = publicImageExists("images/hero.jpg");

  return (
    <section className="relative overflow-hidden pt-10 sm:pt-16 pb-20">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          <div className="lg:col-span-7 animate-fadeIn">
            <p className="text-xs sm:text-sm font-sans font-semibold tracking-widest2 uppercase text-plum-500 mb-6">
              Estudante · Autora · Palestrante · Criadora
            </p>
            <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl leading-[0.98] text-ink-900 text-balance">
              CATHARINE
              <br />
              NABUCO
            </h1>
            <p className="mt-6 font-serif italic text-2xl sm:text-3xl text-plum-600">
              {siteConfig.tagline}
            </p>
            <p className="mt-6 max-w-xl text-base sm:text-lg text-ink-700/80 leading-relaxed">
              {siteConfig.description}
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <CTA href="/aulas" variant="primary">
                Explorar Conteúdos
              </CTA>
              <CTA href="/pac" variant="secondary">
                Conhecer o PAC
              </CTA>
            </div>
          </div>

          <div className="lg:col-span-5 relative animate-fadeInSlow">
            <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden shadow-[0_30px_60px_-25px_rgba(20,18,18,0.35)]">
              {hasHeroPhoto ? (
                <Image
                  src="/images/hero.jpg"
                  alt="Catharine Nabuco"
                  fill
                  priority
                  sizes="(min-width: 1024px) 40vw, 90vw"
                  className="object-cover"
                />
              ) : (
                <ImagePlaceholder label="Foto de Catharine — em breve" ratio="aspect-[4/5]" />
              )}
            </div>
            <div
              className="hidden sm:block absolute -bottom-6 -left-6 h-24 w-24 rounded-full border border-gold-500/50"
              aria-hidden="true"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
