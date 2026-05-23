import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "🌴 ആപ്പ് ഉണ്ടോ? — Kerala Apps Directory | appundo.in",
  description:
    "ആപ്പ് ഉണ്ടോ? Discover useful web apps and tools built for Kerala",
  keywords: ["kerala", "web apps", "directory", "tools", "malayalam"],
  openGraph: {
    title: "🌴 Kerala Apps Directory",
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
        <Script id="clarity" strategy="afterInteractive">
          {`(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y)})(window,document,"clarity","script","wvej9xj5ch");`}
        </Script>
      </body>
    </html>
  );
}
