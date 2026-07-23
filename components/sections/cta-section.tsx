import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";
import { profile } from "@/data/profile";
import { Reveal } from "@/components/motion/reveal";
import { buttonVariants } from "@/components/ui/button";
import { PulseLine } from "@/components/motion/pulse-line";

export function CtaSection() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24 lg:px-8">
      <Reveal className="relative overflow-hidden rounded-3xl border border-border/70 bg-card/40 px-8 py-16 text-center backdrop-blur-xl sm:px-16">
        <PulseLine className="pointer-events-none absolute inset-x-0 top-0 h-16 w-full text-accent/20" />
        <span className="font-mono text-xs uppercase tracking-[0.3em] text-accent">
          Let&apos;s work together
        </span>
        <h2 className="mx-auto mt-4 max-w-xl font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          Have a project, internship, or idea in mind?
        </h2>
        <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
          {profile.objective}
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link href="/contact" className={buttonVariants({ size: "lg" })}>
            <Mail className="h-4 w-4" aria-hidden />
            Get in Touch
          </Link>
          <Link href="/projects" className={buttonVariants({ variant: "outline", size: "lg" })}>
            See My Work
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>
      </Reveal>
    </section>
  );
}
