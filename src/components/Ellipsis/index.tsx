import React from "react";
import classNames from "classnames";
import style from "./style.module.scss";

export type EllipsisProps = {
  className?: string;
  children?: React.ReactNode;
};

const Ellipsis = React.forwardRef<HTMLDivElement, EllipsisProps>(
  (props, ref) => (
    <div ref={ref} className={classNames(style.ellipsis, props.className)}>
      {props.children}
    </div>
  ),
);

Ellipsis.displayName = "Ellipsis";
export default Ellipsis;
