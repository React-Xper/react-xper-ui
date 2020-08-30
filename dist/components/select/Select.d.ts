import React from "react";
import "./Select.scss";
interface ISelect {
    children: React.ReactNode;
    title?: string;
    defaultValue?: string;
    native?: boolean;
    onChange?: any;
}
export default function Select(props: ISelect): JSX.Element;
export {};
