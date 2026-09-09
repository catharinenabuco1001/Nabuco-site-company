import "server-only";
import type { Video } from "@/types";
import { videos as staticVideos } from "@/data/videos";
import { siteConfig } from "@/data/site";
import { videoOverrides, DEFAULT_YOUTUBE_CATEGORY } from "@/data/video-overrides";

// Camada de acesso a vídeos, isolada da UI — os componentes só chamam
// getVideos() e nunca sabem de onde os dados vêm.
//
// Fonte usada hoje: o feed RSS público do canal do YouTube
// (youtube.com/feeds/videos.xml?channel_id=...). Não exige API key nem
// login — é o mesmo feed que qualquer leitor de RSS consegue ler — então
// não há nada sensível para proteger aqui. A troca é que o RSS do YouTube
// só traz os ~15 vídeos mais recentes (sem paginação nem categoria própria
// do canal); para um histórico completo ou busca mais rica, o caminho
// seria migrar para a YouTube Data API v3 (exige API key — nesse caso ela
// precisaria ficar só no servidor, nunca no bundle do cliente).
//
// Categoria não existe no YouTube, então todo vídeo importado entra como
// DEFAULT_YOUTUBE_CATEGORY por padrão — ajuste isso (ou marque destaque)
// em src/data/video-overrides.ts usando o ID do vídeo.
//
// Se o feed falhar por qualquer motivo (rede fora do ar, YouTube mudou o
// formato, etc.), caímos de volta nos vídeos de exemplo em
// src/data/videos.ts em vez de quebrar a página.

const FEED_URL = `https://www.youtube.com/feeds/videos.xml?channel_id=${siteConfig.youtube.channelId}`;

function decodeXmlEntities(value: string): string {
  return value
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&apos;/g, "'")
    .trim();
}

function extractTagContent(block: string, tag: string): string | undefined {
  const match = block.match(new RegExp(`<${tag}[^>]*>([\\s\\S]*?)</${tag}>`));
  return match ? decodeXmlEntities(match[1]) : undefined;
}

function extractAttribute(block: string, tag: string, attr: string): string | undefined {
  const match = block.match(new RegExp(`<${tag}\\b[^>]*\\s${attr}="([^"]*)"`));
  return match ? match[1] : undefined;
}

function parseYouTubeFeed(xml: string): Video[] {
  const entries = xml.match(/<entry>[\s\S]*?<\/entry>/g) ?? [];

  return entries
    .map((entry): Video | null => {
      const videoId = extractTagContent(entry, "yt:videoId");
      if (!videoId) return null;

      const title = extractTagContent(entry, "media:title") ?? extractTagContent(entry, "title");
      if (!title) return null;

      const description = extractTagContent(entry, "media:description");
      const thumbnail = extractAttribute(entry, "media:thumbnail", "url");
      const override = videoOverrides[videoId];

      return {
        id: videoId,
        title,
        description,
        category: override?.category ?? DEFAULT_YOUTUBE_CATEGORY,
        platform: "youtube",
        thumbnail,
        url: `https://www.youtube.com/watch?v=${videoId}`,
        featured: override?.featured ?? false,
      };
    })
    .filter((video): video is Video => video !== null);
}

export async function getVideos(): Promise<Video[]> {
  try {
    const res = await fetch(FEED_URL, {
      // Revalida em segundo plano a cada hora — não busca no YouTube a
      // cada visita.
      next: { revalidate: 3600 },
    });

    if (!res.ok) {
      throw new Error(`YouTube RSS respondeu ${res.status}`);
    }

    const xml = await res.text();
    const videos = parseYouTubeFeed(xml);

    if (videos.length === 0) {
      throw new Error("Feed do YouTube vazio ou em formato inesperado");
    }

    return videos;
  } catch (error) {
    console.error("[youtube] Falha ao buscar o feed real, usando vídeos de exemplo:", error);
    return staticVideos;
  }
}
