export interface PersonalInfo {
  name: string;
  terminalHandle: string;
  role: string;
  status: string;
  location: string;
  bio: string;
  introParagraph: string;
  philosophyParagraph: string;
  email: string;
  phone: string;
  avatarUrl: string;
  resumeUrl: string;
  githubUrl: string;
  linkedinUrl: string;
  twitterUrl: string;
  leetcodeUrl: string;
}

export interface SkillCategory {
  category: string;
  description?: string;
  items: Array<{
    name: string;
    level?: "Proficient" | "Advanced" | "Familiar";
    highlight?: boolean;
  }>;
}

export interface Project {
  id: string;
  name: string;
  tagline: string;
  description: string;
  techStack: string[];
  tags: string[];
  githubUrl: string;
  liveUrl?: string;
  featured: boolean;
  role: string;
  duration: string;
  screenshot?: {
    src: string;
    alt?: string;
  };
  highlights: string[];
}

export interface EducationEntry {
  id: string;
  institution: string;
  degree: string;
  fieldOfStudy: string;
  duration: string;
  startYear: string;
  endYear: string;
  location?: string;
  grade?: string;
  coursework?: string[];
  achievements?: string[];
}

export interface CertificationEntry {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
}

export interface ExperienceEntry {
  id: string;
  company: string;
  role: string;
  duration: string;
  startDate: string;
  endDate: string;
  location: string;
  type: "Full-time" | "Part-time" | "Contract" | "Internship" | "Open Source";
  description: string;
  responsibilities: string[];
  achievements: string[];
  techStack: string[];
}

export interface NavItem {
  id: string;
  label: string;
  href: string;
  shortcut?: string;
}

export interface QuickLink {
  label: string;
  href: string;
  iconName: "Mail" | "Phone" | "FileText" | "Github" | "Linkedin" | "Twitter" | "Globe" | "ExternalLink";
  external: boolean;
  description?: string;
}

export interface PortfolioData {
  personalInfo: PersonalInfo;
  navigation: NavItem[];
  quickLinks: QuickLink[];
  skills: SkillCategory[];
  projects: Project[];
  education: EducationEntry[];
  certifications?: CertificationEntry[];
  experience: ExperienceEntry[];
}
