import React from "react";
import styles from "./Rating.module.css";
export interface RatingProps { value?: number; max?: number; onChange?: (value: number) => void; readonly?: boolean; }
export default function Rating({ value = 0, max = 5, onChange, readonly = false }: RatingProps) {
  return <div className={`${styles.stars} ${readonly ? styles.readonly : ""}`}>{Array.from({ length: max }, (_, i) => <button key={i} type="button" className={`${styles.star} ${i < value ? styles.starOn : ""}`} onClick={() => !readonly && onChange?.(i + 1)} aria-label={`Rate ${i + 1}`}>★</button>)}</div>;
}