import "server-only";
import { existsSync } from "fs";
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
