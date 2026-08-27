"use client";

import { motion } from "framer-motion";
import { focusAreas } from "@/lib/data";

export function WhyChooseMe() {
  return (
    <section className="px-6 py-16">
      <div className="mx-auto max-w-6xl">
        <span className="text-xs font-bold uppercase tracking-widest text-muted">
          Why Choose Me
        </span>
        <h2 className="font-display mt-2 text-2xl font-extrabold sm:text-3xl">
          I value integrity and professionalism.
        </h2>

        <div className="mt-8 grid gap-4 sm:grid-cols-[1.4fr_1fr]">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5 }}
            className="aspect-[4/3] w-full rounded-3xl border-2 border-ink bg-gradient-to-br from-accent-4 to-primary shadow-playful sm:aspect-auto sm:h-full"
          />
          <div className="grid gap-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="aspect-[4/3] w-full rounded-3xl border-2 border-ink bg-gradient-to-br from-accent-2 to-primary shadow-playful-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="aspect-[4/3] w-full rounded-3xl border-2 border-ink bg-gradient-to-br from-accent-3 to-accent-4 shadow-playful-sm"
            />
          </div>
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          {focusAreas.map((area, i) => (
            <motion.span
              key={area.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.35, delay: i * 0.06 }}
              className="rounded-full border-2 border-ink bg-card px-4 py-2 text-xs font-bold shadow-playful-sm"
            >
              {area.title}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
}
