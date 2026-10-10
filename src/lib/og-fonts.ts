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

    // O Google não garante a ordem dos blocos @font-face (a itálica pode vir
    // primeiro), então lemos o font-style de cada um.
    const fontUrl = (style: string) =>
      css
        .split("@font-face")
        .find((block) => block.includes(`font-style: ${style}`))
        ?.match(/url\((https:\/\/fonts\.gstatic\.com\/[^)]+)\)/)?.[1];
    const normalUrl = fontUrl("normal");
    const italicUrl = fontUrl("italic");
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
