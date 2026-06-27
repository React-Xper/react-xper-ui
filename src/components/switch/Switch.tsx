import React from "react";
import styles from "./Switch.module.css";
export interface SwitchProps { checked?: boolean; onChange?: (checked: boolean) => void; label?: string; }
export default function Switch({ checked = false, onChange, label }: SwitchProps) {
  return <label className={styles.wrap}><input type="checkbox" className={styles.input} checked={checked} onChange={(e) => onChange?.(e.target.checked)} /><span className={`${styles.track} ${checked ? styles.trackOn : ""}`}><span className={`${styles.thumb} ${checked ? styles.thumbOn : ""}`} /></span>{label}</label>;
}