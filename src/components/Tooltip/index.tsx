import React, { useLayoutEffect, useRef, useState } from "react";
import classNames from "classnames";
import useCloneEffect from "@/hooks/useCloneEffect";
import { TOOLTIP_AREA_ID } from "./TooltipArea";
import style from "./style.module.scss";

export type TooltipSize = "small" | "medium" | "large";
export type TooltipPosition = "top" | "bottom" | "left" | "right";

export type TooltipProps = {
  size?: TooltipSize;
  message: string;
  position?: TooltipPosition;
  isVisible?: boolean;

  className?: string;
  children?: React.ReactNode;
};

const Tooltip = React.forwardRef<HTMLDivElement, TooltipProps>((props, ref) => {
  const tooltipRef = useRef<HTMLDivElement>(null);

  const [isMouseOver, setIsMouseOver] = useState(false);
  const isVisible = (props.isVisible ?? true) && isMouseOver;

  useCloneEffect({
    init: () => tooltipRef.current,
    parent: () => {
      const $area = document.getElementById(TOOLTIP_AREA_ID);
      const $parent = $area?.children[0] ?? null;
      return $parent as HTMLElement | null;
    },
    onMounted: ($clone) => {
      const $area = document.getElementById(TOOLTIP_AREA_ID)?.children[0];
      const $tooltip = tooltipRef.current;
      if (!$area || !$tooltip) return;

      const areaRect = $area.getBoundingClientRect();
      const tooltipRect = $tooltip.getBoundingClientRect();
      const cloneRect = $clone.getBoundingClientRect();

      let top = 0;
      let left = 0;

      switch (props.position) {
        case "left":
        case "right":
          top =
            tooltipRect.top -
            areaRect.top +
            (tooltipRect.height - cloneRect.height) / 2;
          break;
        case "top":
        case "bottom":
        default:
          left =
            tooltipRect.left -
            areaRect.left +
            (tooltipRect.width - cloneRect.width) / 2;
          break;
      }

      switch (props.position) {
        case "left":
          left =
            tooltipRect.left -
            areaRect.left +
            tooltipRect.width -
            cloneRect.width;
          break;
        case "right":
          left = tooltipRect.left - areaRect.left;
          break;
        case "top":
          top =
            tooltipRect.top -
            areaRect.top +
            tooltipRect.height -
            cloneRect.height;
          break;
        case "bottom":
        default:
          top = tooltipRect.top - areaRect.top;
          break;
      }

      $clone.style.top = `${top}px`;
      $clone.style.left = `${left}px`;
      $clone.classList.add(style.visible);
    },
    onUnmounted: ($clone) => {
      $clone.classList.remove(style.visible);
    },
    timeout: 300,
    isVisible,
  });

  const handlePointerEnter = () => {
    setIsMouseOver(true);
  };

  const handlePointerLeave = () => {
    setIsMouseOver(false);
  };

  useLayoutEffect(() => {
    const $tooltip = tooltipRef.current;
    if (!$tooltip || !isVisible) return;
  }, [isVisible]);

  return (
    <div
      ref={ref}
      className={classNames(style.container, props.className)}
      onPointerEnter={handlePointerEnter}
      onPointerLeave={handlePointerLeave}
    >
      {props.children}
      {isVisible && (
        <div
          ref={tooltipRef}
          className={classNames(
            style.tooltip,
            style[props.position ?? "bottom"],
            style[props.size ?? "medium"],
          )}
        >
          <div className={style.message}>{props.message}</div>
        </div>
      )}
    </div>
  );
});

export default Tooltip;
