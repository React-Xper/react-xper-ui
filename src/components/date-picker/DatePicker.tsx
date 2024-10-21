import React from "react";
import styles from "./DatePicker.module.css";

interface IDatePicker
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  native?: boolean;
  value?: any;
  minDate?: string;
  maxDate?: string;
  type?: string;
  placeholder?: string;
}

/**
 * @param {*} years
 */
const getMinDate = (years: number) => {
  const today = new Date();
  return `${today.getFullYear() - years}-${
    today.getMonth() < 10 ? "0" + today.getMonth() : today.getMonth()
  }-${today.getDate()}`;
};

/**
 * @param {*} years
 */
const getMaxDate = (years: number) => {
  const today = new Date();
  return `${today.getFullYear() + years}-${
    today.getMonth() < 10 ? "0" + today.getMonth() : today.getMonth()
  }-${today.getDate()}`;
};

/**
 * @name  DatePicker
 * @description DatePicker JSX element
 */
export default function DatePicker({
  native,
  placeholder,
  value,
  minDate = getMinDate(100),
  maxDate = getMaxDate(100),
  type = "datetime-local",
  className = "",
  ...props
}: IDatePicker) {
  return (
    <div className={`${className} ${styles["rxp-ui__datepicker"]}`} {...props}>
      {!native && <div></div>}
      {!!native && (
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          min={minDate}
          max={maxDate}
        />
      )}
    </div>
  );
}
