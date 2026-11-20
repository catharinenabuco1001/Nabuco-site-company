"use client";

import { useEffect, useState } from "react";
import { CTA } from "@/components/ui/CTA";
import {
  CHECKOUT_URL,
  COMUNIDADE_URL,
  CTA_PADRAO,
  ESTADO_INICIAL,
  PAC_AVISO_DEPOIS,
  estadoPromo,
  msAtePromoFim,
} from "@/lib/pac-launch";
import type { EstadoPromo } from "@/data/pac";

// Estado da promoção ("promo" | "cheio") e quanto falta pro fim. O primeiro
// render usa o estado do build (igual ao HTML); depois de montar, reavalia a
// cada segundo. `ms` é null até montar (a contagem mostra "--:--:--").
export function usePromo(): { estado: EstadoPromo; ms: number | null } {
  const [agora, setAgora] = useState<{ estado: EstadoPromo; ms: number | null }>({
    estado: ESTADO_INICIAL,
    ms: null,
  });
  useEffect(() => {
    const update = () => setAgora({ estado: estadoPromo(), ms: msAtePromoFim() });
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, []);
  return agora;
}

// Destino dos botões de compra: checkout com cupom na promoção, checkout
// normal depois. A Comunidade PAC só entra se faltar link de checkout.
export function useCtaUrl(): string {
  const { estado } = usePromo();
  return estado === "promo" ? CTA_PADRAO : CHECKOUT_URL || COMUNIDADE_URL;
}

type BuyProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
};

// Botão de compra: vai pro checkout.
export function PacBuyButton({ children, variant = "primary", className }: BuyProps) {
  const href = useCtaUrl();
  return (
    <CTA href={href} variant={variant} external className={className}>
      {children}
    </CTA>
  );
}

// Aviso da turma: "Inscrições abertas". Com `badge`, vira a pílula do topo.
export function PacNotice({ className, badge = false }: { className?: string; badge?: boolean }) {
  return (
    <span className={className}>
      {badge && <span className="h-1.5 w-1.5 rounded-full bg-gold-500 animate-pulse" />}
      {PAC_AVISO_DEPOIS}
    </span>
  );
}
