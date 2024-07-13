import React from "react";
import classNames from "classnames";
import style from "./style.module.scss";

export const TOOLTIP_AREA_ID = "__jinpill-react-libs--tooltip-area";

export type TooltipAreaProps = {
  className?: string;
};

const TooltipArea = React.forwardRef<HTMLDivElement, TooltipAreaProps>(
  (props, ref) => (
    <div
      ref={ref}
      id={TOOLTIP_AREA_ID}
      className={classNames(style.tooltipArea, props.className)}
    >
      <div />
    </div>
  ),
);

TooltipArea.displayName = "TooltipArea";
export default TooltipArea;
