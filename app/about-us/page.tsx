import { Metadata } from "next";
import AboutContent from "./AboutContent";

export const metadata: Metadata = {
  title: "About Us - SPY Insurance Brokers | Our Story, Mission & Vision",
  description: "Learn about SPY Insurance Brokers - a leading insurance broker with 15+ years of experience, serving 5000+ clients across India. Our mission, vision, and commitment to excellence.",
  keywords: "about SPY Insurance, insurance broker company, insurance company history, mission vision",
  openGraph: {
    title: "About Us - SPY Insurance Brokers",
    description: "Leading insurance broker with 15+ years of experience serving businesses and individuals.",
  },
};

export default function AboutUsPage() {
  return <AboutContent />;
}
