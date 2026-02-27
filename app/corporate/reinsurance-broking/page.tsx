import { Metadata } from "next";
import ServiceSubpage from "@/components/ServiceSubpage";

export const metadata: Metadata = {
  title: "Reinsurance Broking",
  description: "Specialised reinsurance broking services. We serve as intermediaries to negotiate and secure the best reinsurance policies for our clients.",
};

export default function ReinsuranceBrokingPage() {
  return (
    <ServiceSubpage
      title="Reinsurance Broking"
      subtitle="Corporate"
      overview="We offer specialised reinsurance broking services, serving as intermediaries to help our clients negotiate and secure the best reinsurance programmes. Our team works with leading reinsurers to structure capacity and terms that support your cedant or captive needs."
      benefits={[
        "Access to global reinsurance capacity",
        "Structured programmes for complex risks",
        "Expert negotiation and placement",
        "Ongoing programme management and reporting",
      ]}
      industries={["Insurance carriers", "Captives", "Large corporates", "Banks and lenders"]}
      whyChoose="Our reinsurance broking team brings decades of market experience and strong relationships with reinsurers worldwide. We focus on clarity, efficiency, and outcomes that match your strategic objectives."
      breadcrumb={[{ label: "Corporate", href: "/corporate" }, { label: "Reinsurance Broking", href: "/corporate/reinsurance-broking" }]}
      parentHref="/corporate"
      parentLabel="Corporate Solutions"
    />
  );
}
