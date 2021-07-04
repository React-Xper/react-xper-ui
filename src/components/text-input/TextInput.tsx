import React, { useState, useEffect, useRef } from "react";
import styles from "./TextInput.module.css";

const REGEX = {
  alphabets: /^[A-Za-z]+$/,
  alphanumeric: /^[A-Za-z0-9]+$/,
  numbers: /^[0-9]+$/,
};

const KEY_CODES = {
  backspace: 8,
};

interface ITextInput
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  label?: string;
  prefix?: string;
  numberOnly?: boolean;
  showError?: boolean;
  maxLength?: number;
  type?: "text" | "password";
}

/**
 * @name  TextInput
 * @description TextInput JSX element
 * @details https://bit.dev/m3yevn/reacthesis-ui/text-input
 */
export default function TextInput({
  label = "",
  prefix = "",
  numberOnly = false,
  showError = false,
  maxLength,
  required = false,
  type = "text",
  value: parentValue,
  onChange,
  onKeyDown,
  onError,
  onKeyUp,
  onFocus,
  onBlur,
  className = "",
  ...props
}: ITextInput) {
  const [focused, setFocused] = useState(false);
  const [error, setError] = useState(false);
  const [value, setValue] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const setCustomError = (
    e: React.SyntheticEvent<HTMLInputElement, Event>,
    customError: string,
    preventDefault: boolean = true
  ) => {
    setError(true);
    e.currentTarget.setCustomValidity(customError);
    handleOnError(e);
    if (preventDefault) {
      e.preventDefault();
    }
  };

  useEffect(() => {
    if (!!numberOnly) {
      if (prefix && REGEX.alphabets.test(prefix)) {
        throw new Error(
          "ERROR : Prefix contains alphabet characters while numberOnly props is set to true."
        );
      }
    }
    if (prefix && parentValue) {
      if (parentValue.toString().indexOf(prefix) !== 0) {
        setValue(prefix + parentValue);
        if (!!inputRef.current) {
          const event = new Event("change", { bubbles: true });
          inputRef.current.dispatchEvent(event);
        }
      } else {
        setValue(parentValue.toString());
      }
    } else if (prefix && !parentValue) {
      setValue(prefix);
    } else if (!prefix && parentValue) {
      setValue(parentValue.toString());
    } else {
      setValue("");
    }
  }, [numberOnly, prefix, parentValue]);

  const handleOnFocus = (e: any) => {
    setFocused(true);
    if (onFocus) {
      onFocus(e);
    }
  };

  const handleOnBlur = (e: any) => {
    setFocused(false);
    setError(false);
    if (onBlur) {
      onBlur(e);
    }
  };

  const handleOnError = (e: React.SyntheticEvent<HTMLInputElement, Event>) => {
    if (onError) {
      onError(e);
    }
  };

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!!prefix && e.target.value.indexOf(prefix) !== 0) {
      e.target.value = prefix;
      return;
    }
    if (onChange) {
      onChange(e);
    }
  };

  const handleOnKeyUp = (e: any) => {
    if (!!required && e.target.value.length - prefix.length === 0 && !error) {
      setCustomError(e, `This input is required`, false);
      return;
    }
    if (onKeyUp) {
      onKeyUp(e);
    }
  };

  const handleOnKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    setError(false);
    if (
      e.keyCode !== KEY_CODES.backspace &&
      maxLength &&
      e.currentTarget.value.length - prefix.length > maxLength - 1
    ) {
      setCustomError(e, `This input accepts maximum ${maxLength} characters.`);
      return;
    }
    const charCode = String.fromCharCode(e.keyCode);
    if (
      !!numberOnly &&
      !REGEX.numbers.test(charCode) &&
      e.keyCode !== KEY_CODES.backspace
    ) {
      setCustomError(e, "This input accepts number only.");
      return;
    }
    if (onKeyDown) {
      onKeyDown(e);
    }
  };

  return (
    <div
      className={`${className} ${styles[`rts-ui__text-input`]} ${
        error ? styles["text-input--error"] : ""
      }`.trim()}>
      <input
        type={type}
        ref={inputRef}
        className={
          styles[`rts-ui__text-input__input`] + `${!label ? " --nolabel" : ""}`
        }
        {...props}
        onFocus={handleOnFocus}
        onBlur={handleOnBlur}
        onChange={handleOnChange}
        onError={handleOnError}
        onKeyDown={handleOnKeyDown}
        onKeyUp={handleOnKeyUp}
        value={value}
      />
      {!!label && (
        <label
          className={
            styles[`rts-ui__text-input__label`] +
            `${focused ? " --onfocus" : ""}
          ${error ? " --onerror" : ""}`
          }>
          {label}
        </label>
      )}
    </div>
  );
}
