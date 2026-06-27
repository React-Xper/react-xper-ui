import React from "react";
import styles from "./Divider.module.css";
export interface DividerProps { vertical?: boolean; }
export default function Divider({ vertical = false }: DividerProps) {
  return <hr className={vertical ? styles.vertical : styles.divider} />;
}