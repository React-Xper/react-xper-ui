var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React, { useState, useEffect, useRef } from "react";
import "./TextInput.scss";
const REGEX = {
    alphabets: /^[A-Za-z]+$/,
    alphanumeric: /^[A-Za-z0-9]+$/,
    numbers: /^[0-9]+$/,
};
const KEY_CODES = {
    backspace: 8,
};
export default function TextInput(_a) {
    var { label = "", prefix = "", numberOnly = false, showError = false, maxLength, required = false, type = "text", value: parentValue, onChange, onKeyDown, onError, onKeyUp, onFocus, onBlur } = _a, props = __rest(_a, ["label", "prefix", "numberOnly", "showError", "maxLength", "required", "type", "value", "onChange", "onKeyDown", "onError", "onKeyUp", "onFocus", "onBlur"]);
    const [focused, setFocused] = useState(false);
    const [error, setError] = useState(false);
    const [value, setValue] = useState("");
    const inputRef = useRef(null);
    const setCustomError = (e, customError, preventDefault = true) => {
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
                throw new Error("ERROR : Prefix contains alphabet characters while numberOnly props is set to true.");
            }
        }
        if (prefix && parentValue) {
            if (parentValue.toString().indexOf(prefix) !== 0) {
                setValue(prefix + parentValue);
                if (!!inputRef.current) {
                    const event = new Event("change", { bubbles: true });
                    inputRef.current.dispatchEvent(event);
                }
            }
            else {
                setValue(parentValue.toString());
            }
        }
        else if (prefix && !parentValue) {
            setValue(prefix);
        }
        else if (!prefix && parentValue) {
            setValue(parentValue.toString());
        }
        else {
            setValue("");
        }
    }, [numberOnly, prefix, parentValue]);
    const handleOnFocus = (e) => {
        setFocused(true);
        if (onFocus) {
            onFocus(e);
        }
    };
    const handleOnBlur = (e) => {
        setFocused(false);
        setError(false);
        if (onBlur) {
            onBlur(e);
        }
    };
    const handleOnError = (e) => {
        if (onError) {
            onError(e);
        }
    };
    const handleOnChange = (e) => {
        if (!!prefix && e.target.value.indexOf(prefix) !== 0) {
            e.target.value = prefix;
            return;
        }
        if (onChange) {
            onChange(e);
        }
    };
    const handleOnKeyUp = (e) => {
        if (!!required && e.target.value.length - prefix.length === 0 && !error) {
            setCustomError(e, `This input is required`, false);
            return;
        }
        if (onKeyUp) {
            onKeyUp(e);
        }
    };
    const handleOnKeyDown = (e) => {
        setError(false);
        if (e.keyCode !== KEY_CODES.backspace &&
            maxLength &&
            e.currentTarget.value.length - prefix.length > maxLength - 1) {
            setCustomError(e, `This input accepts maximum ${maxLength} characters.`);
            return;
        }
        const charCode = String.fromCharCode(e.keyCode);
        if (!!numberOnly &&
            !REGEX.numbers.test(charCode) &&
            e.keyCode !== KEY_CODES.backspace) {
            setCustomError(e, "This input accepts number only.");
            return;
        }
        if (onKeyDown) {
            onKeyDown(e);
        }
    };
    return (React.createElement("div", { className: "rts-ui__text-input" },
        React.createElement("input", Object.assign({ type: type, ref: inputRef, className: `rts-ui__text-input__input 
        ${error ? "--onerror" : ""}
        ${!label ? "--nolabel" : ""}` }, props, { onFocus: handleOnFocus, onBlur: handleOnBlur, onChange: handleOnChange, onError: handleOnError, onKeyDown: handleOnKeyDown, onKeyUp: handleOnKeyUp, value: value })),
        !!label && (React.createElement("label", { className: `rts-ui__text-input__label 
          ${focused ? "--onfocus" : ""}
          ${error ? "--onerror" : ""}` }, label))));
}
