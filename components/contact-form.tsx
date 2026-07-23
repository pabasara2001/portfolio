"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

/** UI-only contact form — there is no backend, so submission simulates success locally. */
export function ContactForm() {
  const [status, setStatus] = React.useState<"idle" | "sending" | "sent">("idle");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    window.setTimeout(() => setStatus("sent"), 900);
  }

  if (status === "sent") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col items-center justify-center gap-3 rounded-2xl border border-accent/30 bg-accent/5 px-6 py-16 text-center"
      >
        <CheckCircle2 className="h-10 w-10 text-accent" aria-hidden />
        <h3 className="font-display text-lg font-semibold text-foreground">Message received</h3>
        <p className="max-w-sm text-sm text-muted-foreground">
          This form is a UI demo without a live backend, but in production this is where your
          message would land in my inbox. Feel free to email me directly in the meantime.
        </p>
        <Button variant="outline" size="sm" onClick={() => setStatus("idle")} className="mt-2">
          Send another message
        </Button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" aria-label="Contact form">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-foreground">
            Name
          </label>
          <Input id="name" name="name" placeholder="Your name" required />
        </div>
        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-foreground">
            Email
          </label>
          <Input id="email" name="email" type="email" placeholder="you@example.com" required />
        </div>
      </div>
      <div>
        <label htmlFor="subject" className="mb-1.5 block text-sm font-medium text-foreground">
          Subject
        </label>
        <Input id="subject" name="subject" placeholder="What's this about?" required />
      </div>
      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-foreground">
          Message
        </label>
        <Textarea id="message" name="message" placeholder="Tell me a bit about the project…" required />
      </div>
      <Button type="submit" size="lg" disabled={status === "sending"} className="w-full sm:w-auto">
        <AnimatePresence mode="wait" initial={false}>
          {status === "sending" ? (
            <motion.span
              key="sending"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex items-center gap-2"
            >
              Sending…
            </motion.span>
          ) : (
            <motion.span
              key="send"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex items-center gap-2"
            >
              <Send className="h-4 w-4" aria-hidden />
              Send Message
            </motion.span>
          )}
        </AnimatePresence>
      </Button>
    </form>
  );
}
