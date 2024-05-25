import React from "react";
import classNames from "classnames";
import IconButton from "@/components/IconButton";
import style from "./style.module.scss";

export type PanelHeaderProps = {
  title: string;

  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
};

const PanelHeader = React.forwardRef<HTMLDivElement, PanelHeaderProps>(
  (props, ref) => (
    <div
      ref={ref}
      style={props.style}
      className={classNames(style.header, props.className)}
    >
      <div className={style.title}>
        {props.children}
        {props.title}
      </div>

      <div className={style.actions}>
        <IconButton className={style.iconButton} preset="close" size="small" />
      </div>
    </div>
  ),
);

export default PanelHeader;
