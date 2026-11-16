// Provas sociais do /pac (seção "Quem já está no PAC"). EDITE SÓ AQUI.
//
// - nome: deixe "" pra aparecer "Aluno(a) do PAC".
// - autorizado: só itens com true aparecem no site.
// - arquivo: print em public/images/pac/provas/. Se o arquivo não existir, o
//   item não aparece (nem o card, nem o print). Sem `arquivo`, vira só card.
// - bloco: "A" = cards logo abaixo do topo da página; "B" = galeria antes do
//   preço.
// - As frases estão exatamente como os alunos escreveram (sem corrigir).

export type Prova = {
  nome: string;
  contexto: string;
  chip: string;
  frase: string;
  arquivo?: string;
  bloco: "A" | "B";
  autorizado: boolean;
};

export const PROVAS: Prova[] = [
  {
    // Card que já existia no site ("Tirei 8 em matemática"), sem print.
    nome: "",
    contexto: "Depois da prova",
    chip: "De 5 para 8 em matemática",
    frase: "Tirei 8 em matemática… tinha tirado 5 na outra prova antes de vc",
    bloco: "A",
    autorizado: true,
  },
  {
    nome: "",
    contexto: "ENEM · habilidade 16",
    chip: "Grandezas direta e inversamente proporcionais",
    frase:
      "Você já me ajudou muito pq eu não conseguia manipular essas grandezas, agora consigo.",
    arquivo: "prova-01.png",
    bloco: "A",
    autorizado: true,
  },
  {
    nome: "",
    contexto: "Mensagem de aluna",
    chip: "Mentalidade",
    frase:
      "Hoje, aprendi a confiar mais em mim, a enxergar a lógica por trás dos exercícios e a entender que sou, sim, capaz de aprender matemática.",
    arquivo: "prova-02.png",
    bloco: "A",
    autorizado: true,
  },
  {
    nome: "Lunna",
    contexto: "Depois de uma prova de matemática",
    chip: "Percepção na prova",
    frase: "Antes eu já ia com o pensamento que eu não era boa… Hoje não, foi diferente!",
    arquivo: "prova-03.png",
    bloco: "A",
    autorizado: true,
  },
  {
    nome: "",
    contexto: "Faz cursinho",
    chip: "Base antes das matérias difíceis",
    frase: "Faço cursinho mas tem sido primordial eu voltar na base de matemática.",
    arquivo: "prova-04.png",
    bloco: "B",
    autorizado: true,
  },
  {
    nome: "",
    contexto: "Aula do PAC",
    chip: "Aprende mais rápido",
    frase: "Mesmo tendo dificuldades eu aprendo muito mais rápido.",
    arquivo: "prova-05.png",
    bloco: "B",
    autorizado: true,
  },
  {
    nome: "",
    contexto: "Início do PAC",
    chip: "Jeito de explicar",
    frase: "Você tem um jeitinho único de explicar.",
    arquivo: "prova-06.png",
    bloco: "B",
    autorizado: true,
  },
  {
    nome: "",
    contexto: "Depois do diagnóstico",
    chip: "Diagnóstico",
    frase: "Eu amei! Estou amando o curso…",
    arquivo: "prova-07.png",
    bloco: "B",
    autorizado: true,
  },
  {
    nome: "",
    contexto: "Primeiras aulas",
    chip: "Explicação fácil de entender",
    frase: "Já senti diferença sim!",
    arquivo: "prova-08.png",
    bloco: "B",
    autorizado: true,
  },
];

export const PROVAS_DIR = "images/pac/provas";

export const nomeProva = (p: Prova) => p.nome.trim() || "Aluno(a) do PAC";
export const altProva = (p: Prova) => `Mensagem de WhatsApp de aluno do PAC: ${p.frase}`;

export const PROVAS_RODAPE = "Resultados individuais. Cada aluno avança no seu ritmo.";

// Ordem da galeria antes do preço (bloco B): resultado/transformação
// primeiro, elogio por último. Arquivos de provas/ e prints/ pelo nome.
// Arquivo de imagem novo em provas/ que não esteja em PROVAS entra sozinho no
// fim da galeria (sem legenda).
export const GALERIA_ORDEM = [
  "prova-07.png",
  "diagnostica.jpg",
  "caderno.jpg",
  "prova-04.png",
  "prova-05.png",
  "prova-06.png",
  "prova-08.png",
  "matheus-modulo-0.jpg",
  "clara.jpg",
  "bianca.jpg",
];

export const ALT_PRINT_NOVO = "Mensagem de WhatsApp de aluno do PAC";
