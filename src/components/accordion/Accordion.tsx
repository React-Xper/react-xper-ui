import React from "react";
import styles from "./Accordion.module.css";

/**
 * @name IAccordion
 * @property {theme?}
 * @property {shape?}
 * @description Props interface for Accordion JSX element
 */
interface IAccordion
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  title?: string;
  expanded?: boolean;
  fixed?: boolean;
  className?: string;
}

/**
 * @name  Accordion
 * @description Accordion JSX element
 */
export default function Accordion({
  children,
  title,
  expanded = false,
  fixed = false,
  className = "",
  ...props
}: IAccordion) {
  const [isExpanded, setIsExpanded] = React.useState(expanded);
  const expandedTitleClassName = isExpanded
    ? styles?.["rxp-ui__accordion-title-expanded"]
    : "";

  const expandedContentClassName = isExpanded
    ? styles?.["rxp-ui__accordion-content-expanded"]
    : "";

  const handleTitleClick = () => {
    setIsExpanded(!isExpanded);
  };

  const arrowClassName = isExpanded ? "top" : "down";

  return (
    <div className={`${className} ${styles?.["rxp-ui__accordion"]}`} {...props}>
      <div
        onClick={handleTitleClick}
        className={`${styles?.["rxp-ui__accordion-title"]} ${expandedTitleClassName}`}
      >
        {title}
        <div
          className={styles?.[`rxp-ui__accordion-arrow-${arrowClassName}`]}
          {...props}
        ></div>
      </div>
      <div
        className={`${styles?.["rxp-ui__accordion-content"]} ${expandedContentClassName}`}
      >
        {children}
      </div>
    </div>
  );
}
