import { ImageResponse } from "next/og";
import { readFile } from "fs/promises";
import path from "path";
import { loadOgFonts } from "@/lib/og-fonts";

// "Capa" do link do site: a imagem que aparece quando alguém compartilha
// catharinenabuco.com no WhatsApp, Instagram, LinkedIn, etc.
export const alt = "Catharine Nabuco | Estudar melhor, não mais.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const dynamic = "force-dynamic";

export default async function Image() {
  const [photo, fonts] = await Promise.all([
    readFile(path.join(process.cwd(), "public/images/hero-lendo.png")),
    loadOgFonts(),
  ]);
  const photoSrc = `data:image/png;base64,${photo.toString("base64")}`;

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
            padding: "0 64px",
          }}
        >
          <div style={{ fontSize: 22, letterSpacing: 6, color: "#C9A24C" }}>CATHARINE NABUCO</div>
          <div style={{ fontSize: 60, lineHeight: 1.08, marginTop: 26 }}>
            Você não precisa estudar mais.
          </div>
          <div style={{ fontSize: 60, lineHeight: 1.08, fontStyle: "italic", color: "#C9A24C" }}>
            Precisa estudar melhor.
          </div>
          <div style={{ display: "flex", fontSize: 24, marginTop: 34, color: "#F2F0EBb3" }}>
            Aulas de matemática e física · Método PAC · Palestras
          </div>
          <div style={{ display: "flex", fontSize: 20, marginTop: 10, color: "#F2F0EB80" }}>
            Autora de 2 livros · Neurociência na UFABC
          </div>
        </div>
        <div style={{ width: 430, height: "100%", display: "flex" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={photoSrc}
            alt=""
            width={430}
            height={630}
            style={{ width: 430, height: 630, objectFit: "cover", objectPosition: "60% 30%" }}
          />
        </div>
      </div>
    ),
    { ...size, ...(fonts.length > 0 ? { fonts } : {}) }
  );
}
