import React from "react";
import classNames from "classnames";
import style from "./style.module.scss";

type ToggleOptionProps = {
  label: string;
  value: string;
  tabIndex?: number;
  isSelected: boolean;
  onClick: (value: string) => void;
  onKeyDown: (event: React.KeyboardEvent) => void;
};

const ToggleOption = (props: ToggleOptionProps) => {
  const handleClick = () => {
    props.onClick(props.value);
  };

  return (
    <button
      key={props.value}
      className={classNames(style.option, {
        [style.selected]: props.isSelected,
      })}
      tabIndex={props.tabIndex}
      onClick={handleClick}
      onKeyDown={props.onKeyDown}
    >
      {props.label}
    </button>
  );
};

export default ToggleOption;
