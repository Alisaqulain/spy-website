export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  image?: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "corporate-risk-transfer",
    title: "Understanding Corporate Risk Transfer Strategies",
    excerpt: "How businesses can structure insurance and risk transfer to align with their risk appetite and balance sheet.",
    category: "Corporate",
    date: "2024-02-01",
  },
  {
    slug: "health-coverage-families",
    title: "Why Comprehensive Health Coverage Matters for Families",
    excerpt: "The benefits of family floater and comprehensive health plans for financial security and access to quality care.",
    category: "Retail",
    date: "2024-01-28",
  },
  {
    slug: "industry-insurance-leaders",
    title: "Industry-Specific Insurance: What Leaders Need to Know",
    excerpt: "Sector-specific risks and how tailored insurance programmes support business continuity and growth.",
    category: "Industry",
    date: "2024-01-20",
  },
  {
    slug: "claims-management-tips",
    title: "Claims Management Best Practices for Corporates",
    excerpt: "How to streamline claim intimation, documentation, and follow-up for faster settlements.",
    category: "Corporate",
    date: "2024-01-15",
  },
  {
    slug: "travel-insurance-guide",
    title: "Travel Insurance: A Quick Guide for Frequent Travellers",
    excerpt: "What to look for in travel policies—medical, trip delay, and baggage—for domestic and international trips.",
    category: "Retail",
    date: "2024-01-10",
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}
