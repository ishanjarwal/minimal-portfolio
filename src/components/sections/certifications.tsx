import * as React from "react";
import { portfolioData } from "@/data/portfolio";
import { SectionHeading } from "@/components/markdown-elements";
import { Award, ExternalLink } from "@/components/icons";

export function CertificationsSection() {
  const { certifications } = portfolioData;

  if (!certifications || certifications.length === 0) {
    return null;
  }

  return (
    <section className="space-y-6">
      {/* Section Header */}
      <SectionHeading
        id="certifications"
        level={2}
        subtitle="Specialized industry training, system design, and architecture credentials"
      >
        Certifications
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
                Instructor / Authority:{" "}
                <span className="text-foreground font-medium">
                  {cert.issuer}
                </span>
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
    </section>
  );
}
