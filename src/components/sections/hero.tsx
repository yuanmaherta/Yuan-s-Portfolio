"use client";

import { motion } from "framer-motion";
import { ArrowDown, Sparkles } from "lucide-react";
import { profile } from "@/lib/data";

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden px-6 pt-16 pb-24 sm:pt-24"
    >
      {/* decorative blobs */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full blob-gradient opacity-30 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-40 -left-24 h-64 w-64 rounded-full bg-accent-3 opacity-20 blur-3xl"
      />

      <div className="relative mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 rounded-full border border-card-border bg-card px-4 py-1.5 text-sm font-medium shadow-playful-sm"
        >
          <Sparkles size={16} className="text-accent-2" />
          Open to opportunities
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display mt-6 max-w-3xl text-4xl font-extrabold leading-[1.05] sm:text-6xl md:text-7xl"
        >
          Hi, I&apos;m{" "}
          <span className="relative inline-block whitespace-nowrap">
            <span className="relative z-10">{profile.name.split(" ")[0]}</span>
            <span
              aria-hidden
              className="absolute inset-x-0 bottom-2 -z-0 h-4 -rotate-1 bg-accent-2/60 sm:h-6"
            />
          </span>{" "}
          — {profile.role}.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 max-w-xl text-lg text-muted"
        >
          {profile.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a
            href="#projects"
            className="rounded-full bg-primary px-7 py-3 font-semibold text-white shadow-playful transition-transform hover:-translate-y-1"
          >
            See my work
          </a>
          <a
            href="#contact"
            className="rounded-full border-2 border-ink px-7 py-3 font-semibold text-ink transition-transform hover:-translate-y-1"
          >
            Get in touch
          </a>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="mt-20 flex justify-center text-muted"
      >
        <ArrowDown size={22} />
      </motion.div>
    </section>
  );
}
