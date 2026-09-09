import Link from "next/link";
import { siteConfig } from "@/data/site";
import { Container } from "@/components/ui/Container";

const socialLinks = [
  { key: "youtube", label: "YouTube", href: siteConfig.social.youtube },
  { key: "tiktok", label: "TikTok", href: siteConfig.social.tiktok },
  { key: "instagram", label: "Instagram", href: siteConfig.social.instagram },
] as const;

export function Footer() {
  return (
    <footer className="bg-ink-900 text-cream mt-24">
      <Container className="py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div>
            <p className="font-serif text-2xl">Catharine Nabuco</p>
            <p className="mt-2 text-sm text-cream/60 uppercase tracking-widest2">
              {siteConfig.tagline}
            </p>
          </div>

          <div>
            <p className="text-xs font-sans font-semibold uppercase tracking-widest2 text-cream/50 mb-4">
              Navegação
            </p>
            <ul className="space-y-2">
              {siteConfig.footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-cream/80 hover:text-gold-700 transition-colors underline-grow"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-sans font-semibold uppercase tracking-widest2 text-cream/50 mb-4">
              Redes
            </p>
            <ul className="space-y-2">
              {socialLinks.map((social) => (
                <li key={social.key}>
                  {social.href ? (
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-cream/80 hover:text-gold-700 transition-colors underline-grow"
                    >
                      {social.label}
                    </a>
                  ) : (
                    <span className="text-sm text-cream/40">
                      {social.label} — TODO: inserir link
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-cream/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-xs text-cream/40">
            © {new Date().getFullYear()} Catharine Nabuco. Todos os direitos reservados.
          </p>
          <p className="text-xs text-cream/40">Estudar. Criar. Executar.</p>
        </div>
      </Container>
    </footer>
  );
}
