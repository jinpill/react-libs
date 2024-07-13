import React from "react";
import classNames from "classnames";
import Label, { LabelProps } from "@/components/Label";
import style from "./style.module.scss";

export type PanelLabelContentWidth = "small" | "medium" | "large";

export type PanelLabelProps = Pick<
  LabelProps,
  "name" | "unit" | "className" | "style" | "children"
> & {
  contentWidth?: PanelLabelContentWidth;
};

const PanelLabel = React.forwardRef<HTMLLabelElement, PanelLabelProps>(
  (props, ref) => (
    <Label
      ref={ref}
      style={props.style}
      className={classNames(
        style.label,
        props.className,
        style[props.contentWidth ?? "large"],
      )}
      size="medium"
      name={props.name}
      unit={props.unit}
      position="left"
      isFullWidth
    >
      {props.children}
    </Label>
  ),
);

PanelLabel.displayName = "PanelLabel";
export default PanelLabel;
