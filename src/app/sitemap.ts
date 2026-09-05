import type { MetadataRoute } from "next";
import { siteConfig } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/aulas",
    "/pac",
    "/produtos",
    "/palestras",
    "/modelos",
    "/ia",
    "/noticias",
    "/sobre",
  ];

  return routes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "/noticias" || route === "/aulas" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
