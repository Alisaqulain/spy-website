import { Metadata } from "next";
import ServiceSubpage from "@/components/ServiceSubpage";

export const metadata: Metadata = {
  title: "Claims Management",
  description: "Dedicated Claims Assistance Team. Full responsibility from claim intimation through to settlement, supporting you at every step.",
};

export default function ClaimsManagementPage() {
  return (
    <ServiceSubpage
      title="Claims Management"
      subtitle="Corporate"
      overview="Our dedicated Claims Assistance Team assumes full responsibility from the date of claim intimation and supports clients at every step. We coordinate with insurers, document losses, and work to ensure fair and timely settlement so you can focus on your business."
      benefits={[
        "Single point of contact for all claims",
        "Documentation and follow-up with insurers",
        "Dispute resolution and negotiation support",
        "Regular status updates and reporting",
      ]}
      whyChoose="We understand that claims can be stressful. Our team is trained to handle property, liability, and other commercial lines claims with professionalism and persistence, aiming for outcomes that meet your expectations."
      breadcrumb={[{ label: "Corporate", href: "/corporate" }, { label: "Claims Management", href: "/corporate/claims-management" }]}
      parentHref="/corporate"
      parentLabel="Corporate Solutions"
    />
  );
}
