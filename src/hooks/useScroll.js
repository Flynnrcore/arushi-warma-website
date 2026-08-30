import { useEffect, useRef, useState } from "react";

const useScroll = (ref, enabled = true) => {
  const [isScrolledPast, setIsScrolledPast] = useState(false);
  const isScrolledPastRef = useRef(false);

  useEffect(() => {
    if (!enabled) {
      isScrolledPastRef.current = false;
      setIsScrolledPast(false);
      return undefined;
    }

    const currentElement = ref.current;

    if (!currentElement) {
      return undefined;
    }

    const updateScrollState = () => {
      const rect = currentElement.getBoundingClientRect();
      const viewportHeight =
        window.innerHeight || document.documentElement.clientHeight;

      const heroIsVisible = rect.top < viewportHeight * 0.9 && rect.bottom > 0;
      const heroHasLeftViewport = rect.bottom < viewportHeight * 0.75;

      let nextState = isScrolledPastRef.current;

      if (!nextState && heroHasLeftViewport) {
        nextState = true;
      }

      if (nextState && heroIsVisible) {
        nextState = false;
      }

      if (nextState !== isScrolledPastRef.current) {
        isScrolledPastRef.current = nextState;
        setIsScrolledPast(nextState);
      }
    };

    updateScrollState();

    let frameId = null;

    const handleScroll = () => {
      if (frameId !== null) {
        return;
      }

      frameId = window.requestAnimationFrame(() => {
        updateScrollState();
        frameId = null;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      if (frameId !== null) {
        window.cancelAnimationFrame(frameId);
      }

      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [enabled, ref]);

  return isScrolledPast;
};

export default useScroll;
