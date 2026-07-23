"use client";

import Link from "next/link";
import * as Icons from "lucide-react";
import { motion } from "framer-motion";
import { profile } from "@/data/profile";
import { socials } from "@/data/socials";
import { buttonVariants } from "@/components/ui/button";
import { HeroBackground } from "@/components/motion/hero-background";
import { PulseLine } from "@/components/motion/pulse-line";
import { ScrollIndicator } from "@/components/motion/scroll-indicator";
import { useTypingEffect } from "@/hooks/useTypingEffect";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export function Hero() {
  const typed = useTypingEffect({ words: profile.taglineWords });

  return (
    <section className="relative flex min-h-[92vh] items-center overflow-hidden pt-24">
      <HeroBackground />

      <div className="mx-auto grid w-full max-w-6xl gap-12 px-6 lg:grid-cols-[1.1fr,0.9fr] lg:px-8">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.span
            variants={item}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card/50 px-4 py-1.5 font-mono text-xs uppercase tracking-widest text-muted-foreground backdrop-blur-xl"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            Available for internships &amp; freelance work
          </motion.span>

          <motion.h1
            variants={item}
            className="mt-6 font-display text-4xl font-semibold leading-[1.08] tracking-tight text-foreground sm:text-5xl lg:text-6xl"
          >
            Hi, I&apos;m {profile.name.split(" ").slice(-1)[0]} —
            <br />
            <span className="bg-gradient-to-r from-accent via-accent to-amber bg-clip-text text-transparent">
              {typed}
              <span className="animate-pulse text-accent">|</span>
            </span>
          </motion.h1>

          <motion.p variants={item} className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            {profile.headline} Based in {profile.country}, studying {profile.role} at{" "}
            {profile.university}.
          </motion.p>

          <motion.div variants={item} className="mt-9 flex flex-wrap items-center gap-4">
            <Link href="/projects" className={buttonVariants({ size: "lg" })}>
              View Projects
              <Icons.ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
            <a href={profile.resumeUrl} download className={buttonVariants({ variant: "outline", size: "lg" })}>
              <Icons.Download className="h-4 w-4" aria-hidden />
              Download CV
            </a>
          </motion.div>

          <motion.ul variants={item} className="mt-10 flex items-center gap-3">
            {socials.map((social) => {
              const Icon = Icons[social.icon as keyof typeof Icons] as Icons.LucideIcon;
              return (
                <li key={social.id}>
                  <a
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-border text-muted-foreground transition-all hover:-translate-y-0.5 hover:border-accent hover:text-accent"
                  >
                    <Icon className="h-4 w-4" aria-hidden />
                  </a>
                </li>
              );
            })}
          </motion.ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="relative hidden items-center lg:flex"
        >
          <div className="relative w-full rounded-3xl border border-border/70 bg-card/40 p-8 backdrop-blur-xl">
            <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
              Signal
            </p>
            <PulseLine className="mt-4 h-24 w-full text-accent" />
            <div className="mt-6 grid grid-cols-2 gap-4 border-t border-border/60 pt-6">
              <div>
                <p className="font-display text-2xl font-semibold text-foreground">HICT</p>
                <p className="text-xs text-muted-foreground">Health Info &amp; Comm. Tech</p>
              </div>
              <div>
                <p className="font-display text-2xl font-semibold text-foreground">Full Stack</p>
                <p className="text-xs text-muted-foreground">React · Next.js · Node</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <ScrollIndicator />
    </section>
  );
}
