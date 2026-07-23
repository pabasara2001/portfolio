import type { Metadata } from "next";
import { Award, BadgeCheck } from "lucide-react";
import { certificates } from "@/data/certificates";
import { PageHeader } from "@/components/page-header";
import { StaggerGroup, StaggerItem } from "@/components/motion/reveal";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Certificates",
  description: "Professional certifications earned by Pabasara.",
};

export default function CertificatesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Certificates"
        title="Credentials that back up the work."
        description="Courses and certifications completed alongside my degree."
      />

      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
        <StaggerGroup className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {certificates.map((cert) => (
            <StaggerItem key={cert.id}>
              <Card className="h-full">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between gap-3">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                      <Award className="h-5 w-5" aria-hidden />
                    </span>
                    <Badge variant="accent">{cert.date}</Badge>
                  </div>
                  <h3 className="mt-4 font-display text-base font-semibold leading-snug text-foreground">
                    {cert.title}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">{cert.issuer}</p>
                  <div className="mt-4 flex items-center gap-1.5 border-t border-border/60 pt-4 font-mono text-[11px] text-muted-foreground">
                    <BadgeCheck className="h-3.5 w-3.5 text-accent" aria-hidden />
                    {cert.credentialId}
                  </div>
                </CardContent>
              </Card>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </section>
    </>
  );
}
