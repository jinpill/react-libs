import React, { useEffect } from "react";
import classNames from "classnames";

import IconFromSource from "./IconFromSource";
import IconFromPreset from "./IconFromPreset";

import * as logger from "@/utils/logger";

import type { MaterialIcon } from "material-icons";
import style from "./style.module.scss";

export type IconProps = {
  src?: string;
  preset?: MaterialIcon;
  className?: string;
};

const Icon = React.forwardRef<HTMLDivElement, IconProps>((props, ref) => {
  useEffect(() => {
    if (props.src) return;
    if (props.preset) return;
    logger.warn("Icon", "src or preset is required.");
  }, [props.src, props.preset]);

  return (
    <div ref={ref} className={classNames(style.icon, props.className)}>
      {props.src ? (
        <IconFromSource src={props.src} />
      ) : props.preset ? (
        <IconFromPreset preset={props.preset} />
      ) : null}
    </div>
  );
});

export default Icon;
