// Central type definitions for the portfolio. Every data file is typed
// against one of these interfaces so components stay dumb and reusable.

export interface SocialLink {
  id: string;
  name: string;
  url: string;
  icon: string; // lucide-react icon name
}

export interface Profile {
  name: string;
  initials: string;
  role: string;
  headline: string;
  taglineWords: string[]; // words cycled by the typing animation
  university: string;
  country: string;
  location: string;
  bio: string[];
  objective: string;
  highlights: string[];
  email: string;
  phone: string;
  resumeUrl: string;
  avatarUrl: string;
}

export interface SkillItem {
  id: string;
  name: string;
  level: number; // 0-100, used for the progress affordance
}

export interface SkillCategory {
  id: string;
  category: string;
  icon: string;
  items: SkillItem[];
}

export interface Project {
  id: string;
  title: string;
  slug: string;
  description: string;
  category: string;
  status: "Completed" | "In Progress" | "Concept";
  duration: string;
  teamSize: string;
  role: string;
  problem: string;
  solution: string;
  features: string[];
  techStack: string[];
  githubUrl: string;
  liveUrl: string;
  image: string;
  highlights: string[];
  featured: boolean;
}

export interface EducationItem {
  id: string;
  institution: string;
  qualification: string;
  field: string;
  duration: string;
  location: string;
  description: string;
  achievements: string[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  type: string;
  duration: string;
  location: string;
  description: string;
  responsibilities: string[];
  techStack: string[];
}

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialId: string;
  credentialUrl: string;
  category: string;
}

export interface ContactInfo {
  email: string;
  phone: string;
  location: string;
  availability: string;
}

export interface Statistic {
  id: string;
  label: string;
  value: number;
  suffix: string;
}
