// Conteúdo da landing page do Método PAC (/pac). Preço, depoimento e
// estatísticas vieram de um mockup de design aprovado pela Catharine — não
// são inventados aqui, só centralizados para não ficar solto no JSX.

export const pacPricing = {
  originalPrice: 349.9,
  price: 297.9,
};

export const pacFit = {
  title: "Vamos ser honestos sobre isso.",
  isFor: [
    "Você entende a matéria de exatas, mas trava na hora de fazer a conta.",
    "Decora fórmula, mas esquece na prova ou não sabe quando aplicar cada uma.",
    "Sente que tem buracos lá do fundamental que nunca foram resolvidos.",
  ],
  isNotFor: [
    "Já domina fração, potência, radiciação e produtos notáveis de olhos fechados.",
    "Procura conteúdo avançado de cálculo ou matemática de nível universitário.",
  ],
};

export const pacTestimonial = {
  quote: "Em 1 mês de PAC eu saí da nota 5 pra nota 8.",
  attribution: "Aluna do Método PAC",
};

export const pacAuthorBio =
  'Eu era ruim em matemática. Não era um talento natural, nem "a nerd da sala" — eu travava em conta como qualquer pessoa. Foi treinando a base, do zero, que passei a gostar da matéria e a entender de verdade. Hoje sou aprovada nas provas de física da FUVEST e da UNICAMP, tirei 800+ pontos em matemática no ENEM, estudo Neurociência na UFABC e dou aula de física e matemática há mais de um ano e meio.';

export const pacAuthorStats = [
  { value: "+60 mil", label: "nas redes sociais" },
  { value: "800+", label: "pontos em matemática no ENEM" },
  { value: "FUVEST · UNICAMP", label: "aprovada nas provas de física" },
];

export const pacCurriculum = [
  {
    title: "7 módulos · +40 aulas",
    desc: "Do zero até fatoração e produtos notáveis, em aulas de ~10 min.",
  },
  {
    title: "3 meses de acesso",
    desc: "Dá pra concluir em ~15 dias com dedicação, no seu tempo.",
  },
  {
    title: "Comunidade no WhatsApp",
    desc: "Pra tirar dúvida e não desistir no meio do caminho.",
  },
  {
    title: "IA de dúvidas",
    desc: "Pra destravar exercícios a qualquer hora, sem esperar resposta.",
  },
];
