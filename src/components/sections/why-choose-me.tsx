"use client";

import { motion } from "framer-motion";
import { useContent } from "@/lib/use-content";
import { PhotoSlot } from "@/components/ui/photo-slot";

export function WhyChooseMe() {
  const { profile, homePhotos, focusAreas, ui } = useContent();
  const [large, small1, small2] = homePhotos.whyChooseMe;

  return (
    <section className="px-6 py-16">
      <div className="mx-auto max-w-6xl">
        <span className="text-xs font-bold uppercase tracking-widest text-muted">
          {ui.whyChooseMe.eyebrow}
        </span>
        <h2 className="font-display mt-2 text-2xl font-extrabold sm:text-3xl">
          {ui.whyChooseMe.heading}
        </h2>

        <div className="mt-8 grid gap-4 sm:grid-cols-[1.4fr_1fr]">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5 }}
          >
            <PhotoSlot
              src={large}
              alt={profile.name}
              gradient="from-accent-4 to-primary"
              className="aspect-[4/3] w-full sm:aspect-auto sm:h-full"
            />
          </motion.div>
          <div className="grid gap-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <PhotoSlot
                src={small1}
                alt={profile.name}
                gradient="from-accent-2 to-primary"
                className="aspect-[4/3] w-full"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <PhotoSlot
                src={small2}
                alt={profile.name}
                gradient="from-accent-3 to-accent-4"
                className="aspect-[4/3] w-full"
              />
            </motion.div>
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
