function ReleaseWrapper({ isNew = false, id, children }) {
  return (
    <article className="single">
      <div className="single-wrapper">
        {isNew && (
          <img
            className="fire-chip"
            src="/fire.gif"
            alt="Иконка нового релиза"
            style={{ zIndex: 2 }}
          />
        )}
        {children}
      </div>
      <a
        className="release-btn"
        href={`/release/${id}`}
        rel="noopener noreferrer"
        aria-label="Перейти к релизу"
      >
        <img
          className="btn-img"
          src="/headphones.svg"
          alt="Иконка кнопки перехода к ссылкам релиза"
        />
      </a>
    </article>
  );
}

export default ReleaseWrapper;
