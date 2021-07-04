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

import React from "react";

import styles from "./Card.module.css";

export default function Card(_a) {

    var { children, className = "" } = _a, props = __rest(_a, ["children", "className"]);

    return (React.createElement("div", Object.assign({ className: `${className} ${styles === null || styles === void 0 ? void 0 : styles["rts-ui__card"]}` }, props), children));

}

