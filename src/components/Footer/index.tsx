import { Row, Col } from "antd";
import { withTranslation, TFunction } from "react-i18next";
import { SvgIcon } from "../../common/SvgIcon";
import Container from "../../common/Container";

import i18n from "i18next";
import {
  FooterSection,
  Title,
  NavLink,
  Extra,
  LogoContainer,
  Para,
  Large,
  Chat,
  Empty,
  FooterContainer,
  Language,
  Label,
  LanguageSwitch,
  LanguageSwitchContainer,
} from "./styles";

interface SocialLinkProps {
  height?: string;
  width?: string;
  href: string;
  src: string;
}

const Footer = ({ t }: { t: TFunction }) => {
  const SocialLink = ({ href, src, height, width }: SocialLinkProps) => {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        key={src}
        aria-label={src}
      >
        <SvgIcon src={src} width={width ?? "25px"} height={height ?? "25px"} />
      </a>
    );
  };

  return (
    <>
      <FooterSection>
        <Container>
          <Row justify="space-between">
            <Col lg={10} md={10} sm={12} xs={12}>
              <Language>{t("Contact")}</Language>
              <Large to="/contact">{t("Tell us everything")}</Large>
              <Para>
                {t(`Do you have any question? Feel free to reach out.`)}
              </Para>
              <a href="mailto:info@websuresoft.com">
                <Chat>{t(`Let's Chat`)}</Chat>
              </a>
            </Col>
            <Col lg={10} md={10} sm={12} xs={12}>
              <Language>{t("Address")}</Language>
              <Para>Kızılay Sk</Para>
              <Para>Betoncu Apt. No:4</Para>
              <Para>Lefkoşa - KKTC, Mersin 10, Türkiye</Para>
              {/* </Col> */}
              {/* <Col lg={6} md={6} sm={12} xs={12}> */}
              <Language style={{ marginTop: "2rem" }}>
                {t("Telephone")}
              </Language>
              <Para>+90 392 228 15 21</Para>
              <Para>+90 392 228 24 03</Para>
            </Col>
          </Row>
        </Container>
      </FooterSection>
      <Extra>
        <Container border={true}>
          <Row
            justify="space-between"
            align="middle"
            style={{ paddingTop: "3rem" }}
          >
            <NavLink to="/">
              <LogoContainer style={{ display: "flex", alignItems: "center" }}>
                <SvgIcon
                  src="logo.png"
                  aria-label="homepage"
                  width="80px"
                  height="70px"
                />{" "}
                <span
                  style={{
                    fontWeight: 900,
                    fontSize: "24px",
                    marginLeft: "10px",
                  }}
                >
                  Websure<span style={{ color: "#2FC3EA" }}> Software</span>{" "}
                  Ltd.
                  <br />
                  <span
                    style={{
                      fontStyle: "italic",
                      fontSize: "14px",
                      display: "block",
                      marginTop: "-5px",
                    }}
                  >
                    Software Development Company
                  </span>
                </span>
              </LogoContainer>
            </NavLink>
            <FooterContainer>
              <SocialLink
                height="30px"
                width="30px"
                href="mailto:info@websuresoft.com"
                src="email.svg"
              />
              <SocialLink
                href="https://www.linkedin.com/in/lasha-kakabadze/"
                src="linkedin.svg"
              />
            </FooterContainer>
          </Row>
        </Container>
      </Extra>
    </>
  );
};

export default withTranslation()(Footer);
