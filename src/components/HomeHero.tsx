import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { CTA } from "@/components/ui/CTA";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { publicImageExists } from "@/lib/media";
import type { Video } from "@/types";

export function HomeHero({ novidade }: { novidade?: Video }) {
  const heroSrc = publicImageExists("images/hero-retrato.jpeg")
    ? "/images/hero-retrato.jpeg"
    : publicImageExists("images/hero.jpg")
      ? "/images/hero.jpg"
      : null;

  return (
    <section className="pt-10 sm:pt-16">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 items-center">
          <div className="min-w-0">
            <p className="text-xs sm:text-sm font-sans font-semibold uppercase tracking-widest2 text-plum-500 mb-5">
              Aulas de vestibular e método de estudo
            </p>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-[62px] leading-[1.02] text-ink-900 max-w-[20ch] text-balance">
              Você não precisa estudar mais. Precisa estudar melhor.
            </h1>
            <p className="mt-6 max-w-[52ch] text-base sm:text-lg leading-relaxed text-ink-900/82">
              Escolha o ponto onde você está travando. Eu te mostro a aula que resolve aquilo — e,
              se quiser consolidar de vez, o PAC cuida da parte que faz você perder ponto na hora
              da conta.
            </p>
            <div className="mt-8 flex flex-wrap gap-3.5">
              <CTA href="#comece" variant="primary">
                <svg width="12" height="14" viewBox="0 0 16 18" fill="none" aria-hidden="true">
                  <path d="M0 0L16 9L0 18V0Z" fill="currentColor" />
                </svg>
                Assistir a primeira aula
              </CTA>
              <CTA href="/pac" variant="secondary">
                Conhecer o PAC
              </CTA>
            </div>
          </div>

          <div className="relative min-w-0">
            <div className="relative aspect-[4/5] w-full overflow-hidden">
              {heroSrc ? (
                <>
                  <Image
                    src={heroSrc}
                    alt="Catharine Nabuco"
                    fill
                    priority
                    sizes="(min-width: 1024px) 45vw, 90vw"
                    className="object-cover"
                    style={{ objectPosition: "72% 28%" }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent from-40% to-[rgba(8,25,16,0.75)]" />
                </>
              ) : (
                <ImagePlaceholder label="Foto de Catharine — em breve" ratio="aspect-[4/5]" />
              )}
            </div>

            {novidade && (
              <Link
                href={novidade.url}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-5 left-5 right-5 block bg-[rgba(8,25,16,0.86)] p-5 text-cream transition-colors hover:bg-cream-900"
              >
                <p className="text-[11px] font-sans font-semibold uppercase tracking-[0.22em] text-plum-500">
                  Novidade da semana
                </p>
                <p className="mt-2 font-serif text-xl leading-snug">{novidade.title}</p>
                <p className="mt-2 text-xs uppercase tracking-widest2 text-cream/70">
                  TikTok · assistir aqui →
                </p>
              </Link>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
