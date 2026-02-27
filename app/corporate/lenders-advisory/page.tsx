import { Metadata } from "next";
import ServiceSubpage from "@/components/ServiceSubpage";

export const metadata: Metadata = {
  title: "Lenders Insurance Advisory",
  description: "Need-based, fully structured insurance products for assets financed by project lenders. Expert advisory for banks and financial institutions.",
};

export default function LendersAdvisoryPage() {
  return (
    <ServiceSubpage
      title="Lenders Insurance Advisory"
      subtitle="Corporate"
      overview="As insurance advisors to lenders, we provide need-based, fully structured insurance products for insuring assets financed by project lenders. We help banks, NBFCs, and development financial institutions protect their collateral and comply with regulatory and credit policy requirements."
      benefits={[
        "Structures aligned to lender credit and security requirements",
        "Collateral protection and compliance support",
        "Project and asset-level insurance programmes",
        "Ongoing monitoring and renewal management",
      ]}
      industries={["Banks", "NBFCs", "Development financial institutions", "Project finance", "Infrastructure"]}
      whyChoose="We combine insurance broking expertise with an understanding of lender risk and documentation needs. Our programmes are designed to protect financed assets and provide clarity to all stakeholders."
      breadcrumb={[{ label: "Corporate", href: "/corporate" }, { label: "Lenders Insurance Advisory", href: "/corporate/lenders-advisory" }]}
      parentHref="/corporate"
      parentLabel="Corporate Solutions"
    />
  );
}
