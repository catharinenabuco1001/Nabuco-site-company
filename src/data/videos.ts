import type { Video } from "@/types";

// Os vídeos do YouTube já vêm automaticamente do canal real via RSS (ver
// src/lib/youtube.ts) — não precisa editar nada aqui pra isso funcionar.
// Este array só entra em cena como FALLBACK, se o feed do YouTube falhar
// por algum motivo (rede fora do ar, formato mudou, etc.), então mantenha
// como conteúdo de exemplo genérico, não real.
//
// Se algum dia quiser adicionar um vídeo manualmente aqui: basta "title" +
// "url" (o link do YouTube) + "category" + "platform". Não é preciso subir
// imagem de capa — o VideoCard deriva a thumbnail automaticamente a partir
// do próprio link (ver getVideoThumbnail em src/lib/utils.ts).

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

// Aulas do YouTube garantidas no site mesmo se não vierem no RSS (o feed só
// traz os ~15 mais recentes e às vezes fica fora do ar). Matéria e destaque
// continuam em src/data/video-overrides.ts, pelo ID do vídeo.
export const manualYoutubeVideos: Video[] = [
  {
    id: "f9sgN4jLMDc",
    title: "5 técnicas infalíveis para melhorar em interpretação matemática",
    category: "estudos",
    platform: "youtube",
    url: "https://www.youtube.com/watch?v=f9sgN4jLMDc",
  },
  {
    id: "SznR1CbPzCI",
    title: "Como controlar o nervosismo antes da prova de Matemática. (Para ver enquanto faz outra coisa)",
    category: "estudos",
    platform: "youtube",
    url: "https://www.youtube.com/watch?v=SznR1CbPzCI",
  },
  {
    id: "pfSNPJyOEZs",
    title: "Volto no matemática básica ou foco nos assuntos que mais caem na minha prova?",
    category: "estudos",
    platform: "youtube",
    url: "https://www.youtube.com/watch?v=pfSNPJyOEZs",
  },
  {
    id: "M2JMZYi7jg4",
    title: "2 coisas que vão fazer você melhorar em matemática de verdade",
    category: "estudos",
    platform: "youtube",
    url: "https://www.youtube.com/watch?v=M2JMZYi7jg4",
  },
  {
    id: "PUO9rmIqbaE",
    title: "Por que decorar musiquinha de fórmula está te deixando mais burro?",
    category: "estudos",
    platform: "youtube",
    url: "https://www.youtube.com/watch?v=PUO9rmIqbaE",
  },
  {
    id: "Fj4jacVdXQY",
    title: "Não esqueça mais o que você leu/estudou.",
    category: "estudos",
    platform: "youtube",
    url: "https://www.youtube.com/watch?v=Fj4jacVdXQY",
  },
  {
    id: "jWM9_h8xhco",
    title: "Como montei o caderno que mudaria minha vida.",
    category: "estudos",
    platform: "youtube",
    url: "https://www.youtube.com/watch?v=jWM9_h8xhco",
  },
  {
    id: "zfe_frjvL5Q",
    title: "Como melhorar em matemática? - DM - Destrave sua matemática, lançamento em março! #matematica",
    category: "estudos",
    platform: "youtube",
    url: "https://www.youtube.com/watch?v=zfe_frjvL5Q",
  },
];

// TikToks reais (@cathynabuuco). Só precisa de "id" + "title" + "url" — a
// capa é buscada automaticamente do próprio TikTok (ver
// src/lib/tiktok.ts). Dá pra forçar uma capa manual em
// public/images/tiktok/<id>.jpg se quiser, ver
// public/images/tiktok/README.md.
export const tiktoks: Video[] = [
  {
    id: "bhaskara-soma-e-produto",
    title: "Bhaskara, Soma e Produto",
    category: "estudos",
    platform: "tiktok",
    url: "https://www.tiktok.com/@cathynabuuco/video/7662869929246395655",
  },
  {
    id: "circunferencia-formula",
    title: "Circunferência: fórmula",
    category: "estudos",
    platform: "tiktok",
    url: "https://www.tiktok.com/@cathynabuuco/video/7677033288388611335",
  },
  {
    id: "historia-aprovacao-neurociencia",
    title: "Minha história de aprovação na Neurociência",
    category: "performance",
    platform: "tiktok",
    url: "https://www.tiktok.com/@cathynabuuco/video/7600750606688603400",
  },
  {
    id: "forca-eletrica-lei-de-coulomb",
    title: "Força Elétrica: Lei de Coulomb",
    category: "estudos",
    platform: "tiktok",
    url: "https://www.tiktok.com/@cathynabuuco/video/7623218032831188231",
  },
  {
    id: "mu-e-mruv",
    title: "MU e MRUV",
    category: "estudos",
    platform: "tiktok",
    url: "https://www.tiktok.com/@cathynabuuco/video/7623590596837461256",
  },
];

export const categoryLabels: Record<Video["category"], string> = {
  vestibular: "Vestibular",
  estudos: "Estudos",
  ia: "IA",
  performance: "Performance",
  produtividade: "Produtividade",
};
