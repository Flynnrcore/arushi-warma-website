import "./Header.css";

import { getScrollBehavior } from "../../utils/performance";

function Header({ bgColor }) {
  const handleScrollToEl = (className) => {
    const element = document.querySelector(`.${className}`);
    element.scrollIntoView({ behavior: getScrollBehavior() });
  };

  return (
    <header>
      <div
        style={{
          transition: "background-color 0.3s ease",
          ...bgColor,
        }}
        className="header-menu"
      >
        <button
          className="header-btn header-brand"
          type="button"
          onClick={() => handleScrollToEl("mainband-photo")}
          aria-label="Вернуться к началу страницы"
        >
          <img
            className="header-logo"
            src="/header-logo.webp"
            alt="логотип группы Arushi warma"
            height="80px"
          />
        </button>
        <div className="header-icons">
          <button
            type="button"
            aria-label="Перейти к фото группы"
            onClick={() => handleScrollToEl("about-section")}
            className="header-btn left"
          >
            <img
              className="link-img"
              src="/about-group.svg"
              alt="Иконка: фото группы"
            />
          </button>
          <button
            type="button"
            aria-label="Перейти к музыке"
            onClick={() => handleScrollToEl("music-section")}
            className="header-btn left"
          >
            <img className="link-img" src="/music.svg" alt="Иконка: музыка" />
          </button>
          <button
            type="button"
            aria-label="Перейти к видео"
            onClick={() => handleScrollToEl("video-section")}
            className="header-btn right"
          >
            <img className="link-img" src="/video.svg" alt="Иконка: видео" />
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
