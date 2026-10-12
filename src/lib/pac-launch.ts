import { siteConfig } from "@/data/site";

// Janela de matrículas da 3ª turma do PAC (horário de Brasília). A página
// troca sozinha de estado por data: antes de abrir e depois de fechar, os
// botões de compra levam pra Comunidade PAC no WhatsApp; durante, pro
// checkout da Kiwify.
export const PAC_OPENS_AT = Date.parse("2026-10-12T09:00:00-03:00");
export const PAC_CLOSES_AT = Date.parse("2026-10-15T23:59:59-03:00");

export type PacPhase = "antes" | "abertas" | "encerradas";

export function getPacPhase(now: number = Date.now()): PacPhase {
  if (now < PAC_OPENS_AT) return "antes";
  if (now <= PAC_CLOSES_AT) return "abertas";
  return "encerradas";
}

export const pacPhaseNotice: Record<PacPhase, string> = {
  antes: "Matrículas abrem em 12/10, às 9h",
  abertas: "Matrículas de 12 a 15/10",
  encerradas: "Matrículas encerradas",
};

export function pacBuyHref(phase: PacPhase): string {
  return phase === "abertas" ? siteConfig.links.pacCheckout : siteConfig.links.pacCommunity;
}
