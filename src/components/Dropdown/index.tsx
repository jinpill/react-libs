import React from "react";
import classNames from "classnames";
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
      선택하세요
    </button>
  );
};

export default Dropdown;
