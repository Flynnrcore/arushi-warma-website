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
          filter: "blur(4px) saturate(1.8)",
          scale: 1,
        },
        {
          opacity: 1,
          filter: "blur(0px) saturate(1)",
          scale: 1,
          duration: 0.35,
          ease: "power2.out",
        },
        0.6,
      );
      timeline.fromTo(
        ".hero-fox-glitch-blue",
        { opacity: 0, x: 0, clipPath: "inset(0 0 100% 0)" },
        {
          opacity: 0.8,
          x: -12,
          clipPath: "inset(18% 0 68% 0)",
          duration: 0.08,
          ease: "steps(1)",
        },
        0.7,
      );
      timeline.to(
        ".hero-fox-glitch-blue",
        {
          opacity: 0,
          x: 8,
          clipPath: "inset(61% 0 24% 0)",
          duration: 0.07,
          ease: "steps(1)",
        },
        0.78,
      );
      timeline.fromTo(
        ".hero-fox-glitch-cyan",
        { opacity: 0, x: 0, clipPath: "inset(100% 0 0 0)" },
        {
          opacity: 0.75,
          x: 11,
          clipPath: "inset(39% 0 43% 0)",
          duration: 0.08,
          ease: "steps(1)",
        },
        0.74,
      );
      timeline.to(
        ".hero-fox-glitch-cyan",
        {
          opacity: 0,
          x: -7,
          clipPath: "inset(76% 0 8% 0)",
          duration: 0.07,
          ease: "steps(1)",
        },
        0.82,
      );
      timeline.fromTo(
        ".hero-fox-glitch-blue",
        { opacity: 0, x: 0, clipPath: "inset(100% 0 0 0)" },
        {
          opacity: 0.7,
          x: 9,
          clipPath: "inset(48% 0 38% 0)",
          duration: 0.07,
          ease: "steps(1)",
        },
        0.98,
      );
      timeline.to(
        ".hero-fox-glitch-blue",
        {
          opacity: 0,
          x: -6,
          clipPath: "inset(12% 0 76% 0)",
          duration: 0.07,
          ease: "steps(1)",
        },
        1.05,
      );
      timeline.fromTo(
        ".hero-fox-glitch-cyan",
        { opacity: 0, x: 0, clipPath: "inset(0 0 100% 0)" },
        {
          opacity: 0.65,
          x: -10,
          clipPath: "inset(71% 0 15% 0)",
          duration: 0.07,
          ease: "steps(1)",
        },
        1.02,
      );
      timeline.to(
        ".hero-fox-glitch-cyan",
        {
          opacity: 0,
          x: 6,
          clipPath: "inset(27% 0 57% 0)",
          duration: 0.07,
          ease: "steps(1)",
        },
        1.09,
      );
      timeline.fromTo(
        ".hero-fox-glitch-blue",
        { opacity: 0, x: 0, clipPath: "inset(0 0 100% 0)" },
        {
          opacity: 0.75,
          x: -14,
          clipPath: "inset(33% 0 52% 0)",
          duration: 0.08,
          ease: "steps(1)",
        },
        1.24,
      );
      timeline.to(
        ".hero-fox-glitch-blue",
        {
          opacity: 0,
          x: 10,
          clipPath: "inset(81% 0 7% 0)",
          duration: 0.08,
          ease: "steps(1)",
        },
        1.32,
      );
      timeline.fromTo(
        ".hero-fox-glitch-cyan",
        { opacity: 0, x: 0, clipPath: "inset(100% 0 0 0)" },
        {
          opacity: 0.7,
          x: 13,
          clipPath: "inset(57% 0 29% 0)",
          duration: 0.08,
          ease: "steps(1)",
        },
        1.28,
      );
      timeline.to(
        ".hero-fox-glitch-cyan",
        {
          opacity: 0,
          x: -9,
          clipPath: "inset(6% 0 82% 0)",
          duration: 0.08,
          ease: "steps(1)",
        },
        1.36,
      );
      timeline.fromTo(
        ".hero-bandname",
        {
          opacity: 0,
          y: 12,
          scale: 0.96,
          filter: "blur(8px)",
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          filter: "blur(0px)",
          duration: 1.4,
          ease: "power3.out",
        },
        1.3,
      );
      const sheenTimeline = gsap.timeline({
        delay: 2.6,
        repeat: -1,
        repeatDelay: 6,
      });

      sheenTimeline.fromTo(
        ".hero-fox-sheen",
        { opacity: 0, backgroundPosition: "120% 0" },
        {
          opacity: 0.9,
          backgroundPosition: "-20% 0",
          duration: 2.2,
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
