import type { Metadata } from "next";
import { Achievements } from "@/components/sections/achievements";

export const metadata: Metadata = {
  title: "Achievement — Yuan Maherta",
};

export default function AchievementsPage() {
  return <Achievements />;
}
