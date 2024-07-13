import React from "react";
import Scrollbar from "@/components/Scrollbar";

export type PanelContentsProps = {
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
};

const PanelContents = React.forwardRef<HTMLDivElement, PanelContentsProps>(
  (props, ref) => (
    <Scrollbar
      ref={ref}
      style={props.style}
      className={props.className}
      direction="vertical"
      margin="6"
    >
      {props.children}
    </Scrollbar>
  ),
);

PanelContents.displayName = "PanelContents";
export default PanelContents;
