import { withTranslation, TFunction } from "react-i18next";
import { Fade } from "react-awesome-reveal";
import Container from "../../common/Container";
import {
  FeaturesSection,
  SectionTitle,
  FeaturesGrid,
  FeatureCard,
  FeatureIcon,
  FeatureTitle,
  FeatureDescription,
  FeatureList,
  FeatureItem,
  CheckIcon,
} from "./styles";

interface FeaturesGridProps {
  t: TFunction;
}

const FeaturesGridComponent = ({ t }: FeaturesGridProps) => {
  const features = [
    {
      icon: "🏢",
      title: t("Industry Leadership"),
      description: t("Leading TRNC insurance sector with innovative solutions"),
      items: [
        t("30+ years of experience"),
        t("97% market coverage"),
        t("Trusted by major insurance companies"),
      ],
    },
    {
      icon: "💻",
      title: t("Custom Software Solutions"),
      description: t("Tailored software for insurance agencies and companies"),
      items: [
        t("Policy management systems"),
        t("Claims processing"),
        t("Customer relationship management"),
      ],
    },
    {
      icon: "🤝",
      title: t("Customer-Focused Approach"),
      description: t("Dedicated support and customer satisfaction"),
      items: [
        t("technical support"),
        t("Regular training programs"),
        t("Personalized service delivery"),
      ],
    },
  ];

  return (
    <FeaturesSection>
      <Container>
        <Fade direction="up" triggerOnce>
          <SectionTitle>{t("Why Us?")}</SectionTitle>
        </Fade>

        <FeaturesGrid>
          {features.map((feature, index) => (
            <Fade key={index} direction="up" delay={index * 100} triggerOnce>
              <FeatureCard>
                <FeatureIcon>{feature.icon}</FeatureIcon>
                <FeatureTitle>{feature.title}</FeatureTitle>
                <FeatureDescription>{feature.description}</FeatureDescription>
                <FeatureList>
                  {feature.items.map((item, itemIndex) => (
                    <FeatureItem key={itemIndex}>
                      <CheckIcon>✓</CheckIcon>
                      {item}
                    </FeatureItem>
                  ))}
                </FeatureList>
              </FeatureCard>
            </Fade>
          ))}
        </FeaturesGrid>
      </Container>
    </FeaturesSection>
  );
};

export default withTranslation()(FeaturesGridComponent);
