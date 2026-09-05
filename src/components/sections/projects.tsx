"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, FileText } from "lucide-react";
import Image from "next/image";
import { useContent } from "@/lib/use-content";
import { BnspDocuments } from "@/components/sections/bnsp-documents";
import { pillInteraction } from "@/lib/motion-presets";
import { handleChameleonMove } from "@/lib/chameleon";

const colorMap: Record<string, string> = {
  "accent-1": "bg-accent-1",
  "accent-3": "bg-accent-3",
  "accent-4": "bg-accent-4",
  primary: "bg-primary",
  "accent-2": "bg-accent-2",
};

export function Projects() {
  const { projects, ui } = useContent();

  return (
    <section id="projects" className="px-6 py-20">
      <div className="mx-auto max-w-6xl space-y-10">
        <div className="diagonal-dark rounded-3xl border-2 border-ink px-6 py-12 sm:px-10">
          <span className="text-xs font-bold uppercase tracking-widest text-primary">
            {ui.projects.eyebrow}
          </span>
          <h2 className="font-display mt-2 text-3xl font-extrabold sm:text-4xl">
            {ui.projects.title}
          </h2>

          {/* Academic projects */}
          <div className="mt-12">
            <h3 className="font-display text-xl font-bold">{ui.projects.academicHeading}</h3>
            <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {projects.academic.map((project, i) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.45, delay: i * 0.08 }}
                  whileHover={{ y: -4 }}
                  onPointerMove={handleChameleonMove}
                  className="chameleon flex flex-col overflow-hidden rounded-2xl bg-white text-dark shadow-playful-sm"
                >
                  <div className="relative flex aspect-[3/4] w-full items-center justify-center bg-canvas">
                    {project.cover ? (
                      <Image
                        src={project.cover}
                        alt={project.title}
                        fill
                        className="object-cover"
                      />
                    ) : (
                      <FileText size={28} className="text-primary/40" />
                    )}
                  </div>
                  <div className="p-5">
                    <h4 className="font-display font-bold leading-snug">
                      {project.title}
                    </h4>
                    <p className="mt-1 text-sm font-semibold text-[#6b6458]">
                      {project.subject}
                    </p>
                    <p className="mt-2 text-xs font-medium text-[#6b6458]">
                      {project.period}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Digital projects */}
          <div className="mt-16">
            <h3 className="font-display text-xl font-bold">{ui.projects.digitalHeading}</h3>
            <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {projects.digital.map((project, i) => (
                <motion.article
                  key={project.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  whileHover={{ y: -6 }}
                  onPointerMove={handleChameleonMove}
                  className="chameleon group flex flex-col overflow-hidden rounded-3xl bg-white/5"
                >
                  <div className="relative flex aspect-[4/3] w-full items-center justify-center bg-black/30">
                    {project.cover ? (
                      <Image
                        src={project.cover}
                        alt={project.title}
                        fill
                        className="object-cover"
                      />
                    ) : (
                      <div
                        className={`h-2 w-14 rounded-full ${colorMap[project.color] ?? "bg-primary"}`}
                      />
                    )}
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <span className="inline-block w-fit rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white/70">
                      {project.tag}
                    </span>
                    <h4 className="font-display mt-3 text-lg font-bold leading-snug">
                      {project.title}
                    </h4>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-white/70">
                      {project.subtitle}
                    </p>
                    {(project.org || project.role) && (
                      <p className="mt-2 text-xs font-medium text-white/50">
                        {[project.org, project.period, project.role]
                          .filter(Boolean)
                          .join(" · ")}
                      </p>
                    )}
                    {project.link ? (
                      <motion.a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        onPointerMove={handleChameleonMove}
                        {...pillInteraction}
                        className="chameleon mt-4 inline-flex w-fit items-center gap-1 text-sm font-semibold text-accent-2 transition-colors hover:text-white"
                      >
                        {ui.projects.viewProject} <ArrowUpRight size={16} />
                      </motion.a>
                    ) : (
                      <span className="mt-4 inline-block w-fit text-xs font-semibold uppercase tracking-wide text-white/40">
                        {ui.projects.comingSoon}
                      </span>
                    )}
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </div>

        <BnspDocuments />
      </div>
    </section>
  );
}
