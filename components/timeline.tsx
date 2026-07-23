import { Reveal } from "@/components/motion/reveal";

interface TimelineEntry {
  id: string;
  period: string;
  title: string;
  subtitle: string;
  location?: string;
  description: string;
  bullets?: string[];
  tags?: string[];
}

export function Timeline({ entries }: { entries: TimelineEntry[] }) {
  return (
    <ol className="relative border-l border-border/70 pl-8">
      {entries.map((entry, i) => (
        <Reveal as="li" key={entry.id} delay={i * 0.05} className="relative pb-12 last:pb-0">
          <span className="absolute -left-[calc(2rem+5px)] top-1 flex h-3 w-3 items-center justify-center rounded-full bg-accent ring-4 ring-background" />
          <span className="font-mono text-xs uppercase tracking-widest text-accent">
            {entry.period}
          </span>
          <h3 className="mt-1.5 font-display text-lg font-semibold text-foreground">
            {entry.title}
          </h3>
          <p className="text-sm text-muted-foreground">
            {entry.subtitle}
            {entry.location ? ` · ${entry.location}` : ""}
          </p>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
            {entry.description}
          </p>
          {entry.bullets && entry.bullets.length > 0 && (
            <ul className="mt-3 space-y-1.5">
              {entry.bullets.map((bullet) => (
                <li key={bullet} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                  {bullet}
                </li>
              ))}
            </ul>
          )}
          {entry.tags && entry.tags.length > 0 && (
            <div className="mt-3 flex flex-wrap gap-1.5">
              {entry.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-muted px-2.5 py-1 text-xs text-muted-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </Reveal>
      ))}
    </ol>
  );
}
