import { ImageResponse } from "next/og";
import { readFile } from "fs/promises";
import path from "path";

// Imagem que aparece quando o link do /pac é compartilhado
// (WhatsApp, Instagram, LinkedIn…).
export const alt = "Método PAC — Pense Antes de Calcular";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const photo = await readFile(path.join(process.cwd(), "public/images/hero-retrato.jpeg"));
  const photoSrc = `data:image/jpeg;base64,${photo.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "#0F2E22",
          color: "#F2F0EB",
          fontFamily: "Georgia, serif",
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
          <div style={{ fontSize: 22, letterSpacing: 6, color: "#C9A24C", fontFamily: "sans-serif" }}>
            MÉTODO PAC
          </div>
          <div style={{ fontSize: 68, lineHeight: 1.05, marginTop: 24 }}>
            Você entende a matéria.
          </div>
          <div style={{ fontSize: 68, lineHeight: 1.05, fontStyle: "italic", color: "#C9A24C" }}>
            Trava na conta.
          </div>
          <div style={{ fontSize: 26, marginTop: 30, color: "#F2F0EBaa", fontFamily: "sans-serif" }}>
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
    size
  );
}
