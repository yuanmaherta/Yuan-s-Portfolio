"use client";

import { motion } from "framer-motion";
import { skills } from "@/lib/data";
import { SectionHeading } from "@/components/ui/section-heading";

const groupColors: Record<string, string> = {
  Language: "hover:bg-accent-1/20 hover:border-accent-1",
  Frontend: "hover:bg-accent-3/20 hover:border-accent-3",
  Backend: "hover:bg-accent-4/20 hover:border-accent-4",
  Database: "hover:bg-primary/20 hover:border-primary",
  Tools: "hover:bg-accent-2/30 hover:border-accent-2",
};

export function Skills() {
  return (
    <section id="skills" className="px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="Skills" title="Tools & technologies I use" />

        <div className="mt-12 flex flex-wrap gap-3">
          {skills.map((skill, i) => (
            <motion.span
              key={skill.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.35, delay: i * 0.03 }}
              whileHover={{ scale: 1.06, rotate: -1 }}
              className={`cursor-default rounded-2xl border-2 border-card-border bg-card px-5 py-2.5 text-sm font-semibold transition-colors ${
                groupColors[skill.group] ?? ""
              }`}
            >
              {skill.name}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
}
