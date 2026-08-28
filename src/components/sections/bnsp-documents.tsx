"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight, FileText, Folder, X } from "lucide-react";
import { useContent } from "@/lib/use-content";
import { iconButtonInteraction, pillInteraction } from "@/lib/motion-presets";
import { handleChameleonMove } from "@/lib/chameleon";

export function BnspDocuments() {
  const { bnspDocumentSections, ui } = useContent();
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [preview, setPreview] = useState<{ src: string; alt: string } | null>(null);

  const total = bnspDocumentSections.length;
  const activeSection =
    openIndex !== null ? bnspDocumentSections[openIndex] : null;

  // Escape closes the preview first, then the folder popup. Page scroll is
  // locked the whole time either is open.
  useEffect(() => {
    if (openIndex === null) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setPreview((p) => {
          if (p) return null;
          setOpenIndex(null);
          return p;
        });
        return;
      }
      if (preview) return;
      if (e.key === "ArrowRight") setOpenIndex((i) => (i === null ? i : (i + 1) % total));
      if (e.key === "ArrowLeft") setOpenIndex((i) => (i === null ? i : (i - 1 + total) % total));
    };
    window.addEventListener("keydown", onKeyDown);

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = prevOverflow;
    };
  }, [openIndex, total, preview]);

  return (
    <div className="grid gap-5 sm:grid-cols-2">
      {bnspDocumentSections.map((section, i) => {
        const docCount = section.subsections.reduce((sum, s) => sum + s.count, 0);
        return (
          <motion.button
            key={section.title}
            type="button"
            onClick={() => setOpenIndex(i)}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.45, delay: i * 0.08 }}
            whileHover={{ y: -4 }}
            onPointerMove={handleChameleonMove}
            className="chameleon diagonal-dark flex flex-col items-start gap-4 rounded-3xl border-2 border-ink px-6 py-8 text-left shadow-playful-sm"
            aria-label={`${ui.bnspDocuments.openFolder}: ${section.title}`}
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl border-2 border-ink bg-primary/20">
              <Folder size={26} className="text-primary" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-primary">
                {ui.bnspDocuments.eyebrow}
              </span>
              <h3 className="font-display mt-2 text-xl font-extrabold sm:text-2xl">
                {section.title}
              </h3>
              <p className="mt-2 max-w-md text-sm text-white/70">
                {section.description}
              </p>
            </div>
            <div className="flex flex-wrap gap-2 text-xs font-semibold">
              <span className="rounded-full bg-white/10 px-3 py-1">
                {section.subsections.length} {ui.bnspDocuments.subsectionsLabel}
              </span>
              <span className="rounded-full bg-white/10 px-3 py-1">
                {docCount} {ui.bnspDocuments.documentsLabel}
              </span>
            </div>
          </motion.button>
        );
      })}

      <AnimatePresence>
        {activeSection && openIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-dark/70 p-4 backdrop-blur-sm"
            onClick={() => setOpenIndex(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 16 }}
              transition={{ type: "spring", stiffness: 320, damping: 30 }}
              onClick={(e) => e.stopPropagation()}
              className="diagonal-dark relative max-h-[85vh] w-full max-w-3xl rounded-3xl border-2 border-ink shadow-playful"
            >
              {/* Floats above the scrollable area below, so it stays put
                  regardless of scroll position and never collides with the
                  heading text. */}
              <motion.button
                type="button"
                onClick={() => setOpenIndex(null)}
                {...iconButtonInteraction}
                aria-label={ui.bnspDocuments.close}
                className="!absolute !right-5 !top-5 !z-20 flex h-10 w-10 items-center justify-center rounded-full border-2 border-primary bg-white/10"
              >
                <X size={18} className="text-primary" strokeWidth={2.5} />
              </motion.button>

              <div className="max-h-[85vh] overflow-y-auto p-6 sm:p-8">
                <span className="text-xs font-bold uppercase tracking-widest text-primary">
                  {ui.bnspDocuments.chapterLabel} {openIndex + 1} {ui.bnspDocuments.of} {total}
                </span>
                <h3 className="font-display mt-2 max-w-lg pr-14 text-2xl font-extrabold sm:text-3xl">
                  {activeSection.title}
                </h3>
                <p className="mt-2 max-w-2xl text-sm text-white/70">
                  {activeSection.description}
                </p>

                <div className="mt-8 space-y-8">
                  {activeSection.subsections.map((sub, subi) => (
                    <div key={sub.title}>
                      <h4 className="font-display text-sm font-bold sm:text-base">
                        {sub.title}
                      </h4>
                      <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-4">
                        {Array.from({ length: sub.count }).map((_, i) => {
                          const photo = sub.photos?.[i];
                          const alt = `${sub.title} ${i + 1}`;
                          return (
                            <motion.div
                              key={i}
                              initial={{ opacity: 0, scale: 0.9 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{
                                duration: 0.3,
                                delay: (subi + i * 0.5) * 0.02,
                              }}
                              whileHover={photo ? { scale: 1.04 } : undefined}
                              onClick={photo ? () => setPreview({ src: photo, alt }) : undefined}
                              role={photo ? "button" : undefined}
                              tabIndex={photo ? 0 : undefined}
                              onKeyDown={
                                photo
                                  ? (e) => {
                                      if (e.key === "Enter" || e.key === " ") {
                                        e.preventDefault();
                                        setPreview({ src: photo, alt });
                                      }
                                    }
                                  : undefined
                              }
                              aria-label={photo ? alt : undefined}
                              className={`relative flex aspect-[3/4] items-center justify-center overflow-hidden rounded-xl border border-white/10 bg-white/95 ${photo ? "cursor-zoom-in" : ""}`}
                            >
                              {photo ? (
                                <Image
                                  src={photo}
                                  alt={alt}
                                  fill
                                  className="object-cover object-top"
                                />
                              ) : (
                                <FileText size={22} className="text-ink/20" />
                              )}
                            </motion.div>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-10 flex items-center justify-between gap-4 border-t border-white/10 pt-6">
                  <motion.button
                    type="button"
                    onClick={() => setOpenIndex((total + openIndex - 1) % total)}
                    onPointerMove={handleChameleonMove}
                    {...pillInteraction}
                    className="chameleon flex items-center gap-1.5 rounded-full border border-white/30 px-5 py-2 text-sm font-semibold text-white/80 transition-colors hover:text-white"
                  >
                    <ChevronLeft size={16} />
                    {ui.bnspDocuments.previous}
                  </motion.button>
                  <motion.button
                    type="button"
                    onClick={() => setOpenIndex((openIndex + 1) % total)}
                    onPointerMove={handleChameleonMove}
                    {...pillInteraction}
                    className="chameleon flex items-center gap-1.5 rounded-full bg-primary px-5 py-2 text-sm font-bold text-white"
                  >
                    {ui.bnspDocuments.next}
                    <ChevronRight size={16} />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Full-size preview of a single document, layered above the folder
          popup. Escape/click-outside closes just this, not the folder. */}
      <AnimatePresence>
        {preview && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-dark/85 p-4 backdrop-blur-sm"
            onClick={() => setPreview(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.94 }}
              transition={{ type: "spring", stiffness: 320, damping: 30 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-h-[90vh] max-w-2xl"
            >
              <motion.button
                type="button"
                onClick={() => setPreview(null)}
                {...iconButtonInteraction}
                aria-label={ui.bnspDocuments.close}
                className="absolute -right-3 -top-3 z-10 flex h-10 w-10 items-center justify-center rounded-full border-2 border-primary bg-white/10 backdrop-blur-sm"
              >
                <X size={18} className="text-primary" strokeWidth={2.5} />
              </motion.button>
              {/* eslint-disable-next-line @next/next/no-img-element -- natural
                  aspect ratio is unknown ahead of time; next/image needs a
                  fixed box or intrinsic dimensions, neither of which fit a
                  lightbox that should just scale to the image's own shape. */}
              <img
                src={preview.src}
                alt={preview.alt}
                className="max-h-[90vh] w-auto rounded-2xl border-2 border-ink object-contain shadow-playful"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
