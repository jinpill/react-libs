import React, { useEffect, useState } from "react";
import classNames from "classnames";
import Button from "@/components/Button";
import Icon from "@/components/Icon";
import style from "./style.module.scss";

export type CheckboxSize = "large" | "medium" | "small";

export type CheckboxProps = {
  size?: CheckboxSize;
  isChecked?: boolean;
  onChange?: (checked: boolean) => void;

  className?: string;
};

const Checkbox = (props: CheckboxProps) => {
  const [isChecked, setIsChecked] = useState(props.isChecked ?? false);

  const handleClick = () => {
    const newIsChecked = !isChecked;
    setIsChecked(newIsChecked);
    props.onChange?.(newIsChecked);
  };

  useEffect(() => {
    setIsChecked(props.isChecked ?? false);
  }, [props.isChecked]);

  return (
    <Button
      className={classNames(
        style.checkbox,
        style.button,
        props.className,
        style[props.size ?? "medium"],
        {
          [style.checked]: isChecked,
        },
      )}
      role={isChecked ? "primary" : "secondary"}
      onClick={handleClick}
    >
      <Icon className={style.icon} preset="check" />
    </Button>
  );
};

export default Checkbox;
