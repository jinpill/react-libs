import React from "react";
import classNames from "classnames";
import Scrollbar from "@/components/Scrollbar";
import style from "./style.module.scss";

export const OPTIONS_AREA_ID = "__jinpill-react-libs--options-area";

export type OptionsAreaProps = {
  className?: string;
};

const OptionsArea = (props: OptionsAreaProps) => (
  <div
    id={OPTIONS_AREA_ID}
    className={classNames(style.optionsArea, props.className)}
  >
    <Scrollbar
      className={classNames(style.optionsWrapper, props.className)}
      direction="vertical"
      margin="4"
    />
  </div>
);

export default OptionsArea;
