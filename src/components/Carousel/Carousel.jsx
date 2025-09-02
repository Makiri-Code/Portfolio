import { useEffect, useState } from "react";
import styles from "./Carousel.module.css";

const Carousel = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const handlePrevious = () => {
    setCurrentIndex((currentIndex - 1 + slides.length) % slides.length);
  };
  const handleNext = () => {
    setCurrentIndex((currentIndex + 1 + slides.length) % slides.length);
  };
  useEffect(() => {
    const nextSlide = () =>
      setCurrentIndex((prev) => (prev + 1 + slides.length) % slides.length);
    const id = setInterval(() => {
      nextSlide();
    }, 50000);
    return () => clearInterval(id);
  }, [slides.length]);
  return (
    <div className={styles.CarouselContainer}>
      <div
        className={styles.CarouselTrack}
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className={styles.CarouselSlide}>
            {slide}
          </div>
        ))}
      </div>
      <button style={{ left: "10px" }} onClick={handlePrevious}>
        <i class="fa-solid fa-angle-left"></i>
      </button>
      <button style={{ right: "10px" }} onClick={handleNext}>
        <i class="fa-solid fa-angle-right"></i>
      </button>
      <p className={styles.SlideNum}>
        {currentIndex + 1}/{slides.length}
      </p>
    </div>
  );
};

export default Carousel;
