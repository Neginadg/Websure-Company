import styled from "styled-components";

export const TimelineSection = styled("section")`
  padding: 8rem 0;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;

  @media only screen and (max-width: 1024px) {
    padding: 4rem 0;
  }
`;

export const TimelineSectionTitle = styled("h2")`
  font-size: 2.5rem;
  font-family: "Motiva Sans Bold", sans-serif;
  text-align: center;
  margin-bottom: 4rem;
  color: white;

  @media only screen and (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const TimelineContainer = styled("div")`
  position: relative;
  max-width: 800px;
  margin: 0 auto;

  &::before {
    content: "";
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 4px;
    height: 100%;
    background: rgba(255, 255, 255, 0.3);
    z-index: 0;

    @media only screen and (max-width: 768px) {
      left: 20px;
    }
  }
`;

export const TimelineItem = styled("div")<{ $isEven: boolean }>`
  position: relative;
  margin-bottom: 4rem;
  width: 50%;

  ${({ $isEven }) =>
    $isEven
      ? `
    left: 50%;
    padding-left: 3rem;
    text-align: left;
  `
      : `
    left: 0;
    padding-right: 3rem;
    text-align: right;
  `}

  @media only screen and (max-width: 768px) {
    width: 100%;
    left: 40px;
    padding-left: 2rem;
    padding-right: 0;
    text-align: left;
  }

  &::before {
    content: "";
    position: absolute;
    width: 20px;
    height: 20px;
    background: #2fc3ea;
    border: 4px solid white;
    border-radius: 50%;
    top: 20px;
    z-index: 1;

    ${({ $isEven }) =>
      $isEven
        ? `
      left: -13px;
    `
        : `
      right: -13px;
    `}

    @media only screen and (max-width: 768px) {
      left: -30px;
    }
  }
`;

export const TimelineContent = styled("div")`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  padding: 2rem;
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.2);
`;

export const TimelineYear = styled("h3")`
  font-size: 1.5rem;
  font-family: "Motiva Sans Bold", sans-serif;
  color: #2fc3ea;
  margin-bottom: 1rem;
`;

export const TimelineItemTitle = styled("h4")`
  font-size: 1.3rem;
  font-family: "Motiva Sans Bold", sans-serif;
  margin-bottom: 1rem;
  color: white;
`;

export const TimelineDescription = styled("p")`
  font-size: 1rem;
  line-height: 1.6;
  margin: 0;
  color: rgba(255, 255, 255, 0.9);
`;
