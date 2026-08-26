"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Code2 } from "lucide-react";
import { projects } from "@/lib/data";
import { SectionHeading } from "@/components/ui/section-heading";

const colorMap: Record<string, string> = {
  "accent-1": "bg-accent-1",
  "accent-3": "bg-accent-3",
  "accent-4": "bg-accent-4",
};

export function Projects() {
  return (
    <section id="projects" className="px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="Portfolio" title="Things I've built" />

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="group flex flex-col rounded-3xl border-2 border-ink bg-card p-6 shadow-playful-sm transition-shadow hover:shadow-playful"
            >
              <div
                className={`h-2 w-14 rounded-full ${colorMap[project.color] ?? "bg-primary"}`}
              />
              <h3 className="font-display mt-5 text-xl font-bold">
                {project.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                {project.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-canvas px-3 py-1 text-xs font-medium text-muted border border-card-border"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex items-center gap-4 text-sm font-semibold">
                <a
                  href={project.href}
                  className="inline-flex items-center gap-1 text-ink transition-colors group-hover:text-primary"
                >
                  Live demo <ArrowUpRight size={16} />
                </a>
                <a
                  href={project.repo}
                  className="inline-flex items-center gap-1 text-muted transition-colors hover:text-ink"
                >
                  <Code2 size={16} /> Code
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
