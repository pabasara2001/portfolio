import type { Metadata } from "next";
import { education } from "@/data/education";
import { PageHeader } from "@/components/page-header";
import { Timeline } from "@/components/timeline";

export const metadata: Metadata = {
  title: "Education",
  description: "Academic background of Pabasara.",
};

export default function EducationPage() {
  const entries = education.map((item) => ({
    id: item.id,
    period: item.duration,
    title: item.qualification,
    subtitle: item.institution,
    location: item.location,
    description: item.description,
    bullets: item.achievements,
  }));

  return (
    <>
      <PageHeader
        eyebrow="Education"
        title="Academic background."
        description="From secondary school to an undergraduate degree focused on health information technology."
      />
      <section className="mx-auto max-w-4xl px-6 py-20 lg:px-8">
        <Timeline entries={entries} />
      </section>
    </>
  );
}
