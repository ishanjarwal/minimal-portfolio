"use client";

import * as React from "react";
import { portfolioData } from "@/data/portfolio";
import { GithubIcon, LinkedinIcon, ExternalLink } from "@/components/icons";

export function Footer() {
  const { personalInfo } = portfolioData;

  const scrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full mt-12 pb-12 font-mono text-xs select-none">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="border-t-2 border-border pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-muted-foreground">
          <div className="space-y-1">
            <p className="text-foreground font-semibold sm:whitespace-nowrap">
              &copy; 2026 {personalInfo.name}. All rights reserved.
            </p>
            <p className="text-[11px] text-muted-foreground">
              Built with Next.js, TypeScript &amp; Tailwind CSS. Rendered with plain-text Markdown semantics.
            </p>
          </div>

          <div className="w-full sm:w-auto grid grid-cols-2 gap-x-4 gap-y-2 sm:flex sm:items-center sm:gap-3 text-xs shrink-0">
            <a
              href={personalInfo.blogUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-blue-600 dark:text-blue-400 underline hover:text-blue-800 dark:hover:text-blue-300 font-semibold whitespace-nowrap shrink-0"
            >
              <ExternalLink className="size-3.5 shrink-0" />
              <span>[Blog]</span>
            </a>
            <span className="hidden sm:inline text-border shrink-0 select-none">|</span>
            <a
              href={personalInfo.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-blue-600 dark:text-blue-400 underline hover:text-blue-800 dark:hover:text-blue-300 font-semibold whitespace-nowrap shrink-0"
            >
              <GithubIcon className="size-3.5 shrink-0" />
              <span>[GitHub]</span>
            </a>
            <span className="hidden sm:inline text-border shrink-0 select-none">|</span>
            <a
              href={personalInfo.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-blue-600 dark:text-blue-400 underline hover:text-blue-800 dark:hover:text-blue-300 font-semibold whitespace-nowrap shrink-0"
            >
              <LinkedinIcon className="size-3.5 shrink-0" />
              <span>[LinkedIn]</span>
            </a>
            <span className="hidden sm:inline text-border shrink-0 select-none">|</span>
            <a
              href="#top"
              onClick={scrollToTop}
              className="text-blue-600 dark:text-blue-400 underline hover:text-blue-800 dark:hover:text-blue-300 font-bold whitespace-nowrap shrink-0"
            >
              [Back to top &uarr;]
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
