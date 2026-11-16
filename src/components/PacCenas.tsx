"use client";

import Image from "next/image";
import type { PacCena } from "@/data/pac";
import { Lightbox, useLightbox } from "@/components/Lightbox";

// "Cenas do PAC": galeria (carrossel no celular, grade no desktop) com
// lightbox. Recebe só os itens ativos cujo arquivo existe (filtrados na página).
export function PacCenas({ cenas }: { cenas: PacCena[] }) {
  const lb = useLightbox(cenas.length);

  if (!cenas.length) return null;
  // Com número ímpar de fotos verticais, a última fica sozinha na linha:
  // centraliza com meia largura em vez de deixar um buraco ao lado.
  const retratos = cenas.filter((c) => c.formato === "retrato");
  const retratoSozinho = retratos.length % 2 === 1 ? retratos[retratos.length - 1].file : null;

  return (
    <>
      <div className="-mx-5 flex snap-x snap-mandatory scroll-px-5 gap-4 overflow-x-auto px-5 pb-2 no-scrollbar md:mx-0 md:grid md:grid-cols-2 md:gap-6 md:overflow-visible md:px-0 md:pb-0">
        {cenas.map((c, i) => (
          <figure
            key={c.file}
            className={`w-[66%] shrink-0 snap-start md:w-auto ${
              c.formato === "largo"
                ? "md:col-span-2"
                : c.file === retratoSozinho
                  ? "md:col-span-2 md:mx-auto md:w-1/2"
                  : ""
            }`}
          >
            <button
              ref={lb.gatilho(i)}
              type="button"
              onClick={() => lb.abrir(i)}
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

      <Lightbox
        lb={lb}
        items={cenas.map((c) => ({
          src: `/images/pac/${c.file}`,
          alt: c.alt,
          legenda: c.legenda,
          w: c.w,
          h: c.h,
        }))}
      />
    </>
  );
}
