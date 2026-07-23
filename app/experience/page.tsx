import type { Metadata } from "next";
import { experience } from "@/data/experience";
import { PageHeader } from "@/components/page-header";
import { Timeline } from "@/components/timeline";

export const metadata: Metadata = {
  title: "Experience",
  description: "Internship, freelance, and volunteer experience of Pabasara.",
};

export default function ExperiencePage() {
  const entries = experience.map((item) => ({
    id: item.id,
    period: item.duration,
    title: item.role,
    subtitle: `${item.organization} · ${item.type}`,
    location: item.location,
    description: item.description,
    bullets: item.responsibilities,
    tags: item.techStack,
  }));

  return (
    <>
      <PageHeader
        eyebrow="Experience"
        title="Where I've put the skills to work."
        description="Internships, freelance projects, and volunteer leadership roles."
      />
      <section className="mx-auto max-w-4xl px-6 py-20 lg:px-8">
        <Timeline entries={entries} />
      </section>
    </>
  );
}
