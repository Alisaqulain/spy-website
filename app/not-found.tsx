import Link from "next/link";
import { Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background-light">
      <div className="text-center px-4">
        <h1 className="text-9xl font-bold text-primary-navy mb-4">404</h1>
        <h2 className="text-3xl font-bold text-primary-navy mb-4">Page Not Found</h2>
        <p className="text-lg text-primary-navy/70 mb-8 max-w-md mx-auto">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/" className="btn-primary inline-flex items-center space-x-2">
            <Home className="w-5 h-5" />
            <span>Go Home</span>
          </Link>
          <Link href="/contact" className="btn-outline inline-flex items-center space-x-2">
            <ArrowLeft className="w-5 h-5" />
            <span>Contact Us</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
