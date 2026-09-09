import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { DoorsSection } from "@/components/DoorsSection";
import { AulasLibrary } from "@/components/AulasLibrary";
import { PacBlock } from "@/components/PacBlock";
import { TikTokCard } from "@/components/TikTokCard";
import { getLibraryItems } from "@/lib/library";
import { tiktoks } from "@/data/videos";

export const metadata: Metadata = {
  title: "Aulas",
  description:
    "Aulas, explicações, estratégias e ideias sobre vestibular, estudos, inteligência artificial, produtividade e performance. Sem cadastro.",
};

const trilhas = [
  {
    n: "01",
    title: "“Não sei por onde começar.”",
    desc: "Planejamento, escolha de matérias e como montar a primeira semana de estudo.",
    href: "#todas-as-aulas",
  },
  {
    n: "02",
    title: "“Estudo e não fixo nada.”",
    desc: "Revisão, estudo ativo e o ciclo que faz o conteúdo parar de escorrer.",
    href: "#todas-as-aulas",
  },
  {
    n: "03",
    title: "“Sei a matéria e erro na prova.”",
    desc: "Leitura de enunciado, gestão de tempo e controle no dia da prova.",
    href: "#todas-as-aulas",
  },
];

export default async function AulasPage() {
  const items = await getLibraryItems();

  return (
    <>
      <section className="pt-12 sm:pt-16">
        <Container>
          <p className="text-xs sm:text-sm font-sans font-semibold uppercase tracking-widest2 text-plum-500 mb-3.5">
            Biblioteca aberta
          </p>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <h1 className="font-serif text-4xl sm:text-5xl text-ink-900 leading-tight max-w-[22ch]">
              Aulas
            </h1>
            <p className="max-w-[46ch] text-base leading-relaxed text-ink-900/78">
              Tudo toca aqui na página. Escolha pelo problema que você quer resolver ou pela
              matéria — sem cadastro.
            </p>
          </div>
        </Container>
      </section>

      <AulasLibrary items={items} />

      <DoorsSection eyebrow="Comece pelo problema" title="Trilhas" doors={trilhas} />

      <section className="pt-16 pb-16 border-t border-ink-900/10 mt-16 bg-cream-100/50">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-6 mb-6">
            <div>
              <p className="text-xs font-sans font-semibold uppercase tracking-widest2 text-plum-500 mb-2.5">
                1 minuto com a Catharine
              </p>
              <h2 className="font-serif text-2xl sm:text-3xl text-ink-900">Explicações curtas</h2>
            </div>
            <p className="max-w-[38ch] text-sm leading-relaxed text-ink-900/70">
              Do TikTok, para quando você tem um minuto entre uma matéria e outra.
            </p>
          </div>
          <div className="flex gap-5 overflow-x-auto pb-2.5 no-scrollbar">
            {tiktoks.map((video) => (
              <TikTokCard key={video.id} video={video} className="w-[176px]" />
            ))}
          </div>
        </Container>
      </section>

      <PacBlock compact />
    </>
  );
}
