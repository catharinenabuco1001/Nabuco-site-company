import "server-only";
import { existsSync, readdirSync, readFileSync } from "fs";
import path from "path";

// Verifica se um arquivo já foi colocado em /public antes de tentar
// renderizá-lo, para nunca mostrar um ícone de imagem quebrada enquanto
// as fotos reais da Catharine ainda não existem. Assim que o arquivo for
// adicionado em public/images/, o componente passa a usá-lo automaticamente
// — não precisa mudar nenhum código.
export function publicImageExists(relativePath: string): boolean {
  try {
    return existsSync(path.join(process.cwd(), "public", relativePath));
  } catch {
    return false;
  }
}

// Largura e altura de um PNG ou JPEG em /public (lidos do cabeçalho do
// arquivo), pra next/image ter as dimensões reais sem digitar à mão.
export function publicImageSize(relativePath: string): { w: number; h: number } | null {
  try {
    const buf = readFileSync(path.join(process.cwd(), "public", relativePath));
    // PNG: largura/altura no chunk IHDR.
    if (buf.readUInt32BE(0) === 0x89504e47) {
      return { w: buf.readUInt32BE(16), h: buf.readUInt32BE(20) };
    }
    // JPEG: procura o marcador SOFn.
    if (buf[0] === 0xff && buf[1] === 0xd8) {
      let i = 2;
      while (i < buf.length) {
        if (buf[i] !== 0xff) return null;
        const marker = buf[i + 1];
        const len = buf.readUInt16BE(i + 2);
        if (marker >= 0xc0 && marker <= 0xcf && ![0xc4, 0xc8, 0xcc].includes(marker)) {
          return { w: buf.readUInt16BE(i + 7), h: buf.readUInt16BE(i + 5) };
        }
        i += 2 + len;
      }
    }
    return null;
  } catch {
    return null;
  }
}

// Arquivos de imagem de uma pasta em /public (ex.: "images/pac/provas").
export function publicImageFiles(relativeDir: string): string[] {
  try {
    return readdirSync(path.join(process.cwd(), "public", relativeDir)).filter((f) =>
      /\.(png|jpe?g|webp)$/i.test(f)
    );
  } catch {
    return [];
  }
}
