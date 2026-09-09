import type { ContentCategory } from "@/types";

// O feed RSS do YouTube (ver src/lib/youtube.ts) traz título, link, data e
// thumbnail de cada vídeo automaticamente — mas não traz categoria, porque
// isso não existe no YouTube. Por padrão, todo vídeo importado entra em
// "estudos" e não aparece em destaque.
//
// Para corrigir a categoria (ou marcar como destaque) de um vídeo real,
// adicione uma entrada aqui usando o ID do vídeo — a parte final da URL do
// YouTube (em youtube.com/watch?v=ABC123, o ID é "ABC123").
//
// Exemplo:
// export const videoOverrides: Record<string, VideoOverride> = {
//   "SznR1CbPzCI": { category: "vestibular", featured: true },
// };

export type VideoOverride = {
  category?: ContentCategory;
  featured?: boolean;
};

export const videoOverrides: Record<string, VideoOverride> = {};

export const DEFAULT_YOUTUBE_CATEGORY: ContentCategory = "estudos";
