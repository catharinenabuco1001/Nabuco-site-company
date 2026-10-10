import { ImageResponse } from "next/og";
import { loadOgFonts } from "@/lib/og-fonts";
import { loadPublicImage } from "@/lib/og-image";

// Imagem que aparece quando o link do /pac é compartilhado
// (WhatsApp, Instagram, LinkedIn…).
export const alt = "Método PAC: Pense Antes de Calcular";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
// Gera sob demanda (na primeira visita) em vez de tentar prerenderizar no
// build — evita um bug do gerador de imagem em build no Windows.
export const dynamic = "force-dynamic";

export default async function Image() {
  const [photoSrc, fonts] = await Promise.all([
    loadPublicImage("images/hero-retrato.jpeg", "image/jpeg"),
    loadOgFonts(),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "#0F2E22",
          color: "#F2F0EB",
          fontFamily: "Inter",
        }}
      >
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "0 70px",
          }}
        >
          <div style={{ fontSize: 22, letterSpacing: 6, color: "#C9A24C" }}>MÉTODO PAC</div>
          <div style={{ fontSize: 68, lineHeight: 1.05, marginTop: 24 }}>
            Você entende a matéria.
          </div>
          <div style={{ fontSize: 68, lineHeight: 1.05, fontStyle: "italic", color: "#C9A24C" }}>
            Trava na conta.
          </div>
          <div style={{ fontSize: 26, marginTop: 30, color: "#F2F0EBaa" }}>
            Recupere sua base de matemática em mini-aulas.
          </div>
        </div>
        <div style={{ width: 400, height: "100%", display: "flex", position: "relative" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={photoSrc}
            alt=""
            width={400}
            height={630}
            style={{ width: 400, height: 630, objectFit: "cover", objectPosition: "70% 25%" }}
          />
        </div>
      </div>
    ),
    { ...size, ...(fonts.length > 0 ? { fonts } : {}) }
  );
}
