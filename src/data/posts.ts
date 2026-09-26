// Textos do blog (/blog). Pra publicar um texto novo, é só adicionar um item
// no topo da lista. O corpo é uma lista de parágrafos. Dá pra usar **negrito**
// dentro do parágrafo. Um parágrafo que começa com "> " vira destaque.

export type Post = {
  slug: string; // vira o endereço: /blog/<slug>
  title: string;
  date: string; // "2026-09-26"
  excerpt: string; // resumo de 1–2 frases (aparece na lista e no Google)
  tags?: string[];
  body: string[];
  signature?: string;
};

export const posts: Post[] = [
  {
    slug: "o-maior-erro-nao-e-decorar-formula",
    title: "O maior erro não é decorar fórmula",
    date: "2026-09-26",
    excerpt:
      "O ChatGPT acerta fórmula. Ele erra interpretação. E é justamente aí que está o que a escola deveria ensinar: a capacidade de pensar.",
    tags: ["Educação", "Física", "Sala de aula"],
    body: [
      "O objetivo é impactar a educação. Aos poucos, cada esforço faz a diferença em um mundo onde tudo virou decoreba.",
      "Nesse dia o objetivo era ver movimento oblíquo, mas acabamos revisando conversão de unidades, MU, MRUV, lançamento vertical…",
      "O maior erro deles não é decorar fórmulas. Isso eles conseguem, conseguem até demais por sinal… então o que impede que eles avancem se “estudam”?",
      "> A INTERPRETAÇÃO.",
      "Querer aplicar a mesma fórmula que eles viram no quadro em todas as questões limita o cérebro deles.",
      "Quer ver uma coisa interessante? O ChatGPT consegue acertar fórmulas! Joga um cálculo pronto que ele faz na hora.",
      "Mas então por que reclamam tanto dele errar? Porque ele erra questões interpretativas.",
      "Esse é justamente o diferencial do ser humano. Conseguir interpretar, enxergar os diversos caminhos e, dentre eles, escolher qual se aplica **MELHOR**.",
      "Por isso brigo tanto quando não querem aprender “soma e produto” e ficam no Bhaskara. Afinal, apesar de ter começado a gostar de estudar, o que levamos das provas, aulas e exercícios é a capacidade de **PENSAR**.",
      "Assim, estimular a curiosidade e a criatividade é fundamental. E é isso que eu faço todos os dias nas minhas aulas. (Mesmo que eles briguem comigo um bocado 😂😂)",
      "Foi isso que mudou o estudo na minha vida. E acredito firmemente que, se eu odiava e comecei a gostar e a ver isso como algo repleto de **VALOR**, outras pessoas na posição em que eu estava também podem.",
    ],
    signature: "Com carinho,\nCatharine Nabuco",
  },
];

export function getPost(slug: string) {
  return posts.find((p) => p.slug === slug);
}

export function readingTime(post: Post) {
  const words = post.body.join(" ").split(/\s+/).length;
  return Math.max(1, Math.round(words / 200));
}
