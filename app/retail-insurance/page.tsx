import { Metadata } from "next";
import RetailContent from "./RetailContent";

export const metadata: Metadata = {
  title: "Retail Insurance - Health, Motor, Life, Travel, Home Insurance | SPY Insurance",
  description: "Personalized retail insurance solutions including health insurance, motor insurance, life insurance, travel insurance, home insurance, and personal accident coverage for individuals and families.",
  keywords: "retail insurance, health insurance, motor insurance, life insurance, travel insurance, home insurance, personal accident insurance",
  openGraph: {
    title: "Retail Insurance Solutions - SPY Insurance Brokers",
    description: "Personalized insurance solutions for individuals and families.",
  },
};

export default function RetailInsurancePage() {
  return <RetailContent />;
}
