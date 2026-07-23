import Link from "next/link";
import * as Icons from "lucide-react";
import { NAV_LINKS, SITE_CONFIG } from "@/constants";
import { socials } from "@/data/socials";
import { BackToTop } from "@/components/layout/back-to-top";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-border/70 bg-card/30">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div className="sm:col-span-2 lg:col-span-2">
          <p className="font-display text-lg font-semibold text-foreground">{SITE_CONFIG.name}</p>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted-foreground">
            {SITE_CONFIG.description}
          </p>
        </div>

        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
            Quick Links
          </p>
          <ul className="mt-4 space-y-2.5">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-accent"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
            Connect
          </p>
          <ul className="mt-4 flex flex-wrap gap-2.5">
            {socials.map((social) => {
              const Icon = Icons[social.icon as keyof typeof Icons] as Icons.LucideIcon;
              return (
                <li key={social.id}>
                  <a
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-accent hover:text-accent"
                  >
                    <Icon className="h-4 w-4" aria-hidden />
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <div className="border-t border-border/70">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 py-6 text-xs text-muted-foreground sm:flex-row lg:px-8">
          <p>© {year} {SITE_CONFIG.name}. All rights reserved.</p>
          <p className="font-mono">Built with Next.js, TypeScript &amp; Tailwind CSS.</p>
        </div>
      </div>

      <BackToTop />
    </footer>
  );
}
