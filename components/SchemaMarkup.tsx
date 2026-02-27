import { SITE_NAME, SITE_DOMAIN } from "@/lib/site-config";

export default function SchemaMarkup() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "InsuranceAgency",
    name: SITE_NAME,
    url: SITE_DOMAIN,
    logo: "https://spyinsurance.com/logo.png",
    description: "Leading insurance broker providing comprehensive corporate and retail insurance solutions.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "123 Business District",
      addressLocality: "New Delhi",
      postalCode: "110001",
      addressCountry: "IN",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+91-123-456-7890",
      contactType: "customer service",
      email: "info@spyinsurance.com",
    },
    sameAs: [
      "https://www.facebook.com/spyinsurance",
      "https://www.twitter.com/spyinsurance",
      "https://www.linkedin.com/company/spyinsurance",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
    />
  );
}
