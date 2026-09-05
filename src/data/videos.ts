import type { Video } from "@/types";

// CONTEÚDO DE EXEMPLO — substitua pelos vídeos reais (YouTube/TikTok) da Catharine.
// Esta é a fonte de dados consumida por /aulas. Quando a integração com a
// YouTube Data API for ativada (ver src/lib/youtube.ts), os vídeos com
// platform: "youtube" poderão vir dessa API em vez deste arquivo, sem
// precisar alterar nenhum componente de UI.

export const videos: Video[] = [
  {
    id: "exemplo-01",
    title: "TODO: título do vídeo — ex. Como organizar a rotina de vestibular",
    description: "TODO: inserir descrição real do vídeo.",
    category: "vestibular",
    platform: "youtube",
    url: "#",
    duration: "12 min",
    featured: true,
  },
  {
    id: "exemplo-02",
    title: "TODO: título do vídeo — método de estudo ativo",
    description: "TODO: inserir descrição real do vídeo.",
    category: "estudos",
    platform: "youtube",
    url: "#",
    duration: "9 min",
    featured: true,
  },
  {
    id: "exemplo-03",
    title: "TODO: título do vídeo — IA aplicada aos estudos",
    description: "TODO: inserir descrição real do vídeo.",
    category: "ia",
    platform: "youtube",
    url: "#",
    duration: "15 min",
    featured: true,
  },
  {
    id: "exemplo-04",
    title: "TODO: título do vídeo — rotina de alta performance",
    description: "TODO: inserir descrição real do vídeo.",
    category: "performance",
    platform: "youtube",
    url: "#",
    duration: "11 min",
  },
  {
    id: "exemplo-05",
    title: "TODO: título do vídeo — produtividade sem burnout",
    description: "TODO: inserir descrição real do vídeo.",
    category: "produtividade",
    platform: "youtube",
    url: "#",
    duration: "8 min",
  },
  {
    id: "exemplo-06",
    title: "TODO: título do vídeo — planejamento de estudos por matéria",
    description: "TODO: inserir descrição real do vídeo.",
    category: "vestibular",
    platform: "youtube",
    url: "#",
    duration: "14 min",
  },
  {
    id: "exemplo-07",
    title: "TODO: título do vídeo — como eu reviso o que estudei",
    description: "TODO: inserir descrição real do vídeo.",
    category: "estudos",
    platform: "youtube",
    url: "#",
    duration: "10 min",
  },
  {
    id: "exemplo-08",
    title: "TODO: título do vídeo — ferramentas de IA que eu testei",
    description: "TODO: inserir descrição real do vídeo.",
    category: "ia",
    platform: "youtube",
    url: "#",
    duration: "13 min",
  },
];

// CONTEÚDO DE EXEMPLO — TikToks reais devem substituir estas entradas.
// Arquitetura simples baseada em URL: quando o vídeo tiver sido publicado,
// preencha "url" com o link do TikTok e "thumbnail" com a imagem de capa.
export const tiktoks: Video[] = [
  {
    id: "tiktok-exemplo-01",
    title: "TODO: legenda/título do TikTok",
    category: "estudos",
    platform: "tiktok",
    url: "#",
  },
  {
    id: "tiktok-exemplo-02",
    title: "TODO: legenda/título do TikTok",
    category: "produtividade",
    platform: "tiktok",
    url: "#",
  },
  {
    id: "tiktok-exemplo-03",
    title: "TODO: legenda/título do TikTok",
    category: "vestibular",
    platform: "tiktok",
    url: "#",
  },
  {
    id: "tiktok-exemplo-04",
    title: "TODO: legenda/título do TikTok",
    category: "ia",
    platform: "tiktok",
    url: "#",
  },
];

export const categoryLabels: Record<Video["category"], string> = {
  vestibular: "Vestibular",
  estudos: "Estudos",
  ia: "IA",
  performance: "Performance",
  produtividade: "Produtividade",
};
