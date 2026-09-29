import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Bilal | Design & Website Support",
    short_name: "Bilal",
    description: "Remote design, website and email support.",
    start_url: "/",
    display: "standalone",
    background_color: "#fafaf8",
    theme_color: "#1d4ed8",
  };
}
