/**
 * Scaffolds Uilerial v2 component folders (tsx + css + index).
 * Run: node scripts/scaffold-components.mjs
 */
import fs from "fs";
import path from "path";

const root = path.join(process.cwd(), "src", "components");

const components = [
  {
    name: "badge",
    css: `.badge{display:inline-flex;align-items:center;padding:2px 10px;border-radius:999px;font-size:.75rem;font-weight:600;font-family:var(--uil-font)}.primary{background:rgba(99,102,241,.15);color:var(--uil-primary-hover)}.success{background:rgba(34,197,94,.15);color:var(--uil-success)}.warning{background:rgba(245,158,11,.15);color:var(--uil-warning)}.danger{background:rgba(239,68,68,.15);color:var(--uil-danger)}.neutral{background:var(--uil-surface-2);color:var(--uil-muted)}`,
    tsx: `import React from "react";\nimport styles from "./Badge.module.css";\nexport type BadgeSeverity = "primary" | "success" | "warning" | "danger" | "neutral";\nexport interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> { severity?: BadgeSeverity; }\nexport default function Badge({ children, severity = "primary", className = "", ...props }: BadgeProps) {\n  return <span className={\`\${styles.badge} \${styles[severity]} \${className}\`} {...props}>{children}</span>;\n}`,
  },
  {
    name: "avatar",
    css: `.avatar{display:inline-flex;align-items:center;justify-content:center;border-radius:50%;background:linear-gradient(135deg,var(--uil-primary),var(--uil-accent));color:#fff;font-weight:700;font-family:var(--uil-font);overflow:hidden}.sm{width:32px;height:32px;font-size:.75rem}.md{width:40px;height:40px;font-size:.85rem}.lg{width:56px;height:56px;font-size:1rem}.img{width:100%;height:100%;object-fit:cover}`,
    tsx: `import React from "react";\nimport styles from "./Avatar.module.css";\nexport interface AvatarProps { label?: string; src?: string; size?: "sm" | "md" | "lg"; }\nexport default function Avatar({ label = "U", src, size = "md" }: AvatarProps) {\n  return <span className={\`\${styles.avatar} \${styles[size]}\`}>{src ? <img className={styles.img} src={src} alt={label} /> : label.slice(0, 2).toUpperCase()}</span>;\n}`,
  },
  {
    name: "chip",
    css: `.chip{display:inline-flex;align-items:center;gap:6px;padding:6px 12px;border-radius:999px;background:var(--uil-surface-2);border:1px solid var(--uil-border);font-size:.85rem;color:var(--uil-text);font-family:var(--uil-font)}.remove{background:none;border:none;color:var(--uil-muted);cursor:pointer;padding:0;line-height:1}`,
    tsx: `import React from "react";\nimport styles from "./Chip.module.css";\nexport interface ChipProps { label: string; onRemove?: () => void; }\nexport default function Chip({ label, onRemove }: ChipProps) {\n  return <span className={styles.chip}>{label}{onRemove && <button type="button" className={styles.remove} onClick={onRemove} aria-label="Remove">×</button>}</span>;\n}`,
  },
  {
    name: "tag",
    css: `.tag{display:inline-block;padding:4px 10px;border-radius:var(--uil-radius-sm);background:rgba(232,120,17,.12);color:var(--uil-accent);font-size:.75rem;font-weight:600;text-transform:uppercase;letter-spacing:.04em;font-family:var(--uil-font)}`,
    tsx: `import React from "react";\nimport styles from "./Tag.module.css";\nexport default function Tag({ children, className = "", ...props }: React.HTMLAttributes<HTMLSpanElement>) {\n  return <span className={\`\${styles.tag} \${className}\`} {...props}>{children}</span>;\n}`,
  },
  {
    name: "alert",
    css: `@import "../styles/tokens.css";\n.alert{display:flex;gap:12px;padding:14px 16px;border-radius:var(--uil-radius);border:1px solid var(--uil-border);font-family:var(--uil-font);font-size:.9rem}.title{font-weight:600;margin-bottom:4px}.info{background:rgba(59,130,246,.08);border-color:rgba(59,130,246,.3)}.success{background:rgba(34,197,94,.08);border-color:rgba(34,197,94,.3)}.warning{background:rgba(245,158,11,.08);border-color:rgba(245,158,11,.3)}.danger{background:rgba(239,68,68,.08);border-color:rgba(239,68,68,.3)}`,
    tsx: `import React from "react";\nimport styles from "./Alert.module.css";\nexport type AlertSeverity = "info" | "success" | "warning" | "danger";\nexport interface AlertProps { title?: string; severity?: AlertSeverity; children: React.ReactNode; }\nexport default function Alert({ title, severity = "info", children }: AlertProps) {\n  return <div className={\`\${styles.alert} \${styles[severity]}\`} role="alert">{title && <div className={styles.title}>{title}</div>}<div>{children}</div></div>;\n}`,
  },
  {
    name: "divider",
    css: `.divider{border:none;border-top:1px solid var(--uil-border);margin:16px 0}.vertical{display:inline-block;width:1px;height:1em;border-top:none;border-left:1px solid var(--uil-border);margin:0 12px;vertical-align:middle}`,
    tsx: `import React from "react";\nimport styles from "./Divider.module.css";\nexport interface DividerProps { vertical?: boolean; }\nexport default function Divider({ vertical = false }: DividerProps) {\n  return <hr className={vertical ? styles.vertical : styles.divider} />;\n}`,
  },
  {
    name: "skeleton",
    css: `.skeleton{background:linear-gradient(90deg,var(--uil-surface-2) 25%,var(--uil-border) 50%,var(--uil-surface-2) 75%);background-size:200% 100%;animation:shimmer 1.2s infinite;border-radius:var(--uil-radius-sm)}@keyframes shimmer{0%{background-position:200% 0}100%{background-position:-200% 0}}.text{height:14px;margin-bottom:8px}.title{height:20px;width:60%;margin-bottom:12px}.avatar{width:40px;height:40px;border-radius:50%}`,
    tsx: `import React from "react";\nimport styles from "./Skeleton.module.css";\nexport type SkeletonVariant = "text" | "title" | "avatar" | "rect";\nexport interface SkeletonProps { variant?: SkeletonVariant; width?: string | number; height?: string | number; }\nexport default function Skeleton({ variant = "text", width, height }: SkeletonProps) {\n  const style: React.CSSProperties = { width, height };\n  return <div className={\`\${styles.skeleton} \${styles[variant]}\`} style={style} aria-hidden />;\n}`,
  },
  {
    name: "progress-bar",
    css: `.track{width:100%;height:8px;background:var(--uil-surface-2);border-radius:999px;overflow:hidden}.fill{height:100%;background:linear-gradient(90deg,var(--uil-primary),var(--uil-primary-hover));border-radius:999px;transition:width .3s ease}`,
    tsx: `import React from "react";\nimport styles from "./ProgressBar.module.css";\nexport interface ProgressBarProps { value: number; max?: number; }\nexport default function ProgressBar({ value, max = 100 }: ProgressBarProps) {\n  const pct = Math.min(100, Math.max(0, (value / max) * 100));\n  return <div className={styles.track} role="progressbar" aria-valuenow={value} aria-valuemin={0} aria-valuemax={max}><div className={styles.fill} style={{ width: \`\${pct}%\` }} /></div>;\n}`,
  },
  {
    name: "spinner",
    css: `.spinner{display:inline-block;border:2px solid var(--uil-border);border-top-color:var(--uil-primary);border-radius:50%;animation:spin .7s linear infinite}@keyframes spin{to{transform:rotate(360deg)}}.sm{width:16px;height:16px}.md{width:24px;height:24px}.lg{width:36px;height:36px;border-width:3px}`,
    tsx: `import React from "react";\nimport styles from "./Spinner.module.css";\nexport interface SpinnerProps { size?: "sm" | "md" | "lg"; }\nexport default function Spinner({ size = "md" }: SpinnerProps) {\n  return <span className={\`\${styles.spinner} \${styles[size]}\`} role="status" aria-label="Loading" />;\n}`,
  },
  {
    name: "checkbox",
    css: `.wrap{display:inline-flex;align-items:center;gap:8px;cursor:pointer;font-family:var(--uil-font);font-size:.9rem;color:var(--uil-text)}.input{width:18px;height:18px;accent-color:var(--uil-primary)}`,
    tsx: `import React from "react";\nimport styles from "./Checkbox.module.css";\nexport interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> { label?: string; }\nexport default function Checkbox({ label, className = "", ...props }: CheckboxProps) {\n  return <label className={\`\${styles.wrap} \${className}\`}><input type="checkbox" className={styles.input} {...props} />{label}</label>;\n}`,
  },
  {
    name: "switch",
    css: `.wrap{display:inline-flex;align-items:center;gap:10px;cursor:pointer;font-family:var(--uil-font);font-size:.9rem}.track{width:44px;height:24px;border-radius:999px;background:var(--uil-border);position:relative;transition:background var(--uil-transition)}.trackOn{background:var(--uil-primary)}.thumb{position:absolute;top:3px;left:3px;width:18px;height:18px;border-radius:50%;background:#fff;transition:transform var(--uil-transition)}.thumbOn{transform:translateX(20px)}.input{position:absolute;opacity:0;width:0;height:0}`,
    tsx: `import React from "react";\nimport styles from "./Switch.module.css";\nexport interface SwitchProps { checked?: boolean; onChange?: (checked: boolean) => void; label?: string; }\nexport default function Switch({ checked = false, onChange, label }: SwitchProps) {\n  return <label className={styles.wrap}><input type="checkbox" className={styles.input} checked={checked} onChange={(e) => onChange?.(e.target.checked)} /><span className={\`\${styles.track} \${checked ? styles.trackOn : ""}\`}><span className={\`\${styles.thumb} \${checked ? styles.thumbOn : ""}\`} /></span>{label}</label>;\n}`,
  },
  {
    name: "textarea",
    css: `@import "../styles/tokens.css";\n.textarea{width:100%;min-height:96px;padding:12px 14px;border-radius:var(--uil-radius);border:1px solid var(--uil-border);background:var(--uil-surface);color:var(--uil-text);font-family:var(--uil-font);font-size:.9rem;resize:vertical}.textarea:focus{outline:none;border-color:var(--uil-primary);box-shadow:0 0 0 3px rgba(99,102,241,.2)}`,
    tsx: `import React from "react";\nimport styles from "./Textarea.module.css";\nexport interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}\nexport default function Textarea({ className = "", ...props }: TextareaProps) {\n  return <textarea className={\`\${styles.textarea} \${className}\`} {...props} />;\n}`,
  },
  {
    name: "breadcrumb",
    css: `.nav{display:flex;flex-wrap:wrap;align-items:center;gap:8px;font-family:var(--uil-font);font-size:.875rem}.item{color:var(--uil-muted)}.item a{color:var(--uil-muted);text-decoration:none}.item a:hover{color:var(--uil-primary-hover)}.sep{color:var(--uil-border)}.active{color:var(--uil-text);font-weight:600}`,
    tsx: `import React from "react";\nimport styles from "./Breadcrumb.module.css";\nexport interface BreadcrumbItem { label: string; href?: string; }\nexport interface BreadcrumbProps { items: BreadcrumbItem[]; }\nexport default function Breadcrumb({ items }: BreadcrumbProps) {\n  return <nav className={styles.nav} aria-label="Breadcrumb">{items.map((item, i) => (<span key={i} className={\`\${styles.item} \${i === items.length - 1 ? styles.active : ""}\`}>{item.href && i < items.length - 1 ? <a href={item.href}>{item.label}</a> : item.label}{i < items.length - 1 && <span className={styles.sep}> / </span>}</span>))}</nav>;\n}`,
  },
  {
    name: "panel",
    css: `@import "../styles/tokens.css";\n.panel{background:var(--uil-surface);border:1px solid var(--uil-border);border-radius:var(--uil-radius-lg);overflow:hidden}.header{display:flex;align-items:center;justify-content:space-between;padding:14px 18px;border-bottom:1px solid var(--uil-border);font-weight:600}.body{padding:18px}`,
    tsx: `import React from "react";\nimport styles from "./Panel.module.css";\nexport interface PanelProps { title?: string; actions?: React.ReactNode; children: React.ReactNode; }\nexport default function Panel({ title, actions, children }: PanelProps) {\n  return <section className={styles.panel}>{title && <header className={styles.header}><span>{title}</span>{actions}</header>}<div className={styles.body}>{children}</div></section>;\n}`,
  },
  {
    name: "pagination",
    css: `.nav{display:flex;align-items:center;gap:4px;font-family:var(--uil-font)}.btn{min-width:36px;height:36px;padding:0 10px;border:1px solid var(--uil-border);border-radius:var(--uil-radius-sm);background:var(--uil-surface);color:var(--uil-text);cursor:pointer;font-size:.85rem}.btn:hover:not(:disabled){border-color:var(--uil-primary)}.btn:disabled{opacity:.4;cursor:not-allowed}.active{background:var(--uil-primary);border-color:var(--uil-primary);color:#fff}`,
    tsx: `import React from "react";\nimport styles from "./Pagination.module.css";\nexport interface PaginationProps { page: number; totalPages: number; onPageChange: (page: number) => void; }\nexport default function Pagination({ page, totalPages, onPageChange }: PaginationProps) {\n  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);\n  return <nav className={styles.nav} aria-label="Pagination"><button type="button" className={styles.btn} disabled={page <= 1} onClick={() => onPageChange(page - 1)}>←</button>{pages.map((p) => <button key={p} type="button" className={\`\${styles.btn} \${p === page ? styles.active : ""}\`} onClick={() => onPageChange(p)}>{p}</button>)}{totalPages > 5 && page < totalPages - 2 && <span>…</span>}<button type="button" className={styles.btn} disabled={page >= totalPages} onClick={() => onPageChange(page + 1)}>→</button></nav>;\n}`,
  },
  {
    name: "toolbar",
    css: `.toolbar{display:flex;flex-wrap:wrap;align-items:center;gap:8px;padding:12px 16px;background:var(--uil-surface-2);border:1px solid var(--uil-border);border-radius:var(--uil-radius)}`,
    tsx: `import React from "react";\nimport styles from "./Toolbar.module.css";\nexport default function Toolbar({ children, className = "", ...props }: React.HTMLAttributes<HTMLDivElement>) {\n  return <div className={\`\${styles.toolbar} \${className}\`} role="toolbar" {...props}>{children}</div>;\n}`,
  },
  {
    name: "rating",
    css: `.stars{display:inline-flex;gap:4px}.star{background:none;border:none;font-size:1.25rem;cursor:pointer;color:var(--uil-border);padding:0;line-height:1}.starOn{color:var(--uil-accent)}.readonly .star{cursor:default}`,
    tsx: `import React from "react";\nimport styles from "./Rating.module.css";\nexport interface RatingProps { value?: number; max?: number; onChange?: (value: number) => void; readonly?: boolean; }\nexport default function Rating({ value = 0, max = 5, onChange, readonly = false }: RatingProps) {\n  return <div className={\`\${styles.stars} \${readonly ? styles.readonly : ""}\`}>{Array.from({ length: max }, (_, i) => <button key={i} type="button" className={\`\${styles.star} \${i < value ? styles.starOn : ""}\`} onClick={() => !readonly && onChange?.(i + 1)} aria-label={\`Rate \${i + 1}\`}>★</button>)}</div>;\n}`,
  },
  {
    name: "message",
    css: `.message{padding:10px 14px;border-radius:var(--uil-radius);font-size:.875rem;font-family:var(--uil-font);border-left:4px solid var(--uil-primary);background:var(--uil-surface-2)}.success{border-color:var(--uil-success)}.warn{border-color:var(--uil-warning)}.error{border-color:var(--uil-danger)}`,
    tsx: `import React from "react";\nimport styles from "./Message.module.css";\nexport type MessageSeverity = "info" | "success" | "warn" | "error";\nexport interface MessageProps { severity?: MessageSeverity; children: React.ReactNode; }\nexport default function Message({ severity = "info", children }: MessageProps) {\n  const cls = severity === "warn" ? styles.warn : severity === "error" ? styles.error : severity === "success" ? styles.success : "";\n  return <div className={\`\${styles.message} \${cls}\`}>{children}</div>;\n}`,
  },
  {
    name: "tabs",
    css: `.tabs{font-family:var(--uil-font)}.list{display:flex;gap:4px;border-bottom:1px solid var(--uil-border);margin-bottom:16px}.tab{padding:10px 16px;background:none;border:none;border-bottom:2px solid transparent;color:var(--uil-muted);cursor:pointer;font-size:.9rem;font-weight:500;margin-bottom:-1px}.tab:hover{color:var(--uil-text)}.active{color:var(--uil-primary);border-bottom-color:var(--uil-primary)}.panel{display:block}`,
    tsx: `import React, { useState } from "react";\nimport styles from "./Tabs.module.css";\nexport interface TabItem { id: string; label: string; content: React.ReactNode; }\nexport interface TabsProps { items: TabItem[]; defaultId?: string; }\nexport default function Tabs({ items, defaultId }: TabsProps) {\n  const [active, setActive] = useState(defaultId || items[0]?.id);\n  const current = items.find((t) => t.id === active);\n  return <div className={styles.tabs}><div className={styles.list} role="tablist">{items.map((t) => <button key={t.id} type="button" role="tab" className={\`\${styles.tab} \${t.id === active ? styles.active : ""}\`} onClick={() => setActive(t.id)}>{t.label}</button>)}</div><div className={styles.panel} role="tabpanel">{current?.content}</div></div>;\n}`,
  },
  {
    name: "dialog",
    css: `.overlay{position:fixed;inset:0;background:rgba(0,0,0,.6);display:flex;align-items:center;justify-content:center;padding:24px;z-index:1000}.dialog{background:var(--uil-surface);border:1px solid var(--uil-border);border-radius:var(--uil-radius-lg);max-width:480px;width:100%;box-shadow:var(--uil-shadow)}.header{display:flex;justify-content:space-between;align-items:center;padding:16px 20px;border-bottom:1px solid var(--uil-border);font-weight:600}.close{background:none;border:none;color:var(--uil-muted);font-size:1.25rem;cursor:pointer}.body{padding:20px}.footer{display:flex;justify-content:flex-end;gap:8px;padding:14px 20px;border-top:1px solid var(--uil-border)}`,
    tsx: `import React from "react";\nimport styles from "./Dialog.module.css";\nexport interface DialogProps { open: boolean; title: string; onClose: () => void; children: React.ReactNode; footer?: React.ReactNode; }\nexport default function Dialog({ open, title, onClose, children, footer }: DialogProps) {\n  if (!open) return null;\n  return <div className={styles.overlay} role="dialog" aria-modal onClick={onClose}><div className={styles.dialog} onClick={(e) => e.stopPropagation()}><header className={styles.header}><span>{title}</span><button type="button" className={styles.close} onClick={onClose} aria-label="Close">×</button></header><div className={styles.body}>{children}</div>{footer && <footer className={styles.footer}>{footer}</footer>}</div></div>;\n}`,
  },
  {
    name: "data-table",
    css: `.table{width:100%;border-collapse:collapse;font-family:var(--uil-font);font-size:.875rem}.table th,.table td{padding:12px 14px;text-align:left;border-bottom:1px solid var(--uil-border)}.table th{color:var(--uil-muted);font-weight:600;font-size:.75rem;text-transform:uppercase;letter-spacing:.04em;background:var(--uil-surface-2)}.table tr:hover td{background:rgba(99,102,241,.04)}.wrap{overflow:auto;border:1px solid var(--uil-border);border-radius:var(--uil-radius-lg)}`,
    tsx: `import React from "react";\nimport styles from "./DataTable.module.css";\nexport interface DataTableColumn<T> { key: string; header: string; render?: (row: T) => React.ReactNode; }\nexport interface DataTableProps<T> { columns: DataTableColumn<T>[]; data: T[]; }\nexport default function DataTable<T extends Record<string, unknown>>({ columns, data }: DataTableProps<T>) {\n  return <div className={styles.wrap}><table className={styles.table}><thead><tr>{columns.map((c) => <th key={c.key}>{c.header}</th>)}</tr></thead><tbody>{data.map((row, i) => <tr key={i}>{columns.map((c) => <td key={c.key}>{c.render ? c.render(row) : String(row[c.key] ?? "")}</td>)}</tr>)}</tbody></table></div>;\n}`,
  },
];

