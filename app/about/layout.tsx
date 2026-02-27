import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | SPY Insurance Brokers",
  description: "Learn about our mission, vision, values, and leadership. Your trusted insurance broker and risk management partner.",
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
