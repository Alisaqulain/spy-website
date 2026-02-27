"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Calendar } from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import { blogPosts } from "@/lib/blog-data";

export default function BlogPage() {
  return (
    <>
      <PageHero
        title="Blog"
        subtitle="Insights & Updates"
        description="Stay informed with the latest trends in insurance and risk management. Our experts share practical insights for businesses and individuals."
        primaryCTA={{ text: "Contact Us", href: "/contact" }}
        breadcrumb={[{ label: "Blog", href: "/blog" }]}
      />
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeading
            title="Latest Articles"
            subtitle="Read about industry trends, best practices, and practical guidance."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, i) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <Link href={`/blog/${post.slug}`} className="card block h-full group">
                  <div className="w-full h-48 bg-gradient-to-br from-primary-navy/10 to-accent-gold/10 rounded-xl mb-4" />
                  <span className="text-sm text-accent-gold font-medium">{post.category}</span>
                  <h3 className="text-xl font-bold text-primary-navy mt-2 mb-2 group-hover:text-accent-gold transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-primary-navy/70 text-sm mb-4 line-clamp-2">{post.excerpt}</p>
                  <p className="flex items-center gap-2 text-sm text-primary-navy/60 mb-4">
                    <Calendar className="w-4 h-4" />
                    {new Date(post.date).toLocaleDateString("en-IN", { month: "long", day: "numeric", year: "numeric" })}
                  </p>
                  <span className="inline-flex items-center gap-2 text-accent-gold font-medium group-hover:gap-3 transition-all">
                    Read More
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
