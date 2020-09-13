import React from "react";
import "./Card.scss";

/**
 * @name  Card
 * @description Card JSX element
 * @details https://bit.dev/m3yevn/reacthesis-ui/card
 */
export default function Card({
  children,
  ...props
}: React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>) {
  return (
    <div className="rts-ui__card" {...props}>
      {children}
    </div>
  );
}
