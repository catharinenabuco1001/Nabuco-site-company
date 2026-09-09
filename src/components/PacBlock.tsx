import { Container } from "@/components/ui/Container";
import { CTA } from "@/components/ui/CTA";

export const pacSteps = [
  {
    n: "P",
    title: "Pense",
    desc: "Entender o que a questão está pedindo antes de escrever qualquer conta.",
  },
  {
    n: "A",
    title: "Antes",
    desc: "Conferir estratégia, unidades e sinais — é aí que a questão costuma se perder.",
  },
  {
    n: "C",
    title: "Calcular",
    desc: "Executar e checar se o resultado responde à pergunta que foi feita.",
  },
];

// Painel claro do Método PAC, usado na Home (completo, com os 3 passos) e em
// /aulas (compact: sem a coluna de passos, só a chamada). Sempre reto (sem
// border-radius) — é o único painel invertido do site que fica assim de
// propósito.
export function PacBlock({ compact = false }: { compact?: boolean }) {
  return (
    <section id="pac" className="pt-16 sm:pt-24 pb-12 sm:pb-16">
      <Container>
        <div className="bg-ink-900 text-cream p-9 sm:p-16">
          <div
            className={
              compact
                ? "grid grid-cols-1 sm:grid-cols-2 gap-8 items-center"
                : "grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 items-start"
            }
          >
            <div className="min-w-0">
              <p className="text-xs font-sans font-semibold uppercase tracking-widest2 text-plum-700 mb-4">
                Método PAC
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl leading-tight max-w-[18ch]">
                Pense Antes de Calcular.
              </h2>
              <p className="mt-5 max-w-xl text-base sm:text-lg leading-relaxed text-cream/78">
                A aula te faz aprender. O PAC garante que o aprendizado se consolide — porque não
                adianta dominar a matéria e perder a questão na última linha da conta.
              </p>
              {!compact && (
                <div className="mt-7 flex flex-wrap items-center gap-4">
                  <CTA
                    href="/pac"
                    variant="primary"
                    className="bg-cream text-ink-900 hover:bg-gold-500 hover:text-cream-900"
                  >
                    Entrar no PAC
                  </CTA>
                </div>
              )}
            </div>

            {compact ? (
              <div className="flex flex-col items-start gap-3.5">
                <CTA
                  href="/pac"
                  variant="primary"
                  className="bg-cream text-ink-900 hover:bg-gold-500 hover:text-cream-900"
                >
                  Entrar no PAC
                </CTA>
                <span className="text-sm text-cream/60">Valor e turmas em breve.</span>
              </div>
            ) : (
              <div className="min-w-0 flex flex-col gap-px bg-cream/15">
                {pacSteps.map((step) => (
                  <div key={step.n} className="bg-ink-900 py-5 pl-0 flex gap-4 items-baseline">
                    <span className="font-serif text-2xl text-plum-700 shrink-0">{step.n}</span>
                    <div className="min-w-0">
                      <p className="text-base font-sans font-semibold">{step.title}</p>
                      <p className="mt-1.5 text-sm leading-relaxed text-cream/70">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
