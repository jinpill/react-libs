import React from "react";
import classNames from "classnames";

import Ellipsis from "@/components/Ellipsis";
import Icon from "@/components/Icon";

import style from "./style.module.scss";

export type DropdownSize = "small" | "medium" | "large";

export type DropdownProps = {
  size?: DropdownSize;

  className?: string;
};

const Dropdown = (props: DropdownProps) => {
  return (
    <button
      className={classNames(
        style.dropdown,
        props.className,
        style[props.size ?? "medium"],
      )}
    >
      <Ellipsis className={style.text}>선택하세요</Ellipsis>
      <Icon className={style.icon} preset="expand-more" />
    </button>
  );
};

export default Dropdown;
