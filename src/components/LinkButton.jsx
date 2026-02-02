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
      />
      {hasName && <p>{name}</p>}
    </a>
  );
}

export default LinkButton;
