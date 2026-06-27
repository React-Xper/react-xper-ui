import React, { useState } from "react";
import styles from "./Tabs.module.css";
export interface TabItem { id: string; label: string; content: React.ReactNode; }
export interface TabsProps { items: TabItem[]; defaultId?: string; }
export default function Tabs({ items, defaultId }: TabsProps) {
  const [active, setActive] = useState(defaultId || items[0]?.id);
  const current = items.find((t) => t.id === active);
  return <div className={styles.tabs}><div className={styles.list} role="tablist">{items.map((t) => <button key={t.id} type="button" role="tab" className={`${styles.tab} ${t.id === active ? styles.active : ""}`} onClick={() => setActive(t.id)}>{t.label}</button>)}</div><div className={styles.panel} role="tabpanel">{current?.content}</div></div>;
}