import { withTranslation, TFunction } from "react-i18next";
import { Fade } from "react-awesome-reveal";
import Container from "../../common/Container";
import {
  ContactHeroSection,
  ContactHeroTitle,
  ContactHeroSubtitle,
  ContactMethodsGrid,
  ContactMethodsSection,
  ContactMethod,
  ContactIcon,
  ContactTitle,
  ContactDetail,
  MapSection,
  MapTitle,
  MapContainer,
} from "./styles";

interface ContactHeroProps {
  t: TFunction;
}

const ContactHero = ({ t }: ContactHeroProps) => {
  const contactMethods = [
    {
      icon: "📧",
      title: t("Email Us"),
      detail: "info@websuresoft.com",
      type: "email",
    },
    {
      icon: "📞",
      title: t("Call Us"),
      detail: "+90 392 228 15 21",
      type: "phone",
    },
  ];

  return (
    <ContactHeroSection>
      <Container>
        <Fade direction="up" triggerOnce>
          <ContactHeroTitle>
            {t("Do you have any question? Feel free to reach out.")}
          </ContactHeroTitle>
          <ContactHeroSubtitle>
            {t(
              "We are here to answer all your questions about our insurance software solutions. Contact us for detailed information about our products and services."
            )}
          </ContactHeroSubtitle>

          <ContactMethodsGrid>
            <Fade direction="left" triggerOnce>
              <ContactMethodsSection>
                {contactMethods.map((method, index) => (
                  <Fade
                    key={index}
                    direction="up"
                    delay={index * 100}
                    triggerOnce
                  >
                    <ContactMethod>
                      <ContactIcon>{method.icon}</ContactIcon>
                      <ContactTitle>{method.title}</ContactTitle>
                      <ContactDetail>
                        {method.type === "email" ? (
                          <a href={`mailto:${method.detail}`}>
                            {method.detail}
                          </a>
                        ) : (
                          <a href={`tel:${method.detail}`}>{method.detail}</a>
                        )}
                      </ContactDetail>
                    </ContactMethod>
                  </Fade>
                ))}
              </ContactMethodsSection>
            </Fade>

            <Fade direction="right" triggerOnce>
              <MapSection>
                <MapContainer>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d463.95656834037944!2d33.36347279999999!3d35.1854637!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14de17396bec9eab%3A0x68aa02b9192e91e8!2sWebsure%20Software%20Ltd!5e0!3m2!1sen!2str!4v1717901234567!5m2!1sen!2str"
                    allowFullScreen
                    style={{ height: "100%" }}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={t("Office Location")}
                  />
                </MapContainer>
              </MapSection>
            </Fade>
          </ContactMethodsGrid>
        </Fade>
      </Container>
    </ContactHeroSection>
  );
};

export default withTranslation()(ContactHero);
