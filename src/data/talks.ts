import type { Talk } from "@/types";

// Temas de palestra (seção "Temas" de /palestras). Pra esconder um card, troque
// `ativo` pra false: a numeração (01, 02...) se ajusta sozinha.
export const talks: Talk[] = [
  {
    id: "erros-enem-vestibular",
    ativo: true,
    title: "Os erros que eu cometi estudando para o Enem e o vestibular",
    description:
      "O que eu fiz errado, o que custou e o que eu mudaria. Para quem está no 3º ano ou chegando lá.",
  },
  {
    id: "matematica-me-travou",
    ativo: true,
    title: "Onde a matemática me travou",
    description:
      "Base, enunciado, medo da matéria. Eu errei no básico, e mostro como foi. Para quem acha que \"não leva jeito\".",
  },
  {
    id: "eu-e-o-celular",
    ativo: true,
    title: "Eu e o celular",
    description:
      "O que a distração fez com os meus estudos, o que eu tentei e o que não funcionou. Sem sermão, só a minha experiência.",
  },
  {
    id: "cansada-e-estudando",
    ativo: true,
    title: "Cansada e estudando: o que eu aprendi sobre rotina",
    description:
      "Planejar demais, desistir, recomeçar. Como uma rotina que aguenta uma semana ruim.",
  },
];
