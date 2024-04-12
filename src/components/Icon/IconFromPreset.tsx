import React from "react";
import classNames from "classnames";
import type { MaterialIcon } from "material-icons";
import style from "./style.module.scss";

type IconFromPresetProps = {
  preset: MaterialIcon;
};

const IconFromPreset = (props: IconFromPresetProps) => (
  <div className={classNames(style.materialIcons, "material-icons-round")}>
    {props.preset}
  </div>
);

export default IconFromPreset;
