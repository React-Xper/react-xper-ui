import React from "react";
import styles from "./Textarea.module.css";
export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}
export default function Textarea({ className = "", ...props }: TextareaProps) {
  return <textarea className={`${styles.textarea} ${className}`} {...props} />;
}