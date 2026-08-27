import * as en from "./data";
import * as id from "./data.id";
import type { Lang } from "./language-store";

export type Content = typeof en;

const bundles: Record<Lang, Content> = { en, id };

export function getContent(lang: Lang): Content {
  return bundles[lang];
}
