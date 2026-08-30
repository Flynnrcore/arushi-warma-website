import { useEffect } from "react";

import { useMainpageAnimation } from "../hooks/useMainpageAnimation";
import useScroll from "../hooks/useScroll";

import AboutSection from "./AboutSection";
import MusicSection from "./MusicSection/MusicSection";
import VideoSection from "./VideoSection/VideoSection";
import "./Main.css";

function Main({ setHeaderBg }) {
  const { photosBlockRef, heroLogoRef } = useMainpageAnimation();
  const isScrolledPast = useScroll(photosBlockRef);

  const handleScrollToAbout = () => {
    document
      .querySelector(".about-section")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    setHeaderBg(
      isScrolledPast
        ? {
            backgroundColor: "#111626ab",
            backdropFilter: "blur(8px)",
            boxShadow: "0 12px 24px rgb(0 0 0 / 18%)",
          }
        : { backgroundColor: "transparent" },
    );
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
        <div className="hero-logo" ref={heroLogoRef}>
          <img
            className="hero-arrows"
            alt="hero-arrows"
            src="/hero-arrows.svg"
          />
          <div className="hero-fox-glitch" aria-hidden="true">
            <img className="hero-fox" alt="" src="/hero-fox.svg" />
            <img
              className="hero-fox-glitch-layer hero-fox-glitch-blue"
              alt=""
              src="/hero-fox.svg"
            />
            <img
              className="hero-fox-glitch-layer hero-fox-glitch-cyan"
              alt=""
              src="/hero-fox.svg"
            />
          </div>
          <span className="hero-fox-sheen" aria-hidden="true" />
          <img
            className="hero-bandname"
            alt="hero-wordmark"
            src="/hero-bandname.svg"
          />
        </div>
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
