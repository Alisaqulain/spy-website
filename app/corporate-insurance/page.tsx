import { Metadata } from "next";
import CorporateContent from "./CorporateContent";

export const metadata: Metadata = {
  title: "Corporate Insurance Solutions - Employee Benefits, Group Health, Liability | SPY Insurance",
  description: "Comprehensive corporate insurance solutions including employee benefits, group health insurance, liability coverage, property insurance, marine & engineering insurance. Tailored for businesses.",
  keywords: "corporate insurance, employee benefits, group health insurance, liability insurance, property insurance, marine insurance, engineering insurance",
  openGraph: {
    title: "Corporate Insurance Solutions - SPY Insurance Brokers",
    description: "Comprehensive corporate insurance solutions for businesses of all sizes.",
  },
};

export default function CorporateInsurancePage() {
  return <CorporateContent />;
}
