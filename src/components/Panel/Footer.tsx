import React from "react";
import classNames from "classnames";
import style from "./style.module.scss";

export type PanelFooterProps = {
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
};

const PanelFooter = React.forwardRef<HTMLDivElement, PanelFooterProps>(
  (props, ref) => (
    <div
      ref={ref}
      style={props.style}
      className={classNames(style.footer, props.className)}
    >
      {props.children}
    </div>
  ),
);

export default PanelFooter;
