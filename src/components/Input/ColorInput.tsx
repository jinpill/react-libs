import React from "react";
import BaseInput, { BaseInputProps } from "./BaseInput";

export type ColorInputProps = Omit<
  BaseInputProps,
  | "type"
  | "min"
  | "max"
  | "step"
  | "float"
  | "placeholder"
  | "useImmediateChangeEffect"
>;

const ColorInput = (props: ColorInputProps) => {
  return <BaseInput type="color" {...props} />;
};

export default ColorInput;
