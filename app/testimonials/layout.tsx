import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Testimonials | SPRY Insurance Brokers",
  description:
    "What our clients say about us. Read testimonials from businesses and individuals who trust SPRY for insurance and risk management. Watch more on our Instagram.",
};

export default function TestimonialsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
