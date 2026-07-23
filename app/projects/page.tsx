import type { Metadata } from "next";
import { projects } from "@/data/projects";
import { PageHeader } from "@/components/page-header";
import { StaggerGroup, StaggerItem } from "@/components/motion/reveal";
import { ProjectCard } from "@/components/project-card";

export const metadata: Metadata = {
  title: "Projects",
  description: "A collection of full stack web applications and systems I've designed and built.",
};

export default function ProjectsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Projects"
        title="Systems I've designed, built, and shipped."
        description="Demo products built end-to-end — from problem statement to interface — spanning healthcare, emergency management, retail, and productivity tooling."
      />

      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
        <StaggerGroup className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <StaggerItem key={project.id}>
              <ProjectCard project={project} />
            </StaggerItem>
          ))}
        </StaggerGroup>
      </section>
    </>
  );
}
