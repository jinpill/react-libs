import React from "react";
import classNames from "classnames";
import style from "./style.module.scss";

export type SkeletonProps = {
  className?: string;
  children?: React.ReactNode;
  style?: React.CSSProperties;
};

const Skeleton = React.forwardRef<HTMLDivElement, SkeletonProps>(
  (props, ref) => (
    <div
      ref={ref}
      className={classNames(style.skeleton, props.className)}
      style={props.style}
    >
      {props.children}
    </div>
  ),
);

Skeleton.displayName = "Skeleton";
export default Skeleton;
