import React from "react";
import styles from "./Skeleton.module.css";
export type SkeletonVariant = "text" | "title" | "avatar" | "rect";
export interface SkeletonProps { variant?: SkeletonVariant; width?: string | number; height?: string | number; }
export default function Skeleton({ variant = "text", width, height }: SkeletonProps) {
  const style: React.CSSProperties = { width, height };
  return <div className={`${styles.skeleton} ${styles[variant]}`} style={style} aria-hidden />;
}