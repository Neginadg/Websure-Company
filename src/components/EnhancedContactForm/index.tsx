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
            </InfoContent>
          </Fade>
        </FormContainer>
      </Container>
    </ContactFormSection>
  );
};

export default withTranslation()(EnhancedContactForm);
