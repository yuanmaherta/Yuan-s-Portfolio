"use client";

import { useCallback, useEffect, useState } from "react";

// Drives a small "notice" bubble: a beat after mount it shows itself, then
// auto-dismisses after a few seconds — or earlier, whenever the caller
// invokes `dismiss` (e.g. the user interacted with the thing the bubble
// was pointing at).
//
// By default this happens once per visitor (tracked in localStorage under
// a per-feature key) so returning visitors aren't nagged forever. Pass
// `persist: false` for a bubble that should keep reminding visitors every
// time it remounts (e.g. every fresh visit to the home page) instead of
// being silenced for good after the first dismissal.
export function useNoticeHint(
  id: string,
  {
    delayMs = 900,
    autoDismissMs = 6000,
    enabled = true,
    persist = true,
  }: {
    delayMs?: number;
    autoDismissMs?: number;
    enabled?: boolean;
    persist?: boolean;
  } = {},
) {
  const storageKey = `hint-seen:${id}`;
  const [show, setShow] = useState(false);

  const dismiss = useCallback(() => {
    setShow(false);
    if (!persist) return;
    try {
      localStorage.setItem(storageKey, "1");
    } catch {
      // Private browsing / storage disabled — the hint just won't
      // persist across visits, no need to fail loudly.
    }
  }, [storageKey, persist]);

  useEffect(() => {
    if (!enabled) return;
    if (persist) {
      let seen = false;
      try {
        seen = localStorage.getItem(storageKey) === "1";
      } catch {
        // Treat unreadable storage as "not seen yet" — worst case the
        // hint shows again, which is harmless.
      }
      if (seen) return;
    }
    const showTimer = setTimeout(() => setShow(true), delayMs);
    return () => clearTimeout(showTimer);
  }, [enabled, storageKey, delayMs, persist]);

  useEffect(() => {
    if (!show) return;
    const hideTimer = setTimeout(dismiss, autoDismissMs);
    return () => clearTimeout(hideTimer);
  }, [show, autoDismissMs, dismiss]);

  return { show, dismiss };
}
