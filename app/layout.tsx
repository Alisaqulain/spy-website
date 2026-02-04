import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SchemaMarkup from "@/components/SchemaMarkup";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "SPY Insurance Brokers Pvt. Ltd - Comprehensive Insurance Solutions",
  description: "Leading insurance broker providing corporate and retail insurance solutions. Expert guidance for employee benefits, health, motor, life, and specialized insurance coverage.",
  keywords: "insurance broker, corporate insurance, retail insurance, health insurance, motor insurance, life insurance, SPY Insurance",
  authors: [{ name: "SPY Insurance Brokers Pvt. Ltd" }],
  openGraph: {
    title: "SPY Insurance Brokers Pvt. Ltd - Comprehensive Insurance Solutions",
    description: "Leading insurance broker providing corporate and retail insurance solutions.",
    type: "website",
    locale: "en_IN",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <SchemaMarkup />
      </head>
      <body className="antialiased bg-background text-primary-dark">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
