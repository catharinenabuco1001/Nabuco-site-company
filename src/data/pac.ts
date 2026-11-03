// Conteúdo da landing page do Método PAC (/pac). Preço, depoimento e
// estatísticas vieram de um mockup de design aprovado pela Catharine — não
// são inventados aqui, só centralizados para não ficar solto no JSX.

export const pacPricing = {
  // Preço do PAC: MUDE SÓ AQUI. Vale pra /pac (oferta, barra do celular,
  // bloco dos pais) e pro card em /produtos.
  cohort: "4ª turma",
  price: 349.9,
  // Preço à vista com o cupom ativo na abertura da turma.
  couponPrice: 297.9,
  installments: 12,
  installmentValue: 36.19,
  accessMonths: 6,
};

const brl = (v: number) => v.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

// "12x de R$ 36,19" (destaque) e "ou R$ 349,90 à vista" (pequeno, embaixo).
export const pacPriceInstallments = `${pacPricing.installments}x de ${brl(pacPricing.installmentValue)}`;
export const pacPriceCash = `ou ${brl(pacPricing.price)} à vista`;

// Bloco de preço do card da oferta em /pac.
export const pacOfferPrice = {
  title: `Método PAC, ${pacPricing.cohort}`,
  from: `De ${brl(pacPricing.price)} por`,
  coupon: brl(pacPricing.couponPrice),
  couponNote: "no à vista (cupom ativo na abertura da turma)",
  installments: `Ou parcelado no cartão pelo valor cheio (${pacPriceInstallments})`,
  access: `${pacPricing.accessMonths} meses de acesso a todas as aulas, listas e materiais`,
};

// Bloco "Seu filho quer fazer o PAC?" (só com informações que já estão na página).
export const pacParents = [
  {
    title: "O que ele vai fazer",
    desc: "Mini-aulas de ~10 minutos que reconstroem a base de matemática do zero, com listas de exercícios por módulo.",
  },
  {
    title: "7 dias de garantia, sem perguntas",
    desc: "Se não for pra ele, é só pedir o reembolso dentro do prazo e você recebe 100% de volta.",
  },
  {
    title: pacPriceInstallments,
    desc: `${pacPriceCash}, cerca de R$1 por dia.`,
  },
];

