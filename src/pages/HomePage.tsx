import { useEffect } from "react";
import { SITE_NAME } from "../constants";
import HomeHero from "../components/sections/home/HomeHero";
import HomeIntro from "../components/sections/home/HomeIntro";
import ServicesPreview from "../components/sections/home/ServicesPreview";
import UseCasesSection from "../components/sections/home/UseCasesSection";
import ProcessSection from "../components/sections/home/ProcessSection";
import ProjectsPreview from "../components/sections/home/ProjectsPreview";
import WhyUsPreview from "../components/sections/home/WhyUsPreview";
import GlobalReach from "../components/sections/home/GlobalReach";
import HomeCTA from "../components/sections/home/HomeCTA";

export default function HomePage() {
  useEffect(() => {
    document.title = `${SITE_NAME} | Aerial Drone Light Show Company`;
  }, []);

  return (
    <>
      <HomeHero />
      <HomeIntro />
      <ServicesPreview />
      <UseCasesSection />
      <ProcessSection />
      <ProjectsPreview />
      <WhyUsPreview />
      <GlobalReach />
      <HomeCTA />
    </>
  );
}
