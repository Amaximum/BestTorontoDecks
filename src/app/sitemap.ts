import type { MetadataRoute } from "next";
import { pageSlugs } from "@/content/pages";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://besttorontodecks.com";

  const routes = ["/", ...pageSlugs.map((slug) => `/${slug}/`)];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString()
  }));
}
