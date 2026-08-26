import type { Metadata } from "next";
import { About } from "@/components/sections/about";

export const metadata: Metadata = {
  title: "About — Yuan Maherta",
};

export default function AboutPage() {
  return <About />;
}
