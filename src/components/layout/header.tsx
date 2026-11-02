"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { portfolioData } from "@/data/portfolio";
import { Mail, Phone, FileText, Menu, X } from "@/components/icons";
import { ThemeToggle } from "./theme-toggle";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const { personalInfo, navigation } = portfolioData;

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
        setMobileMenuOpen(false);
      }
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border bg-card/95 backdrop-blur-xs select-none">
      <div className="max-w-4xl mx-auto px-3 sm:px-6 h-12 flex items-center justify-between gap-3">
        {/* Left Side: Brand Name & Thumbnail */}
        <Link
          href="/"
          className="group flex items-center gap-1.5 font-bold tracking-tight text-foreground shrink-0 whitespace-nowrap"
          aria-label={`${personalInfo.name} homepage`}
        >
          <Image
            src={personalInfo.avatarUrl}
            alt={`${personalInfo.name} avatar`}
            width={24}
            height={24}
            className="size-6 border border-border object-cover shrink-0"
          />
          <span className="text-muted-foreground font-mono text-xs shrink-0">
            ~/
          </span>
          <span className="font-mono text-xs sm:text-sm underline text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 whitespace-nowrap">
            {personalInfo.name}
          </span>
        </Link>

        {/* Right Side: Desktop Nav with Classic Blue Links */}
        <div className="hidden lg:flex items-center gap-3 text-xs font-mono shrink-0 whitespace-nowrap">
          <nav className="flex items-center gap-1.5 shrink-0 whitespace-nowrap">
            {navigation.map((item) => (
              <a
                key={item.id}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="text-blue-600 dark:text-blue-400 underline hover:text-blue-800 dark:hover:text-blue-300 py-1 px-1 transition-colors whitespace-nowrap"
              >
                [{item.label}]
              </a>
            ))}
          </nav>

          <span className="text-border select-none shrink-0">|</span>

          {/* Quick-Access Blue Links */}
          <div className="flex items-center gap-2 shrink-0 whitespace-nowrap">
            <a
              href={`mailto:${personalInfo.email}`}
              className="inline-flex items-center gap-1 text-blue-600 dark:text-blue-400 underline hover:text-blue-800 dark:hover:text-blue-300 text-xs whitespace-nowrap shrink-0"
              title={`Email: ${personalInfo.email}`}
            >
              <Mail className="size-3 shrink-0" />
              <span>Email</span>
            </a>

            <a
              href={`tel:${personalInfo.phone}`}
              className="inline-flex items-center gap-1 text-blue-600 dark:text-blue-400 underline hover:text-blue-800 dark:hover:text-blue-300 text-xs whitespace-nowrap shrink-0"
              title={`Call: ${personalInfo.phone}`}
            >
              <Phone className="size-3 shrink-0" />
              <span>Call</span>
            </a>

            <a
              href={personalInfo.resumeUrl}
              download="Ishan_Jarwal_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-blue-600 dark:text-blue-400 underline hover:text-blue-800 dark:hover:text-blue-300 font-bold text-xs whitespace-nowrap shrink-0"
              title="Download Resume (PDF)"
            >
              <FileText className="size-3 shrink-0" />
              <span>Resume.pdf</span>
            </a>

            <span className="text-border select-none shrink-0">|</span>

            <ThemeToggle />
          </div>
        </div>

        {/* Medium and Mobile Navigation Trigger & Theme Toggle */}
        <div className="flex items-center gap-2 lg:hidden shrink-0">
          {/* Quick CV link visible on tablet too */}
          <a
            href={personalInfo.resumeUrl}
            download="Ishan_Jarwal_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1 text-blue-600 dark:text-blue-400 underline hover:text-blue-800 dark:hover:text-blue-300 text-xs font-mono font-bold whitespace-nowrap shrink-0 mr-1"
          >
            <FileText className="size-3 shrink-0" />
            <span>[CV.pdf]</span>
          </a>

          <ThemeToggle />

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="size-8 inline-flex items-center justify-center border border-border bg-card hover:bg-muted text-foreground shrink-0"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="size-4 shrink-0" /> : <Menu className="size-4 shrink-0" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-border bg-card px-4 py-3 font-mono text-xs">
          <div className="text-[10px] text-muted-foreground mb-2 select-none uppercase tracking-wider">
            {"// Navigation Menu"}
          </div>
          <nav className="flex flex-col space-y-2">
            {navigation.map((item) => (
              <a
                key={item.id}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="flex items-center justify-between py-1.5 px-2 border border-border bg-muted/40 text-blue-600 dark:text-blue-400 underline whitespace-nowrap"
              >
                <span>[{item.label}]</span>
                <span className="text-muted-foreground text-[10px] no-underline">#{item.id}</span>
              </a>
            ))}
          </nav>

          <div className="border-t border-border mt-3 pt-3">
            <div className="text-[10px] text-muted-foreground mb-2 select-none uppercase tracking-wider">
              {"// Quick Contact Links"}
            </div>
            <div className="grid grid-cols-3 gap-2">
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center justify-center gap-1 py-1 px-1 border border-border text-center text-blue-600 dark:text-blue-400 underline text-[11px] whitespace-nowrap"
              >
                <Mail className="size-3 shrink-0" />
                <span>Email</span>
              </a>
              <a
                href={`tel:${personalInfo.phone}`}
                className="flex items-center justify-center gap-1 py-1 px-1 border border-border text-center text-blue-600 dark:text-blue-400 underline text-[11px] whitespace-nowrap"
              >
                <Phone className="size-3 shrink-0" />
                <span>Call</span>
              </a>
              <a
                href={personalInfo.resumeUrl}
                download="Ishan_Jarwal_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1 py-1 px-1 border border-border text-center text-blue-600 dark:text-blue-400 underline text-[11px] whitespace-nowrap"
              >
                <FileText className="size-3 shrink-0" />
                <span>CV.pdf</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
