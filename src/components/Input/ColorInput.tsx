import React from "react";
import BaseInput, { BaseInputProps } from "./BaseInput";

export type ColorInputProps = Omit<
  BaseInputProps,
  | "type"
  | "min"
  | "max"
  | "step"
  | "decimal"
  | "placeholder"
  | "useImmediateChangeEffect"
>;

const ColorInput = React.forwardRef<HTMLDivElement, ColorInputProps>(
  (props, ref) => <BaseInput ref={ref} type="color" {...props} />,
);

ColorInput.displayName = "ColorInput";
export default ColorInput;
