"use client";

import { MotionConfig } from "framer-motion";

/**
 * Wraps the app so every framer-motion animation (including hover/tap
 * button interactions) automatically respects the visitor's OS-level
 * "reduce motion" accessibility setting — no need to check it manually
 * in every component.
 */
export function MotionProvider({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
