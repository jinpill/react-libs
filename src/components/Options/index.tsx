import React, { useLayoutEffect } from "react";
import classNames from "classnames";

import Scrollbar, {
  SCROLLBAR_CLASSNAME,
  SCROLLBAR_CONTENTS_CLASSNAME,
} from "@/components/Scrollbar";
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
  const optionsRef = React.useRef<HTMLUListElement>(null);

  useLayoutEffect(() => {
    if (!props.isVisible) return;

    const $scollbar = scrollbarRef.current;
    const $clone = optionsRef.current?.cloneNode(true) as HTMLDivElement;
    const $area = document.getElementById(OPTIONS_AREA_ID);
    if (!$scollbar || !$clone || !$area) return;

    const $areaScrollbar = $area.querySelector(
      `.${SCROLLBAR_CLASSNAME}`,
    ) as HTMLElement;
    const $areaScrollbarContents = $area.querySelector(
      `.${SCROLLBAR_CONTENTS_CLASSNAME}`,
    );
    if (!$areaScrollbar || !$areaScrollbarContents) return;

    // Initialize class names.
    $area.classList.add(style.active);
    $areaScrollbar.classList.remove(style.fadeOut);
    $areaScrollbar.classList.add(style.fadeIn);
    $areaScrollbar.classList.remove(style.large, style.medium, style.small);
    $areaScrollbar.classList.add(style[props.size ?? "medium"]);

    // Get the position of the scrollbar.
    const areaRect = $area.getBoundingClientRect();
    const scrollbarRect = $scollbar.getBoundingClientRect();
    const top = scrollbarRect.top - areaRect.top;
    const left = scrollbarRect.left - areaRect.left;

    // Set the position of the scrollbar.
    $areaScrollbar.style.left = `${left}px`;
    $areaScrollbar.style.top = `${top}px`;
    $areaScrollbar.style.width = `${scrollbarRect.width}px`;

    // Append the clone to the area.
    $areaScrollbarContents.appendChild($clone);

    return () => {
      // Reset the class names.
      $area.classList.remove(style.active);
      $areaScrollbar.classList.remove(style.fadeIn);
      $areaScrollbar.classList.add(style.fadeOut);

      // Remove the clone from the area.
      setTimeout(() => $areaScrollbarContents.removeChild($clone), 200);
    };
  }, [props.isVisible, props.size]);

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
      <ul ref={optionsRef} className={style.options}>
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
