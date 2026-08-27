"use client";

import { useSyncExternalStore } from "react";
import { Moon, Sun } from "lucide-react";

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

  function toggle() {
    const next = theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // localStorage unavailable (private mode, etc.) — theme still
      // applies for this page view, just won't persist.
    }
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-2 border-ink bg-card text-ink shadow-playful-sm transition-transform hover:-translate-y-0.5"
    >
      {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}
