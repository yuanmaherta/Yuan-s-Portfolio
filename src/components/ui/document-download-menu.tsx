"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Download, Eye, FileText, X } from "lucide-react";
import { handleChameleonMove } from "@/lib/chameleon";
import { buttonInteraction, iconButtonInteraction } from "@/lib/motion-presets";

type DocumentItem = {
  id: string;
  title: string;
  description?: string;
  url: string;
};

// Shown once per visitor (tracked in localStorage) so first-time guests
// notice the button hides a CV + Portfolio, without nagging returning
// visitors on every page.
const HINT_STORAGE_KEY = "documents-hint-seen";
const HINT_SHOW_DELAY_MS = 900;
const HINT_AUTO_DISMISS_MS = 6000;

// Dropdown offering a small set of downloadable documents (CV, portfolio,
// etc.), each with its own "preview in a new tab" or "download directly"
// action — used wherever the site used to have a single "Download CV"
// button.
export function DocumentDownloadMenu({
  documents,
  triggerLabel,
  previewLabel,
  downloadLabel,
  hintLabel,
  closeHintLabel,
  triggerClassName,
}: {
  documents: DocumentItem[];
  triggerLabel: string;
  previewLabel: string;
  downloadLabel: string;
  hintLabel?: string;
  closeHintLabel?: string;
  triggerClassName?: string;
}) {
  const [open, setOpen] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  const dismissHint = () => {
    setShowHint(false);
    try {
      localStorage.setItem(HINT_STORAGE_KEY, "1");
    } catch {
      // Private browsing / storage disabled — the hint just won't
      // persist across visits, no need to fail loudly.
    }
  };

  // Surface the hint bubble once, a beat after the page settles, unless
  // this visitor has already seen (or dismissed) it before.
  useEffect(() => {
    if (!hintLabel) return;
    let seen = false;
    try {
      seen = localStorage.getItem(HINT_STORAGE_KEY) === "1";
    } catch {
      // Treat unreadable storage as "not seen yet" — worst case the
      // hint shows again, which is harmless.
    }
    if (seen) return;
    const showTimer = setTimeout(() => setShowHint(true), HINT_SHOW_DELAY_MS);
    return () => clearTimeout(showTimer);
  }, [hintLabel]);

  useEffect(() => {
    if (!showHint) return;
    const hideTimer = setTimeout(dismissHint, HINT_AUTO_DISMISS_MS);
    return () => clearTimeout(hideTimer);
  }, [showHint]);

  useEffect(() => {
    if (!open) return;

    const onPointerDown = (e: PointerEvent) => {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("pointerdown", onPointerDown);
    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <div ref={rootRef} className="relative inline-block">
      {/* Floating "notice" bubble — temporary, points at the button so
          first-time visitors know CV + Portfolio live behind it. */}
      <AnimatePresence>
        {showHint && !open && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 320, damping: 22 }}
            className="absolute -top-5 left-1/2 z-40 w-60 -translate-x-1/2 -translate-y-full"
          >
            <div className="relative rounded-2xl border-2 border-ink bg-primary px-4 py-3 pr-7 text-xs font-semibold leading-snug text-white shadow-playful-sm">
              {hintLabel}
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  dismissHint();
                }}
                aria-label={closeHintLabel}
                className="absolute right-1.5 top-1.5 flex h-5 w-5 items-center justify-center rounded-full text-white/80 hover:text-white"
              >
                <X size={12} strokeWidth={3} />
              </button>
              <span className="absolute left-1/2 top-full -translate-x-1/2 border-8 border-transparent border-t-primary" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        type="button"
        onClick={() => {
          setOpen((o) => !o);
          dismissHint();
        }}
        onPointerMove={handleChameleonMove}
        {...buttonInteraction}
        aria-expanded={open}
        className={
          triggerClassName ??
          "chameleon inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-semibold text-white shadow-playful-sm"
        }
      >
        {triggerLabel}
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.96 }}
            transition={{ type: "spring", stiffness: 340, damping: 28 }}
            className="absolute left-0 top-full z-30 mt-3 w-[19rem] rounded-2xl border-2 border-ink bg-card p-3 shadow-playful"
          >
            <div className="space-y-2">
              {documents.map((doc) => (
                <div
                  key={doc.id}
                  className="rounded-xl border border-card-border bg-primary/5 p-3"
                >
                  <div className="flex items-start gap-2">
                    <FileText size={16} className="mt-0.5 shrink-0 text-primary" />
                    <div>
                      <p className="text-sm font-bold leading-tight">
                        {doc.title}
                      </p>
                      {doc.description && (
                        <p className="mt-0.5 text-xs text-muted">
                          {doc.description}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="mt-3 flex gap-2">
                    <motion.a
                      href={doc.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      {...iconButtonInteraction}
                      className="flex flex-1 items-center justify-center gap-1.5 rounded-full border-2 border-ink px-3 py-1.5 text-xs font-bold"
                    >
                      <Eye size={13} />
                      {previewLabel}
                    </motion.a>
                    <motion.a
                      href={doc.url}
                      download
                      {...iconButtonInteraction}
                      className="flex flex-1 items-center justify-center gap-1.5 rounded-full bg-primary px-3 py-1.5 text-xs font-bold text-white"
                    >
                      <Download size={13} />
                      {downloadLabel}
                    </motion.a>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
