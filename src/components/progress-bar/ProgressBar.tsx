import React from "react";
import styles from "./ProgressBar.module.css";
export interface ProgressBarProps { value: number; max?: number; }
export default function ProgressBar({ value, max = 100 }: ProgressBarProps) {
  const pct = Math.min(100, Math.max(0, (value / max) * 100));
  return <div className={styles.track} role="progressbar" aria-valuenow={value} aria-valuemin={0} aria-valuemax={max}><div className={styles.fill} style={{ width: `${pct}%` }} /></div>;
}