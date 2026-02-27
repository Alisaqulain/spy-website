import { Metadata } from "next";
import RetailSubpage from "@/components/RetailSubpage";

export const metadata: Metadata = {
  title: "Motor Care Insurance",
  description: "Car, bike, and commercial vehicle insurance. Comprehensive and third-party covers with add-ons.",
};

export default function MotorPage() {
  return (
    <RetailSubpage
      title="Motor Care"
      subtitle="Retail"
      overview="Motor insurance is mandatory in India. We help you choose between third-party (mandatory) and comprehensive policies for cars, bikes, and commercial vehicles—with add-ons like zero depreciation, engine protection, and roadside assistance for complete peace of mind."
      coverage={[
        "Third-party liability (mandatory): injury and property damage to others",
        "Comprehensive: own damage, theft, third-party liability",
        "Add-ons: zero depreciation, engine protection, NCB protection",
        "Roadside assistance and key replacement",
        "Personal accident cover for owner-driver",
      ]}
      benefits={[
        "Cashless repairs at network garages",
        "No-claim bonus (NCB) for claim-free years",
        "Transfer of NCB on policy change",
        "Optional consumables and tyre cover",
      ]}
      exclusions={["Driving under influence", "Unlicensed driver", "Use outside geographical area", "Wear and tear"]}
      claimProcess={[
        "Inform us or the insurer immediately after the incident.",
        "Share photos and details; we'll guide you on survey if required.",
        "Get repairs at network garage (cashless) or reimburse later.",
        "Claim is settled as per policy terms.",
      ]}
      breadcrumb={[{ label: "Retail", href: "/retail" }, { label: "Motor Care", href: "/retail/motor" }]}
      parentHref="/retail"
      parentLabel="Retail Solutions"
    />
  );
}
