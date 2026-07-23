import type { Metadata } from "next";
import * as Icons from "lucide-react";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { contact } from "@/data/contact";
import { socials } from "@/data/socials";
import { PageHeader } from "@/components/page-header";
import { Reveal } from "@/components/motion/reveal";
import { Card, CardContent } from "@/components/ui/card";
import { ContactForm } from "@/components/contact-form";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Pabasara for internships, freelance work, or collaboration.",
};

const infoItems = [
  { icon: Mail, label: "Email", value: contact.email, href: `mailto:${contact.email}` },
  { icon: Phone, label: "Phone", value: contact.phone, href: `tel:${contact.phone.replace(/\s/g, "")}` },
  { icon: MapPin, label: "Location", value: contact.location },
  { icon: Clock, label: "Availability", value: contact.availability },
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Let's build something."
        description="Reach out about internships, freelance projects, or just to talk shop."
      />

      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.85fr,1.15fr]">
          <Reveal className="space-y-5">
            {infoItems.map((item) => {
              const Icon = item.icon;
              const content = (
                <Card className="p-5">
                  <CardContent className="flex items-center gap-4 p-0">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <div>
                      <p className="text-xs uppercase tracking-wider text-muted-foreground">
                        {item.label}
                      </p>
                      <p className="text-sm font-medium text-foreground">{item.value}</p>
                    </div>
                  </CardContent>
                </Card>
              );
              return item.href ? (
                <a key={item.label} href={item.href} className="block">
                  {content}
                </a>
              ) : (
                <div key={item.label}>{content}</div>
              );
            })}

            <div className="flex items-center gap-2.5 pt-2">
              {socials.map((social) => {
                const Icon = Icons[social.icon as keyof typeof Icons] as Icons.LucideIcon;
                return (
                  <a
                    key={social.id}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-border text-muted-foreground transition-all hover:-translate-y-0.5 hover:border-accent hover:text-accent"
                  >
                    <Icon className="h-4 w-4" aria-hidden />
                  </a>
                );
              })}
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <Card className="p-6 sm:p-8">
              <ContactForm />
            </Card>
          </Reveal>
        </div>
      </section>
    </>
  );
}
