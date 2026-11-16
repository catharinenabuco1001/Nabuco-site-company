"use client";

import Image from "next/image";
import { Lightbox, useLightbox, type LightboxItem } from "@/components/Lightbox";

// Provas sociais do /pac. Os dados vêm de src/data/pac-provas.ts, já
// filtrados na página (só autorizados e com arquivo existente).

export type ProvaCard = { nome: string; contexto: string; chip: string; frase: string; semNome: boolean };

function Avatar({ nome, semNome }: { nome: string; semNome: boolean }) {
  return (
    <span
      aria-hidden
      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#C9A24C]/20 font-serif text-lg text-[#C9A24C]"
    >
      {semNome ? (
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.6">
          <circle cx="12" cy="8.5" r="3.5" />
          <path d="M5 19.5c1.2-3.3 3.9-5 7-5s5.8 1.7 7 5" strokeLinecap="round" />
        </svg>
      ) : (
        nome.trim()[0]?.toUpperCase()
      )}
    </span>
  );
}

// Cards de resultado (bloco A): 4 numa linha no desktop, com a mesma
// altura; carrossel no celular. "Ver mensagem" abre o print no lightbox (a
// imagem só carrega quando o lightbox abre).
export function PacResultados({
  cards,
}: {
  cards: (ProvaCard & { print?: LightboxItem })[];
}) {
  const prints = cards.flatMap((c) => (c.print ? [c.print] : []));
  const lb = useLightbox(prints.length);
  if (!cards.length) return null;
  let p = -1;
  return (
    <>
      <ul className="-mx-5 flex snap-x snap-mandatory scroll-px-5 gap-4 overflow-x-auto px-5 pb-2 no-scrollbar md:mx-0 md:grid md:grid-cols-2 md:overflow-visible md:px-0 md:pb-0 lg:grid-cols-4">
        {cards.map((c, i) => {
          const idx = c.print ? ++p : -1;
          return (
            <li
              key={i}
              className="flex w-[82%] shrink-0 snap-start flex-col rounded-2xl border border-[#C9A24C]/40 bg-cream-50/60 p-5 md:w-auto"
            >
              <div className="flex items-center gap-3">
                <Avatar nome={c.nome} semNome={c.semNome} />
                <span className="min-w-0">
                  <span className="block text-sm font-semibold text-ink-900">{c.nome}</span>
                  <span className="block text-xs text-ink-900/70">{c.contexto}</span>
                </span>
              </div>
              <span className="mt-3 self-start rounded-full bg-[#C9A24C] px-3 py-1 text-xs font-semibold text-[#0F2E22]">
                {c.chip}
              </span>
              <blockquote className="mt-3 line-clamp-4 font-serif text-base leading-snug text-ink-900">
                “{c.frase}”
              </blockquote>
              {c.print && (
                <button
                  ref={lb.gatilho(idx)}
                  type="button"
                  onClick={() => lb.abrir(idx)}
                  className="mt-auto self-start pt-4 text-sm font-semibold text-[#C9A24C] underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C9A24C]"
                >
                  Ver mensagem →
                </button>
              )}
            </li>
          );
        })}
      </ul>
      <Lightbox lb={lb} items={prints} />
    </>
  );
}

// Grade de prints com lightbox: 2 colunas no celular, 4 no desktop.
export function PacPrintsGrid({ prints }: { prints: LightboxItem[] }) {
  const lb = useLightbox(prints.length);
  if (!prints.length) return null;
  return (
    <>
      <ul className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4">
        {prints.map((p, i) => (
          <li key={p.src}>
            <figure>
              <button
                ref={lb.gatilho(i)}
                type="button"
                onClick={() => lb.abrir(i)}
                aria-label={`Ampliar: ${p.alt}`}
                className="block aspect-[3/4] w-full overflow-hidden rounded-xl border border-[#C9A24C]/50 bg-[#0F2E22] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C9A24C]"
              >
                <Image
                  src={p.src}
                  alt={p.alt}
                  width={p.w}
                  height={p.h}
                  quality={90}
                  loading="lazy"
                  sizes="(min-width: 768px) 220px, 45vw"
                  className="h-full w-full object-cover object-top"
                />
              </button>
              <figcaption className="mt-2 text-xs leading-snug text-[#F2F0EB]/75">{p.legenda}</figcaption>
            </figure>
          </li>
        ))}
      </ul>
      <Lightbox lb={lb} items={prints} />
    </>
  );
}
