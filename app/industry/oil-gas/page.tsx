import { Metadata } from "next";
import IndustrySubpage from "@/components/IndustrySubpage";

export const metadata: Metadata = {
  title: "Oil & Gas Insurance",
  description: "Insurance for the oil and natural gas industry. Upstream, midstream, and downstream risks.",
};

export default function OilGasPage() {
  return (
    <IndustrySubpage
      title="Oil & Gas"
      subtitle="Industry"
      overview="The oil and natural gas industry has its own set of business risks—exploration, production, refining, storage, and distribution. We help operators and contractors manage these through specialist insurance programmes and risk advisory."
      risks={[
        "Property damage to rigs, platforms, refineries, and pipelines",
        "Pollution and environmental liability",
        "Business interruption and loss of production",
        "Construction and project risks for new facilities",
      ]}
      solutions={[
        "Property damage and business interruption for upstream and downstream",
        "Control of well / operators' extra expense where applicable",
        "Pipeline and storage tank insurance",
        "Contractors' all risks for construction projects",
        "Public, product, and environmental liability",
      ]}
      caseExample="We work with oil and gas clients to design programmes that address their specific asset base and operational profile, often in coordination with international reinsurers."
      breadcrumb={[{ label: "Industry", href: "/industry" }, { label: "Oil & Gas", href: "/industry/oil-gas" }]}
      parentHref="/industry"
      parentLabel="Industries"
    />
  );
}
