import { MetadataRoute } from "next";
import { SITE_DOMAIN } from "@/lib/site-config";
import { blogPosts } from "@/lib/blog-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE_DOMAIN || "https://spyinsurance.com";

  const staticPages: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${baseUrl}/corporate`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/retail`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/industry`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/about`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/case-studies`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/careers`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.7 },
    { url: `${baseUrl}/blog`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/contact`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/privacy-policy`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.4 },
    { url: `${baseUrl}/terms`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.4 },
    { url: `${baseUrl}/disclaimer`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.4 },
    { url: `${baseUrl}/cookies`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.4 },
  ];

  const corporate = ["direct-broking", "reinsurance-broking", "claims-management", "lenders-advisory", "rural-insurance", "aviation"];
  const retail = ["health", "life", "motor", "travel", "home"];
  const industry = ["iron-steel", "power", "plywood", "sugar", "oil-gas", "additional"];
  const caseIds = ["steel-plant-risk-programme", "power-project-car", "corporate-group-health"];

  const corporateUrls = corporate.map((path) => ({
    url: `${baseUrl}/corporate/${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));
  const retailUrls = retail.map((path) => ({
    url: `${baseUrl}/retail/${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));
  const industryUrls = industry.map((path) => ({
    url: `${baseUrl}/industry/${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));
  const caseUrls = caseIds.map((id) => ({
    url: `${baseUrl}/case-studies/${id}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));
  const blogUrls = blogPosts.map((p) => ({
    url: `${baseUrl}/blog/${p.slug}`,
    lastModified: new Date(p.date),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticPages, ...corporateUrls, ...retailUrls, ...industryUrls, ...caseUrls, ...blogUrls];
}
