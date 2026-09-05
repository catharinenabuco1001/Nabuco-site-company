import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { ModelCard } from "@/components/ModelCard";
import { models } from "@/data/models";

export const metadata: Metadata = {
  title: "Modelos",
  description: "Ferramentas que eu mesma uso para organizar estudos, projetos e rotina.",
};

export default function ModelosPage() {
  return (
    <section className="pt-12 sm:pt-16 pb-24">
      <Container>
        <SectionTitle
          eyebrow="Grátis"
          title="Modelos"
          as="h1"
          description="Ferramentas que eu mesma uso para organizar estudos, projetos e rotina."
        />

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {models.map((model) => (
            <ModelCard key={model.id} model={model} />
          ))}
        </div>
      </Container>
    </section>
  );
}
