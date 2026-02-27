import { Metadata } from "next";
import IndustrySubpage from "@/components/IndustrySubpage";

export const metadata: Metadata = {
  title: "Power & Utilities Insurance",
  description: "Insurance for power generation, transmission, and utilities. Property, liability, and operational risks.",
};

export default function PowerPage() {
  return (
    <IndustrySubpage
      title="Power"
      subtitle="Industry"
      overview="Power and utilities face unique risks—from generation assets and transmission to distribution and renewable projects. We offer risk assessment and insurance programmes that align with regulatory requirements and operational exposures."
      risks={[
        "Damage to turbines, boilers, transformers, and grid assets",
        "Business interruption and loss of revenue",
        "Third-party liability and environmental exposure",
        "Construction and erection risks for new projects",
      ]}
      solutions={[
        "Property damage and business interruption for power plants",
        "Machinery breakdown and boiler insurance",
        "Contractors' all risks (CAR) and erection all risks (EAR)",
        "Public and product liability",
        "Coverage for renewable energy (solar, wind) assets",
      ]}
      caseExample="We have placed programmes for thermal, hydro, and renewable power projects, including construction and operational phases, with insurers that understand the sector."
      breadcrumb={[{ label: "Industry", href: "/industry" }, { label: "Power", href: "/industry/power" }]}
      parentHref="/industry"
      parentLabel="Industries"
    />
  );
}
