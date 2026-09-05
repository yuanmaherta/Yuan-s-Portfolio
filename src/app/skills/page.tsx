import type { Metadata } from "next";
import { Skills } from "@/components/sections/skills";

export const metadata: Metadata = {
  title: "Skills",
  description:
    "Explore Yuan Maherta's soft skills, hard skills, and tools spanning human capital, business analysis, and project management.",
};

export default function SkillsPage() {
  return <Skills />;
}
