import type { Metadata } from "next";
import { About } from "@/components/sections/about";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Yuan Maherta's background, education, and focus areas across Human Capital, Business Development, and Strategic Management.",
};

export default function AboutPage() {
  return <About />;
}
