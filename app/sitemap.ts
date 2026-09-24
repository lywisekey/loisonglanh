import type { MetadataRoute } from "next";
import { ARTICLES, articleHref, catHref, CATS, SITE } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: `${SITE.url}/`, lastModified: now, changeFrequency: "monthly", priority: 1 },
    { url: `${SITE.url}/luu-y`, lastModified: now, changeFrequency: "yearly", priority: 0.5 },
    ...CATS.map((c) => ({
      url: `${SITE.url}${catHref(c.id)}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...ARTICLES.map((a) => ({
      url: `${SITE.url}${articleHref(a.id)}`,
      lastModified: now,
      changeFrequency: "yearly" as const,
      priority: 0.7,
    })),
  ];
}
