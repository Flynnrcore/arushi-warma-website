function Header({ bgColor }) {
  const handleScrollInfo = () => {
    const musicSection = document.querySelector('.about-section');
    musicSection.scrollIntoView({ behavior: 'smooth' });
  };

  const handleScrollMusic = () => {
    const musicSection = document.querySelector('.music-section');
    musicSection.scrollIntoView({ behavior: 'smooth' });
  };

  const handleScrollVideo = () => {
    const musicSection = document.querySelector('.video-section');
    musicSection.scrollIntoView({ behavior: 'smooth' });
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
        <img
          className="header-logo"
          src="/header-logo.webp"
          alt="arushi warma band logo"
          height="80px"
        />
        <div className="header-icons">
          <button type="button" onClick={handleScrollInfo} className="header-btn left">
            <img className="link-img" src="/about-group.svg" alt="to music" />
          </button>
          <button type="button" onClick={handleScrollMusic} className="header-btn left">
            <img className="link-img" src="/music.svg" alt="to music" />
          </button>
          <button type="button" onClick={handleScrollVideo} className="header-btn right">
            <img className="link-img" src="/video.svg" alt="to video" />
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
