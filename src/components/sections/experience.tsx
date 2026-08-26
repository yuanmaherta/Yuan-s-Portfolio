"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { experiences } from "@/lib/data";
import { SectionHeading } from "@/components/ui/section-heading";

export function Experience() {
  return (
    <section id="experience" className="px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="Journey" title="Experience" />

        <div className="relative mt-12 border-l-2 border-dashed border-card-border pl-8">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.role + exp.org}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative mb-10 last:mb-0"
            >
              <span className="absolute -left-[41px] flex h-8 w-8 items-center justify-center rounded-full border-2 border-ink bg-accent-2">
                <Briefcase size={14} />
              </span>

              <div className="rounded-2xl border-2 border-ink bg-card p-6 shadow-playful-sm">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="font-display text-lg font-bold">{exp.role}</h3>
                  <span className="rounded-full bg-canvas px-3 py-1 text-xs font-semibold text-muted border border-card-border">
                    {exp.period}
                  </span>
                </div>
                <p className="mt-1 text-sm font-semibold text-primary">
                  {exp.org}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {exp.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
