import { Metadata } from "next";
import IndustrySubpage from "@/components/IndustrySubpage";

export const metadata: Metadata = {
  title: "Additional Industries",
  description: "Insurance and risk management for other sectors: IT, logistics, healthcare, real estate, and more.",
};

export default function AdditionalIndustriesPage() {
  return (
    <IndustrySubpage
      title="Additional Industries"
      subtitle="Industry"
      overview="Beyond our core industry verticals, we serve clients across sectors such as information technology, logistics, healthcare, real estate, retail, education, and financial services. We assess each sector's risks and design programmes that fit your operations and compliance needs."
      risks={[
        "Sector-specific property, liability, and operational risks",
        "Cyber and technology risks (IT, fintech)",
        "Professional indemnity and D&O (financial services, healthcare)",
        "Cargo, fleet, and warehouse risks (logistics)",
        "Construction and project risks (real estate)",
      ]}
      solutions={[
        "Property damage and business interruption across sectors",
        "Cyber insurance and technology errors & omissions",
        "Professional indemnity and directors & officers (D&O)",
        "Marine cargo, goods in transit, and fleet insurance",
        "Contractors' all risks and project insurance",
        "Group health and employee benefits for all industries",
      ]}
      caseExample="Our team has placed programmes for IT companies, hospitals, logistics firms, and real estate developers—each tailored to their risk profile and regulatory context."
      breadcrumb={[{ label: "Industry", href: "/industry" }, { label: "Additional Industries", href: "/industry/additional" }]}
      parentHref="/industry"
      parentLabel="Industries"
    />
  );
}
