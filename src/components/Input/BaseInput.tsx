import React from "react";
import classNames from "classnames";
import type { InputSize } from "./index";
import style from "./style.module.scss";

type BaseInputProps = {
  type: "text" | "password" | "number";
  size: InputSize;
  placeholder?: string;

  className?: string;
};

const BaseInput = (props: BaseInputProps) => {
  return (
    <div
      className={classNames(style.input, props.className, style[props.size])}
    ></div>
  );
};

export default BaseInput;
