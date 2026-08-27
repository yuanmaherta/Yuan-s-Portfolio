import type { PointerEvent } from "react";

/**
 * "Chameleon" hover effect: pair with the `.chameleon` class in
 * globals.css. On pointer move, writes the pointer position and the angle
 * it's approaching from (converted to a hue) as CSS custom properties
 * directly on the element — no React re-render, so it stays smooth even
 * inside a `.map()`. The `.chameleon::after` overlay then reads those
 * variables to paint a soft color highlight that follows the cursor and
 * shifts hue with its direction, like skin changing color.
 */
export function handleChameleonMove(e: PointerEvent<HTMLElement>) {
  const el = e.currentTarget;
  const rect = el.getBoundingClientRect();
  if (rect.width === 0 || rect.height === 0) return;

  const px = e.clientX - rect.left;
  const py = e.clientY - rect.top;
  const angle =
    (Math.atan2(py - rect.height / 2, px - rect.width / 2) * 180) / Math.PI;
  const hue = (angle + 180) % 360;

  el.style.setProperty("--chx", `${(px / rect.width) * 100}%`);
  el.style.setProperty("--chy", `${(py / rect.height) * 100}%`);
  el.style.setProperty("--chameleon-hue", `${hue}`);
}
