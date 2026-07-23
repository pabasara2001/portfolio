import { SocialLink } from "@/types";

const githubUrl =
  process.env.NEXT_PUBLIC_GITHUB_URL ?? "https://github.com/pabasara2001";

export const socials: SocialLink[] = [
  {
    id: "github",
    name: "GitHub",
    url: githubUrl,
    icon: "Github",
  },
  {
    id: "linkedin",
    name: "LinkedIn",
    url: "https://linkedin.com/in/pabasara-wanamalee",
    icon: "Linkedin",
  },
  {
    id: "email",
    name: "Email",
    url: "mailto:pabasara.wanamalee@example.com",
    icon: "Mail",
  },
  {
    id: "twitter",
    name: "X / Twitter",
    url: "https://x.com/pabasarawanamal",
    icon: "Twitter",
  },
];
