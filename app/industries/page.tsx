import { Metadata } from "next";
import IndustriesContent from "./IndustriesContent";

export const metadata: Metadata = {
  title: "Industries We Serve - Manufacturing, IT, Healthcare, Logistics | SPY Insurance",
  description: "Specialized insurance solutions for diverse industries including manufacturing, IT, healthcare, logistics, real estate, retail, education, and finance sectors.",
  keywords: "industry insurance, manufacturing insurance, IT insurance, healthcare insurance, logistics insurance, real estate insurance",
  openGraph: {
    title: "Industries We Serve - SPY Insurance Brokers",
    description: "Specialized insurance solutions for diverse industries.",
  },
};

export default function IndustriesPage() {
  return <IndustriesContent />;
}
