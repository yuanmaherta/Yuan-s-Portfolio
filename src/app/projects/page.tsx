import type { Metadata } from "next";
import { Projects } from "@/components/sections/projects";

export const metadata: Metadata = {
  title: "Project — Yuan Maherta",
};

export default function ProjectsPage() {
  return <Projects />;
}
