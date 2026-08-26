"use client";

import { motion } from "framer-motion";
import { Award, Trophy } from "lucide-react";
import { achievements } from "@/lib/data";
import { SectionHeading } from "@/components/ui/section-heading";

export function Achievements() {
  return (
    <section id="achievements" className="px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="Recognition" title="Achievements" />

        {/* Awards */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {achievements.awards.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ rotate: i % 2 === 0 ? -1 : 1 }}
              className="flex gap-4 rounded-2xl border-2 border-ink bg-card p-6 shadow-playful-sm"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent-3 border-2 border-ink">
                <Trophy size={20} />
              </div>
              <div>
                <h3 className="font-display font-bold">{item.title}</h3>
                <p className="text-sm font-semibold text-primary">
                  {item.issuer}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {item.detail}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certificates */}
        <div className="mt-16">
          <h3 className="font-display text-xl font-bold">My Certificates</h3>
          <p className="mt-2 text-sm text-muted">
            A collection of certifications that reflects my commitment to
            continuous learning across business, data, and human capital.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {achievements.certificateCategories.map((cert, i) => (
              <motion.div
                key={cert}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                whileHover={{ y: -3 }}
                className="flex items-start gap-3 rounded-2xl border-2 border-card-border bg-card p-4"
              >
                <Award size={18} className="mt-0.5 shrink-0 text-accent-2" />
                <span className="text-sm font-medium leading-snug">
                  {cert}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
