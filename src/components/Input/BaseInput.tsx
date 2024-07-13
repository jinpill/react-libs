import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import classNames from "classnames";

import useStateRef from "@/hooks/useStateRef";
import logger from "@/utils/logger";

import type { InputSize } from ".";
import style from "./style.module.scss";

const ALLOWED_CHARS = ["+", "-", "."];

export type BaseInputProps = {
  type: "text" | "password" | "number" | "color";
  size?: InputSize;
  placeholder?: string;
  tabIndex?: number;
  value?: string;
  textAlignment?: "left" | "center" | "right";

  min?: number | `${number}`;
  max?: number | `${number}`;
  step?: number | `${number}`;
  decimal?: number | `${number}`;

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
    const onChangeRef = useStateRef(props.onChange);

    const inputRef = useRef<HTMLInputElement>(null);
    const isNumberType = props.type === "number";
    const isColorType = props.type === "color";

    const getInitialValue = useCallback(() => {
      if (props.type === "color") {
        if (props.value) return props.value.toUpperCase();
        return "#FFFFFF";
      }

      return props.value ?? "";
    }, [props.type, props.value]);

    const [value, setValue] = useState(getInitialValue());
    const valueRef = useStateRef(value);
    const prevValueRef = useRef(value);

    const min = useMemo(() => Number(props.min ?? -Infinity), [props.min]);
    const max = useMemo(() => Number(props.max ?? Infinity), [props.max]);
    const step = useMemo(() => Number(props.step ?? 1), [props.step]);
    const decimal = useMemo(() => {
      if (!props.decimal) return;
      const decimal = Number(props.decimal);

      if (isNaN(decimal)) return;
      if (decimal < 0) {
        logger.warn("Input", "`decimal` should be greater than or equal to 0.");
        return;
      }

      return decimal;
    }, [props.decimal]);

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

      if (isColorType) {
        const hasHash = newValue[0] === "#";
        let isInvalid = false;

        isInvalid ||= hasHash && newValue.length > 7;
        isInvalid ||= !hasHash && newValue.length > 6;
        isInvalid ||= hasHash && newValue.slice(1).includes("#");

        if (isInvalid) {
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

          if (typeof decimal !== "number") {
            const decimal = step.toString().split(".")[1];
            const decimalPlace = !decimal ? 0 : decimal.length;
            nextValue = Number(nextValue.toFixed(decimalPlace));
          }
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

    const resetValue = useCallback(() => {
      if (prevValueRef.current === valueRef.current) return;
      setValue(prevValueRef.current);
    }, [valueRef]);

    const applyCurrentValue = useCallback(
      (nextValue = valueRef.current) => {
        if (prevValueRef.current === nextValue) return;

        // number type validation
        if (isNumberType) {
          if (isNaN(Number(nextValue))) {
            resetValue();
            return;
          }

          if (nextValue !== "") {
            nextValue = Number(nextValue).toString();
            if (nextValue !== valueRef.current) setValue(nextValue);
          }

          const numberValue = Number(nextValue);
          if (numberValue < min) {
            nextValue = min.toString();
          } else if (numberValue > max) {
            nextValue = max.toString();
          } else if (typeof decimal === "number") {
            nextValue = numberValue.toFixed(decimal);
            nextValue = Number(nextValue).toString();
          }

          if (numberValue.toString() !== nextValue) setValue(nextValue);
          if (prevValueRef.current === nextValue) return;
        }

        // color type validation
        if (isColorType) {
          let isInvalid = false;

          if (nextValue.length === 7) {
            isInvalid ||= nextValue[0] !== "#";
            isInvalid ||= !/^[0-9A-Fa-f]+$/.test(nextValue.slice(1));
          } else if (nextValue.length === 6) {
            isInvalid ||= !/^[0-9A-Fa-f]+$/.test(nextValue);
            if (!isInvalid) nextValue = `#${nextValue}`;
          } else {
            isInvalid = true;
          }

          if (isInvalid) {
            resetValue();
            return;
          }

          nextValue = nextValue.toUpperCase();
          setValue(nextValue);
        }

        onChangeRef.current?.(nextValue);
        prevValueRef.current = nextValue;
      },
      [
        isNumberType,
        isColorType,
        decimal,
        min,
        max,
        onChangeRef,
        resetValue,
        valueRef,
      ],
    );

    useEffect(() => {
      if (min <= max) return;
      logger.warn("Input", "`min` should be less than or equal to `max`.");
    }, [min, max]);

    useEffect(() => {
      if (props.type === "number") {
        const nextValue = Number(props.value ?? 0);
        if (min > nextValue) applyCurrentValue(min.toString());
        else if (max < nextValue) applyCurrentValue(max.toString());
        return;
      }

      const nextValue = getInitialValue();
      setValue(nextValue);
    }, [props.value, props.type, min, max, getInitialValue, applyCurrentValue]);

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
        {isColorType && (
          <button
            className={style.colorChip}
            style={{
              backgroundColor: value,
            }}
          />
        )}
        <input
          ref={inputRef}
          type={isNumberType || isColorType ? "text" : props.type}
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

BaseInput.displayName = "BaseInput";
export default BaseInput;
