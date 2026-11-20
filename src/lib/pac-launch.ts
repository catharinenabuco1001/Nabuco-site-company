import { siteConfig } from "@/data/site";
import type { EstadoPromo } from "@/data/pac";

// ---------------------------------------------------------------------------
// Links de compra e estado da promoção do PAC: MUDE SÓ AQUI.
// ---------------------------------------------------------------------------
export const COMUNIDADE_URL = siteConfig.links.pacCommunity;
// Checkout normal (sem cupom): https://pay.kiwify.com.br/eUCaiLK
export const CHECKOUT_URL = siteConfig.links.pacCheckout;
// Checkout com cupom: só no estado "promo".
export const CTA_PADRAO = siteConfig.links.pacCheckoutLive || CHECKOUT_URL || COMUNIDADE_URL;

export const PAC_AVISO_DEPOIS = "Inscrições abertas";

// Fim da promoção: 23h59 de quinta, 19/11 (Brasília). Não reinicia nem
// prorroga: a partir daqui o estado é sempre "cheio".
export const PROMO_FIM = "2026-11-20T00:00:00-03:00";
const promoFimMs = Date.parse(PROMO_FIM);

// "promo" só enquanto falta tempo (> 0) até PROMO_FIM; senão, "cheio".
export function estadoPromo(now: number = Date.now()): EstadoPromo {
  return promoFimMs - now > 0 ? "promo" : "cheio";
}

export function msAtePromoFim(now: number = Date.now()): number {
  return Math.max(0, promoFimMs - now);
}

// Estado do primeiro render = o do momento do build (PAC_BUILD_TIME, o mesmo
// no servidor e no navegador, sem erro de hidratação). Todo build feito depois
// de PROMO_FIM já sai "cheio"; no navegador, reavalia a cada segundo.
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

// Destino da bola flutuante da promoção (só aparece no estado "promo").
export const BOLA_DESTINO = CTA_PADRAO;
