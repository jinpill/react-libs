import React, { useEffect, useMemo, useRef, useState } from "react";
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
  textAlignment?: "left" | "center" | "right";

  min?: number | `${number}`;
  max?: number | `${number}`;
  step?: number | `${number}`;
  float?: number | `${number}`;

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

    const [value, setValue] = useState(props.value ?? "");
    const prevValueRef = useRef(value);

    const min = useMemo(() => Number(props.min ?? -Infinity), [props.min]);
    const max = useMemo(() => Number(props.max ?? Infinity), [props.max]);
    const step = useMemo(() => Number(props.step ?? 1), [props.step]);
    const float = useMemo(() => {
      if (!props.float) return;
      const float = Number(props.float);

      if (isNaN(float)) return;
      if (float < 0) {
        console.warn("`float` should be greater than or equal to 0.");
        return;
      }

      return float;
    }, [props.float]);

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

      const addToValue = (direction: number) => {
        let nextValue = 0;

        if (value !== "") {
          nextValue = Number(value);
          nextValue += direction * step;
        }

        applyCurrentValue(nextValue.toString());
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
          addToValue(+1);
          break;

        case "ArrowDown":
          if (!isNumberType) break;
          stopAndPrevent();
          addToValue(-1);
          break;
      }

      props.onKeyDown?.(event);
    };

    const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
      applyCurrentValue();
      props.onBlur?.(event);
    };

    const applyCurrentValue = (nextValue = value) => {
      if (prevValueRef.current === nextValue) return;

      if (isNumberType) {
        if (isNaN(Number(nextValue))) {
          resetValue();
          return;
        }

        if (nextValue !== "") {
          nextValue = Number(nextValue).toString();
          if (nextValue !== value) setValue(nextValue);
        }

        const numberValue = Number(nextValue);
        if (numberValue < min) {
          nextValue = min.toString();
        } else if (numberValue > max) {
          nextValue = max.toString();
        } else if (typeof float === "number") {
          nextValue = numberValue.toFixed(float);
          nextValue = Number(nextValue).toString();
        }

        if (numberValue.toString() !== nextValue) setValue(nextValue);
        if (prevValueRef.current === nextValue) return;
      }

      props.onChange?.(nextValue);
      prevValueRef.current = nextValue;
    };

    const resetValue = () => {
      if (prevValueRef.current === value) return;
      setValue(prevValueRef.current);
    };

    useEffect(() => {
      if (min > max) {
        console.warn("`min` should be less than or equal to `max`.");
      }
    }, [min, max]);

    useEffect(() => {
      if (props.type !== "number") {
        const nextValue = props.value ?? "";
        setValue(nextValue);
        return;
      }

      const nextValue = Number(props.value ?? 0);
      if (min > nextValue) applyCurrentValue(min.toString());
      else if (max < nextValue) applyCurrentValue(max.toString());
    }, [props.value, min, max, applyCurrentValue]);

    return (
      <div
        ref={ref}
        className={classNames(
          style.input,
          props.className,
          style[props.size ?? "medium"],
          style[props.textAlignment ?? "left"],
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
          value={value}
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
