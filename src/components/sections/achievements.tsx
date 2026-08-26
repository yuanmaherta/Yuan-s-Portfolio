"use client";

import { motion } from "framer-motion";
import { Trophy } from "lucide-react";
import { achievements } from "@/lib/data";
import { SectionHeading } from "@/components/ui/section-heading";

export function Achievements() {
  return (
    <section id="achievements" className="px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="Recognition" title="Achievements" />

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {achievements.map((item, i) => (
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
                <div className="flex flex-wrap items-baseline gap-2">
                  <h3 className="font-display font-bold">{item.title}</h3>
                  <span className="text-xs font-semibold text-muted">
                    {item.year}
                  </span>
                </div>
                <p className="text-sm font-semibold text-primary">
                  {item.issuer}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
