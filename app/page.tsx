import DirectoryClient from "@/components/DirectoryClient";
import { ThemeProvider } from "@/components/ThemeProvider";
import Header from "@/components/Header";
import appsData from "@/data/apps.json";
import { App, isValidApp } from "@/types/app";

export default function HomePage() {
  const apps: App[] = (appsData as unknown[])
    .filter(isValidApp)
    .sort((a, b) => a.name.localeCompare(b.name));

  return (
    <ThemeProvider>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 max-w-5xl mx-auto w-full px-4 sm:px-6 py-8">
          <section className="mb-10 text-center">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-1 tracking-tight">
            നാട്ടിലെ ആപ്പുകൾ ഒരൊറ്റ പേജിൽ
            </h1>
            <p className="text-lg text-gray-400 dark:text-gray-500 font-medium mb-2">
              ആപ്പ് ഉണ്ടോ?
            </p>
            <p className="text-gray-500 dark:text-gray-400 text-sm sm:text-base max-w-xl mx-auto">
            A curated directory of hyper-local web utilities and community-built tools across Kerala.
            </p>
            <div className="mt-4 inline-flex items-center gap-2 text-xs text-gray-400 dark:text-gray-500 bg-gray-100 dark:bg-gray-800 px-3 py-1.5 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
              {apps.length} apps listed · കേരളത്തിന്, സ്നേഹത്തോടെ · community-driven
            </div>
          </section>

          <DirectoryClient apps={apps} />
        </main>

        <footer className="border-t border-gray-100 dark:border-gray-800 py-6 text-center text-xs text-gray-400 dark:text-gray-600">
          <p>Built with ❤️ for Kerala · കേരളത്തിന്, സ്നേഹത്തോടെ</p>
          <p className="mt-2 flex items-center justify-center gap-3">
            <a
              href="https://github.com/salmanfarisvp/appundo.in"
              className="hover:text-green-600 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Source on GitHub
            </a>
            <span>·</span>
            <a
              href="https://github.com/salmanfarisvp/appundo.in/issues/new?template=bug-report.yml"
              className="hover:text-green-600 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Report an Issue
            </a>
          </p>
        </footer>
      </div>
    </ThemeProvider>
  );
}
