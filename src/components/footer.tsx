import Link from "next/link";
import { profile } from "@/lib/data";
import { SocialIcon } from "@/components/ui/social-icon";

const pages = [
  { href: "/", label: "Homepage" },
  { href: "/about", label: "About" },
  { href: "/skills", label: "Skills" },
  { href: "/experience", label: "Experience" },
  { href: "/projects", label: "Project" },
  { href: "/achievements", label: "Achievement" },
];

export function Footer() {
  const firstName = profile.name.split(" ")[0];

  return (
    <footer className="border-t border-card-border px-6 py-12">
      <div className="mx-auto grid max-w-6xl gap-10 sm:grid-cols-3">
        <div>
          <h3 className="font-display text-lg font-bold">{firstName}</h3>
          <p className="mt-2 text-sm text-muted">{profile.location}</p>
          <div className="mt-4 flex items-center gap-3">
            {profile.socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-ink text-white transition-transform hover:-translate-y-0.5"
              >
                <SocialIcon label={social.label} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-display text-lg font-bold">Pages</h3>
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
          <h3 className="font-display text-lg font-bold">Follow me</h3>
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
        &copy; {new Date().getFullYear()} {profile.name}. All Right Reserved.
        Business Management Portfolio
      </p>
    </footer>
  );
}
