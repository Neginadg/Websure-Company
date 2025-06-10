import styled from "styled-components";

export const FeaturesSection = styled("section")`
  padding: 8rem 0;
  background: #fff;

  @media only screen and (max-width: 1024px) {
    padding: 4rem 0;
  }
`;

export const SectionTitle = styled("h2")`
  font-size: 2.5rem;
  font-family: "Motiva Sans Bold", sans-serif;
  color: #0f6996;
  text-align: center;
  margin-bottom: 3rem;

  @media only screen and (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const FeaturesGrid = styled("div")`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 3rem;
  margin-top: 4rem;
`;

export const FeatureCard = styled("div")`
  background: #fff;
  border-radius: 20px;
  padding: 3rem 2rem;
  text-align: center;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  border: 1px solid #f0f0f0;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.15);
    border-color: #2fc3ea;
  }
`;

export const FeatureIcon = styled("div")`
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, #2fc3ea 0%, #0f6996 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 2rem;
  font-size: 2rem;
  color: white;
`;

export const FeatureTitle = styled("h3")`
  font-size: 1.5rem;
  font-family: "Motiva Sans Bold", sans-serif;
  color: #0f6996;
  margin-bottom: 1rem;
`;

export const FeatureDescription = styled("p")`
  font-size: 1rem;
  color: #6b7280;
  line-height: 1.6;
  margin: 0;
`;

export const CheckIcon = styled("span")`
  display: inline-block;
  width: 20px;
  height: 20px;
  background: #2fc3ea;
  border-radius: 50%;
  color: white;
  text-align: center;
  line-height: 20px;
  font-size: 12px;
  margin-right: 10px;
  flex-shrink: 0;
`;

export const FeatureList = styled("div")`
  text-align: left;
  margin-top: 1.5rem;
`;

export const FeatureItem = styled("div")`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  font-size: 1rem;
  color: #374151;

  &:last-child {
    margin-bottom: 0;
  }
`;
