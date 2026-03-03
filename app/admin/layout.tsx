import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin | SPRY Insurance",
  description: "Admin panel for managing content.",
  robots: { index: false, follow: false },
};

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-background-light">
      {children}
    </div>
  );
}
