"use client";

import { motion } from "framer-motion";
import { homeActivities } from "@/lib/data";
import { SectionHeading } from "@/components/ui/section-heading";

export function HomeActivities() {
  return (
    <section className="px-6 py-16">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="News"
          title="My Activities & Projects"
          align="center"
        />
        <p className="mx-auto mt-3 max-w-xl text-center text-sm text-muted">
          A showcase of my practical work across human capital, business
          development, marketing, and strategic project management.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {homeActivities.map((activity, i) => (
            <motion.div
              key={activity.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              whileHover={{ y: -4 }}
              className="flex flex-col overflow-hidden rounded-2xl border-2 border-ink bg-card shadow-playful-sm"
            >
              <div className="aspect-video w-full bg-gradient-to-br from-accent-4 to-primary" />
              <div className="flex flex-1 flex-col p-5">
                <h4 className="font-display font-bold leading-snug">
                  {activity.title}
                </h4>
                <p className="mt-2 text-xs font-medium text-muted">
                  {activity.date}
                </p>
                <a
                  href={activity.ctaHref}
                  target={activity.ctaHref.startsWith("http") ? "_blank" : undefined}
                  rel={activity.ctaHref.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="mt-4 inline-flex w-fit items-center gap-1 rounded-full bg-primary px-4 py-2 text-xs font-bold text-white transition-transform hover:-translate-y-0.5"
                >
                  {activity.ctaLabel} ↗
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
