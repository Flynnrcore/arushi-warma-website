import { AboutSection } from "./AboutSection";
import MusicSection from "./MusicSection";
import VideoSection from "./VideoSection";
import Slideshow from "./Slideshow";

const Main = ({ setHeaderBg }) => {
  return (
    <main>
      <Slideshow setHeaderBg={setHeaderBg} />
      <AboutSection />
      <MusicSection />
      <VideoSection />
    </main>
  );
};

export default Main;