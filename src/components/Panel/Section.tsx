import React from "react";
import classNames from "classnames";
import style from "./style.module.scss";

export type PanelSectionProps = {
  title?: string;

  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
};

const PanelSection = React.forwardRef<HTMLDivElement, PanelSectionProps>(
  (props, ref) => (
    <div
      ref={ref}
      style={props.style}
      className={classNames(style.section, props.className)}
    >
      {props.title && <div className={style.sectionTitle}>{props.title}</div>}
      <div className={style.sectionContents}>{props.children}</div>
    </div>
  ),
);

export default PanelSection;
