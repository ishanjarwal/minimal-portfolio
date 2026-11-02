import * as React from "react";
import Image from "next/image";
import { portfolioData } from "@/data/portfolio";
import { MarkdownBlockquote } from "@/components/markdown-elements";

export function HeroSection() {
  const { personalInfo } = portfolioData;

  return (
    <section id="about" className="space-y-6 scroll-mt-16 sm:scroll-mt-20">
      {/* Hero Header with Profile Picture */}
      <div className="flex flex-col sm:flex-row gap-5 items-start">
        {/* Profile Picture Box */}
        <div className="shrink-0 border border-border bg-card p-1 mx-auto sm:mx-0">
          <div className="relative size-32 sm:size-36 border border-border overflow-hidden bg-muted">
            <Image
              src={personalInfo.avatarUrl}
              alt={`${personalInfo.name} — Software Engineer & AI Product Engineer`}
              width={144}
              height={144}
              priority
              className="object-cover w-full h-full"
            />
          </div>
        </div>

        {/* Name, Role & Social Links */}
        <div className="space-y-2.5 flex-1 w-full">
          <div>
            <div className="text-xs text-muted-foreground font-mono mb-1 font-semibold">
              {personalInfo.terminalHandle}
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground border-b-2 border-border pb-2.5">
              <span className="text-muted-foreground font-normal select-none mr-2">#</span>
              Hi, I&apos;m {personalInfo.name}.
            </h1>
            <p className="text-sm text-muted-foreground font-mono mt-2 font-medium">
              {"//"} {personalInfo.role}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs font-mono">
            <span className="text-muted-foreground select-none font-bold whitespace-nowrap">Links:</span>
            <a
              href={personalInfo.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 underline hover:text-blue-800 dark:hover:text-blue-300 font-semibold whitespace-nowrap"
            >
              GitHub
            </a>
            <span className="text-border select-none">&bull;</span>
            <a
              href={personalInfo.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 underline hover:text-blue-800 dark:hover:text-blue-300 font-semibold whitespace-nowrap"
            >
              LinkedIn
            </a>
            <span className="text-border select-none">&bull;</span>
            <a
              href={personalInfo.twitterUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 underline hover:text-blue-800 dark:hover:text-blue-300 font-semibold whitespace-nowrap"
            >
              X / Twitter
            </a>
            <span className="text-border select-none">&bull;</span>
            <a
              href={personalInfo.leetcodeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 underline hover:text-blue-800 dark:hover:text-blue-300 font-semibold whitespace-nowrap"
            >
              LeetCode
            </a>
            <span className="text-border select-none">&bull;</span>
            <a
              href={`mailto:${personalInfo.email}`}
              className="text-blue-600 dark:text-blue-400 underline hover:text-blue-800 dark:hover:text-blue-300 font-semibold whitespace-nowrap"
            >
              {personalInfo.email}
            </a>
          </div>

          {/* Bio Paragraphs */}
          <div className="space-y-2.5 text-xs sm:text-sm text-foreground/90 leading-relaxed font-mono pt-1">
            <p className="font-medium text-foreground">
              {personalInfo.introParagraph}
            </p>
            <p className="text-muted-foreground">
              {personalInfo.philosophyParagraph}
            </p>
          </div>
        </div>
      </div>

      {/* Blockquote callout */}
      <MarkdownBlockquote>
        &ldquo;Building software that behaves deterministically under stress is not a luxury; it&apos;s a design requirement.&rdquo;
      </MarkdownBlockquote>
    </section>
  );
}
