import type { Metadata } from "next";
import * as Icons from "lucide-react";
import { skills } from "@/data/skills";
import { PageHeader } from "@/components/page-header";
import { StaggerGroup, StaggerItem } from "@/components/motion/reveal";
import { Card } from "@/components/ui/card";
import { SkillBar } from "@/components/skill-bar";

export const metadata: Metadata = {
  title: "Skills",
  description: "Frontend, backend, languages, database, tools, cloud, and UI/UX skills.",
};

export default function SkillsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Skills"
        title="The stack I build with, end to end."
        description="Everything below is a working skill I use regularly — not an aspirational list."
      />

      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
        <StaggerGroup className="grid gap-6 md:grid-cols-2">
          {skills.map((group) => {
            const Icon = Icons[group.icon as keyof typeof Icons] as Icons.LucideIcon;
            return (
              <StaggerItem key={group.id}>
                <Card className="h-full p-6">
                  <div className="flex items-center gap-3">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <h2 className="font-display text-lg font-semibold text-foreground">
                      {group.category}
                    </h2>
                  </div>

                  <div className="mt-6 space-y-4">
                    {group.items.map((skill) => (
                      <SkillBar key={skill.id} name={skill.name} level={skill.level} />
                    ))}
                  </div>
                </Card>
              </StaggerItem>
            );
          })}
        </StaggerGroup>
      </section>
    </>
  );
}
