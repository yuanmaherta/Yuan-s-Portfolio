import type { Metadata } from "next";
import { Experience } from "@/components/sections/experience";

export const metadata: Metadata = {
  title: "Experience — Yuan Maherta",
};

export default function ExperiencePage() {
  return <Experience />;
}
