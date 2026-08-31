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
  const [loadedReleaseIds, setLoadedReleaseIds] = useState({});

  const handleImageLoad = (releaseId) => {
    setLoadedReleaseIds((prev) => ({
      ...prev,
      [releaseId]: true,
    }));
  };

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
          const isLoaded = Boolean(loadedReleaseIds[release.id]);

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
                <div className="music-release-shell" aria-busy={!isLoaded}>
                  {!isLoaded && (
                    <div
                      className="music-release-placeholder"
                      aria-hidden="true"
                    />
                  )}
                  <img
                    className={`music-release-image ${isLoaded ? "is-loaded" : "is-loading"}`}
                    src={release.imglink}
                    alt={`Обложка релиза ${release.name}`}
                    loading="lazy"
                    decoding="async"
                    width={420}
                    height={420}
                    sizes="(max-width: 767px) 90vw, (max-width: 1023px) 42vw, 32vw"
                    onLoad={() => handleImageLoad(release.id)}
                    onError={() => handleImageLoad(release.id)}
                  />
                </div>
              ) : (
                <div
                  className="music-release-shell music-release-shell-placeholder"
                  aria-hidden="true"
                >
                  <div
                    className="music-release-placeholder"
                    aria-hidden="true"
                  />
                </div>
              )}
            </ReleaseWrapper>
          );
        })}
      </div>
    </section>
  );
}

export default MusicSection;
