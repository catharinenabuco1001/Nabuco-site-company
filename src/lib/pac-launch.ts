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

// ---------------------------------------------------------------------------
// Promoção da live de abertura: de DATA_ABERTURA_PAC até PROMO_FIM (meia-noite
// de 16 pra 17/11). Não reinicia nem prorroga: depois de PROMO_FIM o estado é
// sempre "depois".
// ---------------------------------------------------------------------------
export const PROMO_FIM = "2026-11-17T00:00:00-03:00";
// Hora do fim em texto ("Só até meia-noite").
export const HORA_FIM_TEXTO = (() => {
  const h = Number(
    new Intl.DateTimeFormat("pt-BR", {
      hour: "numeric",
      hourCycle: "h23",
      timeZone: "America/Sao_Paulo",
    }).format(new Date(PROMO_FIM))
  );
  const m = new Date(PROMO_FIM).getUTCMinutes();
  if (h === 0 && m === 0) return "meia-noite";
  return m ? `${h}h${String(m).padStart(2, "0")}` : `${h}h`;
})();

export type EstadoOferta = "antes" | "live" | "depois";

const promoFimMs = Date.parse(PROMO_FIM);

export function getEstadoOferta(agora: number = Date.now()): EstadoOferta {
  if (agora < aberturaMs) return "antes";
  if (agora < promoFimMs) return "live";
  return "depois";
}
