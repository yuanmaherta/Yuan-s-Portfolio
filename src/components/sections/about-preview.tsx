"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useContent } from "@/lib/use-content";
import { buttonInteraction } from "@/lib/motion-presets";
import { PhotoSlot } from "@/components/ui/photo-slot";

const MotionLink = motion.create(Link);

export function AboutPreview() {
  const { profile, homePhotos, skills, homeToolsLogo, ui } = useContent();

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
          <PhotoSlot
            src={homePhotos.aboutPreview}
            alt={profile.name}
            fit="contain"
            className="aspect-[4/5] w-full max-w-xs"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="md:col-span-3"
        >
          <h2 className="font-display text-3xl font-extrabold sm:text-4xl">
            {ui.aboutPreview.heading}{" "}
            <span className="text-primary">{ui.aboutPreview.headingAccent}</span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted">
            {profile.bio}
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <MotionLink
              href="/about"
              {...buttonInteraction}
              className="rounded-full bg-primary px-6 py-2.5 text-sm font-bold text-white shadow-playful-sm"
            >
              {ui.aboutPreview.ctaLabel}
            </MotionLink>
          </div>

          <div className="mt-8 rounded-2xl border-2 border-card-border bg-card p-5">
            <h3 className="font-display text-sm font-bold">
              {ui.aboutPreview.toolsHeading}{" "}
              <span className="text-primary">
                {ui.aboutPreview.toolsHeadingAccent}
              </span>
            </h3>
            {homeToolsLogo ? (
              <Image
                src={homeToolsLogo}
                alt={skills.tools.join(", ")}
                width={309}
                height={132}
                className="mt-3 h-auto w-full max-w-sm"
              />
            ) : (
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
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
