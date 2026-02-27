import { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Disclaimer | SPY Insurance Brokers",
  description: "Disclaimer regarding information on our website and services.",
};

export default function DisclaimerPage() {
  return (
    <>
      <PageHero
        title="Disclaimer"
        subtitle="Legal"
        description="Important information about the use of content and services on this website."
        breadcrumb={[{ label: "Disclaimer", href: "/disclaimer" }]}
      />
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl prose prose-lg prose-headings:text-primary-navy prose-p:text-primary-navy/80">
          <p className="lead">
            The information on this website is provided by SPY Insurance Brokers for general informational purposes only. Please read this disclaimer carefully.
          </p>
          <h2>No Advice</h2>
          <p>Nothing on this website constitutes insurance, investment, legal, tax, or other professional advice. You should consult qualified professionals for advice tailored to your situation. Insurance coverage is subject to the terms, conditions, and exclusions of the relevant policy and to applicable laws and regulations.</p>
          <h2>Accuracy and Completeness</h2>
          <p>While we endeavour to keep the information on this website accurate and up to date, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, or suitability of the information. Reliance on any such information is at your own risk.</p>
          <h2>Products and Services</h2>
          <p>Descriptions of our products and services are general in nature. Actual terms, coverage, and availability depend on the specific policy, insurer, and your circumstances. We recommend that you discuss your requirements with our team and read the policy documentation before making any decision.</p>
          <h2>Regulatory</h2>
          <p>We are licensed/registered as an insurance broker as per applicable regulations. Our services are offered in accordance with such regulations and the codes of conduct that apply to us.</p>
          <p className="pt-8">
            <Link href="/contact" className="text-accent-gold font-medium hover:underline">Contact us</Link> for any queries.
          </p>
        </div>
      </section>
    </>
  );
}
