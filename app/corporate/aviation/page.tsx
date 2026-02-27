import { Metadata } from "next";
import ServiceSubpage from "@/components/ServiceSubpage";

export const metadata: Metadata = {
  title: "Aviation & Aerospace Insurance",
  description: "Expert guidance for aviation insurance policies. Select suitable coverage for aircraft, operators, and aerospace risks.",
};

export default function AviationPage() {
  return (
    <ServiceSubpage
      title="Aviation & Aerospace Insurance"
      subtitle="Corporate"
      overview="Our team provides expert guidance to help you select suitable aviation insurance policies that deliver the right coverage at all times. We work with specialist aviation insurers to place hull, liability, and ancillary covers for aircraft operators, lessors, and aerospace-related risks."
      benefits={[
        "Hull and liability programmes for aircraft operators",
        "Coverage for lessors, MROs, and ground handlers",
        "Space and satellite-related risk solutions",
        "Claims support with aviation specialists",
      ]}
      industries={["Airlines", "General aviation", "Helicopters", "MRO", "Aerospace", "Airports"]}
      whyChoose="Aviation insurance requires specialist knowledge and market access. Our team has the experience and insurer relationships to structure programmes that meet regulatory and operational requirements."
      breadcrumb={[{ label: "Corporate", href: "/corporate" }, { label: "Aviation & Aerospace", href: "/corporate/aviation" }]}
      parentHref="/corporate"
      parentLabel="Corporate Solutions"
    />
  );
}
