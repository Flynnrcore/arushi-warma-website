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
        <img className="link-img" src='/music.svg' alt="to music" />
      </button>
      <img
        className="logo"
        src="/logo.webp"
        alt="band-logo"
      />
      <button
        onClick={handleScrollVideo}
        className="header-btn right"
      >
        <img className="link-img" src='/video.svg' alt="to video" />
      </button>
    </header>
  );
};

export default Header;