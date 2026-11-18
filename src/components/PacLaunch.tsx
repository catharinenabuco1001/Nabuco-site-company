"use client";

import { useEffect, useState } from "react";
import { CTA } from "@/components/ui/CTA";
import { CTA_PADRAO, PAC_AVISO_DEPOIS, getCtaUrl } from "@/lib/pac-launch";

// Destino dos botões de compra. Primeiro render (e HTML do build) = checkout
// (CTA_PADRAO); depois de montar, recalcula pela hora a cada 15s (getCtaUrl
// troca pro checkout sem cupom quando o desconto acaba).
export function useCtaUrl(): string {
  const [href, setHref] = useState<string>(CTA_PADRAO);
  useEffect(() => {
    const update = () => setHref(getCtaUrl());
    update();
    const id = setInterval(update, 15_000);
    return () => clearInterval(id);
  }, []);
  return href;
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
