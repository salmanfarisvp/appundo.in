"use client";

import { useRef } from "react";
import SendIcon from "@/components/ui/send-icon";
import SparklesIcon from "@/components/ui/sparkles-icon";
import type { AnimatedIconHandle } from "@/components/ui/types";

export default function ContributeSection() {
  const sendIconRef = useRef<AnimatedIconHandle>(null);

  return (
    <section className="py-8">
      <div className="featured-banner">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/5 rounded-full" />
          <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-white/5 rounded-full" />
        </div>

        <div className="relative z-10 max-w-2xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-sm mb-4">
            <SparklesIcon size={28} color="white" />
          </div>
          <h2 className="text-2xl font-bold mb-2">
            Know a useful Kerala app?
          </h2>
          <p className="text-green-100 text-sm mb-2">
            നിങ്ങൾ ഉണ്ടാക്കിയതോ, ഇന്റർനെറ്റിൽ കണ്ടതോ ആയ ഉപകാരപ്രദമായ ലോക്കൽ ആപ്പുകൾ ഷെയർ ചെയ്യൂ.
          </p>
          <p className="text-green-200 text-xs mb-6">
            Share any useful local websites or apps you&apos;ve built or found. A maintainer will review and add it to the directory.
          </p>

          <a
            href="https://forms.gle/ANeJd1X2dY2fxcsa9"
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => sendIconRef.current?.startAnimation()}
            onMouseLeave={() => sendIconRef.current?.stopAnimation()}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-green-700 rounded-full text-sm font-semibold hover:bg-green-50 transition-colors shadow-lg"
          >
            <SendIcon ref={sendIconRef} size={16} color="currentColor" />
            Submit an App
          </a>
        </div>
      </div>
    </section>
  );
}
