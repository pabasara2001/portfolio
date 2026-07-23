import type { MetadataRoute } from "next";
import { SITE_CONFIG, NAV_LINKS } from "@/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  return NAV_LINKS.map((link) => ({
    url: `${SITE_CONFIG.url}${link.href}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: link.href === "/" ? 1 : 0.7,
  }));
}
