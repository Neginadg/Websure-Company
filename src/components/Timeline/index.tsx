import { withTranslation, TFunction } from "react-i18next";
import { Fade } from "react-awesome-reveal";
import Container from "../../common/Container";
import {
  TimelineSection,
  TimelineSectionTitle,
  TimelineContainer,
  TimelineItem,
  TimelineContent,
  TimelineYear,
  TimelineItemTitle,
  TimelineDescription,
} from "./styles";

interface TimelineProps {
  t: TFunction;
}

const Timeline = ({ t }: TimelineProps) => {
  const timelineData = [
    {
      year: "1992",
      title: t("Company Foundation"),
      description: t(
        "WebsureSoft Ltd. was established with a vision to revolutionize the insurance software industry in TRNC."
      ),
    },
    {
      year: "1998",
      title: t("First Major Product Launch"),
      description: t(
        "Launched our flagship insurance management system, becoming the preferred choice for local agencies."
      ),
    },
    {
      year: "2005",
      title: t("Market Leadership"),
      description: t(
        "Achieved 50% market share in TRNC insurance sector with innovative digital solutions."
      ),
    },
    {
      year: "2012",
      title: t("Cloud Migration"),
      description: t(
        "Successfully transitioned all solutions to cloud-based architecture, ensuring scalability and security."
      ),
    },
    {
      year: "2018",
      title: t("Mobile Revolution"),
      description: t(
        "Introduced mobile-first solutions and real-time processing capabilities for modern insurance needs."
      ),
    },
    {
      year: "2025",
      title: t("Future Vision"),
      description: t(
        "Continuing to innovate with AI-powered solutions and serving 97% of the TRNC insurance market."
      ),
    },
  ];

  return (
    <TimelineSection>
      <Container>
        <Fade direction="up" triggerOnce>
          <TimelineSectionTitle>
            {t("Our Journey Through Time")}
          </TimelineSectionTitle>
        </Fade>

        <TimelineContainer>
          {timelineData.map((item, index) => (
            <Fade
              key={index}
              direction={index % 2 === 0 ? "right" : "left"}
              delay={index * 100}
              triggerOnce
            >
              <TimelineItem $isEven={index % 2 !== 0}>
                <TimelineContent>
                  <TimelineYear>{item.year}</TimelineYear>
                  <TimelineItemTitle>{item.title}</TimelineItemTitle>
                  <TimelineDescription>{item.description}</TimelineDescription>
                </TimelineContent>
              </TimelineItem>
            </Fade>
          ))}
        </TimelineContainer>
      </Container>
    </TimelineSection>
  );
};

export default withTranslation()(Timeline);
