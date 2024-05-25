import React from "react";
import classNames from "classnames";
import IconButton from "@/components/IconButton";
import style from "./style.module.scss";

export type PanelHeaderSize = "medium" | "large";

export type PanelHeaderProps = {
  title: string;
  size?: PanelHeaderSize;

  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
};

const PanelHeader = React.forwardRef<HTMLDivElement, PanelHeaderProps>(
  (props, ref) => {
    return (
      <div
        ref={ref}
        style={props.style}
        className={classNames(
          style.header,
          props.className,
          style[props.size ?? "large"],
        )}
      >
        <div className={style.title}>
          {props.children}
          {props.title}
        </div>

        <div className={style.actions}>
          <IconButton
            preset="close"
            size={props.size === "large" ? "medium" : "small"}
          />
        </div>
      </div>
    );
  },
);

export default PanelHeader;
