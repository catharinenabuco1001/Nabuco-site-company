import { readFile } from "fs/promises";
import path from "path";
import { siteConfig } from "@/data/site";

// Foto das imagens de compartilhamento (opengraph-image.tsx), como data URL.
// Na Vercel a pasta public/ não vai junto com a função que gera a imagem, então
// ler do disco falha (erro 500 na capa). Nesse caso buscamos a foto pelo
// próprio site, que serve public/ normalmente.
export async function loadPublicImage(relativePath: string, mime: string): Promise<string> {
  let data: Buffer;
  try {
    data = await readFile(path.join(process.cwd(), "public", relativePath));
  } catch {
    const res = await fetch(new URL(relativePath, siteConfig.url));
    if (!res.ok) throw new Error(`Não consegui buscar ${relativePath}: ${res.status}`);
    data = Buffer.from(await res.arrayBuffer());
  }
  return `data:${mime};base64,${data.toString("base64")}`;
}
