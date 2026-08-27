"use client";

import { motion } from "framer-motion";
import { Mail, MessageCircleHeart } from "lucide-react";
import { useContent } from "@/lib/use-content";
import { buttonInteraction, pillInteraction } from "@/lib/motion-presets";
import { handleChameleonMove } from "@/lib/chameleon";

export function ConnectBanner() {
  const { profile, ui } = useContent();

  return (
    <section className="px-6 py-16">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.5 }}
        className="mx-auto flex max-w-6xl flex-col items-start gap-6 rounded-3xl border-2 border-ink bg-primary p-8 text-white shadow-playful sm:flex-row sm:items-center sm:justify-between sm:p-10"
      >
        <div>
          <h2 className="font-display text-2xl font-extrabold sm:text-3xl">
            {ui.connectBanner.heading}
          </h2>
          <p className="mt-2 max-w-lg text-sm text-white/90 sm:text-base">
            {ui.connectBanner.subtitle}
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <motion.a
              href={`mailto:${profile.email}`}
              onPointerMove={handleChameleonMove}
              {...buttonInteraction}
              className="chameleon inline-flex items-center gap-2 rounded-full bg-ink px-6 py-2.5 text-sm font-semibold text-white"
            >
              <Mail size={16} />
              {profile.email}
            </motion.a>
            {profile.socials.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                onPointerMove={handleChameleonMove}
                {...pillInteraction}
                className="chameleon rounded-full border-2 border-white/70 px-5 py-2 text-sm font-semibold"
              >
                {social.label}
              </motion.a>
            ))}
          </div>
        </div>

        <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-full bg-white/15">
          <MessageCircleHeart size={44} className="text-white" />
        </div>
      </motion.div>
    </section>
  );
}
