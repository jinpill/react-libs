import React from "react";
import classNames from "classnames";
import Ellipsis from "@/components/Ellipsis";
import style from "./style.module.scss";

export type OptionsSize = "small" | "medium" | "large";

export type Option = {
  type: "option";
  label: string;
  value: string;
  description?: string;
};

export type OptionsProps = {
  size?: OptionsSize;
  options: Option[];
  isVisible: boolean;
  className?: string;
};

export const Options = (props: OptionsProps) => {
  return (
    <ul
      className={classNames(
        style.options,
        props.className,
        style[props.size ?? "medium"],
      )}
    >
      {props.options.map((option) => (
        <li key={option.value} className={style.option}>
          <Ellipsis className={style.label}>{option.label}</Ellipsis>
          {option.description && (
            <div className={style.description}>{option.description}</div>
          )}
        </li>
      ))}
    </ul>
  );
};

export default Options;
export { default as OptionsArea } from "./OptionsArea";
