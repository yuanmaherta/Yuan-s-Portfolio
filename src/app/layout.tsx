import type { Metadata } from "next";
import { Poppins, Space_Grotesk } from "next/font/google";
import { Navbar } from "@/components/navbar";
import { ConnectBanner } from "@/components/connect-banner";
import { Footer } from "@/components/footer";
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

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-canvas text-ink">
        <Navbar />
        <main className="flex-1">{children}</main>
        <ConnectBanner />
        <Footer />
      </body>
    </html>
  );
}
