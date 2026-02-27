import { Metadata } from "next";
import IndustrySubpage from "@/components/IndustrySubpage";

export const metadata: Metadata = {
  title: "Sugar Industry Insurance",
  description: "Insurance for sugar mills and refineries. Property, machinery, and crop-related risks.",
};

export default function SugarPage() {
  return (
    <IndustrySubpage
      title="Sugar"
      subtitle="Industry"
      overview="The sugar industry has distinct seasonal and asset-based risks. We help mills and refineries get their business risk profile assessed and choose insurance policies that meet their needs—covering property, machinery, crop, and liability."
      risks={[
        "Fire and explosion in boilers and processing units",
        "Machinery breakdown during crushing season",
        "Crop and raw material (cane) related risks",
        "Business interruption and seasonal revenue loss",
      ]}
      solutions={[
        "Property damage and business interruption",
        "Machinery breakdown and boiler insurance",
        "Crop-related covers where applicable",
        "Public and product liability",
        "Tailored programmes for integrated sugar complexes",
      ]}
      caseExample="We have supported sugar mills with combined property, machinery, and BI programmes, ensuring coverage during peak crushing season and off-season maintenance."
      breadcrumb={[{ label: "Industry", href: "/industry" }, { label: "Sugar", href: "/industry/sugar" }]}
      parentHref="/industry"
      parentLabel="Industries"
    />
  );
}
