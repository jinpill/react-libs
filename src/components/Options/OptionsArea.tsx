import React from "react";
import classNames from "classnames";
import Scrollbar from "@/components/Scrollbar";
import style from "./style.module.scss";

export const OPTIONS_AREA_ID = "__jinpill-react-libs--options-area";

export type OptionsAreaProps = {
  className?: string;
};

const OptionsArea = React.forwardRef<HTMLDivElement, OptionsAreaProps>(
  (props, ref) => (
    <div
      ref={ref}
      id={OPTIONS_AREA_ID}
      className={classNames(style.optionsArea, props.className)}
    >
      <Scrollbar
        className={classNames(style.optionsWrapper)}
        direction="vertical"
        margin="4"
      />
    </div>
  ),
);

OptionsArea.displayName = "OptionsArea";
export default OptionsArea;
