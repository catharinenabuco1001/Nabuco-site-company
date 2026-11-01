"use client";

import { useEffect, useState } from "react";
import { CTA } from "@/components/ui/CTA";
import { getPacPhase, pacBuyHref, pacPhaseNotice, type PacPhase } from "@/lib/pac-launch";

// As páginas são geradas no build, então o estado calculado ali
// (`buildPhase`) pode estar velho. Ele só é usado na primeira renderização,
// pra bater com o HTML; no navegador recalculamos na hora (e a cada 30s, pra
// virar sozinho quando a data muda).
function usePacPhase(buildPhase: PacPhase): { phase: PacPhase; now?: number } {
  const [now, setNow] = useState<number>();
  useEffect(() => {
    const update = () => setNow(Date.now());
    update();
    const id = setInterval(update, 30_000);
    return () => clearInterval(id);
  }, []);
  return { phase: now === undefined ? buildPhase : getPacPhase(now), now };
}

type BuyProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  buildPhase: PacPhase;
};

// Botão de compra: checkout com matrículas abertas, Comunidade PAC fora delas.
export function PacBuyButton({ children, variant = "primary", className, buildPhase }: BuyProps) {
  const { phase } = usePacPhase(buildPhase);
  return (
    <CTA href={pacBuyHref(phase)} variant={variant} external className={className}>
      {children}
    </CTA>
  );
}

// Aviso da turma ("Nova turma do PAC abre dia…"). Com `onlyWhenClosed`, só
// aparece fora do período de matrículas; com `badge`, vira a pílula do topo.
export function PacPhaseNotice({
  className,
  onlyWhenClosed = false,
  badge = false,
  buildPhase,
}: {
  className?: string;
  onlyWhenClosed?: boolean;
  badge?: boolean;
  buildPhase: PacPhase;
}) {
  const { phase, now } = usePacPhase(buildPhase);
  // Antes de montar (`now` indefinido) usamos 0, pra o HTML do build e a
  // primeira renderização no navegador mostrarem o mesmo texto.
  const text = pacPhaseNotice(phase, now ?? 0);
  if (!text || (onlyWhenClosed && phase === "abertas")) return null;
  return (
    <span className={className}>
      {badge && <span className="h-1.5 w-1.5 rounded-full bg-gold-500 animate-pulse" />}
      {text}
    </span>
  );
}
