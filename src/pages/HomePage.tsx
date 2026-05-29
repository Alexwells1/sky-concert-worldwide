import { useEffect } from "react";
import { SITE_NAME } from "../constants";
import HomeHero from "../components/sections/home/HomeHero";
import StatsStrip from "../components/sections/home/StatsStrip";
import BrandStory from "../components/sections/home/BrandStory";
import ProjectsPreview from "../components/sections/home/ProjectsPreview";
import PartnersBar from "../components/sections/home/PartnersBar";
import VideoBreak from "../components/sections/home/VideoBreak";
import ServicesPreview from "../components/sections/home/ServicesPreview";
import UseCasesSection from "../components/sections/home/UseCasesSection";
import ProcessSection from "../components/sections/home/ProcessSection";
import HomeFAQ from "../components/sections/home/HomeFAQ";
import HomeCTA from "../components/sections/home/HomeCTA";

export default function HomePage() {
  useEffect(() => {
    document.title = `${SITE_NAME} | Aerial Drone Light Show Company`;
  }, []);

  return (
    <>
      <HomeHero />
      <StatsStrip />
      <BrandStory />
      <ProjectsPreview />
      <PartnersBar />
      <VideoBreak isPortrait videoPosition="center" />
      <ServicesPreview />
      <UseCasesSection />
      <ProcessSection />
      <HomeFAQ />
      <HomeCTA />
    </>
  );
}
