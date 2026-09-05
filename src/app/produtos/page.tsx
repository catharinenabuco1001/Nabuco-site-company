import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { ProductCard } from "@/components/ProductCard";
import { CTA } from "@/components/ui/CTA";
import { products, aulaParticular } from "@/data/products";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Produtos",
  description: "Método PAC, ebook de alimentação e Cartas para um Vestibulando.",
};

export default function ProdutosPage() {
  const resolvedProducts = products.map((p) =>
    p.id === "cartas-vestibulando" ? { ...p, ctaUrl: siteConfig.links.amazonCartas || "#" } : p
  );

  return (
    <>
      <section className="pt-12 sm:pt-16 pb-16">
        <Container>
          <SectionTitle
            eyebrow="Produtos"
            title="Produtos"
            as="h1"
            description="Método, materiais e livros criados por Catharine — cada um para um momento diferente da sua jornada."
          />
        </Container>
      </section>

      <section className="pb-24">
        <Container>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {resolvedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </Container>
      </section>

      <section id="estude-comigo" className="py-20 sm:py-28 border-t border-ink-900/10 bg-cream-100/50">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7">
              <p className="text-xs font-sans font-semibold uppercase tracking-widest2 text-plum-500 mb-4">
                Aula particular
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl text-ink-900">
                {aulaParticular.title}
              </h2>
              <p className="mt-4 max-w-lg text-base text-ink-700/80 leading-relaxed">
                {aulaParticular.description}
              </p>

              <ul className="mt-6 flex flex-wrap gap-2">
                {aulaParticular.topics.map((topic) => (
                  <li
                    key={topic}
                    className="rounded-full border border-ink-900/15 px-4 py-1.5 text-xs font-sans text-ink-800"
                  >
                    {topic}
                  </li>
                ))}
              </ul>

              <p className="mt-6 text-xs text-ink-700/50">TODO: definir preço</p>

              <div className="mt-6">
                <CTA href={siteConfig.contact.whatsapp || "#"} variant="primary" external>
                  {aulaParticular.ctaLabel}
                </CTA>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
