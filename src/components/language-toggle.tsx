"use client";

import { useLanguage } from "@/lib/use-language";
import { useContent } from "@/lib/use-content";

export function LanguageToggle() {
  const { lang, toggle } = useLanguage();
  const { ui } = useContent();

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={ui.languageToggle.label}
      className="flex h-11 items-center justify-center rounded-full border-2 border-ink bg-card px-3 text-xs font-extrabold tracking-wide shadow-playful-sm transition-transform hover:-translate-y-0.5"
    >
      {lang === "en" ? "ID" : "EN"}
    </button>
  );
}
