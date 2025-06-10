import React from "react";
import { withTranslation, TFunction } from "react-i18next";
import {
  ScrollContainer,
  ScrollWrapper,
  ScrollTrack,
  LogoItem,
  LogoImage,
  SectionTitle,
} from "./styles";

interface InfiniteScrollProps {
  t: TFunction;
}

const InfiniteScroll = ({ t }: InfiniteScrollProps) => {
  // Array of all available logos
  const logos = [
    "icon1.png",
    "icon2.png",
    "icon3.png",
    "icon4.png",
    "icon5.png",
    "icon6.png",
    "icon7.png",
    "icon8.png",
    "icon10.png",
    "icon11.png",
    "icon12.png",
    "icon13.png",
    "icon14.png",
    "icon16.png",
    "icon17.png",
    "icon18.png",
    "icon19.png",
    "icon20.png",
    "icon21.png",
    "icon22.png",
    "icon23.png",
    "icon25.png",
    "icon26.png",
    "icon28.png",
    "icon29.png",
    "icon30.png",
    "icon31.png",
    "icon32.png",
    "icon33.png",
    "icon34.png",
  ];

  // Duplicate logos for seamless infinite scroll
  const duplicatedLogos = [...logos, ...logos];

  return (
    <ScrollContainer>
      <SectionTitle>{t("Trusted By")}</SectionTitle>
      <ScrollWrapper>
        <ScrollTrack>
          {duplicatedLogos.map((logo, index) => (
            <LogoItem key={`${logo}-${index}`}>
              <LogoImage
                src={`/img/logos/${logo}`}
                alt={`Partner logo ${index + 1}`}
                loading="lazy"
              />
            </LogoItem>
          ))}
        </ScrollTrack>
      </ScrollWrapper>
    </ScrollContainer>
  );
};

export default withTranslation()(InfiniteScroll);
