"use client";

import { motion } from "framer-motion";
import { skills } from "@/lib/data";
import { SectionHeading } from "@/components/ui/section-heading";

export function Skills() {
  return (
    <section id="skills" className="px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="Skills" title="What I bring to the table" />

        {/* Soft skills */}
        <div className="mt-12">
          <h3 className="font-display text-xl font-bold">Soft Skills</h3>
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {skills.soft.map((skill, i) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                whileHover={{ y: -4 }}
                className="rounded-2xl border-2 border-card-border bg-card p-5"
              >
                <h4 className="font-display font-bold">{skill.name}</h4>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {skill.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Hard skills */}
        <div className="mt-16">
          <h3 className="font-display text-xl font-bold">Hard Skills</h3>
          <div className="mt-6 flex flex-wrap gap-3">
            {skills.hard.map((skill, i) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.3, delay: i * 0.03 }}
                whileHover={{ scale: 1.05, rotate: -1 }}
                className="cursor-default rounded-full border-2 border-ink bg-primary px-5 py-2.5 text-sm font-semibold text-white"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </div>

        {/* Tools */}
        <div className="mt-16">
          <h3 className="font-display text-xl font-bold">My Tools</h3>
          <div className="mt-6 flex flex-wrap gap-3">
            {skills.tools.map((tool, i) => (
              <motion.span
                key={tool}
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.3, delay: i * 0.03 }}
                whileHover={{ scale: 1.05 }}
                className="cursor-default rounded-2xl border-2 border-card-border bg-card px-5 py-2.5 text-sm font-semibold hover:border-accent-3 hover:bg-accent-3/10"
              >
                {tool}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
