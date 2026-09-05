import type { NewsItem } from "@/types";

// CONTEÚDO DE EXEMPLO — feed "Catharine Agora". Substitua pelas publicações
// reais. A listagem em /noticias ordena automaticamente por "date" (mais
// recente primeiro), então a ordem aqui não importa.
export const news: NewsItem[] = [
  {
    id: "exemplo-01",
    date: "2026-08-01",
    title: "TODO: título da publicação — ex. novo vídeo no ar",
    excerpt: "TODO: inserir resumo real da publicação.",
    category: "video",
    url: "#",
  },
  {
    id: "exemplo-02",
    date: "2026-07-15",
    title: "TODO: título da publicação — ex. nova palestra confirmada",
    excerpt: "TODO: inserir resumo real da publicação.",
    category: "palestra",
    url: "#",
  },
  {
    id: "exemplo-03",
    date: "2026-06-20",
    title: "TODO: título da publicação — ex. novo projeto",
    excerpt: "TODO: inserir resumo real da publicação.",
    category: "projeto",
    url: "#",
  },
];

export const newsCategoryLabels: Record<NewsItem["category"], string> = {
  livro: "Livro",
  palestra: "Palestra",
  projeto: "Projeto",
  video: "Vídeo",
  conquista: "Conquista",
  atualizacao: "Atualização",
};
