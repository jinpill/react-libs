import React, { useEffect, useState } from "react";
import classNames from "classnames";
import Button from "@/components/Button";
import style from "./style.module.scss";

export type RadioSize = "small" | "medium" | "large";

export type RadioProps = {
  size?: RadioSize;
  isChecked?: boolean;
  onChange?: (isChecked: boolean) => void;
  className?: string;
};

const Radio = React.forwardRef<HTMLButtonElement, RadioProps>((props, ref) => {
  const [isChecked, setIsChecked] = useState(props.isChecked ?? false);

  const handleClick = () => {
    setIsChecked(!isChecked);
    props.onChange?.(!isChecked);
  };

  useEffect(() => {
    setIsChecked(props.isChecked ?? false);
  }, [props.isChecked]);

  return (
    <Button
      ref={ref}
      className={classNames(
        style.radio,
        style.button,
        style[props.size ?? "medium"],
        props.className,
        {
          [style.checked]: isChecked,
        },
      )}
      role="secondary"
      onClick={handleClick}
    />
  );
});

export default Radio;
