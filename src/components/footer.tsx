import { profile } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t border-card-border px-6 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 text-sm text-muted sm:flex-row">
        <p>
          &copy; {new Date().getFullYear()} {profile.name}. Built with Next.js
          &amp; Tailwind.
        </p>
        <p>Made with lots of coffee ☕</p>
      </div>
    </footer>
  );
}
