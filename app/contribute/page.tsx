import { ThemeProvider } from "@/components/ThemeProvider";
import Header from "@/components/Header";
import ContributeSection from "@/components/ContributeSection";

export const metadata = {
  title: "Contribute — appundo.in",
  description: "A curated directory of hyper-local web utilities and community-built tools across Kerala",
};

export default function ContributePage() {
  return (
    <ThemeProvider>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 max-w-5xl mx-auto w-full px-4 sm:px-6 py-8">
          <ContributeSection />
        </main>

        <footer className="border-t border-gray-100 dark:border-gray-800 py-6 text-center text-xs text-gray-400 dark:text-gray-600">
          <p>
            Built with ❤️ for Kerala - കേരളത്തിന്, സ്നേഹത്തോടെ{" "}
            {/* <a
              href="https://github.com/your-org/appundo.in"
              className="hover:text-green-600 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>{" "} */}
          </p>
        </footer>
      </div>
    </ThemeProvider>
  );
}
