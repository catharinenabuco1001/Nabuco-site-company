import { Hero } from "@/components/Hero";
import { ExploreSection } from "@/components/ExploreSection";
import { VideoCard } from "@/components/VideoCard";
import { TikTokCard } from "@/components/TikTokCard";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { CTA } from "@/components/ui/CTA";
import { getVideos } from "@/lib/youtube";
import { tiktoks } from "@/data/videos";

export default async function HomePage() {
  const videos = await getVideos();
  const featured = videos.filter((v) => v.featured).slice(0, 3);
  const highlightVideos = featured.length > 0 ? featured : videos.slice(0, 3);

  return (
    <>
      <Hero />

      <ExploreSection />

      <section className="py-20 sm:py-28 border-t border-ink-900/10 bg-cream-100/50">
        <Container>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
            <SectionTitle
              eyebrow="Gratuito"
              title="Conteúdo Aberto"
              description="Conhecimento não precisa começar com um checkout. Aqui está uma parte do que eu penso, estudo e ensino — gratuitamente."
            />
            <CTA href="/aulas" variant="ghost" className="shrink-0">
              Ver todas as aulas →
            </CTA>
          </div>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10">
            {highlightVideos.map((video) => (
              <VideoCard key={video.id} video={video} />
            ))}
          </div>

          <div className="mt-16">
            <p className="text-xs font-sans font-semibold uppercase tracking-widest2 text-plum-500 mb-5">
              1 minuto com a Catharine
            </p>
            <div className="flex gap-4 overflow-x-auto pb-2 no-scrollbar">
              {tiktoks.map((tiktok) => (
                <TikTokCard key={tiktok.id} video={tiktok} />
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-28 border-t border-ink-900/10">
        <Container>
          <div className="rounded-3xl bg-ink-900 text-cream px-8 py-16 sm:px-16 sm:py-20 text-center relative overflow-hidden">
            <div
              className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-plum-600/40 blur-3xl"
              aria-hidden="true"
            />
            <p className="text-xs font-sans font-semibold uppercase tracking-widest2 text-gold-500 mb-4 relative">
              Método PAC
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl max-w-2xl mx-auto text-balance relative">
              Pare. Analise. Conquiste.
            </h2>
            <p className="mt-5 max-w-xl mx-auto text-cream/70 leading-relaxed relative">
              Não é mais uma técnica para estudar. É uma forma de pensar sobre o seu próprio
              desempenho.
            </p>
            <div className="mt-8 relative">
              <CTA href="/pac" variant="primary" className="bg-cream text-ink-900 hover:bg-gold-500">
                Conhecer o PAC
              </CTA>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
