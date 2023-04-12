import React from "react";
import styles from "./Carousel.module.css";
import Slide from "./Slide";

/**
 * @name ICarousel
 * @property {theme?}
 * @property {shape?}
 * @description Props interface for Carousel JSX element
 */
interface ICarousel
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  className?: string;
  slides: JSX.Element[];
}

/**
 * @name  Carousel
 * @description Carousel JSX element
 */
export default function Carousel({
  children,
  className = "",
  slides,
  ...props
}: ICarousel) {
  const [currentSlide, setCurrentSlide] = React.useState(0);

  const handlePreviousSlide = () =>
    setCurrentSlide(currentSlide === 0 ? 0 : currentSlide - 1);

  const handleNextSlide = () =>
    setCurrentSlide(
      currentSlide === slides.length - 1 ? currentSlide : currentSlide + 1
    );

  return (
    <div className={`${className} ${styles["rxp-ui__carousel"]}`} {...props}>
      <button
        className={styles["rxp-ui__carousel-arrow-left"]}
        onClick={handlePreviousSlide}
      ></button>
      {slides.map((slide, index) => (
        <Slide key={index} active={index === currentSlide}>
          {slide}
        </Slide>
      ))}
      <button
        className={styles["rxp-ui__carousel-arrow-right"]}
        onClick={handleNextSlide}
      ></button>
    </div>
  );
}
