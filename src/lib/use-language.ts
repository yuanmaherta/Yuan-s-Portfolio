"use client";

import { useSyncExternalStore } from "react";
import { getLang, getServerLang, subscribeLang, setLang, type Lang } from "./language-store";

export function useLanguage() {
  const lang = useSyncExternalStore(subscribeLang, getLang, getServerLang);

  return {
    lang,
    toggle: () => setLang(lang === "en" ? "id" : "en"),
    setLang,
  };
}

export type { Lang };
