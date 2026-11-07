import * as React from "react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { TableOfContents } from "@/components/layout/table-of-contents";
import { HeroSection } from "@/components/sections/hero";
import { SkillsSection } from "@/components/sections/skills";
import { ProjectsSection } from "@/components/sections/projects";
import { EducationSection } from "@/components/sections/education";
import { CertificationsSection } from "@/components/sections/certifications";
// import { ExperienceSection } from "@/components/sections/experience"; // Temporarily disabled
import { ContactSection } from "@/components/sections/contact";
import { HorizontalSeparator } from "@/components/markdown-elements";

export default function HomePage() {
  return (
    <div id="top" className="min-h-screen flex flex-col bg-background text-foreground font-mono">
      {/* Top Sticky Header */}
      <Header />

      {/* Main Layout Container */}
      <div className="flex-1 w-full max-w-[96rem] mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
        <div className="flex justify-center items-start gap-8 relative">
          {/* Left Sidebar: Table of Contents in the left empty space (Desktop >= xl) */}
          <aside className="hidden xl:block w-56 2xl:w-64 shrink-0 sticky top-16 z-20">
            <TableOfContents defaultOpen={true} />
          </aside>

          {/* Main Content Area */}
          <main className="flex-1 max-w-4xl w-full min-w-0 space-y-8">
            {/* Responsive Table of Contents for Mobile & Tablet (< xl) */}
            <div className="xl:hidden">
              <TableOfContents defaultOpen={false} />
            </div>

            {/* Hero / About Section */}
            <HeroSection />

            <HorizontalSeparator />

            {/* Core Skills Section */}
            <SkillsSection />

            <HorizontalSeparator />

            {/* Projects Section */}
            <ProjectsSection />

            {/* Experience Section (temporarily commented out) */}
            {/*
            <HorizontalSeparator />
            <ExperienceSection />
            */}

            <HorizontalSeparator />

            {/* Education Section */}
            <EducationSection />

            <HorizontalSeparator />

            {/* Certifications Section */}
            <CertificationsSection />

            <HorizontalSeparator />

            {/* Contact Section */}
            <ContactSection />
          </main>

          {/* Right Spacer on wide screens (2xl+) so center column aligns horizontally with Header and Footer */}
          <div
            className="hidden 2xl:block w-64 shrink-0 pointer-events-none"
            aria-hidden="true"
          />
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
