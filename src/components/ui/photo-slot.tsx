import Image from "next/image";

/**
 * Renders a real photo when `src` is provided, otherwise falls back to the
 * gradient placeholder block used across the site. Drop a real image path
 * (e.g. "/images/yuan-portrait.jpg" from the public/ folder) into the
 * relevant data.ts entry once the asset is available — no layout changes
 * needed after that.
 *
 * `fit="cover"` (default) fills the whole card — for a normal rectangular
 * photo. `fit="contain"` keeps the card's gradient background visible and
 * floats the image on top without cropping — for a background-removed
 * (transparent) cutout photo.
 */
export function PhotoSlot({
  src,
  alt,
  className = "",
  gradient = "from-primary to-accent-2",
  fit = "cover",
}: {
  src?: string;
  alt: string;
  className?: string;
  gradient?: string;
  fit?: "cover" | "contain";
}) {
  if (src && fit === "contain") {
    return (
      <div
        className={`relative overflow-hidden rounded-3xl border-2 border-ink bg-gradient-to-br shadow-playful ${gradient} ${className}`}
      >
        <Image src={src} alt={alt} fill className="object-contain object-bottom" />
      </div>
    );
  }

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
