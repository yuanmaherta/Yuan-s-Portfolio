"use client";

import { motion } from "framer-motion";
import { useContent } from "@/lib/use-content";

export function FocusFlow() {
  const { focusAreas, ui } = useContent();

  return (
    <div className="px-6 py-16">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl border-2 border-ink bg-card px-6 py-12 shadow-playful sm:px-10">
        <div
          aria-hidden
          className="pointer-events-none absolute -left-20 -top-24 h-72 w-72 rotate-12 rounded-[3rem] bg-primary/15 blur-2xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-24 -right-16 h-64 w-64 -rotate-12 rounded-[3rem] bg-accent-2/40 blur-2xl"
        />

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.4 }}
          className="relative font-display text-2xl font-extrabold sm:text-3xl"
        >
          {ui.focusFlow.heading}
        </motion.h2>
        <div className="relative mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {focusAreas.map((area, i) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              whileHover={{ y: -4 }}
              className="rounded-2xl border-2 border-ink bg-canvas p-5 shadow-playful-sm"
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
    </div>
  );
}
