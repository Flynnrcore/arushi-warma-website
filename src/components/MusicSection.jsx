function MusicItem({ isNew = false, href, children }) {
  return (
    <article className="single">
      <div className="single-wrapper">
        {isNew && <img className="fire-chip" src="/fire.gif" alt="New release" style={{ zIndex: 2 }} />}
        {children}
      </div>
      <a className="release-btn" href={href} rel="noopener noreferrer">
        <img
          className="btn-img"
          src="/headphones.svg"
          alt="music release link"
        />
      </a>
    </article>
  );
}

function MusicSection() {
  return (
    <section className="music-section">
      <h2 className="header-text">музыка / music</h2>
      <div className="releases">
        <MusicItem href="https://sfm.click/48Ni">
          <img
            src="/music-releases/2_track.webp"
            alt="single more than justice demands"
            className="release-image"
          />
        </MusicItem>
        {/*
        <MusicItem href="/">
          <img
            src="/music-releases/3_track.webp"
            alt="fox hunt single"
            className="release-image"
          />
        </MusicItem>
        */}
        <MusicItem href="https://sfm.click/Ronj">
          <img
            src="/music-releases/1_track.webp"
            alt="single to become a human being"
            className="release-image"
          />
        </MusicItem>
      </div>
    </section>
  );
}

export default MusicSection;
