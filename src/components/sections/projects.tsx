"use client";

import { motion } from "framer-motion";
import { FileBadge2, FolderKanban } from "lucide-react";
import { projects } from "@/lib/data";
import { SectionHeading } from "@/components/ui/section-heading";

const colorMap: Record<string, string> = {
  "accent-1": "bg-accent-1",
  "accent-3": "bg-accent-3",
  "accent-4": "bg-accent-4",
  primary: "bg-primary",
  "accent-2": "bg-accent-2",
};

export function Projects() {
  return (
    <section id="projects" className="px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="Portfolio" title="Things I've worked on" />

        {/* Academic projects */}
        <div className="mt-12">
          <h3 className="font-display text-xl font-bold">Academic Projects</h3>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {projects.academic.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                whileHover={{ y: -4 }}
                className="rounded-2xl border-2 border-ink bg-card p-5 shadow-playful-sm"
              >
                <FileBadge2 size={20} className="text-primary" />
                <h4 className="font-display mt-3 font-bold leading-snug">
                  {project.title}
                </h4>
                <p className="mt-1 text-sm font-semibold text-muted">
                  {project.subject}
                </p>
                <p className="mt-2 text-xs font-medium text-muted">
                  {project.period}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Digital projects */}
        <div className="mt-16">
          <h3 className="font-display text-xl font-bold">Digital Projects</h3>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.digital.map((project, i) => (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ y: -6 }}
                className="group flex flex-col rounded-3xl border-2 border-ink bg-card p-6 shadow-playful-sm transition-shadow hover:shadow-playful"
              >
                <div
                  className={`h-2 w-14 rounded-full ${colorMap[project.color] ?? "bg-primary"}`}
                />
                <span className="mt-4 inline-block w-fit rounded-full bg-canvas px-3 py-1 text-xs font-semibold text-muted border border-card-border">
                  {project.tag}
                </span>
                <h4 className="font-display mt-3 text-xl font-bold">
                  {project.title}
                </h4>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                  {project.subtitle}
                </p>
              </motion.article>
            ))}
          </div>
        </div>

        {/* BNSP certification highlight */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="mt-16 rounded-3xl border-2 border-ink bg-ink p-8 text-canvas shadow-playful"
        >
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent-2 border-2 border-canvas">
              <FolderKanban size={22} className="text-ink" />
            </div>
            <div>
              <h4 className="font-display text-xl font-bold">
                {projects.certificationHighlight.title}
              </h4>
              <p className="mt-3 text-sm leading-relaxed text-canvas/80">
                {projects.certificationHighlight.description}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
