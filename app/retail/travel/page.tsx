import { Metadata } from "next";
import RetailSubpage from "@/components/RetailSubpage";

export const metadata: Metadata = {
  title: "Travel Care Insurance",
  description: "Travel insurance for domestic and international trips. Medical, trip delay, and baggage coverage.",
};

export default function TravelPage() {
  return (
    <RetailSubpage
      title="Travel Care"
      subtitle="Retail"
      overview="Travel insurance protects you against medical emergencies, trip cancellations, delays, lost baggage, and other travel-related risks. We offer plans for domestic and international trips—single trip or multi-trip—so you can travel with confidence."
      coverage={[
        "Medical expenses abroad (hospitalisation, evacuation)",
        "Trip cancellation and interruption",
        "Lost or delayed baggage",
        "Personal accident and travel delay",
        "Optional: adventure sports, senior citizens, student travel",
      ]}
      benefits={[
        "24/7 assistance helpline",
        "Cashless or reimbursement as per plan",
        "Family and group plans available",
        "Short- and long-duration options",
      ]}
      exclusions={["Pre-existing conditions (unless declared)", "Risky activities unless covered", "Travel to prohibited countries"]}
      claimProcess={[
        "Contact the assistance number or insurer in case of emergency.",
        "Keep all bills, reports, and police/airline documents.",
        "Submit claim form and documents on return.",
        "We assist with documentation; claim is processed as per policy.",
      ]}
      breadcrumb={[{ label: "Retail", href: "/retail" }, { label: "Travel Care", href: "/retail/travel" }]}
      parentHref="/retail"
      parentLabel="Retail Solutions"
    />
  );
}
