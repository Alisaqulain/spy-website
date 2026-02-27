import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Case Studies | SPY Insurance Brokers",
  description: "Real-world examples of our risk and insurance solutions for corporate, industry, and retail clients.",
};

export default function CaseStudiesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
