import { siteConfig } from "@/data/site";
import { RedirectNow } from "@/components/RedirectNow";

// Página não encontrada (404): manda direto pro formulário do Tally. O
// redirect() do Next quebra o build aqui (a 404 é gerada no build), então o
// redirecionamento acontece no navegador, com um link de reserva.
export default function NotFound() {
  const url = siteConfig.links.notFoundRedirect;
  return (
    <div className="py-32 text-center">
      <meta httpEquiv="refresh" content={`0;url=${url}`} />
      <RedirectNow url={url} />
      <a href={url} className="text-plum-500 underline underline-offset-4">
        Continuar
      </a>
    </div>
  );
}
