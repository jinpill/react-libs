import React from "react";
import classNames from "classnames";
import style from "./style.module.scss";

type ButtonProps = {
  type?: "button" | "anchor";
  role?: "primary" | "secondary" | "tertiary" | "danger";
  text?: string;
  isDisabled?: boolean;

  className?: string;
  children?: React.ReactNode;
};

const Button = (props: ButtonProps) => {
  return (
    <button
      className={classNames(
        style.button,
        props.className,
        style[props.role ?? "primary"],
      )}
      disabled={props.isDisabled}
    >
      {props.children}
      {props.text}
    </button>
  );
};

export default Button;
