// Configuração central do site. Atualize aqui — sem mexer em componentes —
// nome, links de redes, contato e textos institucionais curtos.

export const siteConfig = {
  name: "Catharine Nabuco",
  tagline: "Estudar. Criar. Executar.",
  description:
    "Educação, vestibular, performance, inteligência artificial, livros e ideias que estou construindo pelo caminho.",
  url: "https://catharinenabuco.com", // TODO: inserir domínio real
  locale: "pt_BR",

  nav: [
    { label: "Início", href: "/" },
    { label: "Aulas", href: "/aulas" },
    { label: "PAC", href: "/pac" },
    { label: "Produtos", href: "/produtos" },
    { label: "Palestras", href: "/palestras" },
    { label: "Sobre", href: "/sobre" },
  ],

  navCta: { label: "Explorar Conteúdos", href: "/aulas" },

  footerLinks: [
    { label: "Aulas", href: "/aulas" },
    { label: "PAC", href: "/pac" },
    { label: "Produtos", href: "/produtos" },
    { label: "Palestras", href: "/palestras" },
    { label: "Modelos", href: "/modelos" },
    { label: "IA", href: "/ia" },
    { label: "Sobre", href: "/sobre" },
  ],

  social: {
    youtube: "", // TODO: inserir link real
    tiktok: "", // TODO: inserir link real
    instagram: "", // TODO: inserir link real
  },

  contact: {
    // Usado pelos CTAs de aula particular e palestras.
    email: "", // TODO: inserir e-mail real
    whatsapp: "", // TODO: inserir link real (wa.me/...)
  },

  links: {
    amazonCartas: "", // TODO: inserir link real do livro na Amazon
  },
} as const;
