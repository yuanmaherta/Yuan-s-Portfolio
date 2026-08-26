"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { profile } from "@/lib/data";
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
      </div>
    </section>
  );
}
