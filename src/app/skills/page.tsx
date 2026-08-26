import type { Metadata } from "next";
import { Skills } from "@/components/sections/skills";

export const metadata: Metadata = {
  title: "Skills — Yuan Maherta",
};

export default function SkillsPage() {
  return <Skills />;
}
