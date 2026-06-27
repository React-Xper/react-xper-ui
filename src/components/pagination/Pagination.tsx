import React from "react";
import styles from "./Pagination.module.css";
export interface PaginationProps { page: number; totalPages: number; onPageChange: (page: number) => void; }
export default function Pagination({ page, totalPages, onPageChange }: PaginationProps) {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);
  return <nav className={styles.nav} aria-label="Pagination"><button type="button" className={styles.btn} disabled={page <= 1} onClick={() => onPageChange(page - 1)}>←</button>{pages.map((p) => <button key={p} type="button" className={`${styles.btn} ${p === page ? styles.active : ""}`} onClick={() => onPageChange(p)}>{p}</button>)}{totalPages > 5 && page < totalPages - 2 && <span>…</span>}<button type="button" className={styles.btn} disabled={page >= totalPages} onClick={() => onPageChange(page + 1)}>→</button></nav>;
}