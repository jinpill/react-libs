import React from "react";
import classNames from "classnames";
import style from "./style.module.scss";

export type LabelSize = "small" | "medium" | "large";
export type LabelPosition = "top" | "left" | "right";

export type LabelProps = {
  name: string;
  unit?: string;
  size?: LabelSize;
  option?: string;
  message?: string;
  position?: LabelPosition;
  isFullWidth?: boolean;
  hasError?: boolean;

  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
};

const Label = React.forwardRef<HTMLLabelElement, LabelProps>((props, ref) => (
  <label
    ref={ref}
    style={props.style}
    className={classNames(
      style.label,
      props.className,
      style[props.size ?? "medium"],
      style[props.position ?? "top"],
      {
        [style.fullWidth]: props.isFullWidth,
      },
    )}
  >
    <div className={style.wrapper}>
      <div className={style.heading}>
        <div className={style.name}>
          {props.name}
          {props.unit && <div className={style.unit}>{props.unit}</div>}
        </div>
        {props.option && <div className={style.option}>{props.option}</div>}
      </div>

      <div className={classNames(style.contents)}>{props.children}</div>
    </div>

    {props.message && (
      <div
        className={classNames(style.message, {
          [style.error]: props.hasError,
        })}
      >
        {props.message}
      </div>
    )}
  </label>
));

Label.displayName = "Label";
export default Label;
