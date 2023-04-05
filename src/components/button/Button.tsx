import React from "react";
import styles from "./Button.module.css";

/**
 * @name IButton
 * @property {theme?}
 * @property {shape?}
 * @description Props interface for Button JSX element
 */
interface IButton
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  type?: "submit" | "button";
  className?: string;
}

/**
 * @name  Button
 * @description Button JSX element
 */
export default function Button({
  children,
  color,
  type,
  className,
  ...props
}: IButton) {
  return (
    <button
      type={type}
      className={`${className} ${styles?.["rxp-ui__button"]}`}
      {...props}>
      {children}
    </button>
  );
}
