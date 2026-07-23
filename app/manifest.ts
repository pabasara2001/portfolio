import type { MetadataRoute } from "next";
import { SITE_CONFIG } from "@/constants";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE_CONFIG.name,
    short_name: "Pabasara",
    description: SITE_CONFIG.description,
    start_url: "/",
    display: "standalone",
    background_color: "#0b1220",
    theme_color: "#00c2a8",
    icons: [
      {
        src: "/favicon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
