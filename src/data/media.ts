// Conteúdo da aba "Palestras & Mídia" (/palestras).
// Cada lista só aparece na página se tiver pelo menos um item. Campos
// opcionais que ficarem vazios simplesmente não aparecem — nada de
// "A definir" na tela.

export type PastTalk = {
  id: string;
  place: string; // nome da escola/instituição/evento
  city?: string; // "Salvador, BA"
  date?: string; // "2026-05" ou "2026-05-14"
  theme?: string; // título/tema da palestra
  audience?: string; // "3º ano do ensino médio · ~200 alunos"
  voluntary?: boolean; // true = mostra a etiqueta "Ação voluntária"
  // Fotos em public/images/palestras/ — a primeira vira a capa.
  photos?: string[];
  youtubeId?: string; // vídeo da palestra, se tiver
};

export type Podcast = {
  id: string;
  show: string; // nome do podcast/canal
  title: string; // título do episódio
  date?: string;
  youtubeId?: string; // se estiver no YouTube
  url?: string; // Spotify ou outro link (usado se não tiver youtubeId)
  cover?: string; // capa em public/images/midia/ (opcional)
};

export type PressItem = {
  id: string;
  outlet: string; // veículo: "Anota Bahia"
  title: string; // título da matéria
  date?: string;
  url: string;
  image?: string; // imagem em public/images/midia/ (opcional)
};

// TODO(Cathy): completar cidade, data, tema, público, fotos e vídeo.
export const pastTalks: PastTalk[] = [
  { id: "bernoulli", place: "Colégio Bernoulli" },
  { id: "sao-jorge", place: "Colégio São Jorge" },
];

// TODO(Cathy): adicionar os podcasts (nome do programa, episódio, link).
export const podcasts: Podcast[] = [];

// TODO(Cathy): link e data da matéria.
export const press: PressItem[] = [
  {
    id: "anota-bahia-livro",
    outlet: "Anota Bahia",
    title: "Jovem baiana estreia como escritora",
    url: "",
  },
];
