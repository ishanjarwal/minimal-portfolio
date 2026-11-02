import * as React from "react";
import { portfolioData } from "@/data/portfolio";
import { SectionHeading, CodeTag, MetaBadge } from "@/components/markdown-elements";
import { Calendar, MapPin } from "@/components/icons";

export function ExperienceSection() {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="space-y-6">
      {/* Section Header */}
      <SectionHeading
        id="experience"
        level={2}
        subtitle="Professional roles, engineering responsibilities, and key metrics"
      >
        Work Experience
      </SectionHeading>

      {/* Experience Entries with Distinct Bordered Cards */}
      <div className="space-y-6">
        {experience.map((entry) => (
          <div
            key={entry.id}
            className="border border-border bg-card p-4 sm:p-5 space-y-3.5 hover:border-foreground/30 transition-colors"
          >
            {/* Header: Role, Company, Period */}
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 border-b border-border pb-2.5 bg-muted/20 -mx-4 sm:-mx-5 -mt-4 sm:-mt-5 p-3 sm:p-4">
              <div>
                <h3 className="font-bold text-base sm:text-lg text-foreground font-mono">
                  <span>{entry.role}</span>{" "}
                  <span className="text-muted-foreground font-normal">@</span>{" "}
                  <span className="font-semibold text-foreground whitespace-nowrap">
                    {entry.company}
                  </span>
                </h3>
                {entry.location && (
                  <span className="text-[11px] text-muted-foreground flex items-center gap-1 mt-0.5 font-mono">
                    <MapPin className="size-3 shrink-0" />
                    <span>{entry.location}</span>
                  </span>
                )}
              </div>

              <div className="flex items-center gap-2 text-[11px] text-muted-foreground font-mono shrink-0">
                <span className="flex items-center gap-1 font-semibold text-foreground whitespace-nowrap">
                  <Calendar className="size-3 text-muted-foreground shrink-0" />
                  <span>{entry.duration}</span>
                </span>
                <span className="text-border">|</span>
                <MetaBadge label="engagement" value={entry.type} />
              </div>
            </div>

            {/* Description */}
            <p className="text-xs sm:text-sm text-foreground/90 font-mono leading-relaxed">
              {entry.description}
            </p>

            {/* Key Achievements List */}
            <div className="space-y-1.5 text-xs font-mono pt-1">
              <span className="text-xs font-bold text-foreground block select-none">
                Key Contributions &amp; Results:
              </span>
              <ul className="space-y-1 pl-1">
                {entry.achievements.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-foreground/85 leading-relaxed font-mono">
                    <span className="text-muted-foreground font-bold select-none">-</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech Stack */}
            {entry.techStack && entry.techStack.length > 0 && (
              <div className="pt-2 border-t border-border flex flex-wrap items-center gap-1.5 text-xs font-mono">
                <span className="text-xs text-muted-foreground font-bold select-none mr-1">
                  Stack:
                </span>
                {entry.techStack.map((tech) => (
                  <CodeTag key={tech} className="text-[11px]">
                    {tech}
                  </CodeTag>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
