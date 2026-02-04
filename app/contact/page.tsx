import { Metadata } from "next";
import ContactContent from "./ContactContent";

export const metadata: Metadata = {
  title: "Contact Us - Get Free Insurance Quote | SPY Insurance Brokers",
  description: "Contact SPY Insurance Brokers for free insurance consultation and quotes. Call us at +91 123 456 7890 or fill out our contact form.",
  keywords: "contact insurance broker, insurance quote, free consultation, SPY Insurance contact",
  openGraph: {
    title: "Contact Us - SPY Insurance Brokers",
    description: "Get in touch for free insurance consultation and quotes.",
  },
};

export default function ContactPage() {
  return <ContactContent />;
}
