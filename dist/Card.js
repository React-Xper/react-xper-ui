import React from "react";
import "./Card.scss";
export default function CardComponent({ children, style }) {
    return (React.createElement("div", { style: style, className: "rts-ui__card" }, children));
}
