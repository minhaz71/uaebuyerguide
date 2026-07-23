import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "UAE Buyer Guide",
    short_name: "UAE Guide",
    description:
      "Compare useful UAE websites before you visit, including shopping, delivery, specialty retail, news portals, and local resources.",
    start_url: "/",
    display: "standalone",
    background_color: "#f5f7f6",
    theme_color: "#00856f",
    icons: [
      {
        src: "/favicon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
