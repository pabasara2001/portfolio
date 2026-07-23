import { Reveal } from "@/components/motion/reveal";
import { PulseLine } from "@/components/motion/pulse-line";

interface PageHeaderProps {
  eyebrow: string;
  title: string;
  description: string;
}

export function PageHeader({ eyebrow, title, description }: PageHeaderProps) {
  return (
    <section className="relative overflow-hidden border-b border-border/70 bg-card/20 pt-32 pb-16">
      <PulseLine className="pointer-events-none absolute -top-2 left-0 h-24 w-full text-accent/10" />
      <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
        <Reveal>
          <span className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.25em] text-accent">
            <span className="h-px w-6 bg-accent" aria-hidden />
            {eyebrow}
          </span>
          <h1 className="mt-4 max-w-2xl font-display text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
            {title}
          </h1>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
            {description}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
