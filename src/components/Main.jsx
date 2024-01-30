import MusicSection from "./MusicSection";
import VideoSection from "./VideoSection";

const Main = () => {
  return (
    <main>
      <img className="band-photo" src="/band.png" alt="band" />
      <MusicSection />
      <VideoSection />
    </main>
  );
};

export default Main;