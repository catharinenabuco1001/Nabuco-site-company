import type { MetadataRoute } from "next";
import { siteConfig } from "@/data/site";
import { posts } from "@/data/posts";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/aulas",
    "/pac",
    "/produtos",
    "/palestras",
    "/blog",
    "/modelos",
    "/ia",
    "/noticias",
    "/sobre",
  ];

  const pages: MetadataRoute.Sitemap = routes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
    changeFrequency:
      route === "/noticias" || route === "/aulas" || route === "/blog" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7,
  }));

  const articles: MetadataRoute.Sitemap = posts.map((p) => ({
    url: `${siteConfig.url}/blog/${p.slug}`,
    lastModified: new Date(p.date),
    changeFrequency: "yearly",
    priority: 0.6,
  }));

  return [...pages, ...articles];
}
