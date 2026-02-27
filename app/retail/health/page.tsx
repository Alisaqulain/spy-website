import { Metadata } from "next";
import RetailSubpage from "@/components/RetailSubpage";

export const metadata: Metadata = {
  title: "Health Care Insurance",
  description: "Comprehensive health insurance for you and your family. Hospitalisation, day care, and wellness coverage.",
};

export default function HealthPage() {
  return (
    <RetailSubpage
      title="Health Care"
      subtitle="Retail"
      overview="Health insurance helps you and your family manage medical costs. We help you compare and choose plans that cover hospitalisation, day-care procedures, pre- and post-hospitalisation, and optional wellness benefits—with access to cashless networks and quick claim support."
      coverage={[
        "Hospitalisation expenses (room, ICU, surgery, medicines)",
        "Day-care procedures",
        "Pre- and post-hospitalisation costs as per policy",
        "Cashless treatment at network hospitals",
        "Optional: maternity, wellness, and critical illness riders",
      ]}
      benefits={[
        "Tax benefits under Section 80D",
        "Lifetime renewability in many plans",
        "No-claim bonus and restoration benefits",
        "Family floater and individual options",
      ]}
      exclusions={["Pre-existing conditions waiting period", "Certain treatments as per policy", "Cosmetic or experimental treatments"]}
      claimProcess={[
        "Inform us or the insurer at the earliest.",
        "Submit required documents (bills, prescriptions, discharge summary).",
        "We assist with follow-up and documentation.",
        "Claim is processed as per policy terms.",
      ]}
      breadcrumb={[{ label: "Retail", href: "/retail" }, { label: "Health Care", href: "/retail/health" }]}
      parentHref="/retail"
      parentLabel="Retail Solutions"
    />
  );
}
