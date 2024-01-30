const MusicSection = () => {
  return (
    <div className="music-section">
      <section className="single">
        <img
          src="/music-releases/2_track.png"
          alt="single more than justice demands"
          className="release-image"
        />
        <a className="release-btn" href="https://sfm.click/b/48Ni">
          <img
            className="btn-img"
            src="/headphones.svg"
            alt="music release link"
          />
        </a>
      </section>
      <section className="single">
        <img
          src="/music-releases/1_track.png"
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