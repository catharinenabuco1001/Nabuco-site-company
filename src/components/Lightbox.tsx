"use client";

import { useCallback, useEffect, useId, useRef, useState } from "react";
import Image from "next/image";

// Lightbox compartilhado ("Cenas do PAC", prints das provas sociais).
// Esc e clique fora fecham, setas navegam, foco preso no diálogo e devolvido
// à miniatura que abriu.
export type LightboxItem = { src: string; alt: string; legenda: string; w: number; h: number };

export function useLightbox(count: number) {
  const [aberta, setAberta] = useState<number | null>(null);
  const gatilhos = useRef<(HTMLButtonElement | null)[]>([]);
  const fecharRef = useRef<HTMLButtonElement>(null);
  const ultimaAberta = useRef<number | null>(null);
  const dialogId = useId();

  const fechar = useCallback(() => setAberta(null), []);
  const navegar = useCallback(
    (passo: number) => setAberta((i) => (i === null ? i : (i + passo + count) % count)),
    [count]
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
        const els = document.getElementById(dialogId)?.querySelectorAll<HTMLElement>("button");
        if (!els?.length) return;
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
  }, [aberta, fechar, navegar, dialogId]);

  return {
    aberta,
    abrir: (i: number) => setAberta(i),
    fechar,
    navegar,
    fecharRef,
    dialogId,
    gatilho: (i: number) => (el: HTMLButtonElement | null) => {
      gatilhos.current[i] = el;
    },
  };
}

const botao =
  "flex h-11 w-11 items-center justify-center rounded-full border border-[#C9A24C]/60 bg-[#0F2E22] text-xl text-[#F2F0EB] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#C9A24C]";

export function Lightbox({
  items,
  lb,
}: {
  items: LightboxItem[];
  lb: ReturnType<typeof useLightbox>;
}) {
  const { aberta, fechar, navegar, fecharRef, dialogId } = lb;
  if (aberta === null || !items[aberta]) return null;
  const atual = items[aberta];

  return (
    <div
      id={dialogId}
      role="dialog"
      aria-modal="true"
      aria-label={atual.legenda}
      className="fixed inset-0 z-[60] flex items-center justify-center bg-black/85 p-4 sm:p-10"
      onClick={fechar}
    >
      <figure className="relative max-h-full max-w-5xl" onClick={(e) => e.stopPropagation()}>
        <Image
          src={atual.src}
          alt={atual.alt}
          width={atual.w}
          height={atual.h}
          quality={90}
          sizes="100vw"
          className="max-h-[80vh] w-auto rounded-xl object-contain"
        />
        <figcaption className="mt-3 text-center text-sm text-[#F2F0EB]/80">
          {atual.legenda} <span className="opacity-60">({aberta + 1}/{items.length})</span>
        </figcaption>
      </figure>

      <button
        ref={fecharRef}
        type="button"
        onClick={fechar}
        aria-label="Fechar"
        className={`absolute right-4 top-4 ${botao}`}
      >
        ✕
      </button>
      {items.length > 1 && (
        <>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              navegar(-1);
            }}
            aria-label="Imagem anterior"
            className={`absolute left-3 top-1/2 -translate-y-1/2 ${botao}`}
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
            className={`absolute right-3 top-1/2 -translate-y-1/2 ${botao}`}
          >
            →
          </button>
        </>
      )}
    </div>
  );
}
