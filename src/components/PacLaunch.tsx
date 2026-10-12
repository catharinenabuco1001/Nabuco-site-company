"use client";

import { useEffect, useState } from "react";
import { CTA } from "@/components/ui/CTA";
import { getPacPhase, pacBuyHref, pacPhaseNotice, type PacPhase } from "@/lib/pac-launch";

// A página do PAC é gerada no build, então o estado da turma calculado ali
// (`buildPhase`) pode estar velho. Ele só é usado na primeira renderização,
// pra bater com o HTML; no navegador recalculamos na hora (e a cada 30s, pra
// virar sozinho na hora exata de abrir/fechar).
function usePacPhase(buildPhase: PacPhase): PacPhase {
  const [phase, setPhase] = useState<PacPhase>(buildPhase);
  useEffect(() => {
    const update = () => setPhase(getPacPhase());
    update();
    const id = setInterval(update, 30_000);
    return () => clearInterval(id);
  }, []);
  return phase;
}

type BuyProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  buildPhase: PacPhase;
};

// Botão de compra: checkout com matrículas abertas, Comunidade PAC fora delas.
export function PacBuyButton({ children, variant = "primary", className, buildPhase }: BuyProps) {
  const phase = usePacPhase(buildPhase);
  return (
    <CTA href={pacBuyHref(phase)} variant={variant} external className={className}>
      {children}
    </CTA>
  );
}

// "Matrículas abrem em…", "Matrículas de 12 a 15/10" ou "Matrículas encerradas".
// Com `onlyWhenClosed`, só aparece fora do período de matrículas.
export function PacPhaseNotice({
  className,
  onlyWhenClosed = false,
  buildPhase,
}: {
  className?: string;
  onlyWhenClosed?: boolean;
  buildPhase: PacPhase;
}) {
  const phase = usePacPhase(buildPhase);
  if (onlyWhenClosed && phase === "abertas") return null;
  return (
    <span className={className}>
      {pacPhaseNotice[phase]}
    </span>
  );
}
