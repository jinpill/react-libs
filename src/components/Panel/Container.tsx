import React from "react";
import classNames from "classnames";
import Card from "@/components/Card";
import style from "./style.module.scss";

export type PanelContainerProps = {
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
};

const PanelContainer = React.forwardRef<HTMLDivElement, PanelContainerProps>(
  (props, ref) => (
    <Card
      ref={ref}
      style={props.style}
      className={classNames(style.container, props.className)}
    >
      {props.children}
    </Card>
  ),
);

PanelContainer.displayName = "PanelContainer";
export default PanelContainer;
