import * as React from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  id?: string;
  level?: 1 | 2 | 3;
  children: React.ReactNode;
  subtitle?: string;
  className?: string;
  showBackToTop?: boolean;
}

export function SectionHeading({
  id,
  level = 2,
  children,
  subtitle,
  className,
  showBackToTop = true,
}: SectionHeadingProps) {
  const marker = level === 1 ? "#" : level === 2 ? "##" : "###";
  const Tag = level === 1 ? "h1" : level === 2 ? "h2" : "h3";

  const sizeClasses =
    level === 1
      ? "text-2xl sm:text-3xl font-extrabold tracking-tight"
      : level === 2
        ? "text-xl sm:text-2xl font-bold tracking-tight"
        : "text-base sm:text-lg font-semibold tracking-tight";

  const markerClasses =
    level === 1
      ? "text-xl sm:text-2xl font-normal text-muted-foreground mr-2"
      : level === 2
        ? "text-lg sm:text-xl font-normal text-muted-foreground mr-2"
        : "text-sm sm:text-base font-normal text-muted-foreground mr-1.5";

  const borderClass =
    level === 1
      ? "border-b-2 border-border pb-3 mb-2"
      : level === 2
        ? "border-b border-border pb-2.5 mb-2"
        : "border-b border-border/60 pb-1.5 mb-2";

  return (
    <div id={id} className={cn("scroll-mt-16 group w-full pt-4", className)}>
      <div className={cn("flex items-baseline justify-between", borderClass)}>
        <Tag className={cn("text-foreground flex items-baseline", sizeClasses)}>
          {id ? (
            <a
              href={`#${id}`}
              className={cn(
                "select-none hover:text-blue-600 dark:hover:text-blue-400 transition-colors",
                markerClasses,
              )}
              title={`Anchor link for ${id}`}
            >
              {marker}
            </a>
          ) : (
            <span className={markerClasses}>{marker}</span>
          )}
          <span className="text-foreground">{children}</span>
        </Tag>

        {showBackToTop && level === 2 && (
          <a
            href="#top"
            className="text-[11px] text-blue-600 dark:text-blue-400 hover:underline font-mono select-none"
            title="Return to top of page"
          >
            [top &uarr;]
          </a>
        )}
      </div>

      {subtitle && (
        <p className="text-xs text-muted-foreground font-mono mb-4 pl-0.5">
          {"//"} {subtitle}
        </p>
      )}
    </div>
  );
}

export function MarkdownBlockquote({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <blockquote
      className={cn(
        "border-l-4 border-border bg-muted/40 px-4 py-2.5 text-xs sm:text-sm text-foreground/90 my-4 font-mono",
        className,
      )}
    >
      <div className="flex items-start gap-2">
        <span className="text-muted-foreground font-bold select-none">
          &gt;
        </span>
        <div className="flex-1 font-normal leading-relaxed">{children}</div>
      </div>
    </blockquote>
  );
}

export function CodeTag({
  children,
  className,
  highlight = false,
}: {
  children: React.ReactNode;
  className?: string;
  highlight?: boolean;
}) {
  return (
    <code
      className={cn(
        "font-mono text-[11px] sm:text-xs px-1.5 py-0.5 rounded-none border select-text inline-block whitespace-nowrap shrink-0",
        highlight
          ? "bg-muted text-foreground border-foreground/40 font-semibold"
          : "bg-muted/50 text-foreground border-border hover:border-foreground/40",
        className,
      )}
    >
      `{children}`
    </code>
  );
}

export function HorizontalSeparator({
  className,
}: {
  className?: string;
  label?: string;
}) {
  return (
    <div className={cn("my-8 select-none", className)}>
      <div className="w-full border-t border-border" />
    </div>
  );
}

export function MetaBadge({
  label,
  value,
  className,
}: {
  label: string;
  value: string;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center text-[11px] font-mono border border-border bg-card px-1.5 py-0.5 text-muted-foreground gap-1 select-none whitespace-nowrap shrink-0",
        className,
      )}
    >
      <span className="text-foreground/70 font-semibold">{label}:</span>
      <span className="text-foreground">{value}</span>
    </span>
  );
}
