import React, { useState } from "react";
import classNames from "classnames";
import Button from "@/components/Button";
import style from "./style.module.scss";

export type ToggleSwitchSize = "small" | "medium" | "large";

export type ToggleSwitchProps = {
  size?: ToggleSwitchSize;
  value?: boolean;
  tabIndex?: number;
  isDisabled?: boolean;
  onChange?: (value: boolean) => void;

  className?: string;
};

const ToggleSwitch = (props: ToggleSwitchProps) => {
  const [value, setValue] = useState(false);
  const currentValue = props.value ?? value;

  const handleClick = () => {
    const nextValue = !currentValue;
    setValue(nextValue);
    props.onChange?.(nextValue);
  };

  return (
    <Button
      className={classNames(
        style.toggleSwitch,
        props.className,
        style[props.size ?? "medium"],
        {
          [style.active]: currentValue,
        },
      )}
      role={currentValue ? "primary" : "tertiary"}
      tabIndex={props.tabIndex}
      isDisabled={props.isDisabled}
      onClick={handleClick}
    >
      <div className={style.knobArea}>
        <div className={style.knob} />
      </div>
    </Button>
  );
};

export default ToggleSwitch;
