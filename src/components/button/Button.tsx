import React from "react";
import "./Button.scss";

interface IButton
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  theme?: "dark" | "light";
  shape?: "sharp" | "rounded";
}

export default function Button({
  children,
  color,
  shape,
  theme,
  ...props
}: IButton) {
  return (
    <button
      className={`rts-ui__button rts-ui__button--${color}${
        theme ? `--${theme}` : ""
      } ${shape ? `rts-ui__button--${shape}` : ""}
`}
      {...props}
    >
      {children}
    </button>
  );
}
