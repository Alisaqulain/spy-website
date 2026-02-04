"use client";

import Link from "next/link";
import { Calendar, ArrowRight, Tag } from "lucide-react";
import { motion } from "framer-motion";

const blogPosts = [
  {
    id: 1,
    title: "Understanding Group Health Insurance Benefits",
    excerpt: "Learn how group health insurance can benefit your employees and your business. Discover the key advantages and how to choose the right plan.",
    category: "Corporate Insurance",
    date: "2024-01-15",
    slug: "understanding-group-health-insurance-benefits",
  },
  {
    id: 2,
    title: "10 Essential Tips for Choosing Motor Insurance",
    excerpt: "Make an informed decision when selecting motor insurance. Our comprehensive guide covers everything you need to know about car and bike insurance.",
    category: "Retail Insurance",
    date: "2024-01-10",
    slug: "10-essential-tips-choosing-motor-insurance",
  },
  {
    id: 3,
    title: "Why Life Insurance is Essential for Young Professionals",
    excerpt: "Don't wait to secure your family's future. Learn why life insurance is crucial even for young professionals and how to get started.",
    category: "Retail Insurance",
    date: "2024-01-05",
    slug: "why-life-insurance-essential-young-professionals",
  },
  {
    id: 4,
    title: "Corporate Risk Management: A Complete Guide",
    excerpt: "Protect your business from unforeseen risks with effective risk management strategies. Learn how insurance plays a crucial role.",
    category: "Corporate Insurance",
    date: "2023-12-28",
    slug: "corporate-risk-management-complete-guide",
  },
  {
    id: 5,
    title: "Travel Insurance: What You Need to Know",
    excerpt: "Planning a trip? Don't forget travel insurance. Learn about coverage options, benefits, and why it's essential for every traveler.",
    category: "Retail Insurance",
    date: "2023-12-20",
    slug: "travel-insurance-what-you-need-know",
  },
  {
    id: 6,
    title: "Employee Benefits: Attracting and Retaining Talent",
    excerpt: "Discover how comprehensive employee benefits packages can help you attract top talent and improve employee retention rates.",
    category: "Corporate Insurance",
    date: "2023-12-15",
    slug: "employee-benefits-attracting-retaining-talent",
  },
];

const categories = ["All", "Corporate Insurance", "Retail Insurance", "Tips & Guides"];

export default function BlogContent() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-background-light via-white to-background-light">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-primary-dark mb-4">
              Insurance Insights & Tips
            </h1>
            <p className="text-lg text-primary-dark/70 max-w-2xl mx-auto">
              Stay informed with the latest insurance news, tips, and expert advice
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          {/* Category Filter */}
          <div className="flex flex-wrap gap-3 mb-12 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                className="px-4 py-2 rounded-full border-2 border-primary-dark/20 text-primary-dark hover:border-accent-green hover:text-accent-green transition-colors"
              >
                {category}
              </button>
            ))}
          </div>

          {/* Blog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card group cursor-pointer h-full flex flex-col"
              >
                <div className="w-full h-48 bg-gradient-to-br from-accent-green/20 to-primary-dark/10 rounded-lg mb-4 group-hover:scale-105 transition-transform"></div>
                <div className="flex items-center space-x-4 mb-3 text-sm">
                  <span className="flex items-center space-x-1 text-accent-green">
                    <Tag className="w-4 h-4" />
                    <span>{post.category}</span>
                  </span>
                  <span className="flex items-center space-x-1 text-primary-dark/60">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(post.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}</span>
                  </span>
                </div>
                <h2 className="text-xl font-semibold text-primary-dark mb-3 group-hover:text-accent-green transition-colors">
                  {post.title}
                </h2>
                <p className="text-primary-dark/70 mb-4 flex-grow">
                  {post.excerpt}
                </p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center space-x-2 text-accent-green font-medium hover:space-x-3 transition-all group-hover:underline"
                >
                  <span>Read More</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
