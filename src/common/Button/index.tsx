import { StyledButton } from "./styles";
import { ButtonProps } from "../types";

export const Button = ({ width, color, children, onClick }: ButtonProps) => (
  <StyledButton style={{ width: width }} color={color} onClick={onClick}>
    {children}
  </StyledButton>
);
