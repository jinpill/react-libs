import React from "react";
import classNames from "classnames";
import style from "./style.module.scss";

export type ButtonRole = "primary" | "secondary" | "tertiary" | "danger";
export type ButtonSize = "small" | "medium" | "large";

export type ButtonProps = {
  role?: ButtonRole;
  size?: ButtonSize;
  text?: string;
  href?: string;
  isDisabled?: boolean;

  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  onPointerEnter?: (event: React.PointerEvent<HTMLButtonElement>) => void;
  onPointerLeave?: (event: React.PointerEvent<HTMLButtonElement>) => void;
  onPointerDown?: (event: React.PointerEvent<HTMLButtonElement>) => void;
  onPointerUp?: (event: React.PointerEvent<HTMLButtonElement>) => void;
  onFocus?: (event: React.FocusEvent<HTMLButtonElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLButtonElement>) => void;

  className?: string;
  children?: React.ReactNode;
};

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      props.onClick?.(event);
      if (!props.href) return;
      window.location.href = props.href;
    };

    return (
      <button
        ref={ref}
        className={classNames(
          style.button,
          props.className,
          style[props.role ?? "primary"],
          style[props.size ?? "medium"],
        )}
        disabled={props.isDisabled}
        onClick={handleClick}
        onPointerEnter={props.onPointerEnter}
        onPointerLeave={props.onPointerLeave}
        onPointerDown={props.onPointerDown}
        onPointerUp={props.onPointerUp}
        onFocus={props.onFocus}
        onBlur={props.onBlur}
      >
        <div className={style.focusAnimation} />
        {props.children}
        {props.text}
      </button>
    );
  },
);

Button.displayName = "Button";
export default Button;
