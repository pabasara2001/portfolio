import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/projects";
import { SectionHeading } from "@/components/section-heading";
import { StaggerGroup, StaggerItem } from "@/components/motion/reveal";
import { ProjectCard } from "@/components/project-card";

export function FeaturedProjects() {
  const featured = projects.filter((p) => p.featured).slice(0, 3);

  return (
    <section className="mx-auto max-w-6xl px-6 py-24 lg:px-8">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <SectionHeading
          eyebrow="Selected Work"
          title="Projects worth a closer look."
          description="A handful of the full stack systems I've designed and built end-to-end, from problem statement to deployable UI."
        />
        <Link
          href="/projects"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:underline underline-offset-4"
        >
          All projects
          <ArrowUpRight className="h-4 w-4" aria-hidden />
        </Link>
      </div>

      <StaggerGroup className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {featured.map((project) => (
          <StaggerItem key={project.id}>
            <ProjectCard project={project} />
          </StaggerItem>
        ))}
      </StaggerGroup>
    </section>
  );
}
