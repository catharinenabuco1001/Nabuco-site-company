import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import type { Video } from "@/types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const YOUTUBE_URL_PATTERNS = [
  /(?:youtube\.com\/watch\?v=)([\w-]{11})/,
  /(?:youtube\.com\/shorts\/)([\w-]{11})/,
  /(?:youtube\.com\/embed\/)([\w-]{11})/,
  /(?:youtu\.be\/)([\w-]{11})/,
];

export function getYouTubeVideoId(url: string): string | null {
  for (const pattern of YOUTUBE_URL_PATTERNS) {
    const match = url.match(pattern);
    if (match) return match[1];
  }
  return null;
}

// Para adicionar um vídeo real basta título + link (ver src/data/videos.ts):
// se "thumbnail" não for informado, a capa é derivada automaticamente do
// próprio link do YouTube — não precisa subir imagem nenhuma.
export function getVideoThumbnail(
  video: Pick<Video, "thumbnail" | "url" | "platform">
): string | undefined {
  if (video.thumbnail) return video.thumbnail;
  if (video.platform === "youtube") {
    const id = getYouTubeVideoId(video.url);
    if (id) return `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;
  }
  return undefined;
}

export function formatPrice(price: number | null | undefined): string {
  if (price === null || price === undefined) return "TODO: definir preço";
  return price.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

export function formatDate(iso: string): string {
  const date = new Date(iso + "T00:00:00");
  return date.toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}
