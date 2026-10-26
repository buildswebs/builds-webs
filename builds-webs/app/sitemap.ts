import type { MetadataRoute } from "next";
import { sanityFetch } from "@/sanity/lib/client";
import { POST_SLUGS_QUERY } from "@/sanity/lib/queries";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = "https://buildswebs.com";
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: base, lastModified: now, changeFrequency: "weekly", priority: 1.0 },

    // Services
    { url: `${base}/services`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/services/local-seo`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/services/google-business-profile`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/services/google-ads`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/services/whatsapp-automation`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/services/website-design`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/services/ecommerce-development`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/services/custom-software`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },

    // About Pages
    { url: `${base}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/about/who-we-are`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/about/mission`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/about/vision`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/about/team`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/about/clients`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/about/achievements`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/about/testimonials`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/about/director`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/about/articles`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },

    // Blog & Legal
    { url: `${base}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/privacy`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${base}/terms`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
  ];

  try {
    const posts = await sanityFetch<{ slug: string }[]>({
      query: POST_SLUGS_QUERY,
      revalidate: 60,
    });

    const postRoutes: MetadataRoute.Sitemap = posts.map(
      (p: { slug: string }) => ({
        url: `${base}/blog/${p.slug}`,
        lastModified: now,
        changeFrequency: "weekly",
        priority: 0.7,
      })
    );

    return [...staticRoutes, ...postRoutes];
  } catch (err) {
    console.error("Error fetching blog posts for sitemap:", err);
    return staticRoutes;
  }
}
