import React from "react";
import styles from "./DataTable.module.css";
export interface DataTableColumn<T> { key: string; header: string; render?: (row: T) => React.ReactNode; }
export interface DataTableProps<T> { columns: DataTableColumn<T>[]; data: T[]; }
export default function DataTable<T extends Record<string, unknown>>({ columns, data }: DataTableProps<T>) {
  return <div className={styles.wrap}><table className={styles.table}><thead><tr>{columns.map((c) => <th key={c.key}>{c.header}</th>)}</tr></thead><tbody>{data.map((row, i) => <tr key={i}>{columns.map((c) => <td key={c.key}>{c.render ? c.render(row) : String(row[c.key] ?? "")}</td>)}</tr>)}</tbody></table></div>;
}