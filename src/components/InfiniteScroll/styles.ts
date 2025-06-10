import styled, { keyframes } from "styled-components";

// Animation for infinite horizontal scroll
const scroll = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
`;

export const ScrollContainer = styled.div`
  width: 100vw;
  align-self: center;
  padding: 80px 0;
  background: linear-gradient(135deg, #18216d 0%, #77999f 100%);
  background: white;
  margin-top: 60px;

  @media only screen and (max-width: 768px) {
    padding: 60px 0;
    margin-top: 40px;
  }
`;

export const SectionTitle = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  font-weight: 600;
  color: #0f6996;
  margin-bottom: 60px;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    bottom: -15px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 4px;
    background: linear-gradient(90deg, #18216d, #2fc3ea);
    border-radius: 2px;
  }

  @media only screen and (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 40px;
  }

  @media only screen and (max-width: 480px) {
    font-size: 1.8rem;
  }
`;

export const ScrollWrapper = styled.div`
  width: 100%;
  overflow: hidden;
  position: relative;

  &::before,
  &::after {
    content: "";
    position: absolute;
    top: 0;
    width: 150px;
    height: 100%;
    z-index: 2;
    pointer-events: none;
  }

  &::before {
    left: 0;
    // background: linear-gradient(90deg, #f8f9fa, transparent);
  }

  &::after {
    right: 0;
    // background: linear-gradient(270deg, #e9ecef, transparent);
  }
`;

export const ScrollTrack = styled.div`
  display: flex;
  animation: ${scroll} 30s linear infinite;
  width: calc(200% + 20px);

  &:hover {
    animation-play-state: paused;
  }
`;

export const LogoItem = styled.div`
  flex: none;
  margin-right: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 120px;
  height: 80px;

  @media only screen and (max-width: 768px) {
    margin-right: 40px;
    min-width: 100px;
    height: 70px;
  }

  @media only screen and (max-width: 480px) {
    margin-right: 30px;
    min-width: 80px;
    height: 60px;
  }
`;

export const LogoImage = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }

  /* Ensure logos are properly sized */
  width: auto;
  height: auto;
  max-width: 120px;
  max-height: 80px;

  @media only screen and (max-width: 768px) {
    max-width: 100px;
    max-height: 70px;
  }

  @media only screen and (max-width: 480px) {
    max-width: 80px;
    max-height: 60px;
  }
`;
