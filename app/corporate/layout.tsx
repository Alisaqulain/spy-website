import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Corporate Risk Solutions | SPY Insurance Brokers",
    template: "%s | SPY Insurance Brokers",
  },
  description: "Comprehensive corporate insurance and risk management: direct broking, reinsurance, claims management, lenders advisory, rural and aviation solutions.",
};

export default function CorporateLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
