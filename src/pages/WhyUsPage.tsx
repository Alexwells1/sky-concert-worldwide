import { useEffect } from "react";
import { SITE_NAME } from "../constants";
import WhyUsHero from "../components/sections/whyus/WhyUsHero";
import OurDifference from "../components/sections/whyus/OurDifference";
import AdvantagePoints from "../components/sections/whyus/AdvantagePoints";
import ComparisonTable from "../components/sections/whyus/ComparisonTable";
import WhyUsCTA from "../components/sections/whyus/WhyUsCTA";

export default function WhyUsPage() {
  useEffect(() => {
    document.title = `Why Choose Sky Concert Worldwide | ${SITE_NAME}`;
  }, []);

  return (
    <>
      <WhyUsHero />
      <OurDifference />
      <AdvantagePoints />
      <ComparisonTable />
      <WhyUsCTA />
    </>
  );
}
