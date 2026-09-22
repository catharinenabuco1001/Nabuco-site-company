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
    instagram: "https://www.instagram.com/catharinenabuco/reels/",
  },

  // Usado por src/lib/youtube.ts para buscar os vídeos reais via RSS
  // público (sem API key, sem login). Ver ali para detalhes.
  youtube: {
    channelId: "UCUAm2wtrMQKJZPKynlLQlVg",
  },

  contact: {
    // Usado pelo CTA de aula particular em /produtos.
    whatsapp:
      "https://wa.me/5571996025791?text=Oi%2C%20Catharine!%20Vi%20seu%20site%20e%20quero%20saber%20mais%20sobre%20aula%20particular",
    // Usado pelo CTA "Levar Catharine para meu evento" em /palestras.
    whatsappPalestras:
      "https://wa.me/5571996025791?text=Oi%2C%20Catharine!%20Quero%20te%20convidar%20para%20uma%20palestra",
  },

  links: {
    amazonCartas: "https://www.amazon.com.br/dp/6598829801/?tag=nabuco01-20",
    pacCheckout: "https://pay.kiwify.com.br/eUCaiLK",
    // Ainda não usado em nenhum botão do site — ver observação na resposta.
    pacWhatsappGroup: "https://chat.whatsapp.com/DXENAsQbSBh7ux8ubr6HHB",
  },

  // Texto curto sobre a turma aberta no momento. Atualize (ou volte para
  // null) quando a turma mudar — aparece no /pac.
  pacCohort: "Turma de outubro com inscrições abertas.",
} as const;
