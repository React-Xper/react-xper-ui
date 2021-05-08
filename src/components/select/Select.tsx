import React, {
  useState,
  useEffect,
  useRef,
  useReducer,
  StyleHTMLAttributes,
} from "react";
import "./Select.scss";
import { Chevron } from "./SelectChevron";

interface IAction {
  payload: any;
  type: string;
}

interface ISelected {
  title: string;
  value: any;
}

interface ISelect {
  children: React.ReactNode;
  title?: string;
  defaultValue?: string;
  native?: boolean;
  onChange?: any;
  style?: StyleHTMLAttributes<HTMLSelectElement>;
  className?: string;
}

const selectedState: ISelected = {
  title: "",
  value: "",
};

const selectedReducer = (state = selectedState, action: IAction) => {
  const reducedState = { ...state, [action.type]: action.payload };
  return reducedState;
};

/**
 * @name  Select
 * @description Select JSX element
 * @details https://bit.dev/m3yevn/reacthesis-ui/select
 */
export default function Select(props: ISelect) {
  const {
    children,
    title,
    defaultValue: value,
    onChange,
    className = "",
  } = props;

  const { native, style, ...rest } = props;

  const [selected, setSelected] = useReducer(selectedReducer, {
    ...selectedState,
    title: title || "",
    value: value || "",
  } as ISelected);

  const [toggleShowOpts, setToggleShowOpts] = useState(false);
  const [options, setOptions] = useState<ISelected[]>([]);
  const selectRef = useRef<HTMLSelectElement>(null);

  const handleClickSelect = () => {
    setToggleShowOpts(!toggleShowOpts);
  };

  const handleClickLink = (selected: ISelected) => {
    if (!!selectRef.current?.value) {
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
    if (native) {
      return;
    }
    const options = selectRef?.current?.options;

    if (!!options) {
      const optionArray: ISelected[] = [];
      for (let i = 0; i < options?.length; i++) {
        const option = {
          title: options[i].text,
          value: options[i].value,
        };

        optionArray.push(option);
      }
      setOptions(optionArray);
    }
  }, [native]);

  return (
    <>
      {!!native ? (
        <select
          className={`${className} rts-ui__select`.trim()}
          {...rest}
          style={style}>
          {children}
        </select>
      ) : (
        <>
          <div
            className={`${className} rts-ui__select`.trim()}
            onClick={handleClickSelect}
            onBlur={handleClickSelect}
            style={style}>
            <div className="rts-ui__select__visible">
              <label>{selected.title}</label>
              <i className="rts-ui__select__arrow">
                <Chevron />
              </i>
            </div>
            <select
              ref={selectRef}
              className="rts-ui__select--hidden"
              {...props}>
              {children}
            </select>
            {toggleShowOpts && (
              <div className="rts-ui__select__option_panel">
                <ul>
                  {!!options?.length &&
                    options?.map((option, index) => (
                      <li
                        className={
                          option.value === selected.value
                            ? "rts-ui__select__option--selected"
                            : ""
                        }
                        key={index}
                        id={index.toString()}
                        onClick={() => {
                          handleClickLink(option);
                        }}>
                        {option.title}
                      </li>
                    ))}
                </ul>
              </div>
            )}
          </div>
        </>
      )}
    </>
  );
}
