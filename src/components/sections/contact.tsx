"use client";

import * as React from "react";
import { portfolioData } from "@/data/portfolio";
import { SectionHeading, MarkdownBlockquote } from "@/components/markdown-elements";
import { ContactForm } from "@/components/sections/contact-form";
import {
  Mail,
  Phone,
  GithubIcon,
  LinkedinIcon,
  TwitterIcon,
  Copy,
  Check,
  ExternalLink,
} from "@/components/icons";

export function ContactSection() {
  const { personalInfo } = portfolioData;
  const [copiedEmail, setCopiedEmail] = React.useState(false);
  const [copiedPhone, setCopiedPhone] = React.useState(false);

  const copyToClipboard = (text: string, type: "email" | "phone") => {
    navigator.clipboard.writeText(text);
    if (type === "email") {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  return (
    <section className="space-y-6">
      {/* Section Header */}
      <SectionHeading
        id="contact"
        level={2}
        subtitle="Direct communication channels, repository links, and social network"
      >
        Get in Touch
      </SectionHeading>

      {/* Intro Invitation */}
      <p className="text-xs sm:text-sm text-foreground/90 font-mono leading-relaxed">
        I am actively open to discussing high-impact software engineering and AI product opportunities, consulting work, or open-source collaborations. Feel free to reach out directly or send a message below.
      </p>

      {/* Required CTA Blockquote */}
      <MarkdownBlockquote>
        &ldquo;Have an interesting project in mind? Let&apos;s talk.&rdquo;
      </MarkdownBlockquote>

      {/* Direct Contact Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
        {/* Email Card */}
        <div className="border border-border bg-card p-4 space-y-2 hover:border-foreground/30 transition-colors">
          <div className="flex items-center justify-between text-xs font-mono border-b border-border pb-2">
            <span className="flex items-center gap-1.5 font-bold text-foreground whitespace-nowrap">
              <Mail className="size-4 text-muted-foreground shrink-0" />
              <span>Email Address</span>
            </span>
            <button
              onClick={() => copyToClipboard(personalInfo.email, "email")}
              className="text-[11px] text-muted-foreground hover:text-foreground border border-border px-1.5 py-0.5 inline-flex items-center gap-1 font-mono cursor-pointer whitespace-nowrap"
              title="Copy email to clipboard"
            >
              {copiedEmail ? <Check className="size-3 text-emerald-500 shrink-0" /> : <Copy className="size-3 shrink-0" />}
              <span>{copiedEmail ? "copied!" : "copy"}</span>
            </button>
          </div>
          <div>
            <a
              href={`mailto:${personalInfo.email}`}
              className="font-mono text-sm text-blue-600 dark:text-blue-400 underline font-bold hover:text-blue-800 dark:hover:text-blue-300 block pt-1 whitespace-nowrap"
            >
              {personalInfo.email}
            </a>
          </div>
        </div>

        {/* Phone Card */}
        <div className="border border-border bg-card p-4 space-y-2 hover:border-foreground/30 transition-colors">
          <div className="flex items-center justify-between text-xs font-mono border-b border-border pb-2">
            <span className="flex items-center gap-1.5 font-bold text-foreground whitespace-nowrap">
              <Phone className="size-4 text-muted-foreground shrink-0" />
              <span>Phone</span>
            </span>
            <button
              onClick={() => copyToClipboard(personalInfo.phone, "phone")}
              className="text-[11px] text-muted-foreground hover:text-foreground border border-border px-1.5 py-0.5 inline-flex items-center gap-1 font-mono cursor-pointer whitespace-nowrap"
              title="Copy phone to clipboard"
            >
              {copiedPhone ? <Check className="size-3 text-emerald-500 shrink-0" /> : <Copy className="size-3 shrink-0" />}
              <span>{copiedPhone ? "copied!" : "copy"}</span>
            </button>
          </div>
          <div>
            <a
              href={`tel:${personalInfo.phone}`}
              className="font-mono text-sm text-blue-600 dark:text-blue-400 underline font-bold hover:text-blue-800 dark:hover:text-blue-300 block pt-1 whitespace-nowrap"
            >
              {personalInfo.phone}
            </a>
          </div>
        </div>
      </div>

      {/* Legacy Contact Form with Zod & React Hook Form */}
      <div className="pt-2">
        <ContactForm />
      </div>

      {/* Social Profiles List in Classic Markdown Style */}
      <div className="pt-3 border-t border-border">
        <div className="text-xs font-bold text-foreground mb-2 font-mono select-none">
          External Developer Profiles:
        </div>

        <ul className="space-y-2 text-xs font-mono pl-1">
          <li className="flex items-center gap-2 flex-wrap sm:flex-nowrap">
            <span className="text-muted-foreground font-bold select-none shrink-0">*</span>
            <ExternalLink className="size-3.5 text-muted-foreground shrink-0" />
            <span className="text-muted-foreground shrink-0 whitespace-nowrap">Blog:</span>
            <a
              href={personalInfo.blogUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 underline hover:text-blue-800 dark:hover:text-blue-300 font-semibold whitespace-nowrap"
            >
              blog.ishanjarwal.com &rarr;
            </a>
          </li>

          <li className="flex items-center gap-2 flex-wrap sm:flex-nowrap">
            <span className="text-muted-foreground font-bold select-none shrink-0">*</span>
            <GithubIcon className="size-3.5 text-muted-foreground shrink-0" />
            <span className="text-muted-foreground shrink-0 whitespace-nowrap">GitHub:</span>
            <a
              href={personalInfo.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 underline hover:text-blue-800 dark:hover:text-blue-300 font-semibold whitespace-nowrap"
            >
              github.com/ishanjarwal &rarr;
            </a>
          </li>

          <li className="flex items-center gap-2 flex-wrap sm:flex-nowrap">
            <span className="text-muted-foreground font-bold select-none shrink-0">*</span>
            <LinkedinIcon className="size-3.5 text-muted-foreground shrink-0" />
            <span className="text-muted-foreground shrink-0 whitespace-nowrap">LinkedIn:</span>
            <a
              href={personalInfo.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 underline hover:text-blue-800 dark:hover:text-blue-300 font-semibold whitespace-nowrap"
            >
              linkedin.com/in/ishanjarwal &rarr;
            </a>
          </li>

          <li className="flex items-center gap-2 flex-wrap sm:flex-nowrap">
            <span className="text-muted-foreground font-bold select-none shrink-0">*</span>
            <TwitterIcon className="size-3.5 text-muted-foreground shrink-0" />
            <span className="text-muted-foreground shrink-0 whitespace-nowrap">X / Twitter:</span>
            <a
              href={personalInfo.twitterUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 underline hover:text-blue-800 dark:hover:text-blue-300 font-semibold whitespace-nowrap"
            >
              x.com/ishanjarwal &rarr;
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
