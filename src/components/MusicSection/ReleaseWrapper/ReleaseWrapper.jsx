import { forwardRef } from "react";

import "./ReleaseWrapper.css";

const ReleaseWrapper = forwardRef(function ReleaseWrapper(
  { isNew = false, id, isVisible = true, children },
  ref,
) {
  return (
    <article
      ref={ref}
      className="single"
      data-release-id={id}
      data-visible={isVisible}
    >
      <div className="single-wrapper">
        {isNew && (
          <img
            className="fire-chip"
            src="/fire.gif"
            alt="Иконка нового релиза"
            style={{ zIndex: 2 }}
            loading="lazy"
            decoding="async"
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
});

export default ReleaseWrapper;
