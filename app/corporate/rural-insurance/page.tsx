import { Metadata } from "next";
import ServiceSubpage from "@/components/ServiceSubpage";

export const metadata: Metadata = {
  title: "Rural Insurance Solutions",
  description: "End-to-end insurance solutions tailor-made for the rural and marginal sector. Crop, livestock, and rural asset coverage.",
};

export default function RuralInsurancePage() {
  return (
    <ServiceSubpage
      title="Rural Insurance Solutions"
      subtitle="Corporate"
      overview="Our team brings end-to-end insurance solutions that are tailor-made for the needs of the rural and marginal sector. From crop insurance and livestock coverage to micro-insurance and rural asset protection, we help bridge the protection gap in underserved communities."
      benefits={[
        "Crop and weather-based insurance solutions",
        "Livestock and allied agriculture coverage",
        "Distribution and last-mile support",
        "Claims support in local contexts",
      ]}
      industries={["Agriculture", "Cooperatives", "Rural development agencies", "Microfinance", "FMCG rural distribution"]}
      whyChoose="We understand the unique risks and constraints of rural India. Our solutions are designed to be accessible, understandable, and responsive to the needs of farmers and rural enterprises."
      breadcrumb={[{ label: "Corporate", href: "/corporate" }, { label: "Rural Insurance Solutions", href: "/corporate/rural-insurance" }]}
      parentHref="/corporate"
      parentLabel="Corporate Solutions"
    />
  );
}
