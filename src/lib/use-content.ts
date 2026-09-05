"use client";

import { useLanguage } from "./use-language";
import { getContent } from "./content";

/** Returns the full data.ts/data.id.ts export bundle for the active language. */
export function useContent() {
  const { lang } = useLanguage();
  return getContent(lang);
}
