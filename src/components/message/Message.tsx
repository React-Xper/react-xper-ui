import React from "react";
import styles from "./Message.module.css";
export type MessageSeverity = "info" | "success" | "warn" | "error";
export interface MessageProps { severity?: MessageSeverity; children: React.ReactNode; }
export default function Message({ severity = "info", children }: MessageProps) {
  const cls = severity === "warn" ? styles.warn : severity === "error" ? styles.error : severity === "success" ? styles.success : "";
  return <div className={`${styles.message} ${cls}`}>{children}</div>;
}