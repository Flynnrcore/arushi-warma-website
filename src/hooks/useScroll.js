import { useState, useEffect } from "react";

const useScroll = (ref) => {
  const [isScrolledPast, setIsScrolledPast] = useState(false);

  useEffect(() => {
    const currentElement = ref.current;

    if (!currentElement) {
      return undefined;
    }

    const updateScrollState = () => {
      const rect = currentElement.getBoundingClientRect();
      const viewportHeight =
        window.innerHeight || document.documentElement.clientHeight;
      const hasUserScrolled = window.scrollY > 0;
      const shouldActivateHeader =
        hasUserScrolled && rect.top <= viewportHeight * 0.35;

      setIsScrolledPast(shouldActivateHeader);
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
  }, [ref]);

  return isScrolledPast;
};

export default useScroll;
