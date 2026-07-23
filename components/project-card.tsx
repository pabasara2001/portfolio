"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import { Project } from "@/types";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { ProjectThumb } from "@/components/project-thumb";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.div whileHover={{ y: -6 }} transition={{ type: "spring", stiffness: 300, damping: 22 }}>
      <Card className="flex h-full flex-col overflow-hidden p-0">
        <ProjectThumb title={project.title} category={project.category} />

        <CardHeader className="pb-0">
          <div className="flex items-center justify-between gap-2">
            <CardTitle>{project.title}</CardTitle>
            <Badge variant={project.status === "Completed" ? "accent" : "amber"}>
              {project.status}
            </Badge>
          </div>
          <CardDescription>{project.description}</CardDescription>
        </CardHeader>

        <CardContent className="flex-1">
          <ul className="space-y-1.5">
            {project.features.slice(0, 3).map((feature) => (
              <li key={feature} className="flex items-start gap-2 text-xs text-muted-foreground">
                <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                {feature}
              </li>
            ))}
          </ul>

          <div className="mt-4 flex flex-wrap gap-1.5">
            {project.techStack.map((tech) => (
              <Badge key={tech} variant="default">
                {tech}
              </Badge>
            ))}
          </div>
        </CardContent>

        <CardFooter>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={buttonVariants({ variant: "outline", size: "sm" }) + " flex-1"}
          >
            <Github className="h-3.5 w-3.5" aria-hidden />
            Code
          </a>
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={buttonVariants({ variant: "primary", size: "sm" }) + " flex-1"}
          >
            <ExternalLink className="h-3.5 w-3.5" aria-hidden />
            Live Demo
          </a>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
