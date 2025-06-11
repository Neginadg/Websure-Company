import styled from "styled-components";

export const ContactHeroSection = styled("section")`
  background: linear-gradient(135deg, #2fc3ea 0%, #18216d 100%);
  padding: 8rem 0 6rem;
  color: white;
  text-align: center;

  @media only screen and (max-width: 1024px) {
    padding: 4rem 0 3rem;
  }
`;

export const ContactHeroTitle = styled("h1")`
  color: white;
  font-size: 3rem;
  font-family: "Motiva Sans Bold", sans-serif;
  margin-bottom: 1.5rem;

  @media only screen and (max-width: 768px) {
    font-size: 2.2rem;
  }
`;

export const ContactHeroSubtitle = styled("p")`
  color: rgba(255, 255, 255, 0.8);
  font-size: 1.3rem;
  margin-bottom: 3rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  opacity: 0.9;

  @media only screen and (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

export const ContactMethodsGrid = styled("div")`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto auto;
  gap: 4rem;
  margin-top: 4rem;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;

  @media only screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;

export const ContactMethodsSection = styled("div")`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
`;

export const MapSection = styled("div")`
  grid-row: span 2;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const MapTitle = styled("h3")`
  color: white;
  font-size: 1.5rem;
  font-family: "Motiva Sans Bold", sans-serif;
  margin-bottom: 1rem;
  text-align: center;
`;

export const MapContainer = styled("div")`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 16px;
  padding: 1rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  height: 100%;
  grid-row: span 2;
  overflow: hidden;

  iframe {
    width: 100%;
    height: 100%;
    border: none;
    border-radius: 12px;
  }
`;

export const ContactMethod = styled("div")`
  color: white;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 16px;
  padding: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: translateY(-5px);
  }
`;

export const ContactIcon = styled("div")`
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;

export const ContactTitle = styled("h3")`
  color: white;
  font-size: 1.3rem;
  font-family: "Motiva Sans Bold", sans-serif;
  margin-bottom: 0.5rem;
`;

export const ContactDetail = styled("p")`
  color: white;
  font-size: 1rem;
  margin: 0;
  opacity: 0.9;

  a {
    color: white;
    text-decoration: none;
    transition: all 0.3s ease;

    &:hover {
      color: #2fc3ea;
      text-decoration: underline;
    }
  }
`;
