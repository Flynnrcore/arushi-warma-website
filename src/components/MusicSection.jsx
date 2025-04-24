const MusicSection = () => {
  return (
    <div className="music-section">
      <section className="single">
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
      </section>
      <section className="single">
        <img
          src="/music-releases/1_track.webp"
          alt="Single to become a human being"
          className="release-image"
        />
        <a className="release-btn" href="https://sfm.click/Ronj">
          <img
            className="btn-img"
            src="/headphones.svg"
            alt="music release link"
          />
        </a>
      </section>
    </div>
  );
};

export default MusicSection;