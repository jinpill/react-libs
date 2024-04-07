import React from "react";
import classNames from "classnames";

import Ellipsis from "@/components/Ellipsis";
import Button from "@/components/Button";
import Icon from "@/components/Icon";

import style from "./style.module.scss";

export type DropdownSize = "small" | "medium" | "large";

export type DropdownProps = {
  size?: DropdownSize;
  isDisabled?: boolean;
  isFullWidth?: boolean;

  className?: string;
};

const Dropdown = (props: DropdownProps) => {
  return (
    <Button
      role="secondary"
      size={props.size}
      isDisabled={props.isDisabled}
      isFullWidth={props.isFullWidth}
      className={classNames(
        style.dropdown,
        props.className,
        style[props.size ?? "medium"],
      )}
    >
      <div className={style.display}>
        <Ellipsis className={style.text}>Select an option</Ellipsis>
        <Icon className={style.icon} preset="expand-more" />
      </div>
    </Button>
  );
};

export default Dropdown;
