import React from "react";
import styles from "./Card.module.css";

/**
 * @name  Card
 * @description Card JSX element
 * @details https://bit.dev/m3yevn/reacthesis-ui/card
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
    <div className={`${className} ${styles?.["rts-ui__card"]}`} {...props}>
      {children}
    </div>
  );
}
