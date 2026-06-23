import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import ClarityInit from "@/components/ClarityInit";
import Script from "next/script";

export const metadata: Metadata = {
  title: "ആപ്പ് ഉണ്ടോ? | Kerala Apps Directory | appundo.in",
  description:
    "ആപ്പ് ഉണ്ടോ? Discover useful web apps and tools built for Kerala",
  keywords: ["kerala", "web apps", "directory", "tools", "malayalam"],
  icons: {
    icon: "/favicon.svg",
    apple: "/apple-touch-icon.svg",
  },
  openGraph: {
    title: "Kerala Apps Directory",
    description: "A curated directory of hyper-local web utilities and community-built tools across Kerala.",
    url: "https://appundo.in",
    siteName: "appundo.in",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kerala Apps Directory",
    description: "A curated directory of hyper-local web utilities and community-built tools across Kerala.",
  },
  metadataBase: new URL("https://appundo.in"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');if(t==='dark'||(t===null&&window.matchMedia('(prefers-color-scheme: dark)').matches)){document.documentElement.classList.add('dark')}}catch(e){}})()`,
          }}
        />
      </head>
      <body>
        {children}
        <Analytics />
        <ClarityInit />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-D999EZ9B3R"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-D999EZ9B3R');
          `}
        </Script>
      </body>
    </html>
  );
}
