import { redirect } from "next/navigation";
import { siteConfig } from "@/data/site";

// Página não encontrada (404): manda direto pro formulário do Tally.
export default function NotFound() {
  redirect(siteConfig.links.notFoundRedirect);
}
