import React from "react";
import classNames from "classnames";
import style from "./style.module.scss";

export type LabelSize = "small" | "medium" | "large";

export type LabelProps = {
  name: string;
  unit?: string;
  size?: LabelSize;
  option?: string;
  message?: string;
  isFullWidth?: boolean;
  isHorizontal?: boolean;
  hasError?: boolean;

  className?: string;
  children?: React.ReactNode;
};

const Label = (props: LabelProps) => {
  return (
    <label
      className={classNames(
        style.label,
        props.className,
        style[props.size ?? "medium"],
        {
          [style.fullWidth]: props.isFullWidth,
          [style.horizontal]: props.isHorizontal,
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
  );
};

export default Label;