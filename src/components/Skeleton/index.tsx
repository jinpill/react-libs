import React from "react";
import classNames from "classnames";
import style from "./style.module.scss";

export type SkeletonProps = {
  className?: string;
  children?: React.ReactNode;
  style?: React.CSSProperties;
};

const Skeleton = (props: SkeletonProps) => (
  <div
    className={classNames(style.skeleton, props.className)}
    style={props.style}
  >
    {props.children}
  </div>
);

export default Skeleton;
