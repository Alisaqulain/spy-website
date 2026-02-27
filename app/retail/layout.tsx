import { Metadata } from "next";

export const metadata: Metadata = {
  title: { default: "Retail Insurance | SPY Insurance Brokers", template: "%s | SPY Insurance Brokers" },
  description: "Personal and family insurance: health, life, motor, travel, and home. Expert guidance and competitive premiums.",
};

export default function RetailLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
