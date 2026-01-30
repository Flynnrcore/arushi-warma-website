import { useState, useEffect } from "react";

const useScroll = (ref) => {
  const [isScrolledPast, setIsScrolledPast] = useState(false);

  useEffect(() => {
    const currentElement = ref.current;

    if (!currentElement) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsScrolledPast(!entry.isIntersecting);
      },
      { threshold: 0.1 },
    );

    observer.observe(currentElement);

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [ref]);
  return isScrolledPast;
};

export default useScroll;
