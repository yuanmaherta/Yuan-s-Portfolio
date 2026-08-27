"use client";

import { motion } from "framer-motion";
import { FileText } from "lucide-react";
import { bnspDocumentSections } from "@/lib/data";

export function BnspDocuments() {
  return (
    <div className="space-y-10">
      {bnspDocumentSections.map((section, si) => (
        <motion.div
          key={section.title}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.5 }}
          className="diagonal-dark rounded-3xl border-2 border-ink px-6 py-12 sm:px-10"
        >
          <span className="text-xs font-bold uppercase tracking-widest text-primary">
            BNSP Certification Project
          </span>
          <h3 className="font-display mt-2 text-2xl font-extrabold sm:text-3xl">
            {section.title}
          </h3>
          <p className="mt-2 max-w-2xl text-sm text-white/70">
            {section.description}
          </p>

          <div className="mt-8 space-y-8">
            {section.subsections.map((sub, subi) => (
              <div key={sub.title}>
                <h4 className="font-display text-sm font-bold sm:text-base">
                  {sub.title}
                </h4>
                <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-4">
                  {Array.from({ length: sub.count }).map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true, amount: 0.4 }}
                      transition={{
                        duration: 0.35,
                        delay: (si * 4 + subi + i * 0.5) * 0.02,
                      }}
                      className="flex aspect-[3/4] items-center justify-center rounded-xl border border-white/10 bg-white/95"
                    >
                      <FileText size={22} className="text-ink/20" />
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
