import React, { useState, useEffect, useRef, useReducer, Reducer } from "react";
import "./Select.scss";
import { ReactComponent as Chevron } from "src/assets/icons/chevron.svg";

interface IAction {
  payload: any;
  type: string;
}

interface ISelected {
  title: string;
  value: any;
}

const selectedState: ISelected = {
  title: "",
  value: "",
};

const selectedReducer = (state = selectedState, action: IAction) => {
  const reducedState = { ...state, [action.type]: action.payload };
  return reducedState;
};

export default function Select(
  props: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLSelectElement>,
    HTMLSelectElement
  >
) {
  const { children, title, defaultValue: value } = props;
  const [selected, setSelected] = useReducer(selectedReducer, {
    ...selectedState,
    title,
    value,
  } as ISelected);

  const handleClick = () => {};

  return (
    <div className="rts-ui__select" onClick={handleClick}>
      {selected.title}
      <i className="rts-ui__select__arrow">
        <Chevron />
      </i>
      <select>{children}</select>
      <div className="rts-ui__select__option_panel"></div>
    </div>
  );
}
