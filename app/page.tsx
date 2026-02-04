import { Metadata } from "next";
import HomeContent from "./HomeContent";

export const metadata: Metadata = {
  title: "SPY Insurance Brokers - Comprehensive Insurance Solutions | Corporate & Retail",
  description: "Leading insurance broker providing expert corporate and retail insurance solutions. Employee benefits, health, motor, life insurance, and specialized coverage for businesses and individuals.",
  keywords: "insurance broker, corporate insurance, retail insurance, health insurance, motor insurance, employee benefits, SPY Insurance",
  openGraph: {
    title: "SPY Insurance Brokers - Comprehensive Insurance Solutions",
    description: "Leading insurance broker providing expert corporate and retail insurance solutions.",
    type: "website",
  },
};

export default function HomePage() {
  return <HomeContent />;
}
