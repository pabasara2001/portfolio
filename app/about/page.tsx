import type { Metadata } from "next";
import { profile } from "@/data/profile";
import { PageHeader } from "@/components/page-header";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/motion/reveal";
import { CheckCircle2, Target, GraduationCap, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "About",
  description: `Learn more about ${profile.name}, a ${profile.role} from ${profile.country}.`,
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="A little more about how I think and build."
        description="The story, the objective, and the details behind the projects."
      />

      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-[0.8fr,1.2fr] lg:items-start">
          <Reveal className="lg:sticky lg:top-28">
            <div className="mt-0 space-y-3 rounded-2xl border border-border/70 bg-card/40 p-5">
              <div className="flex items-center gap-2.5 text-sm text-muted-foreground">
                <GraduationCap className="h-4 w-4 text-accent" aria-hidden />
                {profile.university}
              </div>
              <div className="flex items-center gap-2.5 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 text-accent" aria-hidden />
                {profile.location}
              </div>
            </div>
          </Reveal>

          <div className="space-y-14">
            <div>
              <h2 className="font-display text-xl font-semibold text-foreground">Biography</h2>
              <div className="mt-4 space-y-4">
                {profile.bio.map((paragraph, i) => (
                  <Reveal key={i} delay={i * 0.06}>
                    <p className="text-base leading-relaxed text-muted-foreground">{paragraph}</p>
                  </Reveal>
                ))}
              </div>
            </div>

            <Reveal>
              <div className="flex items-start gap-3 rounded-2xl border border-accent/20 bg-accent/5 p-6">
                <Target className="mt-0.5 h-5 w-5 shrink-0 text-accent" aria-hidden />
                <div>
                  <h2 className="font-display text-lg font-semibold text-foreground">
                    Career Objective
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {profile.objective}
                  </p>
                </div>
              </div>
            </Reveal>

            <div>
              <h2 className="font-display text-xl font-semibold text-foreground">
                Personal Highlights
              </h2>
              <StaggerGroup className="mt-4 grid gap-3 sm:grid-cols-2">
                {profile.highlights.map((highlight) => (
                  <StaggerItem key={highlight}>
                    <div className="flex items-start gap-2.5 rounded-xl border border-border/70 bg-card/40 p-4">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden />
                      <span className="text-sm text-muted-foreground">{highlight}</span>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerGroup>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
