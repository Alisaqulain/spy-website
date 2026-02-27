import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | SPY Insurance Brokers",
  description: "Get in touch for corporate, retail, or industry insurance solutions. We're here to help with quotes and support.",
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
