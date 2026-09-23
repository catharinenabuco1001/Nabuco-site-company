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

// ---------------------------------------------------------------------------
// Landing v2 (set/2026)
// ---------------------------------------------------------------------------

// Erros clássicos de base — cada um aponta pro módulo que resolve.
export const pacMistakes = [
  { wrong: "(a + b)² = a² + b²", right: "a² + 2ab + b²", module: "Produtos notáveis" },
  { wrong: "√(9 + 16) = 3 + 4", right: "√25 = 5", module: "Radiciação" },
  { wrong: "−3² = 9", right: "−9", module: "Expressões numéricas" },
  { wrong: "½ + ⅓ = ⅖", right: "⅚", module: "Frações" },
  { wrong: "2³ · 2² = 2⁶", right: "2⁵", module: "Potência" },
  { wrong: "+20% e −20% = 0%", right: "−4%", module: "Porcentagem" },
];

export const pacModules = [
  {
    n: "0",
    title: "Aprenda a aprender",
    desc: "Como o cérebro aprende matemática e como estudar pra não esquecer na semana seguinte.",
  },
  {
    n: "1",
    title: "Chega de travar em expressões numéricas",
    desc: "Ordem das operações, jogo de sinais e as regras que ninguém te explicou direito.",
  },
  {
    n: "2",
    title: "Decimais, frações e porcentagem",
    desc: "Incluindo fator de aumento e redução — o atalho que mais aparece no ENEM.",
  },
  {
    n: "3",
    title: "Potência e radiciação",
    desc: "Propriedades, expoente negativo e fracionário, raiz sem medo.",
  },
  {
    n: "4",
    title: "Fatoração e produtos notáveis",
    desc: "Enxergar o padrão antes de sair expandindo tudo na mão.",
  },
  {
    n: "+",
    title: "Aulas bônus",
    desc: "Mnemônicos, conjuntos numéricos e atalhos de cálculo.",
  },
];

export const pacIncludes = [
  "+40 mini-aulas de ~10 minutos",
  "Listas de exercícios por módulo, com questões de vestibular",
  "Comunidade no WhatsApp com outros alunos",
  "IA de dúvidas pra destravar exercício a qualquer hora",
  "3 meses de acesso — dá pra concluir em ~15 dias",
];

export const pacGuarantee =
  "Garantia de 7 dias. Se entrar e sentir que não é pra você, é só pedir o reembolso dentro do prazo e você recebe 100% de volta.";

export const pacFaq = [
  {
    q: "Pra quem é o PAC?",
    a: "Pra quem está no ensino médio, no cursinho ou se preparando pro ENEM e vestibulares — e também pra universitário que ainda sente buraco na base (costuma aparecer em trigonometria e geometria analítica).",
  },
  {
    q: "Preciso saber alguma coisa antes?",
    a: "Não. O curso começa do zero, no Módulo 0, e vai subindo sem pular etapa.",
  },
  {
    q: "Serve pra física também?",
    a: "Serve — e foi por isso que o PAC nasceu. A maioria dos erros em física não é de física: é conta. Fração, potência e notação que travam no meio da resolução.",
  },
  {
    q: "Quanto tempo leva pra terminar?",
    a: "As aulas têm cerca de 10 minutos. Com dedicação, dá pra concluir em uns 15 dias. Você tem 3 meses de acesso pra ir no seu ritmo e revisar.",
  },
  {
    q: "Como eu tiro dúvidas?",
    a: "Pela comunidade no WhatsApp e pela IA de dúvidas, que responde na hora — inclusive de madrugada, na véspera da prova.",
  },
  {
    q: "Como recebo o acesso?",
    a: "O pagamento é pela Kiwify (Pix ou cartão). Assim que ele é aprovado, o acesso chega no seu e-mail.",
  },
  {
    q: "E se eu não gostar?",
    a: "Você tem 7 dias de garantia. Pediu dentro do prazo, recebe o valor de volta.",
  },
];

// Depoimentos reais — transcritos dos prints da pasta "PROVAS SOCIAIS PAC"
// (Drive). Só primeiro nome. Pra esconder alguém, troque `name` por
// "Aluna do PAC" / "Aluno do PAC". `from: "cathy"` = mensagem da Cathy.
export type PacChat = {
  name: string;
  context: string;
  highlight?: boolean;
  messages: { from: "aluno" | "cathy"; text: string; time: string }[];
};

export const pacChats: PacChat[] = [
  {
    name: "Aluna do PAC",
    context: "depois da prova",
    highlight: true,
    messages: [
      { from: "aluno", text: "Caaaathyyy", time: "18:38" },
      { from: "aluno", text: "Tirei 8 em matemática", time: "18:38" },
      { from: "aluno", text: "tinha tirado 5 na outra prova antes de vc", time: "19:15" },
      { from: "aluno", text: "KKKKKKKKK tudo graças a vc", time: "19:15" },
    ],
  },
  {
    name: "Matheus",
    context: "terminou o Módulo 0",
    messages: [
      {
        from: "aluno",
        text: "Oii Cathy, já terminei de assistir o módulo 0 e tá perfeito. Se o primeiro já está assim, imagina os outros kkk. Já estou ansioso para começar o próximo módulo.",
        time: "14:19",
      },
    ],
  },
  {
    name: "Clara",
    context: "assistindo a aula de mentalidade",
    messages: [
      { from: "aluno", text: "Sim, Cathy, eu me senti muito burra. Como vc sabia?", time: "00:58" },
      { from: "aluno", text: "“A matemática pode ser linda!!” Em vc eu acredito, diva.", time: "01:01" },
    ],
  },
  {
    name: "Bianca",
    context: "depois da prova diagnóstica e da lista",
    messages: [
      {
        from: "aluno",
        text: "Ajudou mtoo, relembrei algumas coisinhas q eu tava esquecendo já, e ela foi super de boa e legal de fazer ameiiii",
        time: "20:42",
      },
      { from: "aluno", text: "Tá de parabéns professora Cathy", time: "20:43" },
    ],
  },
  {
    name: "Rodrigo",
    context: "voltando da prova",
    messages: [
      { from: "cathy", text: "Como foram de prova???", time: "12:10" },
      { from: "aluno", text: "a prova tava bem mais fácil q a lista", time: "12:30" },
    ],
  },
  {
    name: "Clara",
    context: "Módulo 0",
    messages: [
      { from: "aluno", text: "É um chacoalhão atrás do outro, q de fato faz vc pensar em toodaa a sua existência", time: "01:18" },
      { from: "aluno", text: "Poucas pessoas q eu conheci tem essa dinâmica que realmente te prende a atenção!!", time: "01:20" },
    ],
  },
  {
    name: "Aluna do PAC",
    context: "depois da prova diagnóstica",
    messages: [
      {
        from: "aluno",
        text: "Essa prova falou muito sobre o meu potencial e sobre minha base! Ao olhar ela pela primeira vez fiquei assustada, mas percebi que consigo desenvolver",
        time: "11:30",
      },
      { from: "aluno", text: "tenho certeza que o PAC vai ser minha melhor escolha para o agora", time: "11:32" },
    ],
  },
  {
    name: "Bianca",
    context: "na área de aulas",
    messages: [
      { from: "aluno", text: "Gente esse site é um arraso, me sinto mais inteligente só de entrar nele kkkkkk", time: "18:15" },
    ],
  },
];
