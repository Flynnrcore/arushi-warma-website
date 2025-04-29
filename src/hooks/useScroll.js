import { useState, useEffect } from 'react';

const useScroll = (ref) => {
  const [isScrolledPast, setIsScrolledPast] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsScrolledPast(!entry.isIntersecting);
      },
      { threshold: 0.1 },
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref]);

  return isScrolledPast;
};

export default useScroll;
