import type { Product } from "@/types";

// Preços e links são configuráveis aqui — nunca no componente.
// price: null = ainda não definido (a UI mostra "TODO: definir preço").
export const products: Product[] = [
  {
    id: "pac",
    name: "Método PAC",
    tagline: "Pare. Analise. Conquiste.",
    description: "Método de estudo e execução.",
    price: null,
    ctaLabel: "Conhecer o PAC",
    ctaUrl: "/pac",
    href: "/pac",
    badge: "Método",
  },
  {
    id: "ebook-alimentacao",
    name: "Ebook de Alimentação",
    tagline: "Material criado por Catharine.",
    description: "Material criado por Catharine.",
    price: null,
    ctaLabel: "Conhecer Ebook",
    ctaUrl: "#", // TODO: inserir link real de checkout
    badge: "Ebook",
  },
  {
    id: "cartas-vestibulando",
    name: "Cartas para um Vestibulando",
    tagline: "Um livro para quem está atravessando o vestibular.",
    description:
      "Um livro para quem está atravessando o vestibular — e precisa lembrar por que começou.",
    price: null,
    ctaLabel: "Comprar na Amazon",
    ctaUrl: "", // preenchido dinamicamente a partir de siteConfig.links.amazonCartas
    badge: "Livro",
  },
];

export const aulaParticular = {
  title: "Quer estudar comigo?",
  description:
    "Um encontro individual para entender seu momento, seus problemas e construir uma estratégia específica para você.",
  topics: [
    "Planejamento",
    "Análise de desempenho",
    "Organização dos estudos",
    "Estratégia para vestibular",
    "Revisão da rotina",
    "Método de estudo",
  ],
  ctaLabel: "Quero conversar com a Catharine",
  price: null as number | null,
};
