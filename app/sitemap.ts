import type { MetadataRoute } from "next";

// primarySiteUrl: https://erhan-nie-portfolio.vercel.app/
// chinaMirrorUrl: Paste the Tencent CloudBase URL here after deployment.
const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || "https://erhan-nie-portfolio.vercel.app").replace(/\/$/, "");

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${siteUrl}/`,
      lastModified: new Date("2026-05-08T00:00:00.000Z"),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
