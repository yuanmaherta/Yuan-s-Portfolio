"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import { LanguageToggle } from "@/components/language-toggle";
import { useContent } from "@/lib/use-content";
import { iconButtonInteraction, pillInteraction } from "@/lib/motion-presets";

const MotionLink = motion.create(Link);

export function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const { ui } = useContent();

  const links = [
    { href: "/", label: ui.nav.home },
    { href: "/about", label: ui.nav.about },
    { href: "/skills", label: ui.nav.skills },
    { href: "/experience", label: ui.nav.experience },
    { href: "/projects", label: ui.nav.project },
    { href: "/achievements", label: ui.nav.achievement },
  ];

  return (
    <header className="sticky top-4 z-50 px-4 sm:px-6">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3">
        <MotionLink
          href="/"
          whileHover={{ scale: 1.05, rotate: -2 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400, damping: 20 }}
          className="flex shrink-0 items-center rounded-full border-2 border-ink bg-card px-4 py-2.5 font-display text-lg font-extrabold shadow-playful-sm"
        >
          yuan<span className="text-primary">.</span>
        </MotionLink>

        <nav className="hidden md:block">
          <ul className="flex items-center gap-1 rounded-full border-2 border-ink bg-card/95 px-2 py-2 shadow-playful-sm backdrop-blur">
            {links.map((link) => {
              const active = pathname === link.href;
              return (
                <li key={link.href}>
                  <MotionLink
                    href={link.href}
                    {...pillInteraction}
                    className={`block rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                      active
                        ? "bg-primary text-white"
                        : "text-muted hover:text-ink"
                    }`}
                  >
                    {link.label}
                  </MotionLink>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <LanguageToggle />
          <ThemeToggle />
          <motion.button
            {...iconButtonInteraction}
            className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-ink bg-card shadow-playful-sm md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label={ui.nav.toggleMenu}
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={open ? "close" : "open"}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="flex items-center justify-center"
              >
                {open ? <X size={20} /> : <Menu size={20} />}
              </motion.span>
            </AnimatePresence>
          </motion.button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="mx-auto mt-3 max-w-6xl overflow-hidden rounded-3xl border-2 border-ink bg-card shadow-playful md:hidden"
          >
            <ul className="flex flex-col gap-1 p-3">
              {links.map((link) => {
                const active = pathname === link.href;
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className={`block rounded-2xl px-4 py-2.5 text-base font-medium ${
                        active ? "bg-primary text-white font-bold" : ""
                      }`}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
