"use client";

import SparklesIcon from "@/components/ui/sparkles-icon";
import { useRef } from "react";
import type { AnimatedIconHandle } from "@/components/ui/types";

interface FeaturedBannerProps {
  total: number;
  onRandom: () => void;
}

export default function FeaturedBanner({ total, onRandom }: FeaturedBannerProps) {
  const iconRef = useRef<AnimatedIconHandle>(null);

  return (
    <div className="featured-banner">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-10 -right-10 sm:-top-16 sm:-right-16 w-32 sm:w-48 h-32 sm:h-48 bg-white/5 rounded-full" />
        <div className="absolute -bottom-8 -left-8 sm:-bottom-12 sm:-left-12 w-24 sm:w-36 h-24 sm:h-36 bg-white/5 rounded-full" />
      </div>

      <div className="relative z-10 flex flex-col gap-4 sm:gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="text-green-200 text-[10px] sm:text-xs font-semibold uppercase tracking-widest mb-1 sm:mb-2">
            Kerala&apos;s Community App Directory
          </p>
          <h1 className="text-lg sm:text-2xl lg:text-3xl font-extrabold tracking-tight leading-tight">
            നാട്ടിലെ ആപ്പുകൾ ഒരൊറ്റ പേജിൽ
          </h1>
          <p className="text-green-100 text-xs sm:text-sm mt-1.5 sm:mt-2 max-w-lg">
            {total}+ curated hyper-local web apps and community-built tools for Kerala, all in one place.
          </p>
        </div>

        <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
          <button
            onClick={onRandom}
            onMouseEnter={() => iconRef.current?.startAnimation()}
            onMouseLeave={() => iconRef.current?.stopAnimation()}
            className="inline-flex items-center gap-1.5 sm:gap-2 px-4 sm:px-5 py-2 sm:py-2.5 bg-white text-green-700 rounded-lg text-xs sm:text-sm font-semibold hover:bg-green-50 transition-colors shadow-lg shadow-black/10"
          >
            <SparklesIcon ref={iconRef} size={14} color="currentColor" />
            I&apos;m Feeling Lucky
          </button>

          <div className="hidden sm:flex items-center gap-2 text-xs text-green-200 bg-white/10 px-3 py-1.5 rounded-lg">
            <span className="w-1.5 h-1.5 rounded-full bg-green-300 animate-pulse" />
            community-driven
          </div>
        </div>
      </div>
    </div>
  );
}
