import Link from "next/link";
import { Home, Compass } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { PulseLine } from "@/components/motion/pulse-line";

export default function NotFound() {
  return (
    <section className="flex min-h-[80vh] flex-col items-center justify-center px-6 text-center">
      <PulseLine className="mb-6 h-16 w-64 text-accent/40" />
      <p className="font-mono text-sm uppercase tracking-[0.3em] text-accent">Error 404</p>
      <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
        This page flatlined.
      </h1>
      <p className="mt-4 max-w-md text-muted-foreground">
        The page you&apos;re looking for doesn&apos;t exist or has moved. Let&apos;s get you back on track.
      </p>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
        <Link href="/" className={buttonVariants({ size: "lg" })}>
          <Home className="h-4 w-4" aria-hidden />
          Back Home
        </Link>
        <Link href="/projects" className={buttonVariants({ variant: "outline", size: "lg" })}>
          <Compass className="h-4 w-4" aria-hidden />
          Browse Projects
        </Link>
      </div>
    </section>
  );
}
