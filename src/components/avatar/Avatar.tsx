import React from "react";
import styles from "./Avatar.module.css";
export interface AvatarProps { label?: string; src?: string; size?: "sm" | "md" | "lg"; }
export default function Avatar({ label = "U", src, size = "md" }: AvatarProps) {
  return <span className={`${styles.avatar} ${styles[size]}`}>{src ? <img className={styles.img} src={src} alt={label} /> : label.slice(0, 2).toUpperCase()}</span>;
}