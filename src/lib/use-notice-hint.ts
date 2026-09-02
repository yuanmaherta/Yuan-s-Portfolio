"use client";

import { useCallback, useEffect, useState } from "react";

// Drives a small one-time "notice" bubble: shows itself once per visitor
// (tracked in localStorage under a per-feature key), a beat after mount,
// then auto-dismisses after a few seconds — or earlier, whenever the
// caller invokes `dismiss` (e.g. the user interacted with the thing the
// bubble was pointing at).
export function useNoticeHint(
  id: string,
  {
    delayMs = 900,
    autoDismissMs = 6000,
    enabled = true,
  }: { delayMs?: number; autoDismissMs?: number; enabled?: boolean } = {},
) {
  const storageKey = `hint-seen:${id}`;
  const [show, setShow] = useState(false);

  const dismiss = useCallback(() => {
    setShow(false);
    try {
      localStorage.setItem(storageKey, "1");
    } catch {
      // Private browsing / storage disabled — the hint just won't
      // persist across visits, no need to fail loudly.
    }
  }, [storageKey]);

  useEffect(() => {
    if (!enabled) return;
    let seen = false;
    try {
      seen = localStorage.getItem(storageKey) === "1";
    } catch {
      // Treat unreadable storage as "not seen yet" — worst case the
      // hint shows again, which is harmless.
    }
    if (seen) return;
    const showTimer = setTimeout(() => setShow(true), delayMs);
    return () => clearTimeout(showTimer);
  }, [enabled, storageKey, delayMs]);

  useEffect(() => {
    if (!show) return;
    const hideTimer = setTimeout(dismiss, autoDismissMs);
    return () => clearTimeout(hideTimer);
  }, [show, autoDismissMs, dismiss]);

  return { show, dismiss };
}
