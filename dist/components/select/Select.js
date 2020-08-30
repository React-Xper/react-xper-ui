import React, { useState, useEffect, useRef, useReducer } from "react";
import "./Select.scss";
import { Chevron } from "./SelectChevron";
const selectedState = {
    title: "",
    value: "",
};
const selectedReducer = (state = selectedState, action) => {
    const reducedState = Object.assign(Object.assign({}, state), { [action.type]: action.payload });
    return reducedState;
};
export default function Select(props) {
    const { children, title, defaultValue: value, native, onChange } = props;
    const [selected, setSelected] = useReducer(selectedReducer, Object.assign(Object.assign({}, selectedState), { title: title || "", value: value || "" }));
    const [toggleShowOpts, setToggleShowOpts] = useState(false);
    const [options, setOptions] = useState([]);
    const selectRef = useRef(null);
    const handleClickSelect = () => {
        setToggleShowOpts(!toggleShowOpts);
    };
    const handleClickLink = (selected) => {
        var _a;
        if (!!((_a = selectRef.current) === null || _a === void 0 ? void 0 : _a.value)) {
            selectRef.current.value = selected.value;
        }
        if (!!onChange) {
            const event = {
                target: {
                    title: selected.title,
                    value: selected.value,
                },
            };
            onChange(event);
        }
        setSelected({ type: "title", payload: selected.title });
        setSelected({ type: "value", payload: selected.value });
    };
    useEffect(() => {
        var _a;
        if (native) {
            return;
        }
        const options = (_a = selectRef === null || selectRef === void 0 ? void 0 : selectRef.current) === null || _a === void 0 ? void 0 : _a.options;
        if (!!options) {
            const optionArray = [];
            for (let i = 0; i < (options === null || options === void 0 ? void 0 : options.length); i++) {
                const option = {
                    title: options[i].text,
                    value: options[i].value,
                };
                optionArray.push(option);
            }
            setOptions(optionArray);
        }
    }, [native]);
    return (React.createElement(React.Fragment, null, !!native ? (React.createElement("select", Object.assign({ className: "rts-ui__select" }, props), children)) : (React.createElement(React.Fragment, null,
        React.createElement("div", { className: "rts-ui__select", onClick: handleClickSelect, onBlur: handleClickSelect },
            React.createElement("div", { className: "rts-ui__select__visible" },
                React.createElement("label", null, selected.title),
                React.createElement("i", { className: "rts-ui__select__arrow" },
                    React.createElement(Chevron, null))),
            React.createElement("select", Object.assign({ ref: selectRef, className: "rts-ui__select--hidden" }, props), children),
            toggleShowOpts && (React.createElement("div", { className: "rts-ui__select__option_panel" },
                React.createElement("ul", null, !!(options === null || options === void 0 ? void 0 : options.length) && (options === null || options === void 0 ? void 0 : options.map((option, index) => (React.createElement("li", { className: option.value === selected.value
                        ? "rts-ui__select__option--selected"
                        : "", key: index, id: index.toString(), onClick: () => {
                        handleClickLink(option);
                    } }, option.title))))))))))));
}
