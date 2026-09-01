import { memo } from "react";
import "./Loader.css";

function Loader() {
  return (
    <div className="loader-wrapper">
      <img
        className="loader-img"
        src="/video.svg"
        alt="Иконка загрузки видео"
        width={40}
        height={40}
      />
      <p style={{ color: "white", lineHeight: 0, margin: 0 }}>Загрузка...</p>
    </div>
  );
}

export default memo(Loader);
