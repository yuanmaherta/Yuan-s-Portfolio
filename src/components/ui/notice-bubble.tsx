"use client";

import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";

// Small floating speech-bubble that points at whatever it's rendered next
// to (a button, a menu trigger) — used to nudge first-time visitors toward
// something easy to miss. Pair with useNoticeHint for the show/dismiss
// timing; this component is purely presentational.
export function NoticeBubble({
  show,
  onDismiss,
  label,
  closeLabel,
  placement = "top",
  align = "center",
  className,
}: {
  show: boolean;
  onDismiss: () => void;
  label: string;
  closeLabel?: string;
  placement?: "top" | "bottom";
  /** "center" points the arrow at the middle of the trigger; "end" hugs
   *  the trigger's right edge instead, for icons sitting near the screen
   *  edge where a centered bubble would overflow. */
  align?: "center" | "end";
  className?: string;
}) {
  const isTop = placement === "top";
  const isEnd = align === "end";

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: isTop ? 8 : -8, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: isTop ? 8 : -8, scale: 0.9 }}
          transition={{ type: "spring", stiffness: 320, damping: 22 }}
          className={`absolute z-40 ${isEnd ? "right-0" : "left-1/2 -translate-x-1/2"} ${
            isTop ? "-top-3 -translate-y-full" : "top-full mt-3"
          } ${className ?? "w-56"}`}
        >
          <div className="relative rounded-2xl border-2 border-ink bg-primary px-4 py-3 pr-7 text-xs font-semibold leading-snug text-white shadow-playful-sm">
            {label}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onDismiss();
              }}
              aria-label={closeLabel}
              className="absolute right-1.5 top-1.5 flex h-5 w-5 items-center justify-center rounded-full text-white/80 hover:text-white"
            >
              <X size={12} strokeWidth={3} />
            </button>
            <span
              className={`absolute border-8 border-transparent ${
                isEnd ? "right-4" : "left-1/2 -translate-x-1/2"
              } ${isTop ? "top-full border-t-primary" : "bottom-full border-b-primary"}`}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
