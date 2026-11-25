import { forwardRef, memo } from "react";

import "./ReleaseWrapper.css";

const ReleaseWrapper = memo(
  forwardRef(function ReleaseWrapper(
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
            <span className="new-release-badge" aria-label="Новый сингл">
              <img
                className="fire-chip"
                src="/fire.gif"
                alt=""
                loading="lazy"
                decoding="async"
                width={40}
                height={40}
              />
              <span>NEW</span>
            </span>
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
  }),
);

export default ReleaseWrapper;
