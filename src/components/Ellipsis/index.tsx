import React from "react";
import classNames from "classnames";
import style from "./style.module.scss";

export type EllipsisProps = {
  className?: string;
  children?: React.ReactNode;
};

const Ellipsis = (props: EllipsisProps) => (
  <div className={classNames(style.ellipsis, props.className)}>
    {props.children}
  </div>
);

export default Ellipsis;
