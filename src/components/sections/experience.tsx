"use client";

import { motion } from "framer-motion";
import { Briefcase, Users } from "lucide-react";
import { experiences, experienceIntro } from "@/lib/data";
import { SectionHeading } from "@/components/ui/section-heading";

const orgColors = ["bg-accent-1", "bg-accent-4", "bg-accent-3", "bg-primary"];

export function Experience() {
  return (
    <section id="experience" className="px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="Journey" title="My Experiences" align="center" />

        {/* Intro */}
        <div className="mt-10 grid gap-8 md:grid-cols-[1fr_1.3fr] md:items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5 }}
            className="aspect-video w-full rounded-3xl border-2 border-ink bg-gradient-to-br from-accent-4 to-primary shadow-playful md:aspect-[4/3]"
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="border-l-4 border-primary pl-5 text-base italic leading-relaxed text-muted sm:text-lg"
          >
            &ldquo;{experienceIntro}&rdquo;
          </motion.p>
        </div>

        {/* Professional experience — dark diagonal band */}
        <div className="diagonal-dark mt-16 rounded-3xl border-2 border-ink px-6 py-12 sm:px-10">
          <h3 className="font-display text-2xl font-extrabold">
            My Professional Experience
          </h3>

          <div className="relative mt-8 border-l-2 border-dashed border-white/20 pl-8">
            {experiences.professional.map((exp, i) => (
              <motion.div
                key={exp.role + exp.org}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="relative mb-8 last:mb-0"
              >
                <span className="absolute -left-[41px] flex h-8 w-8 items-center justify-center rounded-full border-2 border-white/40 bg-primary">
                  <Briefcase size={14} className="text-white" />
                </span>

                <div className="rounded-2xl bg-white/5 p-6">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h4 className="text-lg font-bold">{exp.role}</h4>
                    <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white/70">
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
                        className="flex gap-2 text-sm leading-relaxed text-white/70"
                      >
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-2" />
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
            My Organizational Experience
          </h3>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            {experiences.organizational.map((exp, i) => (
              <motion.div
                key={exp.role + exp.org}
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="flex items-center gap-2 rounded-full border-2 border-ink bg-card py-1.5 pl-1.5 pr-4 shadow-playful-sm"
              >
                <span
                  className={`flex h-8 w-8 items-center justify-center rounded-full border-2 border-ink ${orgColors[i % orgColors.length]}`}
                >
                  <Users size={14} className="text-white" />
                </span>
                <span className="text-xs font-bold">{exp.org.split(",")[0]}</span>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
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
                  <div
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border-2 border-ink ${orgColors[i % orgColors.length]}`}
                  >
                    <Users size={18} className="text-white" />
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
