import { lazy } from "react";
import { withTranslation, TFunction } from "react-i18next";
import { Fade } from "react-awesome-reveal";
import Container from "../../common/Container";
import {
  ContactFormSection,
  FormContainer,
  FormContent,
  FormTitle,
  FormDescription,
  InfoContent,
  InfoTitle,
  InfoCard,
  InfoCardTitle,
  InfoCardIcon,
  InfoCardText,
  WorkingHours,
  WorkingHoursTitle,
  WorkingHoursText,
} from "./styles";

const FormOnly = lazy(() => import("../ContactForm/FormOnly"));

interface EnhancedContactFormProps {
  t: TFunction;
}

const EnhancedContactForm = ({ t }: EnhancedContactFormProps) => {
  const infoCards = [
    {
      icon: "🏢",
      title: t("Our Office"),
      text: t(
        "Located in the heart of Nicosia, our modern office space is equipped with state-of-the-art technology to serve you better."
      ),
    },
    {
      icon: "⚡",
      title: t("Quick Response"),
      text: t(
        "We guarantee a response within 24 hours for all inquiries. Our dedicated team is always ready to assist you."
      ),
    },
    {
      icon: "🔒",
      title: t("Secure Communication"),
      text: t(
        "All communications are encrypted and secure. Your data privacy and security are our top priorities."
      ),
    },
  ];

  return (
    <ContactFormSection>
      <Container>
        <FormContainer>
          <Fade direction="left" triggerOnce>
            <FormContent>
              <FormTitle>{t("Send us a message")}</FormTitle>
              <FormDescription>
                {t(
                  "Fill out the form below and we'll get back to you as soon as possible. We're here to help with any questions about our insurance software solutions."
                )}
              </FormDescription>
              <FormOnly />
            </FormContent>
          </Fade>

          <Fade direction="right" triggerOnce>
            <InfoContent>
              <InfoTitle>{t("Get in Touch")}</InfoTitle>

              {infoCards.map((card, index) => (
                <Fade
                  key={index}
                  direction="up"
                  delay={index * 100}
                  triggerOnce
                >
                  <InfoCard>
                    <InfoCardTitle>
                      <InfoCardIcon>{card.icon}</InfoCardIcon>
                      {card.title}
                    </InfoCardTitle>
                    <InfoCardText>{card.text}</InfoCardText>
                  </InfoCard>
                </Fade>
              ))}

              {/* <Fade direction="up" delay={300} triggerOnce>
                <WorkingHours>
                  <WorkingHoursTitle>{t("Working Hours")}</WorkingHoursTitle>
                  <WorkingHoursText>
                    {t("Monday - Friday: 9:00 AM - 6:00 PM")}
                  </WorkingHoursText>
                  <WorkingHoursText>
                    {t("Saturday: 9:00 AM - 1:00 PM")}
                  </WorkingHoursText>
                  <WorkingHoursText>{t("Sunday: Closed")}</WorkingHoursText>
                </WorkingHours>
              </Fade> */}
            </InfoContent>
          </Fade>
        </FormContainer>
      </Container>
    </ContactFormSection>
  );
};

export default withTranslation()(EnhancedContactForm);
