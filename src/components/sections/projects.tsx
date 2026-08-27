"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, FileText } from "lucide-react";
import { projects } from "@/lib/data";

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
      <div className="diagonal-dark mx-auto max-w-6xl rounded-3xl border-2 border-ink px-6 py-12 sm:px-10">
        <span className="text-xs font-bold uppercase tracking-widest text-primary">
          Portfolio
        </span>
        <h2 className="font-display mt-2 text-3xl font-extrabold sm:text-4xl">
          Things I&apos;ve worked on
        </h2>

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
                className="flex flex-col rounded-2xl bg-white text-ink p-5 shadow-playful-sm"
              >
                <FileText size={20} className="text-primary" />
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
                className="group flex flex-col rounded-3xl bg-white/5 p-6"
              >
                <div
                  className={`h-2 w-14 rounded-full ${colorMap[project.color] ?? "bg-primary"}`}
                />
                <span className="mt-4 inline-block w-fit rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white/70">
                  {project.tag}
                </span>
                <h4 className="font-display mt-3 text-xl font-bold">
                  {project.title}
                </h4>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-white/70">
                  {project.subtitle}
                </p>
                {project.link ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex w-fit items-center gap-1 text-sm font-semibold text-accent-2 transition-colors hover:text-white"
                  >
                    View Project <ArrowUpRight size={16} />
                  </a>
                ) : (
                  <span className="mt-4 inline-block w-fit text-xs font-semibold uppercase tracking-wide text-white/40">
                    Coming soon
                  </span>
                )}
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
