import { useEffect, useRef, useState } from "react";

import { releases } from "../../data/releases";

import ReleaseWrapper from "./ReleaseWrapper/ReleaseWrapper";
import "./MusicSection.css";

const INITIAL_VISIBLE_RELEASES = releases
  .slice(0, 2)
  .map((release) => release.id);

function MusicSection() {
  const releaseRefs = useRef([]);
  const [visibleReleaseIds, setVisibleReleaseIds] = useState(
    INITIAL_VISIBLE_RELEASES,
  );

  useEffect(() => {
    if (typeof window === "undefined" || !("IntersectionObserver" in window)) {
      setVisibleReleaseIds(releases.map((release) => release.id));
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const { isIntersecting, target } = entry;
          const releaseId = target.dataset.releaseId;

          if (!releaseId) {
            return;
          }

          if (isIntersecting) {
            setVisibleReleaseIds((prev) =>
              prev.includes(releaseId) ? prev : [...prev, releaseId],
            );
          }
        });
      },
      {
        rootMargin: "200px 0px",
        threshold: 0.01,
      },
    );

    releaseRefs.current.forEach((node) => {
      if (node) {
        observer.observe(node);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="music-section">
      <h2 className="header-text">музыка / music</h2>
      <div className="releases">
        {releases.map((release) => {
          const shouldRenderImage = visibleReleaseIds.includes(release.id);

          return (
            <ReleaseWrapper
              key={release.id}
              id={release.id}
              isVisible={shouldRenderImage}
              ref={(node) => {
                if (node) {
                  releaseRefs.current.push(node);
                }
              }}
            >
              {shouldRenderImage ? (
                <img
                  className="release-image"
                  src={release.imglink}
                  alt={`Обложка релиза ${release.name}`}
                  loading="lazy"
                  decoding="async"
                  width={420}
                  height={420}
                  sizes="(max-width: 767px) 90vw, (max-width: 1023px) 42vw, 32vw"
                />
              ) : (
                <div
                  className="release-image release-image-placeholder"
                  aria-hidden="true"
                />
              )}
            </ReleaseWrapper>
          );
        })}
      </div>
    </section>
  );
}

export default MusicSection;
