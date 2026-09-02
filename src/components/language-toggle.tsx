"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useLanguage } from "@/lib/use-language";
import { useContent } from "@/lib/use-content";
import { iconButtonInteraction } from "@/lib/motion-presets";
import { useNoticeHint } from "@/lib/use-notice-hint";
import { NoticeBubble } from "@/components/ui/notice-bubble";

export function LanguageToggle() {
  const { lang, toggle } = useLanguage();
  const { ui } = useContent();
  const { show: showHint, dismiss: dismissHint } = useNoticeHint("language-toggle", {
    delayMs: 6200,
    autoDismissMs: 4500,
  });

  return (
    <div className="relative">
      <NoticeBubble
        show={showHint}
        onDismiss={dismissHint}
        label={ui.languageToggle.hint}
        closeLabel={ui.documents.close}
        placement="bottom"
        align="end"
        className="w-40"
      />
      <motion.button
        type="button"
        onClick={() => {
          toggle();
          dismissHint();
        }}
        aria-label={ui.languageToggle.label}
        {...iconButtonInteraction}
        className="relative flex h-11 items-center justify-center overflow-hidden rounded-full border-2 border-ink bg-card px-3 text-xs font-extrabold tracking-wide shadow-playful-sm"
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={lang}
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {lang === "en" ? "ID" : "EN"}
          </motion.span>
        </AnimatePresence>
      </motion.button>
    </div>
  );
}
