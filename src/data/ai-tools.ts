import type { AITool } from "@/types";

// Lista editável das ferramentas de IA que a Catharine realmente usa.
// Não adicione uma ferramenta aqui sem confirmação — o texto de "howIUse"
// deve refletir uso real, não uma lista genérica de "300 ferramentas".
export const aiTools: AITool[] = [
  {
    id: "chatgpt",
    name: "ChatGPT",
    description: "Assistente de IA da OpenAI para conversas, pesquisa e escrita.",
    url: "https://chat.openai.com",
    howIUse: "TODO: descrever como a Catharine usa essa ferramenta na rotina.",
    frequency: "frequente",
    category: "Assistente de IA",
  },
  {
    id: "perplexity",
    name: "Perplexity",
    description: "Ferramenta de busca com respostas geradas por IA e fontes citadas.",
    url: "https://www.perplexity.ai",
    howIUse: "TODO: descrever como a Catharine usa essa ferramenta na rotina.",
    frequency: "eventual",
    category: "Pesquisa",
  },
];

export const frequencyLabels: Record<AITool["frequency"], string> = {
  frequente: "★ Uso com frequência",
  eventual: "◐ Uso eventualmente",
  testando: "○ Estou testando",
};
