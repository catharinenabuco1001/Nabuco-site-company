import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { VideoCard } from "@/components/VideoCard";
import { TikTokCard } from "@/components/TikTokCard";
import { AulasExplorer } from "@/components/AulasExplorer";
import { getVideos } from "@/lib/youtube";
import { tiktoks } from "@/data/videos";

export const metadata: Metadata = {
  title: "Aulas",
  description:
    "Aulas, explicações, estratégias e ideias sobre vestibular, estudos, inteligência artificial, produtividade e performance.",
};

const validCategories = ["vestibular", "estudos", "ia", "performance", "produtividade"];

export default async function AulasPage({
  searchParams,
}: {
  searchParams: { categoria?: string };
}) {
  const videos = await getVideos();
  const featured = videos.filter((v) => v.featured);
  const initialCategory =
    searchParams.categoria && validCategories.includes(searchParams.categoria)
      ? searchParams.categoria
      : "todas";

  return (
    <>
      <section className="pt-12 sm:pt-16 pb-16">
        <Container>
          <SectionTitle
            eyebrow="Biblioteca de conteúdo"
            title="Aulas"
            as="h1"
            description="Aprenda comigo — gratuitamente. Aulas, explicações, estratégias e ideias sobre vestibular, estudos, inteligência artificial, produtividade e performance."
          />
        </Container>
      </section>

      {featured.length > 0 && (
        <section className="pb-20">
          <Container>
            <p className="text-xs font-sans font-semibold uppercase tracking-widest2 text-plum-500 mb-6">
              Em destaque
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10">
              {featured.map((video) => (
                <VideoCard key={video.id} video={video} featured />
              ))}
            </div>
          </Container>
        </section>
      )}

      <section className="py-20 border-t border-ink-900/10 bg-cream-100/50">
        <Container>
          <p className="text-xs font-sans font-semibold uppercase tracking-widest2 text-plum-500 mb-5">
            1 minuto com a Catharine
          </p>
          <p className="text-sm text-ink-700/70 max-w-lg mb-6">
            Ideias rápidas para estudar, pensar e executar melhor.
          </p>
          <div className="flex gap-4 overflow-x-auto pb-2 no-scrollbar">
            {tiktoks.map((tiktok) => (
              <TikTokCard key={tiktok.id} video={tiktok} />
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 border-t border-ink-900/10">
        <Container>
          <SectionTitle eyebrow="Tudo em um só lugar" title="Biblioteca" />
          <div className="mt-10">
            <AulasExplorer videos={videos} initialCategory={initialCategory} />
          </div>
        </Container>
      </section>
    </>
  );
}
