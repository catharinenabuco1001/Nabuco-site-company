import { siteConfig } from "@/data/site";

// ---------------------------------------------------------------------------
// Abertura da turma do PAC: MUDE SÓ AQUI. Esta data controla tudo: a barra de
// contagem do topo, os avisos com a data e a troca dos botões de compra
// (Comunidade PAC antes, checkout depois). O fuso vai fixo no próprio ISO.
// ---------------------------------------------------------------------------
export const DATA_ABERTURA_PAC = "2026-11-16T20:00:00-03:00";
export const DATA_ABERTURA_TEXTO = "dia 16 de novembro, às 20h";

export const COMUNIDADE_URL = siteConfig.links.pacCommunity;
export const CHECKOUT_URL = siteConfig.links.pacCheckout;

export const PAC_AVISO_ANTES = `Nova turma abre ${DATA_ABERTURA_TEXTO}`;
export const PAC_AVISO_DEPOIS = "Inscrições abertas";

const aberturaMs = Date.parse(DATA_ABERTURA_PAC);

export function pacAberto(now: number = Date.now()): boolean {
  return now >= aberturaMs;
}

export function msAteAbertura(now: number = Date.now()): number {
  return Math.max(0, aberturaMs - now);
}

// Destino de todo botão de compra: Comunidade PAC antes da abertura, checkout
// a partir dela.
export function getCtaUrl(now: number = Date.now()): string {
  return pacAberto(now) ? CHECKOUT_URL : COMUNIDADE_URL;
}
