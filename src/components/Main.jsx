import { useEffect, useRef } from "react";

import useScroll from "../hooks/useScroll";

import AboutSection from "./AboutSection";
import MusicSection from "./MusicSection";
import VideoSection from "./VideoSection/VideoSection";

function Main({ setHeaderBg }) {
  const photosBlockRef = useRef(null);
  const isScrolledPast = useScroll(photosBlockRef);

  useEffect(() => {
    setHeaderBg(isScrolledPast ? "#111626" : "transparent");
  }, [isScrolledPast, setHeaderBg]);

  return (
    <main>
      <img
        className="mainband-photo"
        src="/band.webp"
        alt="arushi warma band"
        ref={photosBlockRef}
      />
      <AboutSection />
      <MusicSection />
      <VideoSection />
    </main>
  );
}

export default Main;
