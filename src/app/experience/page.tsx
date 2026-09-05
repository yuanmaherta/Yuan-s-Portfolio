import type { Metadata } from "next";
import { Experience } from "@/components/sections/experience";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Yuan Maherta's professional and organizational experience across internships, teaching practicums, and student organizations.",
};

export default function ExperiencePage() {
  return <Experience />;
}
