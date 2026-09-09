import Link from "next/link";
import { Container } from "@/components/ui/Container";

export type Door = {
  n: string;
  title: string;
  desc: string;
  href: string;
  cta?: string;
};

// As três "portas" por dificuldade — mesmo conteúdo e comportamento na Home
// ("Onde você travou?") e em /aulas ("Trilhas"). Grid com gap:1px e fundo
// igual ao da página por trás, para não sobrar um retângulo fantasma numa
// fileira incompleta.
export function DoorsSection({
  eyebrow,
  title,
  doors,
}: {
  eyebrow: string;
  title: string;
  doors: Door[];
}) {
  return (
    <section className="pt-12 sm:pt-16">
      <Container>
        <p className="text-xs sm:text-sm font-sans font-semibold uppercase tracking-widest2 text-plum-500 mb-6">
          {eyebrow}
        </p>
        {title && (
          <h2 className="font-serif text-3xl sm:text-4xl text-ink-900 mb-8 max-w-2xl">{title}</h2>
        )}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px">
          {doors.map((door) => (
            <Link
              key={door.n}
              href={door.href}
              className="group bg-cream shadow-[0_0_0_1px_rgba(242,240,235,0.14)] p-8 min-h-[200px] flex flex-col justify-between gap-4 text-ink-900 transition-colors duration-200 hover:bg-cream-50"
            >
              <span className="text-xs tracking-widest2 uppercase text-plum-500">{door.n}</span>
              <span className="font-serif text-2xl leading-tight">{door.title}</span>
              <span className="text-sm leading-relaxed text-ink-900/72">{door.desc}</span>
              <span className="text-xs font-sans font-semibold uppercase tracking-wide text-plum-600">
                {door.cta ?? "Ver a trilha →"}
              </span>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
