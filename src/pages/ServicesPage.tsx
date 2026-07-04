import { useEffect } from "react";
import { SITE_NAME } from "../constants";
import CoreServices from "../components/sections/services/CoreServices";
import ServiceProcess from "../components/sections/services/ServiceProcess";
import TechAdvantage from "../components/sections/services/TechAdvantage";
import FAQSection from "../components/sections/faq/FAQSection";
import ExperiencePhilosophy from "../components/sections/services/ExperiencePhilosophy";
import ServicesCTA from "../components/sections/services/ServicesCTA";
import ServicesHero from "../components/sections/services/ServicesHero";

export default function ServicesPage() {
  useEffect(() => {
    document.title = `Drone Light Show Services | ${SITE_NAME}`;
  }, []);

  return (
    <>
      <ServicesHero />
      <CoreServices />
      <ServiceProcess />
      <TechAdvantage />
      <ExperiencePhilosophy />
      <FAQSection />
      <ServicesCTA />
    </>
  );
}
