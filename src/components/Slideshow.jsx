import { useState, useEffect } from 'react';

const Slideshow = () => {
  const photos = [
    '/slideshow/slide01.jpeg',
    '/slideshow/slide02.jpeg',
    '/slideshow/slide03.jpeg',
    '/slideshow/slide04.jpeg',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % photos.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + photos.length) % photos.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 7000);

    return () => clearInterval(interval);
  });

  return (
    <div className="slideshow">
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