"use client";

import { motion } from "framer-motion";
import { Briefcase, Users } from "lucide-react";
import { experiences } from "@/lib/data";
import { SectionHeading } from "@/components/ui/section-heading";

export function Experience() {
  return (
    <section id="experience" className="px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="Journey" title="Experience" />

        {/* Professional experience */}
        <div className="mt-12">
          <h3 className="font-display text-xl font-bold">
            Professional Experience
          </h3>
          <div className="relative mt-6 border-l-2 border-dashed border-card-border pl-8">
            {experiences.professional.map((exp, i) => (
              <motion.div
                key={exp.role + exp.org}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="relative mb-10 last:mb-0"
              >
                <span className="absolute -left-[41px] flex h-8 w-8 items-center justify-center rounded-full border-2 border-ink bg-accent-2">
                  <Briefcase size={14} />
                </span>

                <div className="rounded-2xl border-2 border-ink bg-card p-6 shadow-playful-sm">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h4 className="font-display text-lg font-bold">
                      {exp.role}
                    </h4>
                    <span className="rounded-full bg-canvas px-3 py-1 text-xs font-semibold text-muted border border-card-border">
                      {exp.period}
                    </span>
                  </div>
                  <p className="mt-1 text-sm font-semibold text-primary">
                    {exp.org}
                  </p>
                  <ul className="mt-3 space-y-2">
                    {exp.points.map((point) => (
                      <li
                        key={point}
                        className="flex gap-2 text-sm leading-relaxed text-muted"
                      >
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-1" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Organizational experience */}
        <div className="mt-16">
          <h3 className="font-display text-xl font-bold">
            Organizational Experience
          </h3>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {experiences.organizational.map((exp, i) => (
              <motion.div
                key={exp.role + exp.org}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ y: -4 }}
                className="rounded-2xl border-2 border-ink bg-card p-6 shadow-playful-sm"
              >
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent-3 border-2 border-ink">
                    <Users size={18} />
                  </div>
                  <div>
                    <h4 className="font-display font-bold">{exp.role}</h4>
                    <p className="text-sm font-semibold text-primary">
                      {exp.org}
                    </p>
                    <p className="text-xs font-medium text-muted">
                      {exp.period}
                    </p>
                  </div>
                </div>
                <ul className="mt-4 space-y-2">
                  {exp.points.map((point) => (
                    <li
                      key={point}
                      className="flex gap-2 text-sm leading-relaxed text-muted"
                    >
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-4" />
                      {point}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
