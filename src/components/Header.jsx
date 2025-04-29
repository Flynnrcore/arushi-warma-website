function Header({ bgColor }) {
  const handleScrollToEl = (className) => {
    const element = document.querySelector(`.${className}`);
    element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header>
      <div
        style={{
          backgroundColor: bgColor,
          transition: 'background-color 0.3s ease',
        }}
        className="header-menu"
      >
        <button
          className="header-btn"
          type="button"
          onClick={() => handleScrollToEl('mainband-photo')}
        >
          <img
            className="header-logo"
            src="/header-logo.webp"
            alt="arushi warma band logo"
            height="80px"
          />
        </button>
        <div className="header-icons">
          <button type="button" onClick={() => handleScrollToEl('about-section')} className="header-btn left">
            <img className="link-img" src="/about-group.svg" alt="to music" />
          </button>
          <button type="button" onClick={() => handleScrollToEl('music-section')} className="header-btn left">
            <img className="link-img" src="/music.svg" alt="to music" />
          </button>
          <button type="button" onClick={() => handleScrollToEl('video-section')} className="header-btn right">
            <img className="link-img" src="/video.svg" alt="to video" />
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
