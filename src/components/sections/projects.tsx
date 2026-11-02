import * as React from "react";
import Image from "next/image";
import { portfolioData } from "@/data/portfolio";
import {
  SectionHeading,
  CodeTag,
  MetaBadge,
} from "@/components/markdown-elements";
import { ExternalLink, GithubIcon, FolderGit2 } from "@/components/icons";

export function ProjectsSection() {
  const { projects } = portfolioData;

  return (
    <section className="space-y-6">
      {/* Section Header */}
      <SectionHeading
        id="projects"
        level={2}
        subtitle="Open-source systems, AI agents, and high-performance applications"
      >
        Featured Projects
      </SectionHeading>

      {/* Projects List with Strong Visual Distinction */}
      <div className="space-y-8">
        {projects.map((project, index) => (
          <article
            key={project.id}
            className="border border-border bg-card p-4 sm:p-5 space-y-4 hover:border-foreground/30 transition-colors"
          >
            {/* Project Title Bar */}
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 border-b border-border pb-3 bg-muted/30 -mx-4 sm:-mx-5 -mt-4 sm:-mt-5 p-3 sm:p-4">
              <div className="space-y-1 min-w-0">
                <div className="flex items-center gap-2">
                  <span className="text-muted-foreground text-xs font-bold font-mono shrink-0 whitespace-nowrap">
                    #{index + 1}
                  </span>
                  <FolderGit2 className="size-4 text-muted-foreground shrink-0" />
                  <h3 className="font-bold text-base sm:text-lg tracking-tight font-mono">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 dark:text-blue-400 underline hover:text-blue-800 dark:hover:text-blue-300"
                    >
                      {project.name}
                    </a>
                  </h3>
                </div>
                {/* <p className="text-xs text-muted-foreground font-mono pl-6">
                  &gt; {project.tagline}
                </p> */}
              </div>

              {/* Blue Action Hyperlinks */}
              <div className="flex items-center gap-2 sm:gap-3 pl-6 sm:pl-0 font-mono text-xs shrink-0 whitespace-nowrap">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 underline hover:text-blue-800 dark:hover:text-blue-300 inline-flex items-center gap-1 font-bold whitespace-nowrap shrink-0"
                  >
                    <GithubIcon className="size-3 shrink-0" />
                    <span className="whitespace-nowrap">
                      [GitHub Repo &rarr;]
                    </span>
                  </a>
                )}

                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 underline hover:text-blue-800 dark:hover:text-blue-300 inline-flex items-center gap-1 font-bold whitespace-nowrap shrink-0"
                  >
                    <ExternalLink className="size-3 shrink-0" />
                    <span className="whitespace-nowrap">
                      [Live Demo &rarr;]
                    </span>
                  </a>
                )}
              </div>
            </div>

            {/* Description */}
            <p className="text-xs sm:text-sm text-foreground/90 leading-relaxed font-mono">
              {project.description}
            </p>

            {/* Conditional Project Preview Image */}
            {project.screenshot?.src && (
              <div className="border border-border bg-card overflow-hidden">
                <div className="flex items-center justify-between border-b border-border bg-muted/40 px-3 py-1.5 text-[11px] font-mono text-muted-foreground select-none">
                  <span>
                    {"// Preview: "}
                    <span className="text-foreground font-semibold">
                      {project.name}
                    </span>
                  </span>
                  {project.liveUrl ? (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 dark:text-blue-400 underline hover:text-blue-800 dark:hover:text-blue-300 text-[10px] font-bold"
                    >
                      [open demo &rarr;]
                    </a>
                  ) : (
                    <span className="text-[10px] uppercase tracking-wider text-muted-foreground">
                      [preview]
                    </span>
                  )}
                </div>
                <div className="relative w-full aspect-[16/9] sm:aspect-[21/9] bg-muted/20">
                  <Image
                    src={project.screenshot.src}
                    alt={project.screenshot.alt || `${project.name} preview`}
                    fill
                    sizes="(max-width: 768px) 100vw, 800px"
                    className="object-cover object-top"
                  />
                </div>
              </div>
            )}

            {/* Highlights (Markdown List) */}
            {project.highlights && project.highlights.length > 0 && (
              <div className="space-y-1.5 pt-1 text-xs">
                <span className="text-xs font-bold text-foreground font-mono block select-none">
                  Key Technical Contributions:
                </span>
                <ul className="space-y-1 pl-1">
                  {project.highlights.map((highlight, hIdx) => (
                    <li
                      key={hIdx}
                      className="flex items-start gap-2 text-foreground/85 leading-relaxed font-mono"
                    >
                      <span className="text-muted-foreground font-bold select-none">
                        -
                      </span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Tech Stack Footer */}
            <div className="pt-3 border-t border-border flex flex-wrap items-center justify-between gap-2">
              <div className="flex flex-wrap items-center gap-1.5">
                <span className="text-xs text-muted-foreground font-mono select-none font-bold mr-1">
                  Stack:
                </span>
                {project.techStack.map((tech) => (
                  <CodeTag key={tech} className="text-[11px]">
                    {tech}
                  </CodeTag>
                ))}
              </div>

              <div className="flex items-center gap-2 text-[10px] text-muted-foreground">
                <MetaBadge label="role" value={project.role} />
                <MetaBadge label="year" value={project.duration} />
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
