import * as React from "react";
import { portfolioData } from "@/data/portfolio";

export function StructuredData() {
  const { personalInfo, skills, projects, education, certifications } = portfolioData;

  const siteUrl = "https://ishanjarwal.com";

  // Flatten all skill names into a list for search engines
  const allSkills = skills.flatMap((cat) => cat.items.map((item) => item.name));

  const personSchema = {
    "@type": "Person",
    "@id": `${siteUrl}/#person`,
    name: personalInfo.name,
    alternateName: ["ishucodes", "Ishan", "Jarwal"],
    jobTitle: personalInfo.role,
    description: personalInfo.introParagraph,
    url: siteUrl,
    image: personalInfo.avatarUrl,
    email: `mailto:${personalInfo.email}`,
    telephone: personalInfo.phone,
    gender: "Male",
    nationality: "Indian",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Jaipur",
      addressRegion: "Rajasthan",
      addressCountry: "IN",
    },
    alumniOf: education.map((edu) => ({
      "@type": "CollegeOrUniversity",
      name: edu.institution,
      url: "https://jecrcuniversity.edu.in",
      location: edu.location,
    })),
    hasCredential: (certifications ?? []).map((cert) => ({
      "@type": "EducationalOccupationalCredential",
      name: cert.title,
      recognizedBy: {
        "@type": "Organization",
        name: cert.issuer,
      },
      url: cert.credentialUrl,
    })),
    sameAs: [
      personalInfo.githubUrl,
      personalInfo.linkedinUrl,
      personalInfo.twitterUrl,
      personalInfo.leetcodeUrl,
      siteUrl,
    ],
    knowsAbout: [
      "Software Engineering",
      "AI Product Engineering",
      "Agentic AI",
      "Large Language Models (LLMs)",
      "Retrieval-Augmented Generation (RAG)",
      "Next.js",
      "React",
      "TypeScript",
      "Python",
      "Node.js",
      "PostgreSQL",
      "System Design",
      "Distributed Systems",
      "Docker",
      "tRPC",
      "WebSockets",
      ...allSkills,
    ],
  };

  const webSiteSchema = {
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    url: siteUrl,
    name: `${personalInfo.name} — Developer Portfolio`,
    description: personalInfo.introParagraph,
    inLanguage: "en-US",
    publisher: {
      "@id": `${siteUrl}/#person`,
    },
    author: {
      "@id": `${siteUrl}/#person`,
    },
  };

  const profilePageSchema = {
    "@type": "ProfilePage",
    "@id": `${siteUrl}/#webpage`,
    url: siteUrl,
    name: `${personalInfo.name} | Software Engineer & AI Product Engineer`,
    isPartOf: {
      "@id": `${siteUrl}/#website`,
    },
    about: {
      "@id": `${siteUrl}/#person`,
    },
    primaryImageOfPage: "https://res.cloudinary.com/dsf4t9wmc/image/upload/v1793573698/AI-Focused_Product_Engineer_Banner_pnc70e.png",
    image: "https://res.cloudinary.com/dsf4t9wmc/image/upload/v1793573698/AI-Focused_Product_Engineer_Banner_pnc70e.png",
    mainEntity: {
      "@id": `${siteUrl}/#person`,
    },
    datePublished: "2024-01-01T00:00:00+00:00",
    dateModified: "2026-11-02T00:00:00+00:00",
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: siteUrl,
        },
      ],
    },
  };

  // SoftwareApplication / CreativeWork schemas for projects
  const projectSchemas = projects.map((proj) => ({
    "@type": "SoftwareApplication",
    name: proj.name,
    description: proj.description,
    applicationCategory: "DeveloperApplication",
    operatingSystem: "Web",
    author: {
      "@id": `${siteUrl}/#person`,
    },
    url: proj.liveUrl || proj.githubUrl,
  }));

  const structuredDataGraph = {
    "@context": "https://schema.org",
    "@graph": [personSchema, webSiteSchema, profilePageSchema, ...projectSchemas],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredDataGraph),
      }}
    />
  );
}
