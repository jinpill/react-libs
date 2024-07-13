import React from "react";
import BaseInput, { BaseInputProps } from "./BaseInput";

export type TextInputProps = Omit<
  BaseInputProps,
  "type" | "min" | "max" | "step" | "decimal"
>;

const TextInput = React.forwardRef<HTMLDivElement, TextInputProps>(
  (props, ref) => <BaseInput ref={ref} type="text" {...props} />,
);

TextInput.displayName = "TextInput";
export default TextInput;
