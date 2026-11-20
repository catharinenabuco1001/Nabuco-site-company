import { siteConfig } from "@/data/site";
import type { EstadoPromo } from "@/data/pac";

// ---------------------------------------------------------------------------
// Abertura da turma do PAC: MUDE SÓ AQUI. Esta data controla tudo: a barra de
// contagem do topo, os avisos com a data e a troca dos botões de compra
// (Comunidade PAC antes, checkout depois). O fuso vai fixo no próprio ISO.
// ---------------------------------------------------------------------------
export const DATA_ABERTURA_PAC = "2026-11-16T20:00:00-03:00";
export const DATA_ABERTURA_TEXTO = "dia 16 de novembro, às 20h";

export const COMUNIDADE_URL = siteConfig.links.pacCommunity;
export const CHECKOUT_URL = siteConfig.links.pacCheckout;
// Checkout com o cupom da live (só entre DATA_ABERTURA_PAC e PROMO_FIM).
export const CHECKOUT_LIVE_URL = siteConfig.links.pacCheckoutLive;

export const PAC_AVISO_ANTES = `Nova turma abre ${DATA_ABERTURA_TEXTO}`;
export const PAC_AVISO_DEPOIS = "Inscrições abertas";

const aberturaMs = Date.parse(DATA_ABERTURA_PAC);

export function pacAberto(now: number = Date.now()): boolean {
  return now >= aberturaMs;
}

export function msAteAbertura(now: number = Date.now()): number {
  return Math.max(0, aberturaMs - now);
}

// Inscrições abertas: os botões de compra levam ao checkout desde o primeiro
// render. Com cupom (CHECKOUT_LIVE_URL) até PROMO_FIM; depois, sem cupom.
// A Comunidade PAC só entra se não houver link de checkout.
export const CTA_PADRAO = CHECKOUT_LIVE_URL || CHECKOUT_URL || COMUNIDADE_URL;

export function getCtaUrl(now: number = Date.now()): string {
  if (now < Date.parse(PROMO_FIM)) return CTA_PADRAO;
  return CHECKOUT_URL || COMUNIDADE_URL;
}

// ---------------------------------------------------------------------------
// Promoção da live de abertura: de DATA_ABERTURA_PAC até PROMO_FIM (meia-noite
// de 16 pra 17/11). Não reinicia nem prorroga: depois de PROMO_FIM o estado é
// sempre "depois".
// ---------------------------------------------------------------------------
export const PROMO_FIM = "2026-11-20T00:00:00-03:00"; // fim de quinta, 19/11
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

// Aviso "módulo de logaritmo garantido": aparece até este momento e some
// sozinho depois (src/components/PacOferta.tsx, PacAvisoLog).
export const LOG_FIM = "2026-11-17T00:00:00-03:00";

// ---------------------------------------------------------------------------
// Preço promocional até PROMO_FIM; depois, preço cheio (sozinho, sem
// prorrogar). Estado inicial = o do momento do build (PAC_BUILD_TIME, igual no
// servidor e no navegador); no navegador, reavalia a cada segundo.
// ---------------------------------------------------------------------------
export function estadoPromo(now: number = Date.now()): EstadoPromo {
  return now < promoFimMs ? "promo" : "cheio";
}

export function msAtePromoFim(now: number = Date.now()): number {
  return Math.max(0, promoFimMs - now);
}

export const ESTADO_INICIAL: EstadoPromo = estadoPromo(
  Number(process.env.PAC_BUILD_TIME) || Date.now()
);

// "HH:MM:SS" (com "Xd " na frente só se faltar mais de um dia).
export function formatarRestante(ms: number): string {
  const s = Math.floor(ms / 1000);
  const d = Math.floor(s / 86400);
  const hms = [Math.floor((s % 86400) / 3600), Math.floor((s % 3600) / 60), s % 60]
    .map((n) => String(n).padStart(2, "0"))
    .join(":");
  return d > 0 ? `${d}d ${hms}` : hms;
}

// Destino da bola flutuante da promoção (fácil de trocar).
export const BOLA_DESTINO = CHECKOUT_LIVE_URL || CHECKOUT_URL;
