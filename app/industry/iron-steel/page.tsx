import { Metadata } from "next";
import IndustrySubpage from "@/components/IndustrySubpage";

export const metadata: Metadata = {
  title: "Iron & Steel Insurance",
  description: "Insurance and risk management for the iron and steel sector. Property, liability, and business interruption.",
};

export default function IronSteelPage() {
  return (
    <IndustrySubpage
      title="Iron & Steel"
      subtitle="Industry"
      overview="The iron and steel industry faces significant property, liability, and business interruption risks. We design insurance programmes that address fire, machinery breakdown, third-party liability, and cargo, tailored to the size and complexity of your operations."
      risks={[
        "Fire and explosion in furnaces, mills, and storage",
        "Machinery breakdown and business interruption",
        "Third-party liability and product liability",
        "Cargo and transit risks for raw materials and finished goods",
      ]}
      solutions={[
        "Property damage and business interruption (BI) insurance",
        "Machinery breakdown and boiler & pressure plant insurance",
        "Public and product liability",
        "Marine cargo and transit insurance",
        "Customised programmes for large integrated plants",
      ]}
      caseExample="We have supported several steel and metal producers with combined property, BI, and liability programmes, ensuring adequate coverage and competitive terms from leading insurers."
      breadcrumb={[{ label: "Industry", href: "/industry" }, { label: "Iron & Steel", href: "/industry/iron-steel" }]}
      parentHref="/industry"
      parentLabel="Industries"
    />
  );
}
