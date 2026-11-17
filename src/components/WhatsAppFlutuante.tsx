"use client";

import { usePathname } from "next/navigation";
import { siteConfig } from "@/data/site";

// Botão redondo de WhatsApp no canto inferior direito (todas as páginas).
// No /pac em celular ele sobe, pra ficar acima da barra fixa de compra.
export function WhatsAppFlutuante() {
  const pathname = usePathname();
  const temBarraPac = pathname === "/pac";

  return (
    <a
      href={siteConfig.contact.whatsappFlutuante}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar com a Cathy no WhatsApp"
      title="Falar com a Cathy no WhatsApp"
      className={`fixed right-4 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/30 transition-transform hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C9A24C] sm:right-6 ${
        temBarraPac ? "bottom-24 lg:bottom-6" : "bottom-4 sm:bottom-6"
      }`}
    >
      <svg viewBox="0 0 32 32" aria-hidden="true" className="h-7 w-7" fill="currentColor">
        <path d="M16.04 3C9.07 3 3.4 8.66 3.4 15.63c0 2.23.58 4.4 1.69 6.32L3.3 28.5l6.73-1.76a12.6 12.6 0 0 0 6.01 1.53h.01c6.97 0 12.64-5.66 12.64-12.63 0-3.38-1.31-6.55-3.7-8.94A12.56 12.56 0 0 0 16.04 3Zm0 23.13h-.01a10.5 10.5 0 0 1-5.35-1.47l-.38-.23-3.99 1.05 1.06-3.89-.25-.4a10.45 10.45 0 0 1-1.6-5.56c0-5.79 4.72-10.5 10.53-10.5 2.81 0 5.45 1.1 7.44 3.08a10.43 10.43 0 0 1 3.08 7.43c0 5.8-4.72 10.5-10.53 10.5Zm5.77-7.86c-.32-.16-1.87-.92-2.16-1.03-.29-.1-.5-.16-.71.16-.21.32-.82 1.03-1 1.24-.18.21-.37.24-.69.08-.32-.16-1.33-.49-2.54-1.57-.94-.84-1.57-1.87-1.75-2.19-.18-.32-.02-.49.14-.65.14-.14.32-.37.48-.55.16-.18.21-.32.32-.53.1-.21.05-.4-.03-.55-.08-.16-.71-1.71-.97-2.34-.26-.62-.52-.53-.71-.54h-.61c-.21 0-.55.08-.84.4-.29.32-1.1 1.08-1.1 2.63 0 1.55 1.13 3.05 1.29 3.26.16.21 2.22 3.39 5.38 4.75.75.32 1.34.52 1.8.66.76.24 1.45.21 1.99.13.61-.09 1.87-.76 2.13-1.5.26-.74.26-1.37.18-1.5-.08-.13-.29-.21-.61-.37Z" />
      </svg>
    </a>
  );
}
