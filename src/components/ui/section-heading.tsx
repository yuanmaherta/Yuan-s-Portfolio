"use client";

import { motion } from "framer-motion";

export function SectionHeading({
  eyebrow,
  title,
  align = "left",
}: {
  eyebrow: string;
  title: string;
  align?: "left" | "center";
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={align === "center" ? "text-center" : "text-left"}
    >
      <span className="inline-block rounded-full bg-accent-2/20 px-4 py-1 text-sm font-semibold tracking-wide text-ink border border-card-border">
        {eyebrow}
      </span>
      <h2 className="font-display mt-4 text-3xl font-extrabold sm:text-4xl md:text-5xl">
        {title}
      </h2>
    </motion.div>
  );
}
