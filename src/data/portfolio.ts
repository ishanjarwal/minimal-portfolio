import { PortfolioData } from "@/types/portfolio";

export const portfolioData: PortfolioData = {
  personalInfo: {
    name: "Ishan Jarwal",
    terminalHandle: "~/about-me",
    role: "Software Engineer & AI Product Engineer",
    status: "Open for Opportunities",
    location: "Jaipur, India",
    bio: "AI-focused Computer Science student specializing in AI systems, Agentic AI, LLMs, RAG, and scalable software architecture.",
    introParagraph:
      "AI-focused Computer Science student specializing in AI systems engineering, Agentic AI, LLMs, RAG, and scalable software architecture. Proficient in TypeScript, Next.js, Node.js, tRPC, PostgreSQL, Prisma, Docker, and Python, with a strong foundation in DSA, software architecture, and building production-ready AI applications.",
    philosophyParagraph:
      "Dedicated to engineering resilient, type-safe distributed systems and latency-optimized user workflows. I build software with high performance standards—from sub-millisecond p99 canvas synchronization loops and vector ingestion pipelines to autonomous LLM reasoning agents.",
    email: "ishucodes@gmail.com",
    phone: "+91 9116080979",
    avatarUrl:
      "https://res.cloudinary.com/dsf4t9wmc/image/upload/v1793566827/Dramatic_Studio_Portrait_of_a_Bearded_Man_bz7h1u.png",
    resumeUrl: "/resume.pdf",
    githubUrl: "https://github.com/ishanjarwal",
    linkedinUrl: "https://linkedin.com/in/ishanjarwal",
    twitterUrl: "https://x.com/ishanjarwal",
    leetcodeUrl: "https://leetcode.com/u/ishanjarwal",
  },

  navigation: [
    { id: "about", label: "About", href: "#about", shortcut: "01" },
    { id: "skills", label: "Skills", href: "#skills", shortcut: "02" },
    { id: "projects", label: "Projects", href: "#projects", shortcut: "03" },
    { id: "education", label: "Education", href: "#education", shortcut: "04" },
    // Temporarily commented out until work experience is added
    // { id: "experience", label: "Experience", href: "#experience", shortcut: "04" },
    { id: "contact", label: "Contact", href: "#contact", shortcut: "05" },
  ],

  quickLinks: [
    {
      label: "Email",
      href: "mailto:ishucodes@gmail.com",
      iconName: "Mail",
      external: false,
      description: "Direct email contact",
    },
    {
      label: "Phone",
      href: "tel:+919116080979",
      iconName: "Phone",
      external: false,
      description: "Direct voice / call line",
    },
    {
      label: "Resume",
      href: "/resume.pdf",
      iconName: "FileText",
      external: true,
      description: "Curriculum Vitae (PDF)",
    },
    {
      label: "GitHub",
      href: "https://github.com/ishanjarwal",
      iconName: "Github",
      external: true,
      description: "Code repositories and OSS activity",
    },
    {
      label: "LinkedIn",
      href: "https://linkedin.com/in/ishanjarwal",
      iconName: "Linkedin",
      external: true,
      description: "Professional network and timeline",
    },
  ],

  skills: [
    {
      category: "Languages",
      description: "Core programming and scripting languages",
      items: [
        { name: "C++", level: "Advanced", highlight: true },
        { name: "TypeScript", level: "Proficient", highlight: true },
        { name: "JavaScript", level: "Proficient" },
        { name: "SQL", level: "Proficient" },
        { name: "Python", level: "Advanced", highlight: true },
      ],
    },
    {
      category: "Backend",
      description: "Server runtimes, REST/tRPC APIs, and authentication",
      items: [
        { name: "Node.js", level: "Proficient", highlight: true },
        { name: "NestJS", level: "Advanced", highlight: true },
        { name: "Express.js", level: "Proficient" },
        { name: "REST APIs", level: "Proficient" },
        { name: "tRPC", level: "Proficient", highlight: true },
        { name: "RBAC Auth", level: "Proficient" },
      ],
    },
    {
      category: "Frontend",
      description:
        "Interactive client applications, state management, and modern styling",
      items: [
        { name: "React.js", level: "Proficient", highlight: true },
        { name: "Next.js", level: "Proficient", highlight: true },
        { name: "Redux Toolkit", level: "Proficient" },
        { name: "Tailwind CSS", level: "Proficient", highlight: true },
        { name: "shadcn/ui", level: "Proficient" },
        { name: "Tanstack Query", level: "Proficient", highlight: true },
      ],
    },
    {
      category: "Databases",
      description: "Relational, document, vector data stores, and ORMs",
      items: [
        { name: "PostgreSQL", level: "Proficient", highlight: true },
        { name: "MongoDB", level: "Proficient" },
        { name: "Redis", level: "Proficient", highlight: true },
        { name: "Prisma ORM", level: "Proficient", highlight: true },
      ],
    },
    {
      category: "AI Engineering",
      description: "Agentic AI, retrieval architectures, and generative models",
      items: [
        { name: "LLMs", level: "Proficient", highlight: true },
        { name: "RAG", level: "Proficient", highlight: true },
        { name: "Vector Embeddings", level: "Proficient", highlight: true },
        { name: "LangChain", level: "Proficient", highlight: true },
      ],
    },
    {
      category: "Tools & DevOps",
      description: "Containerization, version control, CI/CD, and deployment",
      items: [
        { name: "Git", level: "Proficient", highlight: true },
        { name: "GitHub", level: "Proficient" },
        { name: "Docker", level: "Proficient", highlight: true },
        { name: "Linux", level: "Proficient" },
        { name: "CI/CD", level: "Proficient" },
        { name: "VPS Deployment", level: "Proficient" },
      ],
    },
    {
      category: "Software Engineering",
      description: "Systems architecture patterns, robustness, and performance",
      items: [
        { name: "Rate Limiting", level: "Proficient" },
        { name: "Caching", level: "Proficient" },
        { name: "Type Safety", level: "Proficient", highlight: true },
        { name: "Asynchronous Worker", level: "Proficient" },
        { name: "Message Queues", level: "Proficient" },
        { name: "Error Handling", level: "Proficient" },
        { name: "Input Validation", level: "Proficient" },
        { name: "Modular Architecture", level: "Proficient" },
        { name: "Design Patterns", level: "Proficient" },
      ],
    },
  ],

  projects: [
    {
      id: "vizi",
      name: "Vizi – Real-Time Collaborative Whiteboard",
      tagline:
        "Ultra-low latency multiplayer canvas with offline continuity & Artillery stress-testing",
      description:
        "Developed a real-time collaborative whiteboard using WebSockets, TypeScript, and HTML5 Canvas, implementing bidirectional communication, multiplayer cursor presence, optimistic UI updates, and interactive drawing primitives.",
      techStack: [
        "TypeScript",
        "Next.js",
        "WebSockets",
        "HTML5 Canvas",
        "Node.js",
        "Turborepo",
        "pnpm",
        "Artillery",
        "Tailwind CSS",
        "Zod",
      ],
      tags: ["Real-time", "WebSockets", "Canvas", "Stress-Tested"],
      githubUrl: "https://github.com/ishanjarwal/vizi",
      liveUrl: "https://vizi-canvas.vercel.app",
      featured: true,
      role: "Lead Developer & Architect",
      duration: "2026",
      screenshot: {
        src: "https://res.cloudinary.com/dsf4t9wmc/image/upload/v1793602886/vizi_preview_wp8y22.png",
        alt: "Vizi collaborative canvas interface preview",
      },
      highlights: [
        "Developed a real-time collaborative whiteboard using WebSockets, TypeScript, and HTML5 Canvas, implementing bidirectional communication, multiplayer cursor presence, optimistic UI updates, and interactive drawing primitives.",
        "Load-tested HTTP stress-ramp endpoints using Artillery, processing 19,504 requests at 208 ops/sec with 1ms p95 and p99 latency and a 100% successful-request rate in the test environment.",
        "Engineered fault-tolerant client-side drawing workflows with offline mutation queuing, automatic WebSocket reconnection, event deduplication, and Last-Write-Wins conflict resolution to support resilient state synchronization across collaborative sessions.",
      ],
    },
    {
      id: "repomemo",
      name: "RepoMemo - Github RAG",
      tagline:
        "Context-aware repository intelligence platform with semantic search & vector embeddings",
      description:
        "Architected a GitHub repository intelligence platform leveraging Retrieval-Augmented Generation (RAG) to enable context-aware codebase Q&A using semantic search and vector embeddings.",
      techStack: [
        "TypeScript",
        "LangChain",
        "tRPC",
        "Next.js",
        "TanStack Query",
        "Better-Auth",
        "PostgreSQL",
        "pgvector",
        "Prisma ORM",
        "Polar Payments",
        "Inngest",
        "Zod",
      ],
      tags: ["RAG", "Agentic AI", "pgvector", "tRPC", "Octokit"],
      githubUrl: "https://github.com/ishanjarwal/repomemo",
      liveUrl: "https://repomemo.dev",
      featured: true,
      role: "AI & Systems Architect",
      duration: "2026",
      screenshot: {
        src: "https://res.cloudinary.com/dsf4t9wmc/image/upload/v1793602886/repomemo_preview_zjat4s.png",
        alt: "RepoMemo GitHub RAG query and AST indexing preview",
      },
      highlights: [
        "Architected a GitHub repository intelligence platform leveraging Retrieval-Augmented Generation (RAG) to enable context-aware codebase Q&A using semantic search and vector embeddings.",
        "Orchestrated an asynchronous ingestion pipeline to index repository files, generate AI summaries with Batch APIs, persist 768-dimensional vector embeddings for similarity-based retrieval, credit based payment and tRPC for type safety.",
        "Integrated GitHub API via Octokit for type-safe repository access and commit-aware source retrieval, preserving GitHub as the source of truth tied to a consistent commit SHA.",
        "Optimized repository indexing time to ~3ms/file even for larger repositories and query latency to ~5s.",
      ],
    },
    {
      id: "resumazing",
      name: "Resumazing - AI Resume Builder SaaS",
      tagline:
        "AI-native resume builder with ATS & Job Fit analysis, autosave, and vectorized PDF export",
      description:
        "Architected an AI Resume Builder SaaS platform with support for 25+ customizable templates and real-time editing, featuring AI content generation, ATS scoring, and vectorized PDF generation.",
      techStack: [
        "TypeScript",
        "Next.js",
        "React Hook Form",
        "PostgreSQL",
        "Prisma ORM",
        "Google GenAI",
        "Dodo Payments",
        "react-pdf",
      ],
      tags: ["AI SaaS", "ATS Analysis", "PDF Export", "Payments"],
      githubUrl: "https://github.com/ishanjarwal/resumazing",
      liveUrl: "https://resumazing.vercel.app",
      featured: true,
      role: "AI Product Engineer",
      duration: "2026",
      screenshot: {
        src: "https://res.cloudinary.com/dsf4t9wmc/image/upload/v1793602887/resumazing_preview_h3kfqb.png",
        alt: "Resumazing AI Resume Builder interface and ATS match preview",
      },
      highlights: [
        "Architected an AI Resume Builder SaaS platform with support for 25+ customizable templates and real-time editing.",
        "Implemented AI content generation to assist users in creating resume content and improving resume quality.",
        "Built ATS and Job Fit Analysis features that compare resumes against job descriptions and recommend optimizations.",
        "Built an Autosave feature for data persistence and a vectorized PDF export pipeline for high-quality, print-ready resumes.",
        "Integrated Dodo Payments for payments and subscription lifecycle handling via webhooks.",
      ],
    },
  ],

  education: [
    {
      id: "jecrc-btech",
      institution: "JECRC University",
      degree: "Bachelor of Technology (B.Tech)",
      fieldOfStudy: "Computer Science & Engineering",
      duration: "2023 — 2027",
      startYear: "2023",
      endYear: "2027",
      grade: "GPA 9.3",
      coursework: [
        "Data Structures & Algorithms",
        "Software Architecture",
        "Database Management Systems",
        "Computer Networks",
        "Operating Systems",
        "System Design",
      ],
      achievements: [
        "Maintained top-tier academic standing with a cumulative GPA of 9.3 in Computer Science Engineering.",
        "Active competitive programmer with strong algorithmic foundations in C++ across LeetCode.",
        "Architected production-ready AI-native systems and software platforms leveraging modern web technologies.",
      ],
    },
  ],

  certifications: [
    {
      id: "software-architecture-big-data",
      title: "Software Architecture and Big Data Processing",
      issuer: "Michael Pogrebinsky",
      date: "Oct 2026",
      credentialUrl:
        "https://www.udemy.com/certificate/UC-software-architecture-pogrebinsky/",
    },
    {
      id: "system-design-masterclass",
      title: "System Design Masterclass",
      issuer: "SweetCodey",
      date: "June 2026",
      credentialUrl:
        "https://sweetcodey.com/certificates/system-design-masterclass/",
    },
  ],

  // Work experience kept in data store for future usage when ready
  experience: [
    {
      id: "product-engineer",
      company: "Independent Engineering",
      role: "AI Product & Systems Engineer",
      duration: "2024 — Present",
      startDate: "2024",
      endDate: "Present",
      location: "Jaipur, India",
      type: "Full-time",
      description:
        "Building production-grade AI-native software and scalable products.",
      responsibilities: [],
      achievements: [],
      techStack: [
        "TypeScript",
        "Next.js",
        "Node.js",
        "PostgreSQL",
        "Prisma",
        "Docker",
      ],
    },
  ],
};
