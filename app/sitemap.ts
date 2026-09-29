import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.your-domain.com";
  return [
    { url: base, lastModified: new Date(), changeFrequency: "monthly", priority: 1 },
    { url: `${base}/work/accounting-website`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/work/legal-practice`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/work/email-newsletter`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/work/design-production`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
  ];
}
