import React from "react";
import styles from "./Dialog.module.css";
export interface DialogProps { open: boolean; title: string; onClose: () => void; children: React.ReactNode; footer?: React.ReactNode; }
export default function Dialog({ open, title, onClose, children, footer }: DialogProps) {
  if (!open) return null;
  return <div className={styles.overlay} role="dialog" aria-modal onClick={onClose}><div className={styles.dialog} onClick={(e) => e.stopPropagation()}><header className={styles.header}><span>{title}</span><button type="button" className={styles.close} onClick={onClose} aria-label="Close">×</button></header><div className={styles.body}>{children}</div>{footer && <footer className={styles.footer}>{footer}</footer>}</div></div>;
}