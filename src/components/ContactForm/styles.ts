import styled from "styled-components";

export const ContactContainer = styled("div")`
  padding: 5rem 0;
  width: 100%;

  @media only screen and (max-width: 1024px) {
    padding: 3rem 0;
  }
`;

export const FormGroup = styled("form")`
  width: 100%;

  @media only screen and (max-width: 1045px) {
    margin-top: 2rem;
  }
`;

export const Span = styled("span")`
  display: block;
  font-weight: 600;
  color: rgb(255, 130, 92);
  height: 0.775rem;
  padding: 0 0.675rem;
`;

export const ButtonContainer = styled("div")`
  text-align: end;
  position: relative;
  width: 100%;
  margin-top: 1rem;

  @media only screen and (max-width: 414px) {
    padding-top: 0.75rem;
    text-align: center;
  }
`;
