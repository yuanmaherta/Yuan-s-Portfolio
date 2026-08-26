"use client";

import { motion } from "framer-motion";
import { GraduationCap, MapPin } from "lucide-react";
import { profile, focusAreas, education } from "@/lib/data";
import { SectionHeading } from "@/components/ui/section-heading";

export function About() {
  return (
    <section id="about" className="px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="About Me" title="A little about who I am" />

        <div className="mt-12 grid gap-10 md:grid-cols-5 md:items-start">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: -4 }}
            whileInView={{ opacity: 1, scale: 1, rotate: -2 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            className="md:col-span-2"
          >
            <div className="aspect-square w-full max-w-xs rounded-3xl border-2 border-ink bg-gradient-to-br from-accent-1 via-primary to-accent-4 shadow-playful" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="md:col-span-3"
          >
            <p className="text-lg leading-relaxed text-muted">{profile.bio}</p>

            <div className="mt-6 flex items-center gap-2 text-sm font-medium text-muted">
              <MapPin size={16} />
              {profile.location}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={profile.resumeUrl}
                className="rounded-full bg-accent-2 px-6 py-2.5 text-sm font-bold text-ink shadow-playful-sm transition-transform hover:-translate-y-0.5"
              >
                Download CV
              </a>
            </div>
          </motion.div>
        </div>

        {/* Focus Areas */}
        <div className="mt-16">
          <motion.h3
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.4 }}
            className="font-display text-xl font-bold"
          >
            My Focus Area
          </motion.h3>
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {focusAreas.map((area, i) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                whileHover={{ y: -4 }}
                className="rounded-2xl border-2 border-ink bg-card p-5 shadow-playful-sm"
              >
                <span className="text-2xl font-extrabold text-primary/40">
                  0{i + 1}
                </span>
                <h4 className="font-display mt-2 font-bold leading-snug">
                  {area.title}
                </h4>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {area.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="mt-16">
          <motion.h3
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.4 }}
            className="font-display text-xl font-bold"
          >
            My Education
          </motion.h3>
          <div className="mt-6 space-y-5">
            {education.map((edu, i) => (
              <motion.div
                key={edu.school}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.45, delay: i * 0.1 }}
                className="flex gap-4 rounded-2xl border-2 border-ink bg-card p-6 shadow-playful-sm"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent-4 border-2 border-ink">
                  <GraduationCap size={20} />
                </div>
                <div>
                  <div className="flex flex-wrap items-baseline gap-2">
                    <h4 className="font-display font-bold">{edu.school}</h4>
                    <span className="text-xs font-semibold text-muted">
                      {edu.period}
                    </span>
                  </div>
                  <p className="text-sm font-semibold text-primary">
                    {edu.program}
                  </p>
                  {edu.detail && (
                    <p className="mt-1 text-sm italic text-muted">
                      {edu.detail}
                    </p>
                  )}
                  <p className="mt-1 text-sm font-medium">{edu.grade}</p>
                  {edu.note && (
                    <p className="mt-2 text-sm leading-relaxed text-muted">
                      {edu.note}
                    </p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
