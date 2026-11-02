import type { Metadata, Viewport } from "next";
import { Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toast";
import { StructuredData } from "@/components/seo/structured-data";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#faf9f5" },
    { media: "(prefers-color-scheme: dark)", color: "#0e1116" },
  ],
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://ishanjarwal.com"),
  title: {
    default: "Ishan Jarwal | Software Engineer & AI Product Engineer",
    template: "%s | Ishan Jarwal",
  },
  description:
    "Official developer portfolio and README of Ishan Jarwal. Software Engineer & AI Product Engineer specializing in Agentic AI, LLMs, RAG, and scalable software systems. Proficient in Next.js, TypeScript, Python, Node.js, and PostgreSQL.",
  applicationName: "Ishan Jarwal Portfolio",
  authors: [{ name: "Ishan Jarwal", url: "https://ishanjarwal.com" }],
  creator: "Ishan Jarwal",
  publisher: "Ishan Jarwal",
  keywords: [
    "Ishan Jarwal",
    "ishanjarwal",
    "ishanjarwal.com",
    "ishucodes",
    "Ishan Jarwal Software Engineer",
    "Ishan Jarwal AI Engineer",
    "Ishan Jarwal Product Engineer",
    "Ishan Jarwal Portfolio",
    "Ishan Jarwal Resume",
    "Ishan Jarwal GitHub",
    "Ishan Jarwal LinkedIn",
    "Software Engineer",
    "Product Engineer",
    "Agentic AI Engineer",
    "AI Product Engineer",
    "LLM Engineer",
    "RAG Specialist",
    "Next.js Developer",
    "TypeScript Engineer",
    "Python Developer",
    "JECRC University",
    "Vizi Collaborative Whiteboard",
    "RepoMemo",
    "Resumazing AI SaaS",
  ],
  alternates: {
    canonical: "https://ishanjarwal.com",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "profile",
    firstName: "Ishan",
    lastName: "Jarwal",
    username: "ishanjarwal",
    gender: "male",
    title: "Ishan Jarwal | Software Engineer & AI Product Engineer",
    description:
      "Official developer portfolio and README of Ishan Jarwal. Software Engineer & AI Product Engineer specializing in Agentic AI, LLMs, RAG, and scalable software systems.",
    url: "https://ishanjarwal.com",
    siteName: "Ishan Jarwal",
    locale: "en_US",
    images: [
      {
        url: "https://res.cloudinary.com/dsf4t9wmc/image/upload/v1793573698/AI-Focused_Product_Engineer_Banner_pnc70e.png",
        width: 1200,
        height: 630,
        alt: "Ishan Jarwal — Software Engineer & AI Product Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ishan Jarwal | Software Engineer & AI Product Engineer",
    description:
      "Official developer portfolio and README of Ishan Jarwal. Building Agentic AI systems, LLM reasoning pipelines, and high-performance software products.",
    site: "@ishanjarwal",
    creator: "@ishanjarwal",
    images: [
      "https://res.cloudinary.com/dsf4t9wmc/image/upload/v1793573698/AI-Focused_Product_Engineer_Banner_pnc70e.png",
    ],
  },
  icons: {
    icon: "/favicon.ico",
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${geistMono.variable} font-mono`}>
      <head>
        <StructuredData />
      </head>
      <body
        suppressHydrationWarning
        className="min-h-screen bg-background text-foreground flex flex-col font-mono text-[14px] leading-relaxed"
      >
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
