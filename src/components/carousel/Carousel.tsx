import React, { useEffect } from "react";
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
  arrowColor?: string;
}

/**
 * @name  Carousel
 * @description Carousel JSX element
 */
export default function Carousel({
  children,
  className = "",
  slides,
  arrowColor,
  ...props
}: ICarousel) {
  const [currentSlide, setCurrentSlide] = React.useState(0);

  const handlePreviousSlide = () =>
    setCurrentSlide(currentSlide === 0 ? 0 : currentSlide - 1);

  const handleNextSlide = () =>
    setCurrentSlide(
      currentSlide === slides.length - 1 ? currentSlide : currentSlide + 1
    );

  useEffect(() => {
    if (arrowColor) {
      const root = document.querySelector(":root") as HTMLElement;
      root.style.setProperty("--arrow-color", arrowColor);
    }
  }, [arrowColor]);

  return (
    <div className={`${className} ${styles["rxp-ui__carousel"]}`} {...props}>
      <button
        className={styles["rxp-ui__carousel-arrow-left"]}
        onClick={handlePreviousSlide}
        style={{ borderColor: arrowColor }}
      ></button>
      {slides.map((slide, index) => (
        <Slide key={index} active={index === currentSlide}>
          {slide}
        </Slide>
      ))}
      <button
        className={styles["rxp-ui__carousel-arrow-right"]}
        onClick={handleNextSlide}
        style={{ borderColor: arrowColor }}
      ></button>
    </div>
  );
}
