import { Metadata } from "next";
import BlogContent from "./BlogContent";

export const metadata: Metadata = {
  title: "Blog - Insurance Insights & Tips | SPY Insurance Brokers",
  description: "Stay informed with the latest insurance insights, tips, and industry updates from SPY Insurance Brokers. Learn about health, motor, life insurance and more.",
  keywords: "insurance blog, insurance tips, insurance insights, health insurance guide, motor insurance guide",
  openGraph: {
    title: "Blog - SPY Insurance Brokers",
    description: "Latest insurance insights and tips.",
  },
};

export default function BlogPage() {
  return <BlogContent />;
}
