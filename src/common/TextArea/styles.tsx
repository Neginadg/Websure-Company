import styled from "styled-components";

export const StyledContainer = styled("div")`
  display: inline-block;
  width: 100%;
  padding: 10px 5px;
  margin-bottom: -0.625rem;
`;

export const StyledTextArea = styled("textarea")`
  resize: none;
  font-size: 0.875rem;
  height: 185px;
  width: 100%;
  padding: 12px 16px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 8px;
  box-sizing: border-box;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  color: white;

  &::placeholder {
    color: rgba(255, 255, 255, 0.6);
  }

  &:focus {
    outline: none;
    border-color: #2fc3ea;
    box-shadow: 0 0 0 3px rgba(47, 195, 234, 0.2);
    background: rgba(255, 255, 255, 0.15);
  }
`;

export const Label = styled("label")`
  display: block;
  padding-bottom: 10px;
  text-transform: capitalize;
`;
