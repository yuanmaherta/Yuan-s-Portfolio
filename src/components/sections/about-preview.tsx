"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { profile, skills } from "@/lib/data";

export function AboutPreview() {
  return (
    <section className="px-6 py-16">
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-5 md:items-start">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotate: -3 }}
          whileInView={{ opacity: 1, scale: 1, rotate: -2 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          className="md:col-span-2"
        >
          <div className="aspect-[4/5] w-full max-w-xs rounded-3xl border-2 border-ink bg-gradient-to-br from-primary to-accent-2 shadow-playful" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="md:col-span-3"
        >
          <h2 className="font-display text-3xl font-extrabold sm:text-4xl">
            About <span className="text-primary">Me</span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted">
            {profile.bio}
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/about"
              className="rounded-full bg-primary px-6 py-2.5 text-sm font-bold text-white shadow-playful-sm transition-transform hover:-translate-y-0.5"
            >
              Contact me ↗ Let&apos;s Connect!
            </Link>
          </div>

          <div className="mt-8 rounded-2xl border-2 border-card-border bg-card p-5">
            <h3 className="font-display text-sm font-bold">
              My <span className="text-primary">Tools</span>
            </h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {skills.tools.map((tool) => (
                <span
                  key={tool}
                  className="rounded-full border border-card-border bg-canvas px-3 py-1 text-xs font-semibold text-muted"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
