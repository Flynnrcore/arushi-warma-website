function MusicItem({ isNew = false, href, children }) {
  return (
    <article className="single">
      <div className="single-wrapper">
        {isNew && (
          <img
            className="fire-chip"
            src="/fire.gif"
            alt="Иконка нового релиза"
            style={{ zIndex: 2 }}
          />
        )}
        {children}
      </div>
      <a
        className="release-btn"
        href={href}
        rel="noopener noreferrer"
        aria-label="Перейти к релизу"
      >
        <img
          className="btn-img"
          src="/headphones.svg"
          alt="Иконка кнопки перехода к ссылкам релиза"
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
            alt="Обложка сингла Больше чем того требует справедливость"
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
            alt="Обложка сингла Человеком стать"
            className="release-image"
          />
        </MusicItem>
      </div>
    </section>
  );
}

export default MusicSection;
