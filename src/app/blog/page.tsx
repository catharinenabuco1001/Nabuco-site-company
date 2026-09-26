import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { posts, readingTime } from "@/data/posts";
import { formatDate } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Textos e opiniões de Catharine Nabuco sobre educação, sala de aula, estudo e o que significa aprender de verdade.",
};

export default function BlogPage() {
  const sorted = [...posts].sort((a, b) => b.date.localeCompare(a.date));
  const [first, ...rest] = sorted;

  return (
    <section className="pt-12 sm:pt-16 pb-24">
      <Container>
        <p className="text-xs font-semibold uppercase tracking-widest2 text-plum-500 mb-4">
          Blog · textos e opiniões
        </p>
        <h1 className="font-serif text-4xl sm:text-6xl text-ink-900 leading-[1.05] max-w-3xl text-balance">
          O que eu penso sobre <span className="italic text-plum-500">aprender de verdade.</span>
        </h1>
        <p className="mt-6 max-w-2xl text-base sm:text-lg text-ink-900/65 leading-relaxed">
          Reflexões da sala de aula, do vestibular e da neurociência — pra quem estuda, pra quem
          ensina e pra quem acredita que educação não precisa ser decoreba.
        </p>

        {first && (
          <Link
            href={`/blog/${first.slug}`}
            className="group mt-14 block rounded-[2rem] border border-gold-500/30 bg-cream-50/60 p-8 sm:p-12 transition-colors hover:border-gold-500/60"
          >
            <p className="text-[11px] font-semibold uppercase tracking-widest2 text-plum-500">
              {formatDate(first.date)} · {readingTime(first)} min de leitura
            </p>
            <h2 className="mt-4 font-serif text-3xl sm:text-5xl text-ink-900 leading-tight max-w-3xl group-hover:text-gold-300 transition-colors">
              {first.title}
            </h2>
            <p className="mt-4 max-w-2xl text-base sm:text-lg text-ink-900/65 leading-relaxed">
              {first.excerpt}
            </p>
            <span className="mt-8 inline-block text-xs font-semibold uppercase tracking-wide text-gold-300">
              Ler texto →
            </span>
          </Link>
        )}

        {rest.length > 0 && (
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            {rest.map((p) => (
              <Link
                key={p.slug}
                href={`/blog/${p.slug}`}
                className="group rounded-3xl border border-ink-900/10 p-8 transition-colors hover:border-gold-500/50"
              >
                <p className="text-[11px] font-semibold uppercase tracking-widest2 text-plum-500">
                  {formatDate(p.date)} · {readingTime(p)} min
                </p>
                <h2 className="mt-3 font-serif text-2xl text-ink-900 group-hover:text-gold-300 transition-colors">
                  {p.title}
                </h2>
                <p className="mt-3 text-sm text-ink-900/60 leading-relaxed">{p.excerpt}</p>
              </Link>
            ))}
          </div>
        )}
      </Container>
    </section>
  );
}
