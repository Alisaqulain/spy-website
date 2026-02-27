import { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Cookies Policy | SPY Insurance Brokers",
  description: "How we use cookies and similar technologies on our website.",
};

export default function CookiesPage() {
  return (
    <>
      <PageHero
        title="Cookies Policy"
        subtitle="Legal"
        description="How we use cookies and similar technologies on our website."
        breadcrumb={[{ label: "Cookies Policy", href: "/cookies" }]}
      />
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl prose prose-lg prose-headings:text-primary-navy prose-p:text-primary-navy/80">
          <p className="lead">
            This Cookies Policy explains how SPY Insurance Brokers uses cookies and similar technologies when you visit our website.
          </p>
          <h2>What Are Cookies</h2>
          <p>Cookies are small text files that are stored on your device when you visit a website. They help the site remember your preferences, understand how you use the site, and improve your experience.</p>
          <h2>Types of Cookies We Use</h2>
          <ul>
            <li><strong>Strictly necessary cookies</strong> – Required for the website to function (e.g. security, load balancing).</li>
            <li><strong>Functional cookies</strong> – Remember your choices (e.g. language, region) to provide a more personalised experience.</li>
            <li><strong>Analytics or performance cookies</strong> – Help us understand how visitors use our website (e.g. pages viewed, time spent) so we can improve it. We may use third-party analytics providers for this purpose.</li>
            <li><strong>Marketing cookies</strong> – Used to deliver relevant content or track the effectiveness of our marketing (where applicable and with your consent).</li>
          </ul>
          <h2>Your Choices</h2>
          <p>You can control or delete cookies through your browser settings. Note that disabling certain cookies may affect the functionality of the website. You may also see a cookie consent banner on our site where you can accept or decline non-essential cookies.</p>
          <h2>Updates</h2>
          <p>We may update this Cookies Policy from time to time. The updated version will be posted on this page with a revised date. We encourage you to review this policy periodically.</p>
          <p className="pt-8">
            For more information, see our <Link href="/privacy-policy" className="text-accent-gold font-medium hover:underline">Privacy Policy</Link> or <Link href="/contact" className="text-accent-gold font-medium hover:underline">contact us</Link>.
          </p>
        </div>
      </section>
    </>
  );
}
