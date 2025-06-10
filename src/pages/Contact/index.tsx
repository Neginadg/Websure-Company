import { lazy } from "react";
import { withTranslation, TFunction } from "react-i18next";

const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const ContactHero = lazy(() => import("../../components/ContactHero"));
const EnhancedContactForm = lazy(
  () => import("../../components/EnhancedContactForm")
);

interface ContactPageProps {
  t: TFunction;
}

const ContactPage = ({ t }: ContactPageProps) => {
  return (
    <>
      <ScrollToTop />
      <ContactHero />
      <EnhancedContactForm />
    </>
  );
};

export default withTranslation()(ContactPage);
