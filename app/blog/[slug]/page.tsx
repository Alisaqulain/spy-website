import { Metadata } from "next";
import Link from "next/link";
import { Calendar, ArrowLeft, Tag, Share2 } from "lucide-react";
import { notFound } from "next/navigation";

const blogPosts: Record<string, {
  title: string;
  content: string;
  category: string;
  date: string;
  excerpt: string;
}> = {
  "understanding-group-health-insurance-benefits": {
    title: "Understanding Group Health Insurance Benefits",
    category: "Corporate Insurance",
    date: "2024-01-15",
    excerpt: "Learn how group health insurance can benefit your employees and your business.",
    content: `
      Group health insurance is one of the most valuable benefits you can offer your employees. 
      Not only does it help attract and retain top talent, but it also provides financial protection 
      for your workforce while potentially reducing your business's tax burden.

      ## What is Group Health Insurance?

      Group health insurance is a type of health insurance plan that covers a group of people, 
      typically employees of a company. These plans are usually more affordable than individual 
      health insurance policies because the risk is spread across a larger pool of people.

      ## Key Benefits for Employers

      ### 1. Attract and Retain Talent
      In today's competitive job market, comprehensive health benefits can be a deciding factor 
      for potential employees. Offering group health insurance shows that you value your employees' 
      well-being and can help you stand out from competitors.

      ### 2. Tax Benefits
      Premiums paid for group health insurance are typically tax-deductible as a business expense. 
      This can provide significant tax savings for your company.

      ### 3. Improved Employee Productivity
      Healthy employees are more productive employees. When your workforce has access to quality 
      healthcare, they're more likely to stay healthy and miss fewer work days.

      ## Benefits for Employees

      ### 1. Lower Premiums
      Group plans typically offer lower premiums compared to individual health insurance policies 
      because the cost is shared among all members of the group.

      ### 2. Better Coverage
      Group health insurance plans often provide more comprehensive coverage than individual plans, 
      including preventive care, prescription drugs, and mental health services.

      ### 3. No Medical Underwriting
      Most group health insurance plans don't require individual medical underwriting, meaning 
      employees with pre-existing conditions can still get coverage.

      ## Choosing the Right Plan

      When selecting a group health insurance plan, consider:
      - Your budget and the premium you can afford
      - The needs of your employees
      - Network coverage and preferred providers
      - Additional benefits like dental and vision coverage

      At SPY Insurance, we help businesses find the right group health insurance plan that balances 
      comprehensive coverage with affordability. Contact us today to learn more about your options.
    `,
  },
  "10-essential-tips-choosing-motor-insurance": {
    title: "10 Essential Tips for Choosing Motor Insurance",
    category: "Retail Insurance",
    date: "2024-01-10",
    excerpt: "Make an informed decision when selecting motor insurance.",
    content: `
      Choosing the right motor insurance can be overwhelming with so many options available. 
      Here are 10 essential tips to help you make an informed decision.

      ## 1. Understand Your Coverage Needs

      Before purchasing motor insurance, assess your needs. Do you need comprehensive coverage 
      or is third-party liability sufficient? Consider factors like your vehicle's value, 
      your driving habits, and your financial situation.

      ## 2. Compare Multiple Quotes

      Don't settle for the first quote you receive. Compare policies from multiple insurers 
      to find the best coverage at the most competitive price. Use online comparison tools 
      or consult with an insurance broker.

      ## 3. Check the Insurer's Claim Settlement Ratio

      The claim settlement ratio indicates how efficiently an insurer processes claims. 
      Choose an insurer with a high claim settlement ratio for faster claim processing.

      ## 4. Look for Add-on Covers

      Consider add-on covers like zero depreciation, engine protection, roadside assistance, 
      and personal accident cover. These can provide additional protection for a small extra cost.

      ## 5. Review the Network of Garages

      Check if the insurer has a wide network of cashless garages near you. This ensures 
      convenient claim settlement without out-of-pocket expenses.

      ## 6. Understand Exclusions

      Read the policy document carefully to understand what's not covered. Common exclusions 
      include damage due to war, nuclear risks, and driving under influence.

      ## 7. Consider No Claim Bonus

      A No Claim Bonus (NCB) is a discount you receive for not making any claims during 
      the policy period. This can significantly reduce your premium over time.

      ## 8. Check Online Reviews

      Research the insurer's reputation by reading customer reviews and ratings. This can 
      give you insights into their service quality and claim handling process.

      ## 9. Maintain Good Driving Record

      A clean driving record can help you get better rates. Avoid traffic violations and 
      accidents to maintain a good insurance history.

      ## 10. Review Annually

      Your insurance needs may change over time. Review your policy annually and make 
      adjustments as needed. You might find better deals or need additional coverage.

      At SPY Insurance, we help you navigate the complex world of motor insurance and 
      find the best policy for your needs. Contact us for expert guidance.
    `,
  },
};

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = blogPosts[params.slug];
  
  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: `${post.title} | SPY Insurance Blog`,
    description: post.excerpt,
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts[params.slug];

  if (!post) {
    notFound();
  }

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-background-light via-white to-background-light">
        <div className="container-custom">
          <Link
            href="/blog"
            className="inline-flex items-center space-x-2 text-primary-dark hover:text-accent-green mb-8 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Blog</span>
          </Link>
          <div className="max-w-3xl">
            <div className="flex items-center space-x-4 mb-4 text-sm">
              <span className="flex items-center space-x-1 text-accent-green">
                <Tag className="w-4 h-4" />
                <span>{post.category}</span>
              </span>
              <span className="flex items-center space-x-1 text-primary-dark/60">
                <Calendar className="w-4 h-4" />
                <span>{new Date(post.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</span>
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-primary-dark mb-6">
              {post.title}
            </h1>
            <p className="text-xl text-primary-dark/70">
              {post.excerpt}
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <article className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto prose prose-lg">
            <div className="whitespace-pre-line text-primary-dark/80 leading-relaxed">
              {post.content}
            </div>
          </div>
        </div>
      </article>

      {/* CTA Section */}
      <section className="section-padding bg-background-light">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-primary-dark mb-4">
            Need Help Choosing Insurance?
          </h2>
          <p className="text-lg text-primary-dark/70 mb-8 max-w-2xl mx-auto">
            Our insurance experts are here to help you find the right coverage
          </p>
          <Link href="/contact" className="btn-primary inline-flex items-center space-x-2">
            <span>Get Free Consultation</span>
            <ArrowLeft className="w-5 h-5 rotate-180" />
          </Link>
        </div>
      </section>
    </>
  );
}
