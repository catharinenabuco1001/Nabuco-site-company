// Tipos centrais do conteúdo do site. Mantidos separados dos componentes
// para que os dados (src/data/*) e uma futura API (ex.: YouTube Data API)
// possam alimentar a mesma interface sem alterar a UI.

export type ContentCategory =
  | "vestibular"
  | "estudos"
  | "ia"
  | "performance"
  | "produtividade";

export type Video = {
  id: string;
  title: string;
  description?: string;
  category: ContentCategory;
  platform: "youtube" | "tiktok";
  thumbnail?: string;
  url: string;
  duration?: string;
  featured?: boolean;
};

export type Product = {
  id: string;
  name: string;
  tagline: string;
  description: string;
  price?: number | null; // null/undefined = "TODO: definir preço"
  ctaLabel: string;
  ctaUrl: string;
  href?: string; // link interno para página de detalhe (ex.: /pac)
  badge?: string;
  coverImage?: string; // caminho relativo a /public, ex.: "images/cartas-vestibulando.jpg"
};

export type Talk = {
  id: string;
  title: string;
  description: string;
  location?: string;
  year?: string;
  videoUrl?: string;
  event?: string;
  image?: string;
};

export type StudyModel = {
  id: string;
  title: string;
  description: string;
  fileUrl?: string; // undefined = ainda não disponível ("Em breve")
  category: ContentCategory | "geral";
};

export type AIToolFrequency = "frequente" | "eventual" | "testando";

export type AITool = {
  id: string;
  name: string;
  description: string;
  url: string;
  howIUse: string;
  frequency: AIToolFrequency;
  category: string;
};

export type NewsCategory =
  | "livro"
  | "palestra"
  | "projeto"
  | "video"
  | "conquista"
  | "atualizacao";

export type NewsItem = {
  id: string;
  date: string; // ISO 8601
  title: string;
  excerpt: string;
  image?: string;
  category: NewsCategory;
  url?: string;
};
