import Link from "next/link";
import * as Icons from "lucide-react";
import { ArrowUpRight } from "lucide-react";
import { skills } from "@/data/skills";
import { SectionHeading } from "@/components/section-heading";
import { StaggerGroup, StaggerItem } from "@/components/motion/reveal";
import { Card } from "@/components/ui/card";

export function SkillsPreview() {
  const preview = skills.slice(0, 6);

  return (
    <section className="border-y border-border/70 bg-card/20">
      <div className="mx-auto max-w-6xl px-6 py-24 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Toolbox"
            title="What I build with."
            description="A working set of languages, frameworks, and tools I reach for across the stack."
          />
          <Link
            href="/skills"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:underline underline-offset-4"
          >
            Full skill set
            <ArrowUpRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>

        <StaggerGroup className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {preview.map((group) => {
            const Icon = Icons[group.icon as keyof typeof Icons] as Icons.LucideIcon;
            return (
              <StaggerItem key={group.id}>
                <Card className="h-full p-6">
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <h3 className="font-display text-base font-semibold text-foreground">
                      {group.category}
                    </h3>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {group.items.slice(0, 6).map((skill) => (
                      <span
                        key={skill.id}
                        className="rounded-full bg-muted px-2.5 py-1 text-xs text-muted-foreground"
                      >
                        {skill.name}
                      </span>
                    ))}
                  </div>
                </Card>
              </StaggerItem>
            );
          })}
        </StaggerGroup>
      </div>
    </section>
  );
}
