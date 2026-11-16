"use client";

import Image from "next/image";
import { Lightbox, useLightbox, type LightboxItem } from "@/components/Lightbox";

// Capturas da aula da seção "O que você recebe": quadro branco com sombra e
// leve inclinação (só no desktop). Clique amplia no lightbox.
export function PacRecebeImagens({ imagens }: { imagens: LightboxItem[] }) {
  const lb = useLightbox(imagens.length);
  if (!imagens.length) return null;
  return (
    <>
      <div className="mx-auto flex w-full max-w-[420px] flex-col gap-6 lg:max-w-none">
        {imagens.map((img, i) => (
          <button
            key={img.src}
            ref={lb.gatilho(i)}
            type="button"
            onClick={() => lb.abrir(i)}
            aria-label={`Ampliar: ${img.alt}`}
            className={`block rounded-2xl bg-white p-2 shadow-xl shadow-black/30 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C9A24C] ${
              i % 2 === 0 ? "lg:-rotate-[1.5deg]" : "lg:rotate-[1.5deg]"
            }`}
          >
            <Image
              src={img.src}
              alt={img.alt}
              width={img.w}
              height={img.h}
              quality={90}
              loading="lazy"
              sizes="(min-width: 1024px) 480px, 420px"
              className="block h-auto w-full rounded-xl"
            />
          </button>
        ))}
      </div>
      <Lightbox lb={lb} items={imagens} />
    </>
  );
}
