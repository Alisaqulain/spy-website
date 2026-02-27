import { Metadata } from "next";
import IndustrySubpage from "@/components/IndustrySubpage";

export const metadata: Metadata = {
  title: "Plywood & Lamination Insurance",
  description: "Insurance for plywood and lamination manufacturing. Property, fire, and liability coverage.",
};

export default function PlywoodPage() {
  return (
    <IndustrySubpage
      title="Plywood & Lamination"
      subtitle="Industry"
      overview="Plywood and lamination manufacturing involves combustible materials, machinery, and storage risks. We help you secure all-round coverage to manage insurable risks—from fire and machinery breakdown to liability and stock."
      risks={[
        "Fire and explosion in drying and pressing units",
        "Machinery breakdown in presses and cutters",
        "Stock and raw material damage",
        "Third-party and product liability",
      ]}
      solutions={[
        "Fire and allied perils for property and stock",
        "Machinery breakdown insurance",
        "Business interruption cover",
        "Public and product liability",
        "Cargo and transit for raw materials and finished goods",
      ]}
      caseExample="We work with plywood and laminate manufacturers to structure fire, machinery, and liability programmes that reflect their plant layout and operational risks."
      breadcrumb={[{ label: "Industry", href: "/industry" }, { label: "Plywood & Lamination", href: "/industry/plywood" }]}
      parentHref="/industry"
      parentLabel="Industries"
    />
  );
}
