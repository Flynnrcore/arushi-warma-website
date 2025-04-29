const MusicSection = () => {
  return (
    <section className="music-section">
      <h2 className="header-text">музыка / music</h2>
      <div className="releases">
        <article className="single">
          <img
            src="/music-releases/2_track.webp"
            alt="single more than justice demands"
            className="release-image"
          />
          <a className="release-btn" href="https://sfm.click/48Ni">
            <img
              className="btn-img"
              src="/headphones.svg"
              alt="music release link"
            />
          </a>
        </article>
        <article className="single">
          <img
            src="/music-releases/3_track.webp"
            alt="fox hunt single"
            className="release-image"
          />
          <a className="release-btn" href="/">
            <img
              className="btn-img"
              src="/headphones.svg"
              alt="music release link"
            />
          </a>
        </article>
        <article className="single">
          <img
            src="/music-releases/1_track.webp"
            alt="single to become a human being"
            className="release-image"
          />
          <a className="release-btn" href="https://sfm.click/Ronj">
            <img
              className="btn-img"
              src="/headphones.svg"
              alt="music release link"
            />
          </a>
        </article>
      </div>
    </section>
  );
};

export default MusicSection;