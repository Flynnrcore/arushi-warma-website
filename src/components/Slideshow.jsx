import { useState, useEffect, useCallback } from "react";

import "./Slideshow.css";

function Slideshow() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setAutoPlaying] = useState(true);

  const photos = [
    "/slideshow/slide01.webp",
    "/slideshow/slide02.webp",
    "/slideshow/slide03.webp",
    "/slideshow/slide04.webp",
  ];

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % photos.length);
    setAutoPlaying(true);
  }, [photos.length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + photos.length) % photos.length,
    );
    setAutoPlaying(true);
  }, [photos.length]);

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
        src={photos[currentIndex]}
        alt={`Фото группы ${currentIndex + 1}`}
      />
      <button
        type="button"
        className="slider left"
        onClick={() => hadnleChangeSlide("prev")}
      >
        <img src="/left-arrow.svg" alt="Иконка кнопки предыдущей фотографии" />
      </button>
      <button
        type="button"
        className="slider right"
        onClick={() => hadnleChangeSlide("next")}
      >
        <img src="/right-arrow.svg" alt="Иконка кнопки следующей фотографии" />
      </button>
    </article>
  );
}

export default Slideshow;
