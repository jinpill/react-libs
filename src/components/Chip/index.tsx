import React from "react";
import classNames from "classnames";
import Ellipsis from "@/components/Ellipsis";
import Icon from "@/components/Icon";
import style from "./style.module.scss";

export type ChipProps = {
  id?: string;
  label: string;
  onClick?: (id: string) => void;
  onClear?: (id: string) => void;

  className?: string;
};

const Chip = (props: ChipProps) => {
  const handleClick = () => {
    props.onClick?.(props.id ?? "");
  };

  const handleClear = () => {
    props.onClear?.(props.id ?? "");
  };

  return (
    <div
      className={classNames(style.chip, props.className, {
        [style.clickable]: !!props.onClick,
        [style.clearable]: !!props.onClear,
      })}
      onClick={handleClick}
    >
      <Ellipsis className={style.label}>{props.label}</Ellipsis>
      {props.onClear && (
        <button
          className={style.clearButton}
          tabIndex={-1}
          onClick={handleClear}
        >
          <Icon className={style.icon} preset="close" />
        </button>
      )}
    </div>
  );
};

export default Chip;
