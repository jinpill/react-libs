import React, { useMemo, useState } from "react";
import classNames from "classnames";

import Ellipsis from "@/components/Ellipsis";
import Button from "@/components/Button";
import Icon from "@/components/Icon";
import Options, { Option } from "@/components/Options";

import style from "./style.module.scss";

const DEFAULT_PLACEHOLDER = "Select an option";

export type DropdownSize = "small" | "medium" | "large";

export type DropdownProps = {
  size?: DropdownSize;
  placeholder?: string;
  options?: Option[];
  value?: string;
  tabIndex?: number;
  isDisabled?: boolean;
  isFullWidth?: boolean;
  isDeselectable?: boolean;
  onChange?: (value: string) => void;

  className?: string;
};

const Dropdown = (props: DropdownProps) => {
  const [value, setValue] = useState("");
  const currentValue = props.value ?? value;

  const placeholder = props.placeholder ?? DEFAULT_PLACEHOLDER;
  const [isExpanded, setIsExpanded] = useState(false);

  const options = useMemo(() => {
    const options: Option[] = [];

    if (props.isDeselectable) {
      options.push({
        type: "option",
        label: placeholder,
        value: "",
      });
    }

    if (props.options) {
      options.push(...props.options);
    }

    return options;
  }, [props.options, props.isDeselectable]);

  const option = useMemo(() => {
    return options.find((option) => option.value === currentValue) ?? null;
  }, [currentValue, options, placeholder]);

  const handleClickButton = () => {
    if (options.length === 0) return;
    setIsExpanded((prev) => !prev);
  };

  const handleChange = (value: string) => {
    setValue(value);
    props.onChange?.(value);
  };

  const hideOptions = () => {
    setIsExpanded(false);
  };

  return (
    <div
      className={classNames(
        style.dropdown,
        props.className,
        style[props.size ?? "medium"],
        {
          [style.fullWidth]: props.isFullWidth,
          [style.disabled]: props.isDisabled,
        },
      )}
    >
      <Button
        className={style.button}
        role="secondary"
        size={props.size}
        tabIndex={props.tabIndex}
        isDisabled={props.isDisabled}
        isFullWidth
        onClick={handleClickButton}
      >
        <div
          className={classNames(style.display, {
            [style.placeholder]: !option || !currentValue,
          })}
        >
          <Ellipsis className={style.text}>
            {option?.label ?? placeholder}
          </Ellipsis>
          <Icon
            className={style.icon}
            preset={isExpanded ? "expand_less" : "expand_more"}
          />
        </div>
      </Button>

      <div className={style.options}>
        <Options
          size={props.size}
          value={currentValue}
          options={options}
          isVisible={isExpanded}
          isFullWidth
          onClick={hideOptions}
          onClickAway={hideOptions}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default Dropdown;
