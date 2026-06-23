import { ThemeProvider } from "@/components/ThemeProvider";
import Header from "@/components/Header";
import ContributeSection from "@/components/ContributeSection";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Contribute | appundo.in",
  description: "A curated directory of hyper-local web utilities and community-built tools across Kerala",
};

export default function ContributePage() {
  return (
    <ThemeProvider>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 w-full px-4 sm:px-6 lg:px-8 py-8">
          <ContributeSection />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}
