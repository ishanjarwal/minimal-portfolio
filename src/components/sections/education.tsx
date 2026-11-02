import * as React from "react";
import { portfolioData } from "@/data/portfolio";
import { SectionHeading, CodeTag, MetaBadge } from "@/components/markdown-elements";
import { Calendar, Award, ExternalLink } from "@/components/icons";

export function EducationSection() {
  const { education, certifications } = portfolioData;

  return (
    <section className="space-y-6">
      {/* Section Header */}
      <SectionHeading
        id="education"
        level={2}
        subtitle="Formal academic qualifications, engineering degrees, and coursework"
      >
        Education
      </SectionHeading>

      {/* Chronological Education Cards */}
      <div className="space-y-6">
        {education.map((entry) => (
          <div
            key={entry.id}
            className="border border-border bg-card p-4 sm:p-5 space-y-3.5 hover:border-foreground/30 transition-colors"
          >
            {/* Header info */}
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 border-b border-border pb-2.5 bg-muted/20 -mx-4 sm:-mx-5 -mt-4 sm:-mt-5 p-3 sm:p-4">
              <div>
                <h3 className="font-bold text-base sm:text-lg text-foreground font-mono">
                  {entry.degree}{" "}
                  <span className="text-muted-foreground font-normal">&mdash;</span>{" "}
                  <span className="text-foreground">{entry.fieldOfStudy}</span>
                </h3>
                <div className="flex items-center gap-2 text-xs font-mono mt-0.5">
                  <span className="font-semibold text-foreground/90 whitespace-nowrap">
                    {entry.institution}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2 text-[11px] text-muted-foreground font-mono shrink-0">
                <span className="flex items-center gap-1 font-semibold text-foreground whitespace-nowrap">
                  <Calendar className="size-3 text-muted-foreground shrink-0" />
                  <span>{entry.duration}</span>
                </span>
                {entry.grade && (
                  <>
                    <span className="text-border">|</span>
                    <MetaBadge label="distinction" value={entry.grade} />
                  </>
                )}
              </div>
            </div>

            {/* Coursework if available */}
            {entry.coursework && entry.coursework.length > 0 && (
              <div className="pt-1 space-y-1.5 text-xs font-mono">
                <span className="text-xs font-bold text-foreground block select-none">
                  Core Engineering Coursework:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {entry.coursework.map((course) => (
                    <CodeTag key={course} className="text-[11px]">
                      {course}
                    </CodeTag>
                  ))}
                </div>
              </div>
            )}

            {/* Achievements list */}
            {entry.achievements && entry.achievements.length > 0 && (
              <div className="pt-1 space-y-1 text-xs font-mono">
                <span className="text-xs font-bold text-foreground block select-none">
                  Academic Milestones &amp; Honors:
                </span>
                <ul className="space-y-1 pl-1">
                  {entry.achievements.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-foreground/85 leading-relaxed">
                      <span className="text-muted-foreground font-bold select-none">*</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Certifications Sub-Section */}
      {certifications && certifications.length > 0 && (
        <div className="pt-2 space-y-3">
          <SectionHeading level={3} showBackToTop={false} subtitle="Specialized industry training and architecture credentials">
            Certifications &amp; Credentials
          </SectionHeading>

          <div className="border border-border bg-card divide-y divide-border text-xs font-mono">
            {certifications.map((cert) => (
              <div
                key={cert.id}
                className="p-3 sm:p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2 hover:bg-muted/30 transition-colors"
              >
                <div className="space-y-0.5">
                  <div className="font-bold text-sm text-foreground flex items-center gap-1.5">
                    <Award className="size-4 text-muted-foreground shrink-0" />
                    <span>{cert.title}</span>
                  </div>
                  <div className="text-muted-foreground pl-5.5 text-xs">
                    Instructor / Authority: <span className="text-foreground font-medium">{cert.issuer}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 pl-5.5 sm:pl-0 shrink-0">
                  <span className="text-muted-foreground text-[11px] whitespace-nowrap">
                    {cert.date}
                  </span>
                  {cert.credentialUrl && (
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 dark:text-blue-400 underline hover:text-blue-800 dark:hover:text-blue-300 font-semibold whitespace-nowrap inline-flex items-center gap-0.5 text-xs"
                    >
                      <span>[Credential]</span>
                      <ExternalLink className="size-3 shrink-0" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
