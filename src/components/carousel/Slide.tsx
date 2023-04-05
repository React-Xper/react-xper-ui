import React from "react";
import styles from "./Carousel.module.css";

/**
 * @name ISlide
 * @property {theme?}
 * @property {shape?}
 * @description Props interface for Slide JSX element
 */
export interface ISlide
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  className?: string;
  active?: boolean;
}

/**
 * @name  Slide
 * @description Slide JSX element
 */
export default function Slide({
  children,
  color,
  className,
  active,
  ...props
}: ISlide) {
  return (
    <div
      className={`${styles["rxp-ui__slide"]} ${
        active ? styles["rxp-ui__slide-active"] : ""
      }`}
      {...props}
    >
      {children}
    </div>
  );
}
