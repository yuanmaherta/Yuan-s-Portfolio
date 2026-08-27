import Image from "next/image";

/**
 * Renders a real photo when `src` is provided, otherwise falls back to the
 * gradient placeholder block used across the site. Drop a real image path
 * (e.g. "/images/yuan-portrait.jpg" from the public/ folder) into the
 * relevant data.ts entry once the asset is available — no layout changes
 * needed after that.
 */
export function PhotoSlot({
  src,
  alt,
  className = "",
  gradient = "from-primary to-accent-2",
}: {
  src?: string;
  alt: string;
  className?: string;
  gradient?: string;
}) {
  if (src) {
    return (
      <div
        className={`relative overflow-hidden rounded-3xl border-2 border-ink shadow-playful ${className}`}
      >
        <Image src={src} alt={alt} fill className="object-cover" />
      </div>
    );
  }

  return (
    <div
      className={`rounded-3xl border-2 border-ink bg-gradient-to-br ${gradient} shadow-playful ${className}`}
    />
  );
}
