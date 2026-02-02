import LinkButton from "./LinkButton";

function Footer() {
  return (
    <footer>
      <img src="/footer-logo.webp" alt="footer logo" className="footer-logo" />
      <div className="links">
        <LinkButton
          src="links/vk.svg"
          href="https://vk.com/arushi_warma"
          name="VK music"
        />
        <LinkButton
          src="links/apple.svg"
          href="https://music.apple.com/ru/artist/arushi-warma/1683510853"
          name="Apple music"
        />
        <LinkButton
          src="links/spotify.svg"
          href="https://open.spotify.com/artist/5FUvyfePGGMWnL3b0OJdGx?si=sDOD3e3AQm6VXTTbSKdohA"
          name="Spotify"
        />
        <LinkButton
          src="links/yandex.svg"
          href="https://music.yandex.ru/artist/19157865"
          name="yandex music"
        />
        <LinkButton
          src="links/youtube.svg"
          href="https://www.youtube.com/@arushi_warma"
          name="youtube"
        />
      </div>
    </footer>
  );
}

export default Footer;
