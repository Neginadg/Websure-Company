import styled from "styled-components";

export const ScrollUpContainer = styled("div")<{
  show: boolean;
}>`
  padding: 12px;
  position: fixed;
  right: 30px;
  bottom: 30px;
  z-index: 1000;
  cursor: pointer;
  background: #18216d;
  color: white;
  text-align: center;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  width: 48px;
  height: 48px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  transition: all 0.3s ease-in-out;
  visibility: ${(p) => (p.show ? "visible" : "hidden")};
  opacity: ${(p) => (p.show ? "1" : "0")};
  transform: ${(p) => (p.show ? "translateY(0)" : "translateY(20px)")};
  display: flex;

  svg {
    stroke: white !important;
  }

  &:hover {
    background: #2fc3ea;
    transform: translateY(-2px);
    box-shadow: 0 6px 25px rgba(0, 0, 0, 0.2);
  }

  &:active {
    transform: translateY(0);
  }

  @media screen and (max-width: 768px) {
    right: 20px;
    bottom: 20px;
    width: 44px;
    height: 44px;
    padding: 10px;
  }
`;
