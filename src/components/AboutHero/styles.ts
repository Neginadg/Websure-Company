import styled from "styled-components";

export const HeroSection = styled("section")`
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  padding: 8rem 0 6rem;
  position: relative;
  overflow: hidden;

  @media only screen and (max-width: 1024px) {
    padding: 4rem 0 3rem;
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url("/img/svg/graphs.svg") no-repeat center;
    background-size: cover;
    opacity: 0.05;
    z-index: 0;
  }
`;

export const HeroContent = styled("div")`
  position: relative;
  z-index: 1;
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
`;

export const HeroTitle = styled("h1")`
  font-size: 3.5rem;
  font-family: "Motiva Sans Bold", sans-serif;
  color: #0f6996;
  margin-bottom: 1.5rem;
  line-height: 1.2;

  @media only screen and (max-width: 768px) {
    font-size: 2.5rem;
  }

  @media only screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const HeroSubtitle = styled("p")`
  font-size: 1.4rem;
  color: #6b7280;
  margin-bottom: 2rem;
  line-height: 1.6;

  @media only screen and (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

export const StatsContainer = styled("div")`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin-top: 4rem;
`;

export const StatCard = styled("div")`
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  border-radius: 16px;
  padding: 2rem;
  text-align: center;
  box-shadow: 0 8px 32px rgba(31, 38, 135, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.18);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 40px rgba(31, 38, 135, 0.2);
  }
`;

export const StatNumber = styled("h3")`
  font-size: 2.5rem;
  font-family: "Motiva Sans Bold", sans-serif;
  color: #2fc3ea;
  margin-bottom: 0.5rem;
`;

export const StatLabel = styled("p")`
  font-size: 1rem;
  color: #6b7280;
  margin: 0;
`;
