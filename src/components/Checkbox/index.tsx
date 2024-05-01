import React, { useState } from "react";
import classNames from "classnames";
import Button from "@/components/Button";
import Icon from "@/components/Icon";
import style from "./style.module.scss";

export type CheckboxSize = "large" | "medium" | "small";

export type CheckboxProps = {
  size?: CheckboxSize;
  value?: boolean;
  tabIndex?: number;
  onChange?: (value: boolean) => void;

  className?: string;
};

const Checkbox = React.forwardRef<HTMLButtonElement, CheckboxProps>(
  (props, ref) => {
    const [value, setValue] = useState(props.value);
    const currentValue = props.value ?? value;

    const handleClick = () => {
      const nextValue = !currentValue;
      setValue(nextValue);
      props.onChange?.(nextValue);
    };

    return (
      <Button
        ref={ref}
        className={classNames(
          style.checkbox,
          style.button,
          props.className,
          style[props.size ?? "medium"],
          {
            [style.checked]: currentValue,
          },
        )}
        role={currentValue ? "primary" : "secondary"}
        tabIndex={props.tabIndex}
        onClick={handleClick}
      >
        <Icon className={style.icon} preset="check" />
      </Button>
    );
  },
);

export default Checkbox;
