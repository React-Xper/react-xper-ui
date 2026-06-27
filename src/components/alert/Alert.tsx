import React from "react";
import styles from "./Alert.module.css";
export type AlertSeverity = "info" | "success" | "warning" | "danger";
export interface AlertProps { title?: string; severity?: AlertSeverity; children: React.ReactNode; }
export default function Alert({ title, severity = "info", children }: AlertProps) {
  return <div className={`${styles.alert} ${styles[severity]}`} role="alert">{title && <div className={styles.title}>{title}</div>}<div>{children}</div></div>;
}