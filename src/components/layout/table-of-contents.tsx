"use client";

import * as React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

export interface TocItem {
  id: string;
  label: string;
  number: string;
}

export const TOC_ITEMS: TocItem[] = [
  { id: "about", label: "About Me", number: "1" },
  { id: "skills", label: "Core Skills & Stack", number: "2" },
  { id: "projects", label: "Featured Projects", number: "3" },
  { id: "education", label: "Education", number: "4" },
  { id: "certifications", label: "Certifications", number: "5" },
  { id: "contact", label: "Get in Touch", number: "6" },
];

interface TableOfContentsProps {
  className?: string;
  defaultOpen?: boolean;
}

export function TableOfContents({
  className,
  defaultOpen = true,
}: TableOfContentsProps) {
  const [activeId, setActiveId] = React.useState<string>("about");

  // Track scroll position to update active section (scrollspy)
  React.useEffect(() => {
    const handleScroll = () => {
      // 130px offset to account for sticky header and spacing
      const scrollPosition = window.scrollY + 130;

      // When near bottom of page, activate last item ("contact")
      if (
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 60
      ) {
        setActiveId("contact");
        return;
      }

      for (let i = TOC_ITEMS.length - 1; i >= 0; i--) {
        const item = TOC_ITEMS[i];
        const element = document.getElementById(item.id);
        if (element) {
          const top = element.offsetTop;
          if (scrollPosition >= top) {
            setActiveId(item.id);
            return;
          }
        }
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string
  ) => {
    e.preventDefault();
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
      setActiveId(id);
      window.history.replaceState(null, "", `#${id}`);
    }
  };

  const scrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
    setActiveId("about");
    window.history.replaceState(null, "", " ");
  };

  return (
    <nav
      aria-label="Table of contents"
      className={cn(
        "border border-border bg-card font-mono text-xs select-none shadow-xs",
        className
      )}
    >
      <Accordion
        defaultValue={defaultOpen ? ["toc"] : []}
        className="w-full"
      >
        <AccordionItem value="toc" className="border-none">
          <AccordionTrigger
            className={cn(
              "px-3.5 py-2.5 hover:no-underline hover:bg-muted/50 text-xs font-mono font-bold tracking-tight text-foreground flex items-center justify-between transition-colors cursor-pointer rounded-none",
              "aria-expanded:border-b aria-expanded:border-border/70"
            )}
          >
            <div className="flex items-center gap-1.5 min-w-0 pr-2">
              <span className="text-muted-foreground font-normal shrink-0">###</span>
              <span className="font-bold truncate">Table of Contents</span>
            </div>
          </AccordionTrigger>

          <AccordionContent className="p-0">
            <div className="p-3 space-y-2.5">
              <ol className="space-y-1 font-mono text-xs">
                {TOC_ITEMS.map((item) => {
                  const isActive = activeId === item.id;
                  return (
                    <li key={item.id}>
                      <a
                        href={`#${item.id}`}
                        onClick={(e) => handleLinkClick(e, item.id)}
                        className={cn(
                          "group flex items-start gap-1.5 py-1 px-1.5 -mx-1 transition-colors leading-tight select-none",
                          isActive
                            ? "bg-muted/80 text-blue-600 dark:text-blue-400 font-bold border-l-2 border-blue-600 dark:border-blue-400 pl-2"
                            : "text-foreground/80 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-muted/40"
                        )}
                        aria-current={isActive ? "location" : undefined}
                      >
                        <span className="text-muted-foreground font-mono shrink-0 select-none">
                          {item.number}.
                        </span>
                        <span
                          className={cn(
                            "underline decoration-border/60 group-hover:decoration-blue-500 underline-offset-2",
                            isActive && "decoration-blue-600 dark:decoration-blue-400"
                          )}
                        >
                          {item.label}
                        </span>
                        {isActive && (
                          <span
                            aria-hidden="true"
                            className="ml-auto text-[10px] text-blue-600 dark:text-blue-400 font-mono select-none pl-1 shrink-0"
                          >
                            &bull;
                          </span>
                        )}
                      </a>
                    </li>
                  );
                })}
              </ol>

              <div className="border-t border-border/60 pt-2 flex items-center justify-between text-[11px] text-muted-foreground">
                <span className="text-[10px] uppercase tracking-wider text-muted-foreground/80">
                  {"// 5 sections"}
                </span>
                <a
                  href="#top"
                  onClick={scrollToTop}
                  className="text-blue-600 dark:text-blue-400 hover:underline select-none whitespace-nowrap"
                  title="Return to top"
                >
                  [top &uarr;]
                </a>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </nav>
  );
}
