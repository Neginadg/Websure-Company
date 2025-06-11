import { useState } from "react";
import { Row, Col, Drawer } from "antd";
import { withTranslation, TFunction } from "react-i18next";
import { useHistory } from "react-router-dom";
import Container from "../../common/Container";
import { SvgIcon } from "../../common/SvgIcon";
import { Button } from "../../common/Button";
import {
  HeaderSection,
  LogoContainer,
  Burger,
  NotHidden,
  Menu,
  CustomNavLinkSmall,
  Label,
  Outline,
  Span,
} from "./styles";
import { LanguageSwitch, LanguageSwitchContainer } from "../Footer/styles";
import i18n from "../../translation";

const Header = ({ t }: { t: TFunction }) => {
  const history = useHistory();
  const handleChange = (language: string) => {
    i18n.changeLanguage(language);
  };
  const [visible, setVisibility] = useState(false);

  const toggleButton = () => {
    setVisibility(!visible);
  };

  const navigateTo = (path: string) => {
    history.push(path);
    setVisibility(false);
  };

  const MenuItem = ({ direction }: { direction?: "row" | "column" }) => {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: direction || "row",
        }}
      >
        <CustomNavLinkSmall onClick={() => navigateTo("/")}>
          <Span>{t("Home")}</Span>
        </CustomNavLinkSmall>
        <CustomNavLinkSmall onClick={() => navigateTo("/about")}>
          <Span>{t("About")}</Span>
        </CustomNavLinkSmall>
        <CustomNavLinkSmall
          style={{ width: "180px" }}
          onClick={() => navigateTo("/contact")}
        >
          <Span>
            <Button>{t("Contact")}</Button>
          </Span>
        </CustomNavLinkSmall>
        <LanguageSwitchContainer
          style={{ marginLeft: "16px", alignSelf: "center" }}
        >
          <LanguageSwitch onClick={() => handleChange("en")}>
            <SvgIcon
              src="english.svg"
              aria-label="homepage"
              width="30px"
              height="30px"
            />
          </LanguageSwitch>
          <LanguageSwitch onClick={() => handleChange("tr")}>
            <SvgIcon
              src="turkish.svg"
              aria-label="homepage"
              width="30px"
              height="30px"
            />
          </LanguageSwitch>
        </LanguageSwitchContainer>
      </div>
    );
  };

  return (
    <HeaderSection>
      <Container>
        <Row justify="space-between">
          {" "}
          <LogoContainer
            style={{ display: "flex", alignItems: "center" }}
            onClick={() => navigateTo("/")}
            aria-label="homepage"
          >
            <SvgIcon src="3Dlogo.jpeg" width="80px" height="70px" />
            <span
              style={{ fontWeight: 900, fontSize: "24px", marginLeft: "10px" }}
            >
              Websure<span style={{ color: "#2FC3EA" }}>Soft</span>
            </span>
          </LogoContainer>
          <NotHidden>
            <MenuItem />
          </NotHidden>
          <Burger onClick={toggleButton}>
            <Outline />
          </Burger>
        </Row>
        <Drawer closable={false} open={visible} onClose={toggleButton}>
          <Col style={{ marginBottom: "2.5rem" }}>
            <Label onClick={toggleButton}>
              <Col span={12}>
                <Menu>Menu</Menu>
              </Col>
              <Col span={12}>
                <Outline />
              </Col>
            </Label>
          </Col>
          <MenuItem direction="column" />
        </Drawer>
      </Container>
    </HeaderSection>
  );
};

export default withTranslation()(Header);
