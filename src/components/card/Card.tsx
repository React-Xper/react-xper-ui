import React from "react";
import styles from "./Card.module.css";

/**
 * @name  Card
 * @description Card JSX element
 */
export default function Card({
  children,
  className = "",
  ...props
}: React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>) {
  return (
    <div className={`${className} ${styles?.["rxp-ui__card"]}`} {...props}>
      {children}
    </div>
  );
}
