import type { StudyModel } from "@/types";

// fileUrl indefinido = arquivo ainda não adicionado; a UI mostra "Em breve".
// Quando o arquivo real existir, basta preencher fileUrl com o link de download.
export const models: StudyModel[] = [
  {
    id: "planejamento-semanal",
    title: "Planejamento semanal",
    description: "Modelo para organizar a semana de estudos por dia e por matéria.",
    category: "produtividade",
    fileUrl: undefined,
  },
  {
    id: "planilha-analise-desempenho",
    title: "Planilha de análise de desempenho",
    description: "Modelo para registrar simulados e acompanhar evolução por matéria.",
    category: "vestibular",
    fileUrl: undefined,
  },
  {
    id: "planejamento-estudos",
    title: "Planejamento de estudos",
    description: "Modelo para estruturar metas de estudo em ciclos.",
    category: "estudos",
    fileUrl: undefined,
  },
  {
    id: "modelo-revisao",
    title: "Modelo de revisão",
    description: "Modelo para organizar revisões espaçadas de conteúdo.",
    category: "estudos",
    fileUrl: undefined,
  },
  {
    id: "planejamento-vestibular",
    title: "Planejamento para vestibular",
    description: "Modelo para organizar a reta final antes da prova.",
    category: "vestibular",
    fileUrl: undefined,
  },
];
