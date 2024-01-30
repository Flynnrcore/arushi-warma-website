const Footer = () => {
  return (
    <footer>
      <img
        src="/footer-logo.png"
        alt="footer logo"
        className="footer-logo"
      />
      <div className="links">
        <a href="https://vk.com/arushi_warma">
          <img
            className="footer-link"
            src="links/vk.svg"
            alt="vk link"
          />
        </a>
        <a href="https://music.apple.com/ru/artist/arushi-warma/1683510853">
          <img
            className="footer-link"
            src="links/apple.svg"
            alt="apple link"
          />
        </a>
        <a href="https://open.spotify.com/artist/5FUvyfePGGMWnL3b0OJdGx?si=sDOD3e3AQm6VXTTbSKdohA">
          <img
            className="footer-link"
            src="links/spotify.svg"
            alt="spotify link"
          />
        </a>
        <a href="https://music.yandex.ru/artist/19157865">
          <img
            className="footer-link"
            src="links/yandex.svg"
            alt="yandex link"
          />
        </a>
        <a href="https://www.youtube.com/@arushi_warma">
          <img
            className="footer-link"
            src="links/youtube.svg"
            alt="youtube link"
          />
        </a>
      </div>
    </footer>
  );
};

export default Footer;