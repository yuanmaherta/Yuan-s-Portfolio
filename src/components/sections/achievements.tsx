"use client";

import { motion } from "framer-motion";
import { Award } from "lucide-react";
import { achievements } from "@/lib/data";
import { SectionHeading } from "@/components/ui/section-heading";

const photoGradients = [
  "from-accent-1 to-primary",
  "from-accent-4 to-accent-3",
];

export function Achievements() {
  return (
    <section id="achievements" className="px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Recognition"
          title="My Achievement"
          align="center"
        />
        <p className="mx-auto mt-3 max-w-xl text-center text-sm text-muted">
          Key achievements that reflect my continuous growth across business,
          strategy, and organizational impact.
        </p>

        {/* Awards */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {achievements.awards.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className="overflow-hidden rounded-3xl border-2 border-ink bg-card shadow-playful-sm"
            >
              <div
                className={`flex h-40 items-center justify-center bg-gradient-to-br ${photoGradients[i % photoGradients.length]}`}
              >
                <Award size={36} className="text-white/80" />
              </div>
              <div className="p-6">
                <span className="inline-block rounded-full bg-primary px-4 py-1.5 text-xs font-bold text-white">
                  {item.title}
                </span>
                <p className="mt-3 text-sm font-semibold text-primary">
                  {item.issuer}
                </p>
                <p className="mt-1 text-sm leading-relaxed text-muted">
                  {item.detail}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certificates */}
        <div className="mt-16">
          <h3 className="font-display text-center text-xl font-bold">
            My Certificates
          </h3>
          <p className="mx-auto mt-2 max-w-xl text-center text-sm text-muted">
            A collection of certifications that reflects my commitment to
            continuous learning across business, data, and human capital.
          </p>

          <div className="mt-8 rounded-3xl border-2 border-card-border bg-card/60 p-6 sm:p-8">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {achievements.certificateCategories.map((cert, i) => (
                <motion.div
                  key={cert}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  whileHover={{ y: -3 }}
                  className="flex items-start gap-3 rounded-2xl border-2 border-card-border bg-canvas p-4"
                >
                  <Award size={18} className="mt-0.5 shrink-0 text-primary" />
                  <span className="text-sm font-medium leading-snug">
                    {cert}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
