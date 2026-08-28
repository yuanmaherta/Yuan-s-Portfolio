"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Award, X } from "lucide-react";
import Image from "next/image";
import { useContent } from "@/lib/use-content";
import { SectionHeading } from "@/components/ui/section-heading";
import { iconButtonInteraction } from "@/lib/motion-presets";
import { handleChameleonMove } from "@/lib/chameleon";

const photoGradients = [
  "from-accent-1 to-primary",
  "from-accent-4 to-accent-3",
];

export function Achievements() {
  const { achievements, ui } = useContent();
  const [preview, setPreview] = useState<{ src: string; alt: string } | null>(null);

  // Escape/scroll-lock while a preview is open.
  useEffect(() => {
    if (!preview) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setPreview(null);
    };
    window.addEventListener("keydown", onKeyDown);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = prevOverflow;
    };
  }, [preview]);

  return (
    <section id="achievements" className="px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow={ui.achievements.eyebrow}
          title={ui.achievements.title}
          align="center"
        />
        <p className="mx-auto mt-3 max-w-xl text-center text-sm text-muted">
          {ui.achievements.subtitle}
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
              onPointerMove={handleChameleonMove}
              className="chameleon overflow-hidden rounded-3xl border-2 border-ink bg-card shadow-playful-sm"
            >
              <div
                onClick={
                  item.photo
                    ? () => setPreview({ src: item.photo, alt: item.title })
                    : undefined
                }
                role={item.photo ? "button" : undefined}
                tabIndex={item.photo ? 0 : undefined}
                onKeyDown={
                  item.photo
                    ? (e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          e.preventDefault();
                          setPreview({ src: item.photo, alt: item.title });
                        }
                      }
                    : undefined
                }
                className={`relative flex h-40 items-center justify-center bg-gradient-to-br ${photoGradients[i % photoGradients.length]} ${item.photo ? "cursor-zoom-in" : ""}`}
              >
                {item.photo ? (
                  <Image
                    src={item.photo}
                    alt={item.title}
                    fill
                    className="object-contain"
                  />
                ) : (
                  <Award size={36} className="text-white/80" />
                )}
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
            {ui.achievements.certificatesHeading}
          </h3>
          <p className="mx-auto mt-2 max-w-xl text-center text-sm text-muted">
            {ui.achievements.certificatesSubtitle}
          </p>

          <div className="mt-8 rounded-3xl border-2 border-card-border bg-card/60 p-6 sm:p-8">
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-6">
              {achievements.certificateCategories.map((cert, i) => (
                <motion.div
                  key={cert.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  whileHover={{ y: -3 }}
                  onPointerMove={handleChameleonMove}
                  className="chameleon flex flex-col overflow-hidden rounded-xl border-2 border-card-border bg-canvas"
                >
                  <div
                    onClick={
                      cert.photo
                        ? () => setPreview({ src: cert.photo, alt: cert.title })
                        : undefined
                    }
                    role={cert.photo ? "button" : undefined}
                    tabIndex={cert.photo ? 0 : undefined}
                    onKeyDown={
                      cert.photo
                        ? (e) => {
                            if (e.key === "Enter" || e.key === " ") {
                              e.preventDefault();
                              setPreview({ src: cert.photo, alt: cert.title });
                            }
                          }
                        : undefined
                    }
                    className={`relative flex aspect-[4/3] w-full items-center justify-center bg-white ${cert.photo ? "cursor-zoom-in" : ""}`}
                  >
                    {cert.photo ? (
                      <Image
                        src={cert.photo}
                        alt={cert.title}
                        fill
                        className="object-cover"
                      />
                    ) : (
                      <Award size={24} className="text-primary/30" />
                    )}
                  </div>
                  <span className="p-2 text-[11px] font-medium leading-snug">
                    {cert.title}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Full-size preview */}
      <AnimatePresence>
        {preview && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-ink/85 p-4 backdrop-blur-sm"
            onClick={() => setPreview(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.94 }}
              transition={{ type: "spring", stiffness: 320, damping: 30 }}
              onClick={(e) => e.stopPropagation()}
              className="relative h-[85vh] w-[90vw] max-w-3xl"
            >
              <motion.button
                type="button"
                onClick={() => setPreview(null)}
                {...iconButtonInteraction}
                aria-label="Close"
                className="absolute -right-3 -top-3 z-10 flex h-10 w-10 items-center justify-center rounded-full border-2 border-primary bg-white/10 backdrop-blur-sm"
              >
                <X size={18} className="text-primary" strokeWidth={2.5} />
              </motion.button>
              {/* eslint-disable-next-line @next/next/no-img-element -- natural
                  aspect ratio is unknown ahead of time; next/image needs a
                  fixed box or intrinsic dimensions, neither of which fit a
                  lightbox that should just scale to the image's own shape.
                  Many certificate scans are small (~200px), so the box is
                  sized generously and the image is scaled up to fill it. */}
              <img
                src={preview.src}
                alt={preview.alt}
                className="h-full w-full rounded-2xl border-2 border-ink object-contain bg-white shadow-playful"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
