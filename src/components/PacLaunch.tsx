"use client";

import { useEffect, useState } from "react";
import { CTA } from "@/components/ui/CTA";
import {
  COMUNIDADE_URL,
  PAC_AVISO_ANTES,
  PAC_AVISO_DEPOIS,
  getCtaUrl,
  getEstadoOferta,
  type EstadoOferta,
} from "@/lib/pac-launch";

// As páginas são geradas no build, então a decisão "antes/depois da abertura"
// é feita no navegador, depois de montar. O primeiro render é sempre o de
// "antes" (Comunidade PAC), igual ao HTML do build: sem erro de hidratação.
// Recalcula a cada 15s pra virar sozinho, sem recarregar a página.
export function useEstadoOferta(): EstadoOferta {
  const [estado, setEstado] = useState<EstadoOferta>("antes");
  useEffect(() => {
    const update = () => setEstado(getEstadoOferta());
    update();
    const id = setInterval(update, 15_000);
    return () => clearInterval(id);
  }, []);
  return estado;
}

export function usePacAberto(): boolean {
  return useEstadoOferta() !== "antes";
}

export function useCtaUrl(): string {
  const aberto = usePacAberto();
  return aberto ? getCtaUrl() : COMUNIDADE_URL;
}

type BuyProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
};

// Botão de compra: Comunidade PAC antes da abertura, checkout depois.
export function PacBuyButton({ children, variant = "primary", className }: BuyProps) {
  const href = useCtaUrl();
  return (
    <CTA href={href} variant={variant} external className={className}>
      {children}
    </CTA>
  );
}

// Aviso único da turma: "Nova turma abre dia 16 de novembro, às 20h" antes da
// abertura e "Inscrições abertas" depois. Com `badge`, vira a pílula do topo.
export function PacNotice({ className, badge = false }: { className?: string; badge?: boolean }) {
  const aberto = usePacAberto();
  return (
    <span className={className}>
      {badge && <span className="h-1.5 w-1.5 rounded-full bg-gold-500 animate-pulse" />}
      {aberto ? PAC_AVISO_DEPOIS : PAC_AVISO_ANTES}
    </span>
  );
}
