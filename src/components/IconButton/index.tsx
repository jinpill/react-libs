import React from "react";
import classNames from "classnames";
import Button, { ButtonProps } from "@/components/Button";
import Icon, { IconProps } from "@/components/Icon";
import style from "./style.module.scss";

export type IconButtonProps = IconProps &
  Pick<
    ButtonProps,
    | "size"
    | "onClick"
    | "onFocus"
    | "onBlur"
    | "onPointerDown"
    | "onPointerUp"
    | "onPointerEnter"
    | "onPointerLeave"
    | "tabIndex"
    | "isDisabled"
  > & {
    style?: React.CSSProperties;
  };

const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  (props, ref) => (
    <Button
      ref={ref}
      style={props.style}
      className={classNames(
        style.iconButton,
        props.className,
        style[props.size ?? "medium"],
      )}
      role="secondary"
      tabIndex={props.tabIndex}
      isDisabled={props.isDisabled}
      onClick={props.onClick}
      onFocus={props.onFocus}
      onBlur={props.onBlur}
      onPointerDown={props.onPointerDown}
      onPointerUp={props.onPointerUp}
      onPointerEnter={props.onPointerEnter}
      onPointerLeave={props.onPointerLeave}
    >
      <Icon className={style.icon} src={props.src} preset={props.preset} />
    </Button>
  ),
);

IconButton.displayName = "IconButton";
export default IconButton;
