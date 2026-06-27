import React from "react";
import styles from "./Checkbox.module.css";
export interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> { label?: string; }
export default function Checkbox({ label, className = "", ...props }: CheckboxProps) {
  return <label className={`${styles.wrap} ${className}`}><input type="checkbox" className={styles.input} {...props} />{label}</label>;
}