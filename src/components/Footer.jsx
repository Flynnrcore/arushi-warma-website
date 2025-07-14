function Footer() {
  return (
    <footer>
      <img src="/footer-logo.webp" alt="footer logo" className="footer-logo" />
      <div className="links">
        <a target="_blank" rel="noopener noreferrer" href="https://vk.com/arushi_warma">
          <img
            className="link-img"
            src="links/vk.svg"
            alt="vk link"
            loading="lazy"
          />
        </a>
        <a target="_blank" rel="noopener noreferrer" href="https://music.apple.com/ru/artist/arushi-warma/1683510853">
          <img
            className="link-img"
            src="links/apple.svg"
            alt="apple link"
            loading="lazy"
          />
        </a>
        <a target="_blank" rel="noopener noreferrer" href="https://open.spotify.com/artist/5FUvyfePGGMWnL3b0OJdGx?si=sDOD3e3AQm6VXTTbSKdohA">
          <img
            className="link-img"
            src="links/spotify.svg"
            alt="spotify link"
            loading="lazy"
          />
        </a>
        <a target="_blank" rel="noopener noreferrer" href="https://music.yandex.ru/artist/19157865">
          <img
            className="link-img"
            src="links/yandex.svg"
            alt="yandex link"
            loading="lazy"
          />
        </a>
        <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/@arushi_warma">
          <img
            className="link-img"
            src="links/youtube.svg"
            alt="youtube link"
            loading="lazy"
          />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
