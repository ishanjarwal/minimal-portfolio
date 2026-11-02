import * as React from "react";
import { portfolioData } from "@/data/portfolio";
import { SectionHeading, CodeTag } from "@/components/markdown-elements";

export function SkillsSection() {
  const { skills } = portfolioData;

  return (
    <section className="space-y-6">
      {/* Section Header */}
      <SectionHeading
        id="skills"
        level={2}
        subtitle="Technical capabilities categorized by domain"
      >
        Core Skills &amp; Stack
      </SectionHeading>

      {/* GitHub Markdown Style Table */}
      <div className="border border-border overflow-x-auto bg-card">
        <table className="w-full text-left border-collapse text-xs font-mono">
          <thead>
            <tr className="border-b border-border bg-muted/60 text-foreground font-bold">
              <th className="py-2.5 px-3 border-r border-border w-1/3 sm:w-1/4 select-none">
                Category
              </th>
              <th className="py-2.5 px-3 select-none">
                Technologies &amp; Frameworks
              </th>
            </tr>
          </thead>
          <tbody>
            {skills.map((category, idx) => (
              <tr
                key={category.category}
                className={`border-b border-border/70 hover:bg-muted/40 transition-colors ${
                  idx % 2 === 1 ? "bg-muted/15" : "bg-card"
                }`}
              >
                <td className="py-2.5 px-3 border-r border-border font-bold text-foreground align-top whitespace-nowrap">
                  <span className="text-muted-foreground mr-1 select-none">*</span>
                  {category.category}
                </td>
                <td className="py-2.5 px-3 align-top">
                  <div className="flex flex-wrap gap-1">
                    {category.items.map((skill) => (
                      <CodeTag
                        key={skill.name}
                        highlight={skill.highlight}
                      >
                        {skill.name}
                      </CodeTag>
                    ))}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
