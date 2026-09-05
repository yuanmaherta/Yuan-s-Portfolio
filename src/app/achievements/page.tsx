import type { Metadata } from "next";
import { Achievements } from "@/components/sections/achievements";

export const metadata: Metadata = {
  title: "Achievements",
  description:
    "Awards, publications, and certifications reflecting Yuan Maherta's continuous growth across business, strategy, and organizational impact.",
};

export default function AchievementsPage() {
  return <Achievements />;
}
