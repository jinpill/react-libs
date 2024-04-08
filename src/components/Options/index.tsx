import React, { useLayoutEffect } from "react";
import classNames from "classnames";

import Scrollbar from "@/components/Scrollbar";
import Ellipsis from "@/components/Ellipsis";

import { OPTIONS_AREA_ID } from "./OptionsArea";
import style from "./style.module.scss";

export type OptionsSize = "small" | "medium" | "large";

export type Option = {
  type: "option";
  label: string;
  value: string;
  description?: string;
};

export type OptionsProps = {
  size?: OptionsSize;
  options: Option[];
  isVisible: boolean;
  className?: string;
};

export const Options = (props: OptionsProps) => {
  const scrollbarRef = React.useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!props.isVisible) return;

    const $scollbar = scrollbarRef.current;
    const $clone = $scollbar?.cloneNode(true) as HTMLDivElement;
    const $optionsArea = document.getElementById(OPTIONS_AREA_ID);
    if (!$scollbar || !$clone || !$optionsArea) return;

    const areaRect = $optionsArea.getBoundingClientRect();
    const scrollbarRect = $scollbar.getBoundingClientRect();
    const top = scrollbarRect.top - areaRect.top;
    const left = scrollbarRect.left - areaRect.left;

    $clone.style.left = `${left}px`;
    $clone.style.top = `${top}px`;
    $clone.style.width = `${scrollbarRect.width}px`;
    $optionsArea.appendChild($clone);

    return () => {
      $clone.classList.add(style.fadeOut);
      setTimeout(() => $optionsArea.removeChild($clone), 300);
    };
  }, [props.isVisible]);

  return (
    <Scrollbar
      ref={scrollbarRef}
      className={classNames(
        style.optionsWrapper,
        props.className,
        style[props.size ?? "medium"],
      )}
      direction="vertical"
      margin="4"
    >
      <ul className={style.options}>
        {props.options.map((option) => (
          <li key={option.value} className={style.option}>
            <Ellipsis className={style.label}>{option.label}</Ellipsis>
            {option.description && (
              <div className={style.description}>{option.description}</div>
            )}
          </li>
        ))}
      </ul>
    </Scrollbar>
  );
};

export default Options;
export { default as OptionsArea } from "./OptionsArea";
