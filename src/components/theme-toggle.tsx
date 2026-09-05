"use client";

import { useSyncExternalStore } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { useContent } from "@/lib/use-content";
import { iconButtonInteraction } from "@/lib/motion-presets";
import { useNoticeHint } from "@/lib/use-notice-hint";
import { NoticeBubble } from "@/components/ui/notice-bubble";

/** Keep in sync with the inline script in layout.tsx. */
const STORAGE_KEY = "theme";

function getSnapshot(): "light" | "dark" {
  const current = document.documentElement.dataset.theme;
  if (current === "light" || current === "dark") return current;
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

// Deterministic value for the server-rendered/pre-hydration markup; the
// inline script in layout.tsx already applies the real theme before paint,
// and this hook re-syncs to it (and to attribute/system changes) right
// after mount.
function getServerSnapshot(): "light" | "dark" {
  return "light";
}

function subscribe(callback: () => void) {
  const mql = window.matchMedia("(prefers-color-scheme: dark)");
  mql.addEventListener("change", callback);

  const observer = new MutationObserver(callback);
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["data-theme"],
  });

  return () => {
    mql.removeEventListener("change", callback);
    observer.disconnect();
  };
}

export function ThemeToggle() {
  const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const { ui } = useContent();
  const { show: showHint, dismiss: dismissHint } = useNoticeHint("theme-toggle", {
    delayMs: 1200,
    autoDismissMs: 4500,
  });

  function toggle() {
    const next = theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // localStorage unavailable (private mode, etc.) — theme still
      // applies for this page view, just won't persist.
    }
    dismissHint();
  }

  return (
    <div className="relative">
      <NoticeBubble
        show={showHint}
        onDismiss={dismissHint}
        label={ui.themeToggle.hint}
        closeLabel={ui.documents.close}
        placement="bottom"
        align="end"
        className="w-40"
      />
      <motion.button
        type="button"
        onClick={toggle}
        aria-label={theme === "dark" ? ui.themeToggle.toLight : ui.themeToggle.toDark}
        {...iconButtonInteraction}
        className="relative flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-full border-2 border-ink bg-card text-ink shadow-playful-sm"
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={theme}
            initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
            animate={{ rotate: 0, opacity: 1, scale: 1 }}
            exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.25 }}
            className="flex items-center justify-center"
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </motion.span>
        </AnimatePresence>
      </motion.button>
    </div>
  );
}
