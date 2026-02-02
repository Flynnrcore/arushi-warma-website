import { releases } from "../../data/releases";

import ReleaseWrapper from "./ReleaseWrapper/ReleaseWrapper";

function MusicSection() {
  return (
    <section className="music-section">
      <h2 className="header-text">музыка / music</h2>
      <div className="releases">
        {releases.map((release) => (
          <ReleaseWrapper key={release.name} id={release.id}>
            <img
              className="release-image"
              src={release.imglink}
              alt={`Обложка релиза ${release.name}`}
            />
          </ReleaseWrapper>
        ))}
      </div>
    </section>
  );
}

export default MusicSection;
