import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Calendar, Tag } from "lucide-react";
import PageHero from "@/components/PageHero";
import { blogPosts, getPostBySlug } from "@/lib/blog-data";

const postContent: Record<string, string> = {
  "corporate-risk-transfer": `
Corporate risk transfer is the process of shifting financial exposure from the business to insurers or other counterparties. Strategies include:

**Insurance programmes** – Property, liability, business interruption, and specialty lines are designed to align with your risk appetite and retention. Working with a broker helps ensure no gaps or overlaps.

**Captives and alternative risk transfer** – Larger organisations may use captives or structured solutions for cost efficiency and customisation. We advise on feasibility and implementation.

**Contractual transfer** – In contracts with suppliers, contractors, or partners, risk can be allocated via indemnities and insurance requirements. We help draft and review such clauses.

At SPY Insurance Brokers, we help corporates design risk transfer strategies that balance protection, cost, and compliance. Contact us to discuss your programme.
  `,
  "health-coverage-families": `
Comprehensive health coverage gives families access to quality healthcare without facing financial stress during medical emergencies.

**Family floater plans** – One policy covers the entire family with a shared sum insured. They are often more economical than individual policies and simplify renewal and claims.

**What to look for** – Adequate sum insured, wide hospital network, coverage for pre-existing conditions (after waiting period), and optional maternity or critical illness riders.

**Tax benefits** – Premiums paid for health insurance qualify for deduction under Section 80D of the Income Tax Act.

We help families compare plans and choose coverage that fits their needs and budget. Get in touch for a personalised recommendation.
  `,
  "industry-insurance-leaders": `
Industry-specific insurance addresses the unique risks of each sector—from manufacturing and power to logistics and technology.

**Property and business interruption** – Tailored to your assets, supply chain, and revenue streams. Limits and deductibles should reflect your exposure.

**Liability** – Public, product, and professional liability vary by industry. Regulatory and contractual requirements often dictate minimum cover.

**Specialty lines** – Cyber, marine cargo, erection all risks, and other specialty covers are designed for specific operational risks.

Leaders who align their insurance programme with their industry’s risk profile are better prepared for disruptions and stakeholder expectations. Our industry practice helps you design and place the right programme.
  `,
  "claims-management-tips": `
Efficient claims management improves outcomes and reduces stress for corporates.

**Early intimation** – Notify the insurer (or your broker) as soon as a loss is known. Delays can affect admissibility.

**Documentation** – Maintain records: photos, reports, invoices, and correspondence. Your broker can help compile claim files.

**Single point of contact** – Designate a relationship manager or claims team so the insurer has one channel for communication.

**Follow-up** – Regular follow-up with the insurer and surveyors keeps the claim on track. We do this on behalf of our clients.

Our Claims Assistance Team supports you from intimation to settlement. Contact us to learn how we can help.
  `,
  "travel-insurance-guide": `
Frequent travellers should consider travel insurance for every trip—domestic or international.

**Medical cover** – Hospitalisation and evacuation abroad can be very expensive. Travel insurance provides emergency medical cover and 24/7 assistance.

**Trip cancellation and delay** – Reimbursement for non-refundable bookings and extra expenses due to delay or cancellation (as per policy terms).

**Baggage** – Loss, delay, or damage to baggage can be covered. Keep receipts and airline reports for claims.

**Multi-trip plans** – If you travel often, an annual multi-trip policy may be more convenient and cost-effective.

We offer single-trip and multi-trip plans from leading insurers. Share your travel plans and we’ll recommend the right cover.
  `,
};

export async function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = getPostBySlug(params.slug);
  if (!post) return { title: "Blog | SPY Insurance Brokers" };
  return {
    title: `${post.title} | Blog`,
    description: post.excerpt,
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  const content = postContent[post.slug] || post.excerpt;

  return (
    <>
      <section className="pt-28 pb-16 md:pt-32 md:pb-20 bg-white">
        <div className="container-custom">
          <Link href="/blog" className="inline-flex items-center gap-2 text-primary-navy hover:text-accent-gold mb-8 transition-colors">
            <ArrowLeft className="w-5 h-5" />
            Back to Blog
          </Link>
          <div className="max-w-3xl">
            <div className="flex flex-wrap items-center gap-4 text-sm mb-4">
              <span className="flex items-center gap-1 text-accent-gold font-medium">
                <Tag className="w-4 h-4" />
                {post.category}
              </span>
              <span className="flex items-center gap-1 text-primary-navy/60">
                <Calendar className="w-4 h-4" />
                {new Date(post.date).toLocaleDateString("en-IN", { month: "long", day: "numeric", year: "numeric" })}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-primary-navy mb-6">{post.title}</h1>
            <p className="text-xl text-primary-navy/80">{post.excerpt}</p>
          </div>
        </div>
      </section>
      <article className="section-padding bg-background-light">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto prose prose-lg prose-headings:text-primary-navy prose-p:text-primary-navy/80 prose-strong:text-primary-navy whitespace-pre-line">
            {content.trim()}
          </div>
        </div>
      </article>
      <section className="section-padding bg-white">
        <div className="container-custom max-w-3xl">
          <h2 className="text-2xl font-bold text-primary-navy mb-6">Related Posts</h2>
          <ul className="space-y-4">
            {blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3).map((p) => (
              <li key={p.slug}>
                <Link href={`/blog/${p.slug}`} className="text-primary-navy hover:text-accent-gold font-medium flex items-center gap-2">
                  {p.title}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section className="section-padding bg-primary-navy text-white text-center">
        <div className="container-custom">
          <h2 className="text-2xl font-bold mb-4">Need Help Choosing Insurance?</h2>
          <p className="text-white/85 mb-8 max-w-xl mx-auto">Our advisors are here to help you find the right coverage.</p>
          <Link href="/contact" className="btn-primary bg-accent-gold text-primary-navy inline-flex items-center gap-2">
            Get Free Consultation
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </>
  );
}
