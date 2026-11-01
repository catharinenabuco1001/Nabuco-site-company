import { siteConfig } from "@/data/site";

// ---------------------------------------------------------------------------
// Próxima turma do PAC: MUDE SÓ AQUI. O aviso aparece em todas as páginas
// onde o PAC aparece (/pac, home, /aulas, /produtos, blog).
// ---------------------------------------------------------------------------
export const PAC_NEXT_COHORT = {
  // Dia de abertura (horário de Brasília). Sem horário definido: o aviso some
  // sozinho quando esse dia termina, pra não ficar data vencida no site.
  date: "2026-11-16",
  notice: "Nova turma abre dia 16 de novembro",
};

// Janela de matrículas COM horário. Enquanto for null, os botões de compra
// levam pra Comunidade PAC no WhatsApp. Quando tiver horário, preencha, ex.:
// { opensAt: "2026-11-16T19:00:00-03:00", closesAt: "2026-11-19T23:59:59-03:00" }
// e os botões passam a levar ao checkout só dentro da janela.
export const PAC_ENROLLMENT: { opensAt: string; closesAt: string } | null = null;

export type PacPhase = "antes" | "abertas" | "encerradas";

export function getPacPhase(now: number = Date.now()): PacPhase {
  if (!PAC_ENROLLMENT) return "antes";
  if (now < Date.parse(PAC_ENROLLMENT.opensAt)) return "antes";
  if (now <= Date.parse(PAC_ENROLLMENT.closesAt)) return "abertas";
  return "encerradas";
}

const cohortDayEnd = Date.parse(`${PAC_NEXT_COHORT.date}T23:59:59-03:00`);

// Texto do aviso por estado. `null` = não mostra nada (ex.: a data da próxima
// turma já passou e ninguém atualizou PAC_NEXT_COHORT).
export function pacPhaseNotice(phase: PacPhase, now: number = Date.now()): string | null {
  if (phase === "abertas") return "Matrículas abertas";
  if (now > cohortDayEnd) return null;
  return PAC_NEXT_COHORT.notice;
}

export function pacBuyHref(phase: PacPhase): string {
  return phase === "abertas" ? siteConfig.links.pacCheckout : siteConfig.links.pacCommunity;
}
