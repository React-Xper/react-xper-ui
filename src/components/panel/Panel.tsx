import React from "react";
import styles from "./Panel.module.css";
export interface PanelProps { title?: string; actions?: React.ReactNode; children: React.ReactNode; }
export default function Panel({ title, actions, children }: PanelProps) {
  return <section className={styles.panel}>{title && <header className={styles.header}><span>{title}</span>{actions}</header>}<div className={styles.body}>{children}</div></section>;
}