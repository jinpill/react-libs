import React, {
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from "react";
import classNames from "classnames";
import ToggleOption from "./ToggleOption";
import Background from "./Background";
import style from "./style.module.scss";

export type ToggleSize = "small" | "medium" | "large";

export type ToggleOption = {
  label: string;
  value: string;
};

export type ToggleButtonProps = {
  size?: ToggleSize;
  options: ToggleOption[];
  value?: string;
  tabIndex?: number;
  isUniformWidth?: boolean;
  isFullWidth?: boolean;
  isDisabled?: boolean;
  isDeselectable?: boolean;
  onChange?: (value: string) => void;

  className?: string;
};

const ToggleButton = React.forwardRef<HTMLDivElement, ToggleButtonProps>(
  (props, ref) => {
    const toggleButtonRef = useRef<HTMLDivElement>(null);
    useImperativeHandle(ref, () => toggleButtonRef.current!, []);
    const backgroundWrapperRef = useRef<HTMLDivElement>(null);

    const [value, setValue] = useState("");
    const currentValue = props.value ?? value;

    const index = useMemo(() => {
      return props.options.findIndex((option) => option.value === currentValue);
    }, [props.options, currentValue]);

    const [width, setWidth] = useState<number | null>(null);
    const [left, setLeft] = useState<number | null>(null);
    const hasValue = width !== null && left !== null;

    const handleClick = (value: string) => {
      if (props.isDisabled) return;

      if (currentValue === value) {
        if (props.isDeselectable) {
          changeValue("");
        }
      } else {
        changeValue(value);
      }
    };

    const handleKeyDown = (event: React.KeyboardEvent) => {
      const $toggleButton = toggleButtonRef.current;
      const $options = $toggleButton?.querySelectorAll(`.${style.option}`);
      if (!$options || $options.length === 0) return;

      let nextIndex = -1;
      const focusedIndex = Array.from($options).findIndex((option) =>
        option.contains(document.activeElement),
      );

      if (event.key === "ArrowLeft") {
        nextIndex = focusedIndex - 1;
      } else if (event.key === "ArrowRight") {
        nextIndex = focusedIndex + 1;
      }

      if (nextIndex === -1) return;
      if (nextIndex > $options.length - 1) return;

      event.preventDefault();
      const $nextOption = $options[nextIndex] as HTMLButtonElement;
      $nextOption?.focus();
    };

    const changeValue = (value: string) => {
      setValue(value);
      props.onChange?.("");
    };

    useEffect(() => {
      if (index === -1) {
        setLeft(null);
        return;
      }

      const $toggleButton = toggleButtonRef.current;
      const $options = $toggleButton?.querySelectorAll(`.${style.option}`);
      const $backgroundWrapper = backgroundWrapperRef.current;
      if (!$options || $options.length === 0 || !$backgroundWrapper) return;

      const $option = $options[index];
      if (!$option) return;

      const optionRect = $option.getBoundingClientRect();
      const backgroundWrapperRect = $backgroundWrapper.getBoundingClientRect();

      setWidth(optionRect.width);
      setLeft(
        (optionRect.left - backgroundWrapperRect.left) /
          backgroundWrapperRect.width,
      );
    }, [index]);

    return (
      <div
        ref={toggleButtonRef}
        className={classNames(
          style.toggleButton,
          props.className,
          style[props.size ?? "medium"],
          {
            [style.fullWidth]: props.isFullWidth,
            [style.disabled]: props.isDisabled,
          },
        )}
        style={{
          gridTemplateColumns: props.isUniformWidth
            ? `repeat(${props.options.length}, 1fr)`
            : `repeat(${props.options.length}, auto)`,
        }}
      >
        {props.options.map((option) => (
          <ToggleOption
            key={option.value}
            label={option.label}
            value={option.value}
            tabIndex={props.tabIndex}
            isSelected={currentValue === option.value}
            onClick={handleClick}
            onKeyDown={handleKeyDown}
          />
        ))}
        <div
          ref={backgroundWrapperRef}
          className={classNames(style.backgroundWrapper)}
        >
          {hasValue && <Background width={width} left={left} />}
        </div>
      </div>
    );
  },
);

export default ToggleButton;