for (const c of components) {
  const dir = path.join(root, c.name);
  const pascal = c.name.split("-").map((s) => s[0].toUpperCase() + s.slice(1)).join("");
  fs.mkdirSync(dir, { recursive: true });
  const cssPrefix = c.css.startsWith("@import") ? c.css : `@import "../styles/tokens.css";\n.${c.name.replace(/-/g, "")}{}${c.css.includes(".") ? c.css : ""}`;
  const actualCss = c.css.startsWith("@import") || c.css.startsWith(".") ? c.css : `@import "../styles/tokens.css";\n${c.css}`;
  fs.writeFileSync(path.join(dir, `${pascal}.module.css`), actualCss.replace(/^\.badge/, ".badge").replace(/^\.avatar/, ".avatar"));
  // Fix: write css with proper class names from component
  const cssName = pascal.charAt(0).toLowerCase() + pascal.slice(1);
  let finalCss = actualCss;
  if (!actualCss.includes("@import") && !c.css.startsWith(".")) {
    finalCss = `@import "../styles/tokens.css";\n` + c.css;
  }
  fs.writeFileSync(path.join(dir, `${pascal}.module.css`), finalCss);
  fs.writeFileSync(path.join(dir, `${pascal}.tsx`), c.tsx);
  fs.writeFileSync(path.join(dir, "index.js"), `export { default } from "./${pascal}";\n`);
  console.log("scaffolded", c.name);
}