export const pacFit = {
  title: "Vamos ser honestos sobre isso.",
  isFor: [
    "Você entende a matéria de exatas, mas trava na hora de fazer a conta.",
    "Decora fórmula, mas esquece na prova ou não sabe quando aplicar cada uma.",
    "Sente que tem buracos lá do fundamental que nunca foram resolvidos.",
    "Estuda, mas não fixa.",
    "Tem lacunas do fundamental.",
    "Tem medo ou bloqueio com matemática.",
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
  'Eu era ruim em matemática. Não era um talento natural, nem "a nerd da sala". Eu travava em conta como qualquer pessoa. Foi treinando a base, do zero, que passei a gostar da matéria e a entender de verdade. Gabaritei física na FUVEST e na UNICAMP, tirei 800+ pontos em matemática no ENEM, hoje estudo Neurociência na UFABC e dou aula de física e matemática há mais de um ano e meio.';

export const pacAuthorStats = [
  { value: "+60 mil", label: "nas redes sociais" },
  { value: "800+", label: "pontos em matemática no ENEM" },
  { value: "FUVEST · UNICAMP", label: "gabaritei física" },
];

export const pacCurriculum = [
  {
    title: "7 módulos · +40 aulas",
    desc: "Do zero até fatoração e produtos notáveis, em aulas de ~10 min.",
  },
  {
    title: `${pacPricing.accessMonths} meses de acesso`,
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
    desc: "Incluindo fator de aumento e redução, o atalho que mais aparece no ENEM.",
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
    n: "5",
    title: "Introdução à matemática avançada",
    desc: "Uma prévia do que vem depois da base: você já vê como a matemática avançada funciona, sem medo.",
    lessons: ["Seno e cosseno", "Introdução a logaritmo (aula 1)", "Conceito de área"],
  },
  {
    n: "+",
    title: "Aulas bônus",
    desc: "Mnemônicos, conjuntos numéricos e atalhos de cálculo.",
  },
];

// Lista "O que você leva" do card da oferta. Desligue a linha do gabarito aqui.
export const SHOW_GABARITO = true;

export const pacIncludes = [
  `${pacPricing.accessMonths} meses de acesso ao Método PAC`,
  "Aulas curtas de matemática básica, no seu ritmo",
  ...(SHOW_GABARITO ? ["Listas de exercícios com gabarito"] : []),
  "Garantia de 7 dias",
];

export const pacGuarantee =
  "Garantia de 7 dias. Se entrar e sentir que não é pra você, é só pedir o reembolso dentro do prazo e você recebe 100% de volta.";

export const pacFaq = [
  {
    q: "Pra quem é o PAC?",
    a: "Pra quem está no ensino médio, no cursinho ou se preparando pro ENEM e vestibulares. E também pra universitário que ainda sente buraco na base (costuma aparecer em trigonometria e geometria analítica).",
  },
  {
    q: "Preciso saber alguma coisa antes?",
    a: "Não. O curso começa do zero, no Módulo 0, e vai subindo sem pular etapa.",
  },
  {
    q: "Serve pra física também?",
    a: "Serve! E foi por isso que o PAC nasceu. A maioria dos erros em física não é de física: é conta. Fração, potência e notação que travam no meio da resolução.",
  },
  {
    q: "Quanto tempo leva pra terminar?",
    a: `As aulas têm cerca de 10 minutos. Com dedicação, dá pra concluir em uns 15 dias. Você tem ${pacPricing.accessMonths} meses de acesso pra ir no seu ritmo e revisar.`,
  },
  {
    q: "Por quanto tempo eu tenho acesso?",
    a: "Você tem 6 meses de acesso, contados a partir da compra. Dá tempo de refazer as aulas quantas vezes precisar e estudar no seu ritmo.",
  },
  {
    q: "Como eu tiro dúvidas?",
    a: "Pela comunidade no WhatsApp e pela IA de dúvidas, que responde na hora, inclusive de madrugada, na véspera da prova.",
  },
  {
    q: "Como recebo o acesso?",
    a: "O pagamento é pela Kiwify (Pix ou cartão). Assim que ele é aprovado, o acesso chega no seu e-mail.",
  },
  {
    q: "E se eu não gostar?",
    a: "Você tem 7 dias de garantia. Se não fizer sentido para você, é só pedir o reembolso nesse prazo.",
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

// Prints reais (imagens). Coloque os arquivos em public/images/pac/prints/
// com EXATAMENTE esses nomes. Só aparece na página o que existir na pasta —
// dá pra subir aos poucos. Antes de subir: borrar nome/foto/número de quem
// não autorizou.
export const pacPrints = [
  { file: "tirei-8.jpg", w: 720, h: 1033, alt: "Aluna contando que tirou 8 em matemática depois do PAC" },
  { file: "caderno.jpg", w: 720, h: 762, alt: "Caderno de aluna com anotações do Método PAC" },
  { file: "matheus-modulo-0.jpg", w: 720, h: 517, alt: "Aluno dizendo que o Módulo 0 está perfeito" },
  { file: "diagnostica.jpg", w: 720, h: 1159, alt: "Prova diagnóstica resolvida à mão por uma aluna" },
  { file: "clara.jpg", w: 720, h: 1207, alt: "Mensagens de aluna elogiando as aulas" },
  { file: "bianca.jpg", w: 720, h: 1393, alt: "Aluna contando que a lista ajudou a relembrar a base" },
];

// Depoimentos em vídeo (YouTube). Suba o vídeo (pode ser "Não listado") e
// cole só o ID — o que vem depois de "v=" ou "youtu.be/" ou "shorts/".
// Lista vazia = seção não aparece.
export const pacVideos: { youtubeId: string; name: string; caption: string; vertical?: boolean }[] = [
  // { youtubeId: "XXXXXXXXXXX", name: "Clara", caption: "Como o PAC mudou minha relação com a conta", vertical: true },
];

// Seção "Será que o PAC é para mim?" (abas). As frases ficam em
// pacForWhomQuotes, separadas, pra poder tirar sem mexer nos textos.
export const pacForWhomTabs = [
  {
    id: "vestibular",
    label: "Vestibular, Enem e concurso",
    title: "SIM, se você ainda trava nos cálculos.",
    text: "Se você entende a matéria, mas perde a questão na última linha da conta, o Método PAC é para você. Ele reconstrói a base que ficou para trás (fração, potência, radiciação, fatoração) em mini-aulas de 10 minutos, para você parar de travar nos cálculos.",
    extra: "Serve para concurso? Sim. A base de matemática é a mesma que cai em provas de concurso.",
  },
  {
    id: "faculdade",
    label: "Faculdade e quem está voltando a estudar",
    title:
      "SIM, porque se você não souber produtos notáveis, como vai lidar com as matérias mais difíceis?",
    text: "Se você sente que tem buracos lá do fundamental que nunca foram resolvidos, o PAC reconstrói a base sem pular etapa, para você não travar nas matérias da faculdade.",
  },
  {
    id: "escola",
    label: "Escola",
    title: "SIM, para ajudar você a garantir sua nota no final e não errar besteira.",
    text: "Se você trava em equação do 1º grau e se pergunta “por que eu tenho tanta dificuldade, mesmo me dedicando tanto?”, o PAC começa do zero, no Módulo 0, e vai subindo sem pular etapa. Ele ensina o raciocínio passo a passo, sem depender de “dom”.",
    extra: "Para menores de idade: a compra é com a autorização dos pais.",
  },
];

export const pacForWhomQuotes: Record<string, string[]> = {
  vestibular: [
    "Muitas vezes não consigo nem interpretar o enunciado.",
    "Não sei nem o básico e quero prestar concurso.",
  ],
  faculdade: [
    "Não é que eu não saiba, só preciso relembrar.",
    "Aprendo rápido, mas esqueço na mesma proporção.",
    "Preciso começar do absoluto zero.",
  ],
  escola: [
    "Quando tem equação do 1º grau ou geometria, é um pouco mais difícil.",
    "Chorei vendo vídeo sem entender divisão.",
  ],
};
