"use client";

import { motion } from "framer-motion";
import { useContent } from "@/lib/use-content";

export function Hero() {
  const { profile, trustedCompanies, whyHireMe, ui } = useContent();

  return (
    <section id="top" className="relative overflow-hidden">
      <div className="px-6 pt-14 pb-16 sm:pt-20">
        <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full border border-card-border bg-card px-4 py-1.5 text-sm font-medium shadow-playful-sm"
            >
              {ui.hero.hello}
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display mt-5 max-w-xl text-4xl font-extrabold leading-[1.08] sm:text-5xl md:text-6xl"
            >
              {ui.hero.imPrefix}{" "}
              <span className="text-primary">{profile.name.split(" ")[0]}</span>
              <br />
              {ui.hero.welcomeLine}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-6 max-w-md border-l-4 border-primary pl-4 text-lg italic text-muted"
            >
              &ldquo;{profile.tagline}&rdquo;
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-8"
            >
              <a
                href={profile.resumeUrl}
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-semibold text-white shadow-playful-sm transition-transform hover:-translate-y-1"
              >
                {ui.hero.cvLabel} ↗{" "}
                <span className="font-normal">{ui.hero.cvDownload}</span>
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="relative mx-auto aspect-[4/5] w-full max-w-sm rounded-[2.5rem] border-2 border-ink bg-gradient-to-br from-primary to-accent-2 shadow-playful"
          />
        </div>
      </div>

      {/* Trusted companies strip */}
      <div className="border-y border-card-border bg-card/60 py-6">
        <p className="text-center text-xs font-semibold uppercase tracking-widest text-muted">
          {ui.hero.trustedLabel}
        </p>
        <div className="mx-auto mt-4 flex max-w-5xl flex-wrap items-center justify-center gap-x-8 gap-y-3 px-6">
          {trustedCompanies.map((company) => (
            <span
              key={company}
              className="text-sm font-bold tracking-tight text-muted/70"
            >
              {company}
            </span>
          ))}
        </div>
      </div>

      {/* Why hire me */}
      <div className="px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h2 className="font-display text-2xl font-extrabold sm:text-3xl">
              {ui.hero.whyHireTitle}
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm text-muted">
              {ui.hero.whyHireSubtitle}
            </p>
          </motion.div>

          <div className="mt-10 grid gap-5 sm:grid-cols-3">
            {whyHireMe.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.45, delay: i * 0.1 }}
                whileHover={{ y: -4 }}
                className="rounded-2xl border-2 border-ink bg-card p-6 shadow-playful-sm"
              >
                <span className="text-xs font-bold text-primary">
                  0{i + 1}
                </span>
                <h3 className="font-display mt-2 font-bold">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
