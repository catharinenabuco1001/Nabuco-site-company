// Configuração central do site. Atualize aqui — sem mexer em componentes —
// nome, links de redes, contato e textos institucionais curtos.

export const siteConfig = {
  name: "Catharine Nabuco",
  tagline: "Estudar melhor, não mais.",
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

  navCta: { label: "Entrar no PAC", href: "/pac" },

  // Avatar circular no header (ao lado do wordmark).
  headerAvatar: "/images/hero-retrato.jpeg",

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
    youtube: "https://www.youtube.com/@catharinenabuco",
    tiktok: "https://www.tiktok.com/@cathynabuuco",
    instagram: "", // TODO: inserir link real
  },

  // Usado por src/lib/youtube.ts para buscar os vídeos reais via RSS
  // público (sem API key, sem login). Ver ali para detalhes.
  youtube: {
    channelId: "UCUAm2wtrMQKJZPKynlLQlVg",
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
