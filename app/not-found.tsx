import { ThemeProvider } from "@/components/ThemeProvider";
import Header from "@/components/Header";
import Link from "next/link";

export default function NotFound() {
  return (
    <ThemeProvider>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex flex-col items-center justify-center text-center px-4">
          <p className="text-8xl mb-2">🥥</p>
          <p className="text-8xl font-black text-green-600 leading-none">404</p>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mt-4">
            ഈ ആപ്പ് ഇവിടെ ഇല്ല!
          </h1>
          <p className="text-gray-500 dark:text-gray-400 mt-3 text-sm sm:text-base max-w-md">
            നിങ്ങൾ തേടുന്ന പേജ് കാണുന്നില്ല!
          </p>
          <p className="text-gray-400 dark:text-gray-600 mt-1 text-xs sm:text-sm">
            (The page you&apos;re looking for doesn&apos;t exist.)
          </p>
          <Link
            href="/"
            className="mt-8 inline-flex items-center gap-2 px-5 py-2 rounded-full bg-green-600 hover:bg-green-700 active:scale-95 text-white text-sm font-medium transition-all shadow-sm"
          >
            🏠 തിരിച്ച് പോകാം
          </Link>
        </main>
      </div>
    </ThemeProvider>
  );
}
