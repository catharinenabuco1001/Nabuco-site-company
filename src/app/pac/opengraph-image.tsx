import { ImageResponse } from "next/og";
import { readFile } from "fs/promises";
import path from "path";

// Imagem que aparece quando o link do /pac é compartilhado
// (WhatsApp, Instagram, LinkedIn…).
export const alt = "Método PAC — Pense Antes de Calcular";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
// Gera sob demanda (na primeira visita) em vez de tentar prerenderizar no
// build — evita um bug do gerador de imagem em build no Windows.
export const dynamic = "force-dynamic";

// A fonte padrão embutida no next/og falha ao gerar essa imagem em builds
// Windows quando o caminho do projeto tem espaço (o nosso tem: "Cathy -
// site") — o carregamento interno da fonte quebra ao montar uma URL
// file://. Buscar a fonte explicitamente evita esse caminho quebrado.
async function loadInterFonts(): Promise<{ normal: ArrayBuffer; italic: ArrayBuffer }> {
  const css = await fetch(
    "https://fonts.googleapis.com/css2?family=Inter:ital,wght@0,700;1,700&display=swap",
    { headers: { "User-Agent": "Mozilla/5.0" } }
  ).then((res) => res.text());

  const urls = [...css.matchAll(/url\((https:\/\/fonts\.gstatic\.com\/[^)]+)\)/g)].map((m) => m[1]);
  const [normalUrl, italicUrl] = urls;
  if (!normalUrl || !italicUrl) {
    throw new Error("Não achei as URLs das fontes no CSS do Google Fonts");
  }

  const [normal, italic] = await Promise.all([
    fetch(normalUrl).then((res) => res.arrayBuffer()),
    fetch(italicUrl).then((res) => res.arrayBuffer()),
  ]);
  return { normal, italic };
}

export default async function Image() {
  const [photo, interFonts] = await Promise.all([
    readFile(path.join(process.cwd(), "public/images/hero-retrato.jpeg")),
    loadInterFonts(),
  ]);
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
    {
      ...size,
      fonts: [
        { name: "Inter", data: interFonts.normal, weight: 700, style: "normal" },
        { name: "Inter", data: interFonts.italic, weight: 700, style: "italic" },
      ],
    }
  );
}
