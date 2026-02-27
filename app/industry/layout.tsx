import { Metadata } from "next";

export const metadata: Metadata = {
  title: { default: "Industry Solutions | SPY Insurance Brokers", template: "%s | SPY Insurance Brokers" },
  description: "Sector-specific insurance and risk management for iron & steel, power, plywood, sugar, oil & gas, and more.",
};

export default function IndustryLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
