import type { Metadata } from "next";
import { Projects } from "@/components/sections/projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "A showcase of Yuan Maherta's academic and digital projects across business strategy, marketing, and human capital.",
};

export default function ProjectsPage() {
  return <Projects />;
}
