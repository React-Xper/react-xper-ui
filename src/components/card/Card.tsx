import React from "react";
import "./Card.scss";

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
