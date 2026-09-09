import Image from "next/image";
import Link from "next/link";
import { HomeHero } from "@/components/HomeHero";
import { DoorsSection } from "@/components/DoorsSection";
import { VideoCard } from "@/components/VideoCard";
import { VideoPlayerFrame } from "@/components/VideoPlayerFrame";
import { PacBlock } from "@/components/PacBlock";
import { TikTokCard } from "@/components/TikTokCard";
import { Container } from "@/components/ui/Container";
import { CTA } from "@/components/ui/CTA";
import { getLibraryItems } from "@/lib/library";
import { tiktoks } from "@/data/videos";
import { videoOverrides } from "@/data/video-overrides";
import { publicImageExists } from "@/lib/media";

const doors = [
  {
    n: "01",
    title: "“Não sei por onde começar.”",
    desc: "Planejamento, escolha de matérias e a primeira semana de estudo.",
    href: "/aulas",
  },
  {
    n: "02",
    title: "“Estudo e não fixo nada.”",
    desc: "Revisão, estudo ativo e o ciclo que faz o conteúdo parar de escorrer.",
    href: "/aulas",
  },
  {
    n: "03",
    title: "“Sei a matéria e erro na prova.”",
    desc: "Leitura de enunciado, tempo e controle no dia da prova.",
    href: "/aulas",
  },
];

export default async function HomePage() {
  const items = await getLibraryItems();
  const youtubeItems = items.filter((i) => i.platform === "youtube");
  const featured = youtubeItems.find((i) => i.featured);
  const recent = youtubeItems.slice(0, 5);

  const novidade = tiktoks.find((t) => videoOverrides[t.id]?.featured) ?? tiktoks[0];
  const hasBookCover = publicImageExists("images/cartas-vestibulando.jpg");

  return (
    <>
      <HomeHero novidade={novidade} />

      <DoorsSection eyebrow="Onde você travou?" title="" doors={doors} />

      <section id="comece" className="pt-14 sm:pt-20">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-7 lg:gap-11 items-center pt-8 sm:pt-12 border-t border-ink-900/12">
            <VideoPlayerFrame video={featured} />
            <div className="min-w-0">
              <p className="text-xs font-sans font-semibold uppercase tracking-widest2 text-plum-500 mb-3.5">
                Comece por aqui
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl leading-tight text-ink-900">
                {featured ? featured.title : "A aula que eu mandaria para mim mesma no começo do ano"}
              </h2>
              <p className="mt-3.5 max-w-[54ch] text-sm sm:text-base leading-relaxed text-ink-900/78">
                Toca aqui na própria página, sem cadastro. Se ela te ajudar, a biblioteca inteira
                segue o mesmo raciocínio.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-3.5">
                <CTA href="/aulas" variant="primary">
                  Assistir agora
                </CTA>
                <CTA href="/aulas" variant="ghost">
                  Ver a biblioteca →
                </CTA>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="pt-14 sm:pt-20">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-5 mb-6">
            <div>
              <p className="text-xs font-sans font-semibold uppercase tracking-widest2 text-plum-500 mb-3">
                Aulas recentes
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl text-ink-900">
                O que eu ando explicando
              </h2>
            </div>
            <CTA href="/aulas" variant="ghost">
              Todas as aulas →
            </CTA>
          </div>
          <div className="flex gap-[18px] overflow-x-auto pb-2.5 no-scrollbar">
            {recent.map((video) => (
              <VideoCard
                key={video.id}
                video={video}
                tag={video.displayTag}
                href="/aulas"
                showDuration={false}
              />
            ))}
          </div>
        </Container>
      </section>

      <section className="pt-14 sm:pt-20">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-7 lg:gap-12 items-center pt-8 sm:pt-12 border-t border-ink-900/12">
            <div className="min-w-0">
              <p className="text-xs font-sans font-semibold uppercase tracking-widest2 text-plum-500 mb-3.5">
                Quem está do outro lado
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl text-ink-900">Catharine Nabuco</h2>
              <p className="mt-3.5 max-w-[56ch] text-base leading-relaxed text-ink-900/80">
                Autora de <span className="italic">Cartas para um Vestibulando</span>. Escrevo, dou
                aula e palestro sobre estudo, método e desempenho.
              </p>
              <p className="mt-2.5 max-w-[56ch] text-sm leading-relaxed text-ink-900/55">
                Bio completa em breve.
              </p>
              <CTA href="/sobre" variant="ghost" className="mt-5">
                Sobre mim →
              </CTA>
            </div>

            <div className="flex gap-6 items-center bg-cream-50 p-6">
              <div className="relative w-[132px] aspect-[2/3] shrink-0 shadow-[0_18px_36px_-18px_rgba(8,25,16,0.8)]">
                {hasBookCover ? (
                  <Image
                    src="/images/cartas-vestibulando.jpg"
                    alt="Capa de Cartas para um Vestibulando"
                    fill
                    sizes="132px"
                    className="object-cover"
                  />
                ) : (
                  <div className="image-placeholder absolute inset-0" />
                )}
              </div>
              <div className="min-w-0">
                <p className="text-[11px] font-sans font-semibold uppercase tracking-[0.22em] text-plum-500">
                  Livro
                </p>
                <p className="mt-2 font-serif text-xl leading-snug text-ink-900">
                  Cartas para um Vestibulando
                </p>
                <p className="mt-2.5 text-sm leading-relaxed text-ink-900/72">
                  Link de compra em breve.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <PacBlock />

      <section className="pt-14 sm:pt-20 pb-14 sm:pb-20">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-5 mb-6">
            <div>
              <p className="text-xs font-sans font-semibold uppercase tracking-widest2 text-plum-500 mb-2.5">
                1 minuto com a Catharine
              </p>
              <h2 className="font-serif text-2xl sm:text-3xl text-ink-900">Explicações curtas</h2>
            </div>
            <Link
              href="https://www.tiktok.com/@cathynabuuco"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-sans font-semibold uppercase tracking-wide text-plum-600 underline-grow"
            >
              Ver no TikTok →
            </Link>
          </div>
          <div className="flex gap-[18px] overflow-x-auto pb-2.5 no-scrollbar">
            {tiktoks.map((video) => (
              <TikTokCard key={video.id} video={video} />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
