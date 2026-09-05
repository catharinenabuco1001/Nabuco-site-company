import type { Talk } from "@/types";

// Temas de palestra são fixos/editáveis aqui. Local, ano, vídeo e evento
// ficam undefined até existirem dados reais — a UI trata isso com placeholders.
export const talks: Talk[] = [
  {
    id: "vestibular-alta-performance",
    title: "Vestibular e alta performance",
    description:
      "Como transformar rotina de estudo em execução consistente durante o período de vestibular.",
  },
  {
    id: "disciplina-execucao",
    title: "Disciplina e execução",
    description:
      "O que separa quem planeja do que quem conquista: disciplina aplicada ao dia a dia.",
  },
  {
    id: "educacao-futuro",
    title: "Educação e futuro",
    description: "Para onde caminha a forma como aprendemos — e como se preparar para isso.",
  },
  {
    id: "ia-nos-estudos",
    title: "Inteligência Artificial nos estudos",
    description:
      "Ferramentas de IA aplicadas de forma prática à rotina de quem estuda.",
  },
  {
    id: "estudar-mundo-distraido",
    title: "Como estudar melhor em um mundo distraído",
    description: "Atenção, foco e estratégias de estudo em um ambiente de estímulos constantes.",
  },
  {
    id: "rotina-alta-performance",
    title: "Construção de uma rotina de alta performance",
    description: "Como estruturar uma rotina que sustente resultado no longo prazo.",
  },
];
