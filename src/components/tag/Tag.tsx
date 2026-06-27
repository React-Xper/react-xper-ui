import React from "react";
import styles from "./Tag.module.css";
export default function Tag({ children, className = "", ...props }: React.HTMLAttributes<HTMLSpanElement>) {
  return <span className={`${styles.tag} ${className}`} {...props}>{children}</span>;
}