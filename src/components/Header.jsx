const Header = () => {
  const handleScrollMusic = () => {
    const musicSection = document.querySelector('.music-section');
    musicSection.scrollIntoView({ behavior: 'smooth' });
  }

  const handleScrollVideo = () => {
    const musicSection = document.querySelector('.video-section');
    musicSection.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <header>
      <button
        onClick={handleScrollMusic}
        className="header-btn left"
      >
        МУЗЫКА
      </button>
      <img
        className="logo"
        src="/logo.png"
        alt="band-logo"
      />
      <button
        onClick={handleScrollVideo}
        className="header-btn right"
      >
        ВИДЕО
      </button>
    </header>
  );
};

export default Header;