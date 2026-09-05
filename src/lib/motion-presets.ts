// Shared hover/tap interaction presets for buttons and links, used with
// framer-motion's motion.a / motion.button. Keeps the feel consistent
// across the site: a slight lift + scale on hover, a quick squash on
// tap/click for tactile feedback.
export const buttonInteraction = {
  whileHover: { scale: 1.04, y: -3 },
  whileTap: { scale: 0.95, y: 0 },
  transition: { type: "spring" as const, stiffness: 400, damping: 20 },
};

// For small icon-only buttons (theme/language toggle, social icons) where
// a big lift would feel disproportionate — scale only.
export const iconButtonInteraction = {
  whileHover: { scale: 1.12 },
  whileTap: { scale: 0.88 },
  transition: { type: "spring" as const, stiffness: 400, damping: 17 },
};

// For pill-shaped nav links / tags.
export const pillInteraction = {
  whileHover: { scale: 1.06 },
  whileTap: { scale: 0.94 },
  transition: { type: "spring" as const, stiffness: 400, damping: 20 },
};
