import { Hero } from "@/components/sections/hero";
import { AboutPreview } from "@/components/sections/about-preview";
import { FocusFlow } from "@/components/sections/focus-flow";
import { WhyChooseMe } from "@/components/sections/why-choose-me";
import { HomeActivities } from "@/components/sections/home-activities";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutPreview />
      <FocusFlow />
      <WhyChooseMe />
      <HomeActivities />
    </>
  );
}
