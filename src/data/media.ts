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
  instagramUrl?: string; // reel/post da palestra, se tiver
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
  {
    id: "bernoulli",
    place: "Colégio Bernoulli",
    date: "2025-12", // data do post no Instagram — confirmar
    instagramUrl: "https://www.instagram.com/p/DRwgDwqDsEX/",
  },
  {
    id: "sao-jorge",
    place: "Colégio São Jorge dos Ilhéus",
    city: "Ilhéus, BA",
    date: "2026-05",
    theme: "Aulão de física: movimento oblíquo",
    instagramUrl: "https://www.instagram.com/reel/DYSe05_ONyn/",
  },
];

// Ordem = ordem na página. Datas opcionais (formato "2026-05").
export const podcasts: Podcast[] = [
  {
    id: "poder-abc-ep7",
    show: "Poder ABC Podcast",
    title: "Não é sobre estar pronta. É sobre ir mesmo assim — lançamento do meu 2º livro",
    youtubeId: "ukxKJKIuIOs",
  },
  {
    id: "podfex-ep46",
    show: "PodFex",
    title: "Educação, estudos e criação de conteúdo — Ep. 46",
    youtubeId: "syEJJqm7GZg",
  },
  {
    id: "cost-flow-ep3",
    show: "Cost Flow",
    title: "O método para se apaixonar por estudar + meus erros no vestibular que você deve evitar",
    youtubeId: "vqsHZiDCdqY",
  },
  {
    id: "do-vestibular-ao-primeiro-livro",
    show: "Canal Catharine Nabuco",
    title: "Do vestibular ao meu primeiro livro — lançamento do 1º livro",
    youtubeId: "sgMdaz_HaUc",
  },
  {
    id: "radio-sociedade-bahia",
    show: "Rádio Sociedade da Bahia",
    title: "Conexão Sociedade: entrevista sobre o livro Cartas para um Vestibulando",
    date: "2025-09",
    url: "https://open.spotify.com/episode/4zThPAYXq9lORGuBDC6MJj",
  },
];

export const press: PressItem[] = [
  {
    id: "anota-bahia-livro",
    outlet: "Anota Bahia",
    title: "Jovem baiana estreia como escritora ao transformar dores do vestibular em livro",
    date: "2025-09",
    url: "https://anotabahia.com/jovem-baiana-estreia-como-escritora-ao-transformar-dores-do-vestibular-em-livro/",
  },
  {
    id: "bnews-livro",
    outlet: "BNews",
    title: "Baiana transforma dificuldades com vestibular em livro: “Foi o meu campo de batalha”",
    date: "2025-09",
    url: "https://www.bnews.com.br/noticias/geral/baiana-transforma-dificuldades-com-vestibular-em-livro-foi-o-meu-campo-de-batalha.html",
  },
];
