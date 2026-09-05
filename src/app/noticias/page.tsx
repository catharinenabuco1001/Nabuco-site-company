import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { NewsCard } from "@/components/NewsCard";
import { news } from "@/data/news";

export const metadata: Metadata = {
  title: "Catharine Agora",
  description: "Novidades, projetos, palestras e conquistas — em ordem cronológica.",
};

export default function NoticiasPage() {
  const sorted = [...news].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <section className="pt-12 sm:pt-16 pb-24">
      <Container>
        <SectionTitle eyebrow="Feed pessoal" title="Catharine Agora" as="h1" />

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {sorted.map((item) => (
            <NewsCard key={item.id} item={item} />
          ))}
        </div>
      </Container>
    </section>
  );
}
