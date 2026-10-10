// Fontes das imagens de compartilhamento (opengraph-image.tsx).
// A fonte padrão embutida no next/og quebra em build no Windows quando o
// caminho do projeto tem espaço ("Cathy - site"), então buscamos a Inter
// explicitamente. Se a busca falhar, devolvemos lista vazia e o next/og usa
// a fonte padrão dele — a imagem sai mesmo assim.
export async function loadOgFonts() {
  try {
    const css = await fetch(
      "https://fonts.googleapis.com/css2?family=Inter:ital,wght@0,700;1,700&display=swap",
      { headers: { "User-Agent": "Mozilla/5.0" } }
    ).then((res) => res.text());

    const urls = [...css.matchAll(/url\((https:\/\/fonts\.gstatic\.com\/[^)]+)\)/g)].map((m) => m[1]);
    const [normalUrl, italicUrl] = urls;
    if (!normalUrl || !italicUrl) return [];

    const [normal, italic] = await Promise.all([
      fetch(normalUrl).then((res) => res.arrayBuffer()),
      fetch(italicUrl).then((res) => res.arrayBuffer()),
    ]);
    return [
      { name: "Inter", data: normal, weight: 700 as const, style: "normal" as const },
      { name: "Inter", data: italic, weight: 700 as const, style: "italic" as const },
    ];
  } catch {
    return [];
  }
}
