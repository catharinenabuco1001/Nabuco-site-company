import type { ContentCategory } from "@/types";

// O feed RSS do YouTube (ver src/lib/youtube.ts) traz título, link, data e
// thumbnail de cada vídeo automaticamente — mas não traz categoria nem
// matéria, porque isso não existe no YouTube (nem no TikTok). Por padrão,
// todo vídeo do YouTube importado entra em DEFAULT_YOUTUBE_CATEGORY e sem
// matéria (não aparece em "Todas as aulas" até você atribuir uma).
//
// Para corrigir a categoria/matéria (ou marcar como destaque) de um vídeo
// real, adicione uma entrada aqui usando o ID do vídeo — a parte final da
// URL do YouTube (em youtube.com/watch?v=ABC123, o ID é "ABC123") ou o "id"
// que você escolheu para o TikTok em src/data/videos.ts.
//
// Exemplo:
// export const videoOverrides: Record<string, VideoOverride> = {
//   "SznR1CbPzCI": { category: "vestibular", subject: "matematica", featured: true },
// };

export type Subject =
  | "matematica"
  | "fisica"
  | "performance-e-prova"
  | "metodo-de-estudo"
  | "ia-nos-estudos";

export const subjectLabels: Record<Subject, string> = {
  matematica: "Matemática",
  fisica: "Física",
  "performance-e-prova": "Performance e prova",
  "metodo-de-estudo": "Método de estudo",
  "ia-nos-estudos": "IA nos estudos",
};

// Ordem de exibição em "Todas as aulas" (/aulas). Uma matéria sem nenhum
// vídeo real atribuído simplesmente não aparece — não inventamos categoria
// vazia com "em breve".
export const subjectOrder: Subject[] = [
  "matematica",
  "fisica",
  "performance-e-prova",
  "metodo-de-estudo",
  "ia-nos-estudos",
];

export type VideoOverride = {
  category?: ContentCategory;
  subject?: Subject;
  featured?: boolean;
};

export const DEFAULT_YOUTUBE_CATEGORY: ContentCategory = "estudos";

// Atribuições reais, revisadas por conteúdo (título/descrição) dos vídeos
// já publicados — não é uma lista completa: vídeos mais pessoais/fora do
// escopo de "aula por matéria" (reflexões, maratona, finanças pessoais,
// divulgação de livro) ficam de fora de propósito e não aparecem agrupados
// em "Todas as aulas", só na aba geral de vídeos.
export const videoOverrides: Record<string, VideoOverride> = {
  // YouTube
  SznR1CbPzCI: { subject: "performance-e-prova" }, // Como controlar o nervosismo antes da prova
  pfSNPJyOEZs: { subject: "matematica" }, // Voltar na base ou focar no que mais cai
  M2JMZYi7jg4: { subject: "matematica" }, // 2 coisas pra melhorar em matemática de verdade
  PUO9rmIqbaE: { subject: "metodo-de-estudo" }, // Decorar musiquinha de fórmula
  Fj4jacVdXQY: { subject: "metodo-de-estudo" }, // Não esqueça o que você leu/estudou
  jWM9_h8xhco: { subject: "metodo-de-estudo" }, // Como montei o caderno/habit tracker
  zfe_frjvL5Q: { subject: "matematica" }, // Como melhorar em matemática — Destrave sua matemática

  // TikTok (ids em src/data/videos.ts)
  "bhaskara-soma-e-produto": { subject: "matematica" },
  "circunferencia-formula": { subject: "matematica" },
  "historia-aprovacao-neurociencia": { subject: "performance-e-prova" },
  "forca-eletrica-lei-de-coulomb": { subject: "fisica" },
  "mu-e-mruv": { subject: "fisica" },
};
