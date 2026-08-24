import { useEffect, useRef } from "react";

import useScroll from "../hooks/useScroll";

import AboutSection from "./AboutSection";
import MusicSection from "./MusicSection/MusicSection";
import VideoSection from "./VideoSection/VideoSection";

function Main({ setHeaderBg }) {
  const photosBlockRef = useRef(null);
  const isScrolledPast = useScroll(photosBlockRef);

  const handleScrollToAbout = () => {
    document
      .querySelector(".about-section")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    setHeaderBg(isScrolledPast ? "#111626" : "transparent");
  }, [isScrolledPast, setHeaderBg]);

  return (
    <main>
      <picture className="mainband-wrapper" ref={photosBlockRef}>
        <source media="(max-width: 767px)" srcSet="/band-mobile.webp" />
        <source media="(max-width: 1199px)" srcSet="/band-tablet.webp" />
        <source media="(min-width: 1200px)" srcSet="/band-desktop.webp" />
        <img
          className="mainband-photo"
          src="/band.webp"
          alt="Логотип группы Arushi Warma"
        />
        <button
          className="scroll-down-button"
          type="button"
          aria-label="Перейти к разделу о группе"
          onClick={handleScrollToAbout}
        >
          <span className="scroll-down-icon" aria-hidden="true">
            <span />
            <span />
          </span>
        </button>
      </picture>
      <AboutSection />
      <MusicSection />
      <VideoSection />
    </main>
  );
}

export default Main;
