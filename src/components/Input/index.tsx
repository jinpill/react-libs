import React from "react";
import classNames from "classnames";
import BaseInput from "./BaseInput";
import style from "./style.module.scss";

export type InputSize = "small" | "medium" | "large";

export type InputProps = {
  size?: InputSize;
};

const Input = (props: InputProps) => {
  return <BaseInput type="text" size={props.size ?? "medium"} />;
};

export default Input;
