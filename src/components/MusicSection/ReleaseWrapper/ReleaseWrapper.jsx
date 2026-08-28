import "./ReleaseWrapper.css";

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
        <a
          href={`/release/${id}`}
          rel="noopener noreferrer"
          aria-label="Перейти к релизу"
        >
          {children}
        </a>
      </div>
    </article>
  );
}

export default ReleaseWrapper;
