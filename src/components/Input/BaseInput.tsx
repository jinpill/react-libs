import React, { useRef, useState } from "react";
import classNames from "classnames";
import type { InputSize } from "./index";
import style from "./style.module.scss";

const ALLOWED_CHARS = ["+", "-", "."];

export type BaseInputProps = {
  type: "text" | "password" | "number";
  size?: InputSize;
  placeholder?: string;
  tabIndex?: number;
  value?: string;
  useImmediateChangeEffect?: boolean;
  isFullWidth?: boolean;
  isDisabled?: boolean;
  onChange?: (value: string) => void;
  onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onPressEnter?: () => void;

  className?: string;
};

const BaseInput = React.forwardRef<HTMLDivElement, BaseInputProps>(
  (props, ref) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const isNumberType = props.type === "number";

    const [value, setValue] = useState("");
    const currentValue = props.value ?? value;
    const prevValueRef = useRef(currentValue);

    const handleClickContainer = () => {
      inputRef.current?.focus();
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = event.target.value;

      if (isNumberType && isNaN(Number(newValue))) {
        if (!ALLOWED_CHARS.includes(newValue)) {
          event.preventDefault();
          return;
        }
      }

      setValue(newValue);

      if (props.useImmediateChangeEffect) {
        props.onChange?.(newValue);
        prevValueRef.current = newValue;
      }
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
      const stopAndPrevent = () => {
        event.stopPropagation();
        event.preventDefault();
      };

      const addDirectionToValue = (direction: number) => {
        let nextValue = 0;

        if (currentValue !== "") {
          nextValue = parseInt(currentValue, 10);
          nextValue += direction;
        }

        setValue(nextValue.toString());
        props.onChange?.(nextValue.toString());
      };

      switch (event.key) {
        case "Enter":
          stopAndPrevent();
          applyCurrentValue();
          props.onPressEnter?.();
          break;

        case "Escape":
          stopAndPrevent();
          resetValue();
          break;

        case "ArrowUp":
          if (!isNumberType) break;
          stopAndPrevent();
          addDirectionToValue(+1);
          break;

        case "ArrowDown":
          if (!isNumberType) break;
          stopAndPrevent();
          addDirectionToValue(-1);
          break;
      }

      props.onKeyDown?.(event);
    };

    const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
      applyCurrentValue();
      props.onBlur?.(event);
    };

    const applyCurrentValue = () => {
      if (prevValueRef.current === currentValue) return;
      let nextValue = currentValue;

      if (isNumberType) {
        if (isNaN(Number(nextValue))) {
          resetValue();
          return;
        }

        if (nextValue !== "") {
          nextValue = parseInt(nextValue, 10).toString();
          if (nextValue !== currentValue) setValue(nextValue);
        }
      }

      props.onChange?.(nextValue);
      prevValueRef.current = nextValue;
    };

    const resetValue = () => {
      if (prevValueRef.current === currentValue) return;
      setValue(prevValueRef.current);
    };

    return (
      <div
        ref={ref}
        className={classNames(
          style.input,
          props.className,
          style[props.size ?? "medium"],
          {
            [style.fullWidth]: props.isFullWidth,
            [style.disabled]: props.isDisabled,
          },
        )}
        onClick={handleClickContainer}
      >
        <input
          ref={inputRef}
          type={isNumberType ? "text" : props.type}
          placeholder={props.placeholder}
          tabIndex={props.tabIndex}
          disabled={props.isDisabled}
          value={currentValue}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          onFocus={props.onFocus}
          onBlur={handleBlur}
          onClick={(e) => e.stopPropagation()}
        />
      </div>
    );
  },
);

export default BaseInput;
