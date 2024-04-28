import React, { useState } from "react";
import classNames from "classnames";
import Button from "@/components/Button";
import style from "./style.module.scss";

export type RadioSize = "small" | "medium" | "large";

export type RadioProps = {
  size?: RadioSize;
  value?: boolean;
  onChange?: (value: boolean) => void;
  className?: string;
};

const Radio = React.forwardRef<HTMLButtonElement, RadioProps>((props, ref) => {
  const [value, setValue] = useState(false);
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
        style.radio,
        style.button,
        style[props.size ?? "medium"],
        props.className,
        {
          [style.checked]: currentValue,
        },
      )}
      role="secondary"
      onClick={handleClick}
    />
  );
});

export default Radio;
