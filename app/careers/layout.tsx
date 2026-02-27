import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers | SPY Insurance Brokers",
  description: "Join our team. Explore open positions and apply with your resume. We offer competitive benefits and growth opportunities.",
};

export default function CareersLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
