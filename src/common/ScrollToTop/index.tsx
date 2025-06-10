import { useCallback, useEffect, useState } from "react";
import { SvgIcon } from "../SvgIcon";
import { ScrollUpContainer } from "./styles";

const ScrollToTop = () => {
  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = useCallback(() => {
    const offsetFromTop = window.scrollY;

    if (!showScroll && offsetFromTop > 350) {
      setShowScroll(true);
    } else if (offsetFromTop <= 350) {
      setShowScroll(false);
    }
  }, [showScroll]);

  useEffect(() => {
    window.addEventListener("scroll", checkScrollTop);
    return () => {
      window.removeEventListener("scroll", checkScrollTop);
    };
  }, [checkScrollTop]);
  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <ScrollUpContainer onClick={scrollUp} show={showScroll}>
      <SvgIcon src="scroll-top.svg" width="24px" height="24px" />
    </ScrollUpContainer>
  );
};

export default ScrollToTop;
