import { memo } from "react";
import "./LinkButton.css";

function LinkButton({
  hasName = false,
  colorVariant = false,
  href,
  src,
  name = "",
}) {
  return (
    <a
      className="link-container"
      target="_blank"
      rel="noopener noreferrer"
      href={href}
    >
      <img
        className={colorVariant ? "link-color-img" : "link-img"}
        src={src}
        alt={`Иконка: ${name} ссылка`}
        loading="lazy"
        width={40}
        height={40}
      />
      {hasName && <p>{name}</p>}
    </a>
  );
}

export default memo(LinkButton);
