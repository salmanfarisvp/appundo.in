"use client";

import { useRef } from "react";
import HeartIcon from "@/components/ui/heart-icon";
import GithubIcon from "@/components/ui/github-icon";
import type { AnimatedIconHandle } from "@/components/ui/types";

interface FooterProps {
  withLinks?: boolean;
}

export default function Footer({ withLinks = false }: FooterProps) {
  const heartRef = useRef<AnimatedIconHandle>(null);
  const githubRef = useRef<AnimatedIconHandle>(null);

  return (
    <footer className="border-t border-gray-100 dark:border-gray-800/60 py-6 mt-auto">
      <div className="w-full px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p
          className="inline-flex items-center gap-1.5 text-xs text-gray-400 dark:text-gray-500"
          onMouseEnter={() => heartRef.current?.startAnimation()}
          onMouseLeave={() => heartRef.current?.stopAnimation()}
        >
          Built with
          <span className="text-red-400">
            <HeartIcon ref={heartRef} size={12} />
          </span>
          for Kerala · കേരളത്തിന്, സ്നേഹത്തോടെ
        </p>

        {withLinks && (
          <div className="flex items-center gap-4 text-xs text-gray-400 dark:text-gray-500">
            <a
              href="https://github.com/salmanfarisvp/appundo.in"
              className="inline-flex items-center gap-1 hover:text-green-600 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => githubRef.current?.startAnimation()}
              onMouseLeave={() => githubRef.current?.stopAnimation()}
            >
              <GithubIcon ref={githubRef} size={13} />
              Source
            </a>
            <a
              href="/contribute"
              className="hover:text-green-600 transition-colors"
            >
              Submit App
            </a>
            <a
              href="https://github.com/salmanfarisvp/appundo.in/issues/new?template=bug-report.yml"
              className="hover:text-green-600 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Report Issue
            </a>
          </div>
        )}
      </div>
    </footer>
  );
}
