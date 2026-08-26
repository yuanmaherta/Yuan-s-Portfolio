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

export const metadata: Metadata = {
  title: "Yuan Maherta — Business Management Portfolio",
  description:
    "Portofolio Yuan Maherta — Human Capital, Business Development, Marketing & Partnerships, dan Project & Strategic Management.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="id"
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
