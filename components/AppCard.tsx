"use client";

import { useRef } from "react";
import { App } from "@/types/app";
import { CATEGORY_META } from "./CategoryFilter";
import ExternalLinkIcon from "@/components/ui/external-link-icon";
import { getAppIcon } from "@/lib/icon-map";
import type { AnimatedIconHandle } from "@/components/ui/types";

interface AppCardProps {
  app: App;
}

export default function AppCard({ app }: AppCardProps) {
  const meta = CATEGORY_META[app.category];
  const AppIcon = getAppIcon(app.icon);
  const color = meta?.color ?? "bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300";

  const linkIconRef = useRef<AnimatedIconHandle>(null);
  const appIconRef = useRef<AnimatedIconHandle>(null);

  const onEnter = () => {
    linkIconRef.current?.startAnimation();
    appIconRef.current?.startAnimation();
  };
  const onLeave = () => {
    linkIconRef.current?.stopAnimation();
    appIconRef.current?.stopAnimation();
  };

  return (
    <a
      href={app.url}
      target="_blank"
      rel="noopener noreferrer"
      className="app-card group"
      aria-label={`Visit ${app.name}`}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
    >
      <div className="flex items-center gap-3">
        {/* App icon */}
        <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gray-50 dark:bg-[#252838] flex items-center justify-center text-gray-500 dark:text-gray-400 flex-shrink-0 border border-gray-100 dark:border-gray-700/50">
          <AppIcon ref={appIconRef} size={18} />
        </div>

        {/* Info */}
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-gray-900 dark:text-white text-[13px] leading-tight truncate">
            {app.name}
          </h3>
          <span className={`inline-block text-[10px] font-medium px-1.5 py-0.5 rounded mt-0.5 ${color}`}>
            {app.category}
          </span>
        </div>

        {/* Visit CTA - always visible on mobile, hover-only on desktop */}
        <span className="btn-visit flex-shrink-0 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity">
          <ExternalLinkIcon ref={linkIconRef} size={11} />
          Visit
        </span>
      </div>

      <p className="text-[12px] text-gray-500 dark:text-gray-400 leading-relaxed line-clamp-2">
        {app.description}
      </p>

      <div className="flex flex-wrap gap-1 mt-auto">
        {app.tags.slice(0, 3).map((tag) => (
          <span
            key={tag}
            className="text-[10px] px-1.5 py-0.5 rounded bg-gray-50 dark:bg-[#252838] text-gray-400 dark:text-gray-500"
          >
            {tag}
          </span>
        ))}
      </div>
    </a>
  );
}
