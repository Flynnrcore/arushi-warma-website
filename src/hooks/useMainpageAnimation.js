import { gsap } from "gsap";
import { useLayoutEffect, useRef } from "react";

export const useMainpageAnimation = () => {
  const photosBlockRef = useRef(null);
  const heroLogoRef = useRef(null);

  useLayoutEffect(() => {
    const animationContext = gsap.context(() => {
      const timeline = gsap.timeline();

      timeline.to(
        ".mainband-photo",
        { opacity: 1, duration: 0.45, ease: "power2.out" },
        0.2,
      );
      timeline.fromTo(
        ".hero-arrows",
        {
          opacity: 0,
          filter: "blur(18px)",
          scale: 0.72,
          y: 18,
          rotation: -6,
        },
        {
          opacity: 1,
          filter: "blur(0px)",
          scale: 1,
          y: 0,
          rotation: 0,
          duration: 0.65,
          ease: "power3.out",
        },
        0.8,
      );
      timeline.fromTo(
        ".hero-fox",
        {
          opacity: 0,
          filter: "blur(10px) saturate(1.8)",
          rotation: -3,
          scale: 1.12,
        },
        {
          opacity: 1,
          filter: "blur(0px) saturate(1)",
          rotation: 0,
          scale: 1,
          duration: 0.5,
          ease: "power2.out",
        },
        0.6,
      );
      timeline.fromTo(
        ".hero-bandname",
        { clipPath: "inset(0 100% 0 0)" },
        { clipPath: "inset(0 0% 0 0)", duration: 2.5, ease: "power2.out" },
        1,
      );
      const sheenTimeline = gsap.timeline({
        delay: 1.35,
        repeat: -1,
        repeatDelay: 4,
      });

      sheenTimeline.fromTo(
        ".hero-fox-sheen",
        { opacity: 0, backgroundPosition: "120% 0" },
        {
          opacity: 0.9,
          backgroundPosition: "-20% 0",
          duration: 2.8,
          ease: "power2.inOut",
        },
      );
      sheenTimeline.to(".hero-fox-sheen", { opacity: 0, duration: 0.2 });

      return () => {
        timeline.kill();
        sheenTimeline.kill();
      };
    }, photosBlockRef);

    return () => animationContext.revert();
  }, []);

  return { photosBlockRef, heroLogoRef };
};
