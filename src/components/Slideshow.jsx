import { useState, useEffect, useCallback, useRef } from 'react';
import { useScroll } from '../hooks/useScroll';

const Slideshow = ({ setHeaderBg }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const photosBlockRef = useRef(null);
  const isScrolledPast = useScroll(photosBlockRef);

  /*const photos = [
    '/slideshow/slide01.webp',
    '/slideshow/slide02.webp',
    '/slideshow/slide03.webp',
    '/slideshow/slide04.webp',
  ];*/

  const photos = [
    '/slideshow/slide04.webp'
  ]

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % photos.length);
  },[photos.length]);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + photos.length) % photos.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 7000);

    return () => clearInterval(interval);
  },[nextSlide]);

  useEffect(() => {
    setHeaderBg(isScrolledPast ? '#111626' : 'transparent');
  }, [isScrolledPast, setHeaderBg]);

  return (
    <div className="slideshow" ref={photosBlockRef}>
      <img
        className="band-photo"
        src={photos[currentIndex]}
        alt={`Bandphoto ${currentIndex + 1}`}
      />
      <button className="slider left" onClick={prevSlide}>
        <img src="/left-arrow.svg" alt="prev slide btn" />
      </button>
      <button className="slider right" onClick={nextSlide}>
        <img src="/right-arrow.svg" alt="next slide btn" />
      </button>
    </div>
  );
};

export default Slideshow;