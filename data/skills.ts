import { SkillCategory } from "@/types";

export const skills: SkillCategory[] = [
  {
    id: "frontend",
    category: "Frontend",
    icon: "LayoutTemplate",
    items: [
      { id: "html", name: "HTML5", level: 95 },
      { id: "css", name: "CSS3", level: 90 },
      { id: "javascript", name: "JavaScript", level: 88 },
      { id: "typescript", name: "TypeScript", level: 82 },
      { id: "react", name: "React", level: 88 },
      { id: "nextjs", name: "Next.js", level: 85 },
      { id: "tailwind", name: "Tailwind CSS", level: 90 },
      { id: "bootstrap", name: "Bootstrap", level: 80 },
    ],
  },
  {
    id: "backend",
    category: "Backend",
    icon: "Server",
    items: [
      { id: "nodejs", name: "Node.js", level: 78 },
      { id: "express", name: "Express", level: 76 },
      { id: "php", name: "PHP", level: 65 },
      { id: "rest", name: "REST APIs", level: 80 },
    ],
  },
  {
    id: "languages",
    category: "Programming Languages",
    icon: "Code2",
    items: [
      { id: "java", name: "Java", level: 75 },
      { id: "python", name: "Python", level: 72 },
      { id: "kotlin", name: "Kotlin", level: 60 },
      { id: "c", name: "C", level: 68 },
      { id: "sql", name: "SQL", level: 78 },
    ],
  },
  {
    id: "database",
    category: "Database",
    icon: "Database",
    items: [
      { id: "mysql", name: "MySQL", level: 78 },
      { id: "mongodb", name: "MongoDB", level: 65 },
      { id: "firebase", name: "Firebase", level: 70 },
    ],
  },
  {
    id: "tools",
    category: "Tools",
    icon: "Wrench",
    items: [
      { id: "git", name: "Git", level: 85 },
      { id: "github", name: "GitHub", level: 85 },
      { id: "vscode", name: "VS Code", level: 92 },
      { id: "androidstudio", name: "Android Studio", level: 60 },
      { id: "postman", name: "Postman", level: 78 },
      { id: "figma", name: "Figma", level: 75 },
      { id: "docker", name: "Docker", level: 55 },
    ],
  },
  {
    id: "cloud",
    category: "Cloud",
    icon: "Cloud",
    items: [
      { id: "aws", name: "AWS Basics", level: 55 },
      { id: "vercel", name: "Vercel", level: 82 },
      { id: "netlify", name: "Netlify", level: 78 },
    ],
  },
  {
    id: "uiux",
    category: "UI/UX",
    icon: "Palette",
    items: [
      { id: "figma-design", name: "Figma", level: 75 },
      { id: "photoshop", name: "Photoshop", level: 60 },
      { id: "illustrator", name: "Illustrator", level: 55 },
      { id: "prototyping", name: "Prototyping", level: 72 },
    ],
  },
  {
    id: "other",
    category: "Other Technologies",
    icon: "Sparkles",
    items: [
      { id: "seo", name: "SEO Fundamentals", level: 68 },
      { id: "cms", name: "CMS", level: 62 },
      { id: "oop", name: "OOP", level: 80 },
      { id: "responsive", name: "Responsive Design", level: 90 },
    ],
  },
];
