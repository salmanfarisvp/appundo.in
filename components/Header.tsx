"use client";

import { useRef, useState } from "react";
import { useTheme } from "./ThemeProvider";
import MoonIcon from "@/components/ui/moon-icon";
import BrightnessDownIcon from "@/components/ui/brightness-down-icon";
import GithubIcon from "@/components/ui/github-icon";
import MagnifierIcon from "@/components/ui/magnifier-icon";
import XIcon from "@/components/ui/x-icon";
import type { AnimatedIconHandle } from "@/components/ui/types";
import Image from "next/image";

interface HeaderProps {
  search?: string;
  onSearchChange?: (val: string) => void;
}

export default function Header({ search, onSearchChange }: HeaderProps) {
  const { theme, toggle } = useTheme();
  const themeIconRef = useRef<AnimatedIconHandle>(null);
  const githubRef = useRef<AnimatedIconHandle>(null);
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);

  const showSearch = onSearchChange !== undefined;

  return (
    <header className="sticky top-0 z-30 bg-white/95 dark:bg-[#0f1117]/95 backdrop-blur-xl border-b border-gray-100 dark:border-gray-800/60">
      <div className="w-full px-4 sm:px-6 lg:px-8 h-14 sm:h-16 flex items-center gap-3 sm:gap-4">
        {/* Brand */}
        <a href="/" className="flex items-center gap-2.5 flex-shrink-0">
          <Image src="/logo.svg" alt="appundo.in" width={32} height={32} className="rounded-lg" />
          <span className="hidden sm:block font-bold text-gray-900 dark:text-white text-sm tracking-tight">
            Appundo<span className="text-green-600">.in</span>
          </span>
        </a>

        {/* Desktop search */}
        {showSearch && (
          <div className="hidden md:block flex-1 max-w-xl mx-auto">
            <div className="relative">
              <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none text-gray-400">
                <MagnifierIcon size={14} />
              </div>
              <input
                type="search"
                value={search}
                onChange={(e) => onSearchChange(e.target.value)}
                placeholder="Search apps, tools, services..."
                className="nav-search"
              />
              {search && (
                <button
                  onClick={() => onSearchChange("")}
                  className="absolute inset-y-0 right-3 flex items-center text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
                >
                  <XIcon size={14} />
                </button>
              )}
            </div>
          </div>
        )}

        {/* Right actions */}
        <div className="flex items-center gap-1 ml-auto">
          {/* Mobile search toggle */}
          {showSearch && (
            <button
              onClick={() => setMobileSearchOpen(!mobileSearchOpen)}
              className="md:hidden p-2 rounded-lg text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Search"
            >
              <MagnifierIcon size={18} />
            </button>
          )}

          <a
            href="/contribute"
            className="hidden lg:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-sm font-medium
              text-green-700 dark:text-green-400 bg-green-50 dark:bg-green-900/20
              hover:bg-green-100 dark:hover:bg-green-900/40 transition-colors"
          >
            Submit App
          </a>

          <a
            href="https://github.com/salmanfarisvp/appundo.in"
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => githubRef.current?.startAnimation()}
            onMouseLeave={() => githubRef.current?.stopAnimation()}
            className="p-2 rounded-lg text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label="GitHub"
          >
            <GithubIcon ref={githubRef} size={18} />
          </a>

          <button
            onClick={toggle}
            onMouseEnter={() => themeIconRef.current?.startAnimation()}
            onMouseLeave={() => themeIconRef.current?.stopAnimation()}
            className="p-2 rounded-lg text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label="Toggle dark mode"
          >
            {theme === "dark" ? (
              <BrightnessDownIcon ref={themeIconRef} size={18} />
            ) : (
              <MoonIcon ref={themeIconRef} size={18} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile search bar - expandable */}
      {showSearch && mobileSearchOpen && (
        <div className="md:hidden px-4 pb-3">
          <div className="relative">
            <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none text-gray-400">
              <MagnifierIcon size={14} />
            </div>
            <input
              type="search"
              value={search}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Search apps..."
              className="nav-search"
              autoFocus
            />
            {search && (
              <button
                onClick={() => onSearchChange("")}
                className="absolute inset-y-0 right-3 flex items-center text-gray-400 hover:text-gray-600"
              >
                <XIcon size={14} />
              </button>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
