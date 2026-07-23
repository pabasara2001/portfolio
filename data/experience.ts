import { ExperienceItem } from "@/types";

export const experience: ExperienceItem[] = [
  {
    id: "freelance-fullstack",
    role: "Freelance Full Stack Developer",
    organization: "Self-employed",
    type: "Freelance",
    duration: "2024 — Present",
    location: "Remote, Sri Lanka",
    description:
      "Design and build web applications for small clients and personal ventures, handling everything from requirements to deployment.",
    responsibilities: [
      "Scoped and built responsive web applications with Next.js and Tailwind CSS",
      "Designed REST APIs with Node.js and Express",
      "Managed deployments on Vercel and Netlify",
      "Communicated directly with clients to translate needs into features",
    ],
    techStack: ["Next.js", "React", "Node.js", "Express", "Tailwind CSS"],
  },
  {
    id: "software-intern",
    role: "Software Engineering Intern",
    organization: "Demo Tech Solutions (Pvt) Ltd",
    type: "Internship",
    duration: "Jun 2024 — Dec 2024",
    location: "Colombo, Sri Lanka",
    description:
      "Worked within a product team building internal dashboards, contributing to both frontend components and API integration.",
    responsibilities: [
      "Built reusable UI components in React and TypeScript",
      "Integrated REST APIs and handled client-side data validation",
      "Participated in code reviews and sprint planning",
      "Fixed bugs and improved accessibility across the dashboard",
    ],
    techStack: ["React", "TypeScript", "REST APIs", "Git"],
  },
  {
    id: "campus-web-lead",
    role: "Web Development Lead",
    organization: "University Tech Society",
    type: "Volunteer",
    duration: "2023 — Present",
    location: "Gampaha, Sri Lanka",
    description:
      "Lead a small student team building and maintaining websites and internal tools for university society events.",
    responsibilities: [
      "Coordinated a 4-person student dev team",
      "Built and maintained the society's event and registration site",
      "Mentored junior members on Git workflows and React basics",
    ],
    techStack: ["React", "Next.js", "Tailwind CSS", "Git"],
  },
];
