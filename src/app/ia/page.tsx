import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { AIToolCard } from "@/components/AIToolCard";
import { aiTools } from "@/data/ai-tools";

export const metadata: Metadata = {
  title: "IA que eu uso",
  description: "Não quero te mostrar 300 ferramentas. Quero mostrar as que realmente entraram na minha rotina.",
};

export default function IaPage() {
  return (
    <section className="pt-12 sm:pt-16 pb-24">
      <Container>
        <SectionTitle
          eyebrow="Inteligência artificial"
          title="IA que eu uso"
          as="h1"
          description="Não quero te mostrar 300 ferramentas. Quero mostrar as que realmente entraram na minha rotina."
        />

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {aiTools.map((tool) => (
            <AIToolCard key={tool.id} tool={tool} />
          ))}
        </div>
      </Container>
    </section>
  );
}
