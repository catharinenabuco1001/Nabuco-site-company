import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { TalkCard } from "@/components/TalkCard";
import { CTA } from "@/components/ui/CTA";
import { talks } from "@/data/talks";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Palestras",
  description: "Ideias que saem da tela e chegam ao palco.",
};

export default function PalestrasPage() {
  return (
    <>
      <section className="pt-12 sm:pt-16 pb-16">
        <Container>
          <SectionTitle
            eyebrow="Palestras"
            title="Ideias que saem da tela e chegam ao palco."
            as="h1"
          />
        </Container>
      </section>

      <section className="pb-20">
        <Container>
          <div>
            {talks.map((talk) => (
              <TalkCard key={talk.id} talk={talk} />
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 border-t border-ink-900/10">
        <Container>
          <div className="rounded-3xl bg-ink-900 text-cream px-8 py-16 sm:px-16 sm:py-20 text-center">
            <h2 className="font-serif text-3xl sm:text-4xl max-w-xl mx-auto text-balance">
              Quer levar a Catharine para o seu evento?
            </h2>
            <div className="mt-8">
              <CTA
                href={siteConfig.contact.email ? `mailto:${siteConfig.contact.email}` : "#"}
                variant="primary"
                className="bg-cream text-ink-900 hover:bg-gold-500"
              >
                Levar Catharine para meu evento
              </CTA>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
