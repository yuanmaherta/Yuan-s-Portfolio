import type { Metadata } from "next";
import { Poppins, Space_Grotesk } from "next/font/google";
import { Navbar } from "@/components/navbar";
import { ConnectBanner } from "@/components/connect-banner";
import { Footer } from "@/components/footer";
import { MotionProvider } from "@/components/motion-provider";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://yuan-maherta.vercel.app";
const description =
  "Yuan Maherta — Business Management professional specializing in Human Capital, Business Development, Marketing & Partnerships, and Project & Strategic Management.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Yuan Maherta — Business Management Portfolio",
    template: "%s — Yuan Maherta",
  },
  description,
  keywords: [
    "Yuan Maherta",
    "Business Management",
    "Human Capital",
    "Talent Acquisition",
    "Business Development",
    "Project Management",
  ],
  authors: [{ name: "Yuan Maherta" }],
  openGraph: {
    title: "Yuan Maherta — Business Management Portfolio",
    description,
    url: siteUrl,
    siteName: "Yuan Maherta",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Yuan Maherta — Business Management Portfolio",
    description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

// Runs before paint to avoid a flash of the wrong theme/language: applies
// saved preferences immediately, otherwise leaves theme unset so CSS falls
// back to the OS's prefers-color-scheme (language defaults to English).
// Keep the storage keys in sync with theme-toggle.tsx / language-store.ts.
const themeInitScript = `
(function () {
  try {
    var theme = localStorage.getItem("theme");
    if (theme === "light" || theme === "dark") {
      document.documentElement.dataset.theme = theme;
    }
    var lang = localStorage.getItem("lang");
    if (lang === "en" || lang === "id") {
      document.documentElement.dataset.lang = lang;
      document.documentElement.lang = lang;
    }
  } catch (e) {}
})();
`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${poppins.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="min-h-full flex flex-col bg-canvas text-ink">
        <MotionProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <ConnectBanner />
          <Footer />
        </MotionProvider>
      </body>
    </html>
  );
}
