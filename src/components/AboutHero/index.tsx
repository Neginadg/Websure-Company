import React from "react";
import { withTranslation, TFunction } from "react-i18next";
import { Fade } from "react-awesome-reveal";
import Container from "../../common/Container";
import {
  HeroSection,
  HeroContent,
  HeroTitle,
  HeroSubtitle,
  StatsContainer,
  StatCard,
  StatNumber,
  StatLabel,
} from "./styles";

interface AboutHeroProps {
  t: TFunction;
}

const AboutHero = ({ t }: AboutHeroProps) => {
  return (
    <HeroSection>
      <Container>
        <Fade direction="up" triggerOnce>
          <HeroContent>
            <HeroTitle>
              {t("Trust, Software and Continuous Development")}
            </HeroTitle>
            <HeroSubtitle>
              {t(
                "Our company operates with software solutions specific to the insurance sector. Since our establishment, we continue to lead the industry with our customer-focused approach, our structure open to technological innovations, and our sustainability vision."
              )}
            </HeroSubtitle>

            <StatsContainer>
              <StatCard>
                <StatNumber>30+</StatNumber>
                <StatLabel>{t("Years of Experience")}</StatLabel>
              </StatCard>
              <StatCard>
                <StatNumber>97%</StatNumber>
                <StatLabel>{t("TRNC Market Coverage")}</StatLabel>
              </StatCard>
              <StatCard>
                <StatNumber>50+</StatNumber>
                <StatLabel>{t("Satisfied Clients")}</StatLabel>
              </StatCard>
            </StatsContainer>
          </HeroContent>
        </Fade>
      </Container>
    </HeroSection>
  );
};

export default withTranslation()(AboutHero);
