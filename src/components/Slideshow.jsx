import { useState, useEffect, useCallback } from 'react';

const Slideshow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setAutoPlaying] = useState(true)

  const photos = [
    '/slideshow/slide01.webp',
    '/slideshow/slide02.webp',
    '/slideshow/slide03.webp',
    '/slideshow/slide04.webp',
  ];

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % photos.length);
    setAutoPlaying(true);
  },[photos.length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + photos.length) % photos.length);
    setAutoPlaying(true);
  }, [photos.length]);

  const hadnleChangeSlide = (direction) => {
    setAutoPlaying(false);
    direction === 'next' ? nextSlide() : prevSlide();
  }

  useEffect(() => {
    let interval;

    if (isAutoPlaying) {
      interval = setInterval(() => {
        nextSlide();
      }, 7000);
    }

    return () => clearInterval(interval);
  },[isAutoPlaying, nextSlide]);

  return (
    <article className="slideshow">
      <img
        className="band-photo"
        src={photos[currentIndex]}
        alt={`Bandphoto ${currentIndex + 1}`}
      />
      <button className="slider left" onClick={() => hadnleChangeSlide('prev')}>
        <img src="/left-arrow.svg" alt="prev slide btn" />
      </button>
      <button className="slider right" onClick={() => hadnleChangeSlide('next')}>
        <img src="/right-arrow.svg" alt="next slide btn" />
      </button>
    </article>
  );
};

export default Slideshow;