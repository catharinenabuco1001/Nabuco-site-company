"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import type { PacCena } from "@/data/pac";

// "Cenas do PAC": galeria (carrossel no celular, grade no desktop) com
// lightbox. Recebe só os itens ativos cujo arquivo existe (filtrados na página).
export function PacCenas({ cenas }: { cenas: PacCena[] }) {
  const [aberta, setAberta] = useState<number | null>(null);
  const gatilhos = useRef<(HTMLButtonElement | null)[]>([]);
  const fecharRef = useRef<HTMLButtonElement>(null);
  const ultimaAberta = useRef<number | null>(null);

  const fechar = useCallback(() => setAberta(null), []);
  const navegar = useCallback(
    (passo: number) =>
      setAberta((i) => (i === null ? i : (i + passo + cenas.length) % cenas.length)),
    [cenas.length]
  );

  // Foco: vai pro botão de fechar ao abrir e volta pra miniatura ao fechar.
  useEffect(() => {
    if (aberta !== null) {
      ultimaAberta.current = aberta;
      fecharRef.current?.focus();
    } else if (ultimaAberta.current !== null) {
      gatilhos.current[ultimaAberta.current]?.focus();
      ultimaAberta.current = null;
    }
  }, [aberta]);

  useEffect(() => {
    if (aberta === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") fechar();
      else if (e.key === "ArrowRight") navegar(1);
      else if (e.key === "ArrowLeft") navegar(-1);
      else if (e.key === "Tab") {
        // Mantém o foco dentro do lightbox.
        const els = document.querySelectorAll<HTMLElement>("#pac-cenas-lightbox button");
        if (!els.length) return;
        const first = els[0];
        const last = els[els.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener("keydown", onKey);
    const overflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = overflow;
    };
  }, [aberta, fechar, navegar]);

  if (!cenas.length) return null;
  const atual = aberta !== null ? cenas[aberta] : null;

  return (
    <>
      <div className="-mx-5 flex snap-x snap-mandatory scroll-px-5 gap-4 overflow-x-auto px-5 pb-2 no-scrollbar md:mx-0 md:grid md:grid-cols-2 md:gap-6 md:overflow-visible md:px-0 md:pb-0">
        {cenas.map((c, i) => (
          <figure
            key={c.file}
            className={`w-[66%] shrink-0 snap-start md:w-auto ${c.formato === "largo" ? "md:col-span-2" : ""}`}
          >
            <button
              ref={(el) => {
                gatilhos.current[i] = el;
              }}
              type="button"
              onClick={() => setAberta(i)}
              aria-label={`Ampliar: ${c.alt}`}
              className={`relative block w-full overflow-hidden rounded-2xl border border-[#C9A24C]/60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C9A24C] ${
                c.formato === "largo" ? "aspect-video bg-[#0F2E22]" : "aspect-[4/5]"
              }`}
            >
              <Image
                src={`/images/pac/${c.file}`}
                alt={c.alt}
                width={c.w}
                height={c.h}
                quality={90}
                loading="lazy"
                sizes={
                  c.formato === "largo"
                    ? "(min-width: 768px) 900px, 66vw"
                    : "(min-width: 768px) 450px, 66vw"
                }
                className={`h-full w-full ${c.formato === "largo" ? "object-contain" : "object-cover"}`}
                style={c.objectPosition ? { objectPosition: c.objectPosition } : undefined}
              />
            </button>
            <figcaption className="mt-2 text-sm text-[#F2F0EB]/70">{c.legenda}</figcaption>
          </figure>
        ))}
      </div>

      {atual && aberta !== null && (
        <div
          id="pac-cenas-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={atual.legenda}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/85 p-4 sm:p-10"
          onClick={fechar}
        >
          <figure className="relative max-h-full max-w-5xl" onClick={(e) => e.stopPropagation()}>
            <Image
              src={`/images/pac/${atual.file}`}
              alt={atual.alt}
              width={atual.w}
              height={atual.h}
              quality={90}
              sizes="100vw"
              className="max-h-[80vh] w-auto rounded-xl object-contain"
            />
            <figcaption className="mt-3 text-center text-sm text-[#F2F0EB]/80">
              {atual.legenda} <span className="opacity-60">({aberta + 1}/{cenas.length})</span>
            </figcaption>
          </figure>

          <button
            ref={fecharRef}
            type="button"
            onClick={fechar}
            aria-label="Fechar"
            className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full border border-[#C9A24C]/60 bg-[#0F2E22] text-xl text-[#F2F0EB] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#C9A24C]"
          >
            ✕
          </button>
          {cenas.length > 1 && (
            <>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  navegar(-1);
                }}
                aria-label="Imagem anterior"
                className="absolute left-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-[#C9A24C]/60 bg-[#0F2E22] text-xl text-[#F2F0EB] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#C9A24C]"
              >
                ←
              </button>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  navegar(1);
                }}
                aria-label="Próxima imagem"
                className="absolute right-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-[#C9A24C]/60 bg-[#0F2E22] text-xl text-[#F2F0EB] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#C9A24C]"
              >
                →
              </button>
            </>
          )}
        </div>
      )}
    </>
  );
}
