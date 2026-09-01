import { useState, useEffect, useCallback, memo } from "react";

import "./Slideshow.css";

const PHOTOS = [
  "/slideshow/slide01.webp",
  "/slideshow/slide02.webp",
  "/slideshow/slide03.webp",
  "/slideshow/slide04.webp",
];
const PHOTOS_LENGTH = PHOTOS.length;

function Slideshow() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setAutoPlaying] = useState(true);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % PHOTOS_LENGTH);
    setAutoPlaying(true);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + PHOTOS_LENGTH) % PHOTOS_LENGTH,
    );
    setAutoPlaying(true);
  }, []);

  const hadnleChangeSlide = (direction) => {
    setAutoPlaying(false);
    if (direction === "next") nextSlide();
    else prevSlide();
  };

  useEffect(() => {
    let timeoutId;

    const scheduleNextSlide = () => {
      timeoutId = setTimeout(() => {
        nextSlide();
        if (isAutoPlaying) {
          scheduleNextSlide();
        }
      }, 7000);
    };

    if (isAutoPlaying) {
      scheduleNextSlide();
    }

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [isAutoPlaying, nextSlide]);

  return (
    <article className="slideshow">
      <img
        className="band-photo"
        src={PHOTOS[currentIndex]}
        alt={`Фото группы ${currentIndex + 1}`}
        width={800}
        height={600}
      />
      <button
        type="button"
        className="slider left"
        onClick={() => hadnleChangeSlide("prev")}
      >
        <img
          src="/left-arrow.svg"
          alt="Иконка кнопки предыдущей фотографии"
          width={24}
          height={24}
        />
      </button>
      <button
        type="button"
        className="slider right"
        onClick={() => hadnleChangeSlide("next")}
      >
        <img
          src="/right-arrow.svg"
          alt="Иконка кнопки следующей фотографии"
          width={24}
          height={24}
        />
      </button>
    </article>
  );
}

export default memo(Slideshow);
