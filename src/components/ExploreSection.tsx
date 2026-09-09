import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";

const universes = [
  {
    title: "Estudos",
    description: "Métodos, estratégias e vestibular.",
    href: "/aulas?categoria=vestibular",
  },
  {
    title: "Performance",
    description: "Rotina, disciplina e execução.",
    href: "/aulas?categoria=performance",
  },
  {
    title: "IA",
    description: "Ferramentas e inteligência artificial aplicada aos estudos.",
    href: "/ia",
  },
  {
    title: "Livros",
    description: "Projetos autorais.",
    href: "/produtos",
  },
  {
    title: "Palestras",
    description: "Ideias levadas para escolas, eventos e públicos.",
    href: "/palestras",
  },
];

export function ExploreSection() {
  return (
    <section className="py-20 sm:py-28 border-t border-ink-900/10">
      <Container>
        <SectionTitle eyebrow="Universos" title="Explore" />

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-px bg-ink-900/10 rounded-2xl overflow-hidden">
          {universes.map((u) => (
            <Link
              key={u.title}
              href={u.href}
              className="group relative bg-cream p-8 min-h-[220px] flex flex-col justify-between transition-colors duration-300 hover:bg-ink-900"
            >
              <span className="font-serif text-2xl text-ink-900 group-hover:text-cream transition-colors">
                {u.title}
              </span>
              <div>
                <p className="text-sm text-ink-700/70 group-hover:text-cream/70 transition-colors leading-relaxed">
                  {u.description}
                </p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-sans font-semibold uppercase tracking-wide text-plum-600 group-hover:text-gold-700 transition-colors">
                  Explorar
                  <svg width="12" height="10" viewBox="0 0 12 10" fill="none" aria-hidden="true">
                    <path
                      d="M1 5H11M11 5L7 1M11 5L7 9"
                      stroke="currentColor"
                      strokeWidth="1.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
