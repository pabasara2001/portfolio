import Link from "next/link";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { profile } from "@/data/profile";
import { SectionHeading } from "@/components/section-heading";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/motion/reveal";
import { AvatarPlaceholder } from "@/components/avatar-placeholder";

export function AboutPreview() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24 lg:px-8">
      <div className="grid gap-14 lg:grid-cols-[0.85fr,1.15fr] lg:items-center">
        <Reveal>
          <AvatarPlaceholder
            className="mx-auto aspect-square w-full max-w-sm"
            src={profile.avatarUrl}
            alt={`Portrait of ${profile.name}`}
          />
        </Reveal>

        <div>
          <SectionHeading
            eyebrow="About Me"
            title="Building software with a healthcare-informed eye for detail."
          />
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
            {profile.bio[0]}
          </p>

          <StaggerGroup className="mt-8 grid gap-3 sm:grid-cols-2">
            {profile.highlights.map((highlight) => (
              <StaggerItem key={highlight}>
                <div className="flex items-start gap-2.5 rounded-xl border border-border/70 bg-card/40 p-4">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden />
                  <span className="text-sm text-muted-foreground">{highlight}</span>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>

          <Link
            href="/about"
            className="mt-8 inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:underline underline-offset-4"
          >
            More about me
            <ArrowUpRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>
      </div>
    </section>
  );
}
