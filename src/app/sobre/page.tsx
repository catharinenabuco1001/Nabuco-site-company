import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { Badge } from "@/components/ui/Badge";

export const metadata: Metadata = {
  title: "Sobre",
  description: "Por trás de tudo isso, eu sou Catharine.",
};

const roles = ["Autora", "Palestrante", "Estudante", "Criadora"];

export default function SobrePage() {
  return (
    <section className="pt-12 sm:pt-16 pb-24">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <ImagePlaceholder label="Foto de Catharine — em breve" ratio="aspect-[4/5]" />
            <div className="mt-6 flex flex-wrap gap-2">
              {roles.map((role) => (
                <Badge key={role} tone="outline">
                  {role}
                </Badge>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7">
            <p className="text-xs font-sans font-semibold uppercase tracking-widest2 text-plum-500 mb-4">
              Sobre
            </p>
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-ink-900 text-balance leading-tight">
              Por trás de tudo isso, eu sou Catharine.
            </h1>

            <div className="mt-8 space-y-6 max-w-xl text-base sm:text-lg text-ink-700/85 leading-relaxed">
              <p>
                Sou movida pela ideia de que podemos construir uma vida intelectualmente
                interessante — e que disciplina não precisa significar uma vida sem prazer.
              </p>
              <p>
                Estudo, escrevo, crio projetos, dou palestras, testo ferramentas e compartilho
                aquilo que aprendo pelo caminho.
              </p>
              <p className="font-serif italic text-xl sm:text-2xl text-ink-900">
                Este site é a reunião de tudo isso.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
