import React from "react";
import styles from "./Breadcrumb.module.css";
export interface BreadcrumbItem { label: string; href?: string; }
export interface BreadcrumbProps { items: BreadcrumbItem[]; }
export default function Breadcrumb({ items }: BreadcrumbProps) {
  return <nav className={styles.nav} aria-label="Breadcrumb">{items.map((item, i) => (<span key={i} className={`${styles.item} ${i === items.length - 1 ? styles.active : ""}`}>{item.href && i < items.length - 1 ? <a href={item.href}>{item.label}</a> : item.label}{i < items.length - 1 && <span className={styles.sep}> / </span>}</span>))}</nav>;
}