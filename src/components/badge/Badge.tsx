import React from "react";
import styles from "./Badge.module.css";
export type BadgeSeverity = "primary" | "success" | "warning" | "danger" | "neutral";
export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> { severity?: BadgeSeverity; }
export default function Badge({ children, severity = "primary", className = "", ...props }: BadgeProps) {
  return <span className={`${styles.badge} ${styles[severity]} ${className}`} {...props}>{children}</span>;
}