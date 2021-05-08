import React from "react";

import "./TextInput.scss";

interface ITextInput extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {

    label?: string;

    prefix?: string;

    numberOnly?: boolean;

    showError?: boolean;

    maxLength?: number;

    type?: "text" | "password";

}

export default function TextInput({ label, prefix, numberOnly, showError, maxLength, required, type, value: parentValue, onChange, onKeyDown, onError, onKeyUp, onFocus, onBlur, className, ...props }: ITextInput): JSX.Element;

export {};

