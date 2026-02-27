import { Metadata } from "next";

export const metadata: Metadata = {
  title: { default: "Blog | SPY Insurance Brokers", template: "%s | SPY Insurance Brokers" },
  description: "Insurance and risk management insights. Latest trends, best practices, and expert guidance for businesses and individuals.",
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
