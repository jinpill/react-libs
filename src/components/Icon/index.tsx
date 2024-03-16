import React from "react";
import classNames from "classnames";
import { ReactSVG } from "react-svg";
import style from "./style.module.scss";

export type IconProps = {
  src: string;
  className?: string;
};

const Icon = React.forwardRef<HTMLDivElement, IconProps>((props, ref) => (
  <div ref={ref} className={classNames(style.icon, props.className)}>
    <ReactSVG src={props.src} wrapper="div" />
  </div>
));

export default Icon;
