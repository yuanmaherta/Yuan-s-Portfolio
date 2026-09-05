export type Lang = "en" | "id";

const STORAGE_KEY = "lang";
const listeners = new Set<() => void>();

export function getLang(): Lang {
  if (typeof document === "undefined") return "en";
  const current = document.documentElement.dataset.lang;
  return current === "id" ? "id" : "en";
}

// Deterministic value for the server-rendered/pre-hydration markup; the
// inline script in layout.tsx applies the real saved language before
// paint, and useSyncExternalStore re-syncs to it right after mount.
export function getServerLang(): Lang {
  return "en";
}

export function setLang(next: Lang) {
  document.documentElement.dataset.lang = next;
  document.documentElement.lang = next;
  try {
    localStorage.setItem(STORAGE_KEY, next);
  } catch {
    // localStorage unavailable (private mode, etc.) — language still
    // applies for this page view, just won't persist.
  }
  listeners.forEach((listener) => listener());
}

export function subscribeLang(callback: () => void) {
  listeners.add(callback);
  return () => listeners.delete(callback);
}
