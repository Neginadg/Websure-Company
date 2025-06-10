import { lazy } from "react";
import { withTranslation, TFunction } from "react-i18next";

const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const AboutHero = lazy(() => import("../../components/AboutHero"));
const FeaturesGrid = lazy(() => import("../../components/FeaturesGrid"));
const Timeline = lazy(() => import("../../components/Timeline"));

interface AboutProps {
  t: TFunction;
}

const About = ({ t }: AboutProps) => {
  return (
    <>
      <ScrollToTop />
      <AboutHero />
      <FeaturesGrid />
      <Timeline />
    </>
  );
};

export default withTranslation()(About);
