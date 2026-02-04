import { Metadata } from "next";
import CareersContent from "./CareersContent";

export const metadata: Metadata = {
  title: "Careers at SPY Insurance - Join Our Team | Job Opportunities",
  description: "Join SPY Insurance Brokers and build your career in the insurance industry. Explore current job openings, company culture, and growth opportunities.",
  keywords: "insurance jobs, careers, job openings, insurance broker jobs",
  openGraph: {
    title: "Careers - SPY Insurance Brokers",
    description: "Join our team and build your career in insurance.",
  },
};

export default function CareersPage() {
  return <CareersContent />;
}
