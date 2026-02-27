import { Metadata } from "next";
import ServiceSubpage from "@/components/ServiceSubpage";

export const metadata: Metadata = {
  title: "Direct Broking",
  description: "Expert direct insurance broking for businesses. We help you manage risks and prepare for property casualties with tailored programmes.",
};

export default function DirectBrokingPage() {
  return (
    <ServiceSubpage
      title="Direct Broking"
      subtitle="Corporate"
      overview="As leaders in direct insurance broking, we help businesses manage risks and prepare for property casualties. Our team designs and places insurance programmes that align with your risk appetite and operational needs, ensuring optimal coverage at competitive terms."
      benefits={[
        "Tailored programmes aligned to your risk profile",
        "Access to multiple insurers for competitive terms",
        "End-to-end support from placement to renewal",
        "Transparent advice and documentation",
      ]}
      industries={["Manufacturing", "Real estate", "Infrastructure", "Retail", "Logistics", "Technology"]}
      whyChoose="Our direct broking practice combines deep market knowledge with a client-first approach. We act as your extended risk and insurance team, ensuring you have the right coverage without overlap or gaps."
      breadcrumb={[{ label: "Corporate", href: "/corporate" }, { label: "Direct Broking", href: "/corporate/direct-broking" }]}
      parentHref="/corporate"
      parentLabel="Corporate Solutions"
    />
  );
}
