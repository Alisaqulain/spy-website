import { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Terms of Use | SPY Insurance Brokers",
  description: "Terms of use for our website and services.",
};

export default function TermsPage() {
  return (
    <>
      <PageHero
        title="Terms of Use"
        subtitle="Legal"
        description="Terms governing the use of our website and information provided herein."
        breadcrumb={[{ label: "Terms of Use", href: "/terms" }]}
      />
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl prose prose-lg prose-headings:text-primary-navy prose-p:text-primary-navy/80">
          <p className="lead">
            By accessing or using the website of SPY Insurance Brokers (&quot;we&quot;, &quot;us&quot;), you agree to be bound by these Terms of Use. If you do not agree, please do not use this website.
          </p>
          <h2>Use of Website</h2>
          <p>This website is provided for general information about our services. You may use it only for lawful purposes and in accordance with these terms. You must not use the website in any way that could damage, disable, or impair the site or interfere with others&apos; use.</p>
          <h2>No Professional Advice</h2>
          <p>Content on this website is for general information only and does not constitute insurance, legal, or other professional advice. You should seek appropriate professional advice before making decisions based on such content. Insurance contracts are subject to policy terms and conditions and applicable law.</p>
          <h2>Intellectual Property</h2>
          <p>All content on this website, including text, graphics, logos, and design, is owned by or licensed to us and is protected by intellectual property laws. You may not reproduce, distribute, or use such content without our prior written consent.</p>
          <h2>Limitation of Liability</h2>
          <p>To the fullest extent permitted by law, we shall not be liable for any direct, indirect, incidental, or consequential damages arising from your use of or inability to use this website or any content thereon.</p>
          <h2>Links to Third-Party Sites</h2>
          <p>This website may contain links to third-party websites. We do not control and are not responsible for the content or practices of such sites. Your use of third-party sites is at your own risk.</p>
          <h2>Changes</h2>
          <p>We may modify these Terms of Use at any time. Continued use of the website after changes constitutes acceptance of the revised terms.</p>
          <p className="pt-8">
            <Link href="/contact" className="text-accent-gold font-medium hover:underline">Contact us</Link> for questions about these Terms of Use.
          </p>
        </div>
      </section>
    </>
  );
}
