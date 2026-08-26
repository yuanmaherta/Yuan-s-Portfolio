"use client";

import { motion } from "framer-motion";
import { Mail, Send } from "lucide-react";
import { profile } from "@/lib/data";
import { SectionHeading } from "@/components/ui/section-heading";

export function Contact() {
  return (
    <section id="contact" className="px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something together"
          align="center"
        />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mx-auto mt-12 max-w-xl rounded-3xl border-2 border-ink bg-card p-8 shadow-playful"
        >
          <p className="text-center text-muted">
            Punya project, tawaran kerja, atau cuma mau say hi? Jangan ragu
            untuk hubungi lewat email atau media sosial di bawah.
          </p>

          <div className="mt-8 flex flex-col items-center gap-4">
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3 font-semibold text-white shadow-playful-sm transition-transform hover:-translate-y-1"
            >
              <Mail size={18} />
              {profile.email}
            </a>

            <div className="flex flex-wrap justify-center gap-3">
              {profile.socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="rounded-full border-2 border-ink px-5 py-2 text-sm font-semibold transition-transform hover:-translate-y-0.5"
                >
                  {social.label}
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-6 flex items-center justify-center gap-2 text-xs text-muted"
        >
          <Send size={14} />
          Form kontak interaktif akan ditambahkan saat integrasi Supabase (Fase
          3).
        </motion.div>
      </div>
    </section>
  );
}
