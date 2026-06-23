import DirectoryClient from "@/components/DirectoryClient";
import { ThemeProvider } from "@/components/ThemeProvider";
import Footer from "@/components/Footer";
import appsData from "@/data/apps.json";
import { App, isValidApp } from "@/types/app";

export default function HomePage() {
  const apps: App[] = (appsData as unknown[])
    .filter(isValidApp)
    .sort((a, b) => a.name.localeCompare(b.name));

  return (
    <ThemeProvider>
      <div className="min-h-screen flex flex-col">
        <DirectoryClient apps={apps} />
        <Footer withLinks />
      </div>
    </ThemeProvider>
  );
}
