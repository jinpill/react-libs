import React from "react";
import BaseInput, { BaseInputProps } from "./BaseInput";

export type PasswordInputProps = {} & Omit<
  BaseInputProps,
  "type" | "min" | "max" | "step" | "unit"
>;

const PasswordInput = React.forwardRef<HTMLDivElement, PasswordInputProps>(
  (props, ref) => <BaseInput ref={ref} type="password" {...props} />,
);

export default PasswordInput;
