import React from "react";
import styles from "./Toolbar.module.css";
export default function Toolbar({ children, className = "", ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={`${styles.toolbar} ${className}`} role="toolbar" {...props}>{children}</div>;
}