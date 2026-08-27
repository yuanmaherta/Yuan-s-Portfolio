"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useContent } from "@/lib/use-content";
import { SocialIcon } from "@/components/ui/social-icon";
import { iconButtonInteraction } from "@/lib/motion-presets";

export function Footer() {
  const { profile, ui } = useContent();
  const firstName = profile.name.split(" ")[0];

  const pages = [
    { href: "/", label: ui.footer.pageLabels.home },
    { href: "/about", label: ui.footer.pageLabels.about },
    { href: "/skills", label: ui.footer.pageLabels.skills },
    { href: "/experience", label: ui.footer.pageLabels.experience },
    { href: "/projects", label: ui.footer.pageLabels.project },
    { href: "/achievements", label: ui.footer.pageLabels.achievement },
  ];

  return (
    <footer className="border-t border-card-border px-6 py-12">
      <div className="mx-auto grid max-w-6xl gap-10 sm:grid-cols-3">
        <div>
          <h3 className="font-display text-lg font-bold">{firstName}</h3>
          <p className="mt-2 text-sm text-muted">{profile.location}</p>
          <div className="mt-4 flex items-center gap-3">
            {profile.socials.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                {...iconButtonInteraction}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-ink text-white"
              >
                <SocialIcon label={social.label} />
              </motion.a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-display text-lg font-bold">{ui.footer.pages}</h3>
          <ul className="mt-3 space-y-2">
            {pages.map((page) => (
              <li key={page.href}>
                <Link
                  href={page.href}
                  className="text-sm text-muted transition-colors hover:text-ink"
                >
                  {page.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-lg font-bold">{ui.footer.followMe}</h3>
          <ul className="mt-3 space-y-2">
            {profile.socials.map((social) => (
              <li key={social.label}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted transition-colors hover:text-ink"
                >
                  {social.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <p className="mx-auto mt-10 max-w-6xl text-center text-xs text-muted">
        &copy; {new Date().getFullYear()} {profile.name}. {ui.footer.copyright}
      </p>
    </footer>
  );
}
