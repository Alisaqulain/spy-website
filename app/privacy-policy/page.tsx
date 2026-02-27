import { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Privacy Policy | SPY Insurance Brokers",
  description: "Privacy policy. How we collect, use, and protect your personal information.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero
        title="Privacy Policy"
        subtitle="Legal"
        description="How we collect, use, and protect your personal information."
        breadcrumb={[{ label: "Privacy Policy", href: "/privacy-policy" }]}
      />
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl prose prose-lg prose-headings:text-primary-navy prose-p:text-primary-navy/80">
          <p className="lead">
            SPY Insurance Brokers (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) is committed to protecting your privacy. This policy describes how we collect, use, store, and disclose your personal information in connection with our insurance broking and risk management services.
          </p>
          <h2>Information We Collect</h2>
          <p>We may collect information that you provide directly, such as name, contact details, date of birth, identification documents, and information related to your insurance needs. We may also receive information from insurers, intermediaries, and publicly available sources where relevant to our services.</p>
          <h2>How We Use Your Information</h2>
          <p>We use your information to provide insurance broking and advisory services, communicate with you, process applications and claims, comply with legal and regulatory obligations, and improve our services. We do not sell your personal information to third parties.</p>
          <h2>Sharing and Disclosure</h2>
          <p>We may share your information with insurers, reinsurers, service providers, and regulatory bodies as necessary to perform our services or as required by law. We ensure that such parties are bound by confidentiality and data protection obligations where applicable.</p>
          <h2>Security and Retention</h2>
          <p>We implement appropriate technical and organisational measures to protect your personal information. We retain your information for as long as necessary to fulfil the purposes set out in this policy and to comply with legal, regulatory, and professional requirements.</p>
          <h2>Your Rights</h2>
          <p>You may have the right to access, correct, or delete your personal information, or to object to or restrict certain processing. To exercise these rights or for any privacy-related queries, please contact us using the details on our Contact page.</p>
          <h2>Updates</h2>
          <p>We may update this policy from time to time. The revised policy will be posted on this page with an updated effective date. We encourage you to review this policy periodically.</p>
          <p className="pt-8">
            <Link href="/contact" className="text-accent-gold font-medium hover:underline">Contact us</Link> for any questions about this Privacy Policy.
          </p>
        </div>
      </section>
    </>
  );
}
