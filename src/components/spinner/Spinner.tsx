import React from "react";
import styles from "./Spinner.module.css";
export interface SpinnerProps { size?: "sm" | "md" | "lg"; }
export default function Spinner({ size = "md" }: SpinnerProps) {
  return <span className={`${styles.spinner} ${styles[size]}`} role="status" aria-label="Loading" />;
}