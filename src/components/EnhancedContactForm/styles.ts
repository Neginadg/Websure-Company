import styled from "styled-components";

export const ContactFormSection = styled("section")`
  padding: 8rem 0;
  background: linear-gradient(135deg, #18216d 0%, #1a1f3a 100%);

  @media only screen and (max-width: 1024px) {
    padding: 4rem 0;
  }
`;

export const FormContainer = styled("div")`
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  gap: 4rem;
  align-items: center;

  @media only screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;

export const FormContent = styled("div")`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  padding: 3rem;
  border-radius: 20px;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.2);
  width: 100%;
  height: 100%;
`;

export const FormTitle = styled("h2")`
  text-align: center;
  font-size: 2rem;
  font-family: "Motiva Sans Bold", sans-serif;
  color: white;
  margin-bottom: 1rem;
`;

export const FormDescription = styled("p")`
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 2rem;
  line-height: 1.6;
`;

export const InfoContent = styled("div")`
  padding: 2rem 0;
`;

export const InfoTitle = styled("h2")`
  text-align: center;
  font-size: 2rem;
  font-family: "Motiva Sans Bold", sans-serif;
  color: white;
  margin-bottom: 2rem;
`;

export const InfoCard = styled("div")`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  padding: 2rem;
  border-radius: 16px;
  margin-bottom: 2rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  border-left: 4px solid #2fc3ea;
  border: 1px solid rgba(255, 255, 255, 0.2);
`;

export const InfoCardTitle = styled("h3")`
  font-size: 1.2rem;
  font-family: "Motiva Sans Bold", sans-serif;
  color: white;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
`;

export const InfoCardIcon = styled("span")`
  font-size: 1.5rem;
  margin-right: 1rem;
`;

export const InfoCardText = styled("p")`
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.8);
  margin: 0;
  line-height: 1.6;
`;

export const WorkingHours = styled("div")`
  background: linear-gradient(135deg, #2fc3ea 0%, #18216d 100%);
  color: white;
  padding: 2rem;
  border-radius: 16px;
  text-align: center;
`;

export const WorkingHoursTitle = styled("h3")`
  font-size: 1.3rem;
  font-family: "Motiva Sans Bold", sans-serif;
  margin-bottom: 1rem;
`;

export const WorkingHoursText = styled("p")`
  font-size: 1rem;
  margin: 0.5rem 0;
  opacity: 0.9;
`;
