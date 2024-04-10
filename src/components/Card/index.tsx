import React from "react";
import classNames from "classnames";
import style from "./style.module.scss";

export type CardProps = {
  elevation?: "1" | "2" | "3" | "4";

  style?: React.CSSProperties;
  className?: string;
  children?: React.ReactNode;
};

const Card = React.forwardRef<HTMLDivElement, CardProps>((props, ref) => {
  return (
    <div
      ref={ref}
      className={classNames(
        style.card,
        props.className,
        style[`elevation-${props.elevation ?? "1"}`],
      )}
      style={props.style}
    >
      {props.children}
    </div>
  );
});

export default Card;
