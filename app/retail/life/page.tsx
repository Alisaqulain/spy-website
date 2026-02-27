import { Metadata } from "next";
import RetailSubpage from "@/components/RetailSubpage";

export const metadata: Metadata = {
  title: "Life Care Insurance",
  description: "Life insurance and savings plans for financial security. Term, endowment, ULIPs, and retirement solutions.",
};

export default function LifePage() {
  return (
    <RetailSubpage
      title="Life Care"
      subtitle="Retail"
      overview="Life insurance provides financial protection for your dependants and can also serve as a savings or investment tool. We help you choose between term plans, endowment, whole life, ULIPs, and retirement plans—matching your goals and budget."
      coverage={[
        "Term life: pure protection at affordable premiums",
        "Endowment and money-back: protection with maturity benefits",
        "Whole life: coverage for entire life with savings",
        "ULIPs: unit-linked insurance with market-linked returns",
        "Retirement and annuity plans",
      ]}
      benefits={[
        "Tax benefits under Section 80C and 10(10D)",
        "Income replacement for dependants",
        "Savings and wealth creation options",
        "Riders: accidental death, critical illness, waiver of premium",
      ]}
      exclusions={["Suicide within first year", "Misrepresentation or fraud", "Policy-specific exclusions"]}
      claimProcess={[
        "Notify the insurer with the policy document and death certificate (for death claims).",
        "Submit claim form and supporting documents.",
        "We assist with documentation and follow-up.",
        "Claim is processed as per policy terms.",
      ]}
      breadcrumb={[{ label: "Retail", href: "/retail" }, { label: "Life Care", href: "/retail/life" }]}
      parentHref="/retail"
      parentLabel="Retail Solutions"
    />
  );
}
