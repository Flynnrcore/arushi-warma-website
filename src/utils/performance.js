export const shouldReduceHeroAnimation = () => {
  if (typeof window === "undefined") {
    return false;
  }

  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;
  const isMobileViewport = window.matchMedia("(max-width: 767px)").matches;

  return prefersReducedMotion || isMobileViewport;
};

export const getScrollBehavior = () =>
  shouldReduceHeroAnimation() ? "auto" : "smooth";
