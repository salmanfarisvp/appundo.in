import { ThemeProvider } from "@/components/ThemeProvider";
import Header from "@/components/Header";
import Link from "next/link";
import TriangleAlertIcon from "@/components/ui/triangle-alert-icon";
import HomeIcon from "@/components/ui/home-icon";

export default function NotFound() {
  return (
    <ThemeProvider>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex flex-col items-center justify-center text-center px-4">
          <div className="text-amber-500 mb-3">
            <TriangleAlertIcon size={56} />
          </div>
          <p className="text-6xl sm:text-7xl font-black text-green-600 leading-none">404</p>
          <h1 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mt-4">
            ഈ ആപ്പ് ഇവിടെ ഇല്ല!
          </h1>
          <p className="text-gray-500 dark:text-gray-400 mt-2 text-sm">
            The page you&apos;re looking for doesn&apos;t exist.
          </p>
          <Link
            href="/"
            className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-green-600 hover:bg-green-700 text-white text-sm font-semibold transition-colors shadow-sm"
          >
            <HomeIcon size={16} />
            Back to Home
          </Link>
        </main>
      </div>
    </ThemeProvider>
  );
}
