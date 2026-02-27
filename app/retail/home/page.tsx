import { Metadata } from "next";
import RetailSubpage from "@/components/RetailSubpage";

export const metadata: Metadata = {
  title: "Home Insurance Comprehensive Policy",
  description: "Comprehensive home and contents insurance. Fire, theft, natural calamities, and liability coverage.",
};

export default function HomePage() {
  return (
    <RetailSubpage
      title="Home Insurance Comprehensive Policy"
      subtitle="Retail"
      overview="A comprehensive home insurance policy covers the structure of your home and/or its contents against fire, theft, natural calamities, and other perils. We help you choose the right sum insured and add-ons so your home and belongings are protected."
      coverage={[
        "Structure: fire, lightning, explosion, natural calamities",
        "Contents: furniture, appliances, valuables (as per policy)",
        "Theft and burglary",
        "Personal liability (e.g. third-party injury on premises)",
        "Optional: earthquake, flood, jewellery and valuables",
      ]}
      benefits={[
        "Rebuilding and replacement cost options",
        "Flexible sum insured for structure and contents",
        "Discounts for safety features (e.g. burglar alarm)",
        "Multi-year policies for convenience",
      ]}
      exclusions={["Wear and tear", "Intentional damage", "War, nuclear risks", "Policy-specific exclusions"]}
      claimProcess={[
        "Inform the insurer immediately (and police if required for theft).",
        "Submit claim form, photos, and supporting documents.",
        "Survey may be conducted for large losses.",
        "Claim is settled as per policy terms.",
      ]}
      breadcrumb={[{ label: "Retail", href: "/retail" }, { label: "Home Insurance", href: "/retail/home" }]}
      parentHref="/retail"
      parentLabel="Retail Solutions"
    />
  );
}
