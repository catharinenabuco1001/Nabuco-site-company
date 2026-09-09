import "server-only";

// Busca a capa real de um vídeo do TikTok usando o oEmbed público oficial
// (developers.tiktok.com/doc/embed-videos) — não exige API key nem login,
// é o mesmo endpoint que qualquer site usa pra embutir um vídeo do TikTok.
//
// Importante: a URL da capa que a TikTok devolve é assinada e EXPIRA em
// poucos dias. Por isso nunca deve ser salva em src/data/videos.ts — é
// buscada a cada revalidação (ver `next.revalidate` abaixo) e usada na hora,
// sempre com uma URL fresca.
//
// Se a busca falhar por qualquer motivo (TikTok fora do ar, vídeo removido,
// formato da resposta mudou), retorna undefined e o TikTokCard cai de volta
// no placeholder — nunca quebra a página.
export async function getTikTokThumbnail(videoUrl: string): Promise<string | undefined> {
  try {
    const oembedUrl = `https://www.tiktok.com/oembed?url=${encodeURIComponent(videoUrl)}`;
    const res = await fetch(oembedUrl, {
      next: { revalidate: 3600 }, // a URL da capa expira em dias, não em horas
    });

    if (!res.ok) return undefined;

    const data = (await res.json()) as { thumbnail_url?: string };
    return data.thumbnail_url;
  } catch (error) {
    console.error("[tiktok] Falha ao buscar capa via oEmbed:", error);
    return undefined;
  }
}
