// Seção da página /pac com tema de fundo. As cores vêm das variáveis em
// src/app/globals.css (--branco, --creme, --verde) e as classes .tema-claro /
// .tema-creme / .tema-escuro trocam as cores do texto dentro dela.
// Quando a seção anterior é de outro "lado" (claro x verde), entra no topo
// uma faixa de degradê de 80px, sem animação.
export type TemaSecao = "branco" | "creme" | "verde";

const CLASSE: Record<TemaSecao, string> = {
  branco: "tema-claro",
  creme: "tema-creme",
  verde: "tema-escuro bg-[var(--verde)]",
};

const COR: Record<TemaSecao, string> = {
  branco: "var(--branco)",
  creme: "var(--creme)",
  verde: "var(--verde)",
};

const claro = (t: TemaSecao) => t !== "verde";

export function PacSecao({
  tema,
  anterior,
  id,
  className = "",
  children,
}: {
  tema: TemaSecao;
  anterior?: TemaSecao;
  id?: string;
  className?: string;
  children: React.ReactNode;
}) {
  const faixa = anterior !== undefined && claro(anterior) !== claro(tema);
  return (
    <section id={id} className={`${CLASSE[tema]} ${className}`}>
      {faixa && (
        <div
          aria-hidden
          className="h-20"
          style={{ background: `linear-gradient(${COR[anterior]}, ${COR[tema]})` }}
        />
      )}
      {children}
    </section>
  );
}
