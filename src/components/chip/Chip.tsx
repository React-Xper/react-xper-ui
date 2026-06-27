import React from "react";
import styles from "./Chip.module.css";
export interface ChipProps { label: string; onRemove?: () => void; }
export default function Chip({ label, onRemove }: ChipProps) {
  return <span className={styles.chip}>{label}{onRemove && <button type="button" className={styles.remove} onClick={onRemove} aria-label="Remove">×</button>}</span>;
}