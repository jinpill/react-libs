import React from "react";
import { BaseInputProps } from "./BaseInput";
import NullableNumberInput from "./NullableNumberInput";

export type NumberInputProps = {
  value?: number;
  onChange?: (value: number) => void;
} & Omit<BaseInputProps, "type" | "value" | "onChange">;

const NumberInput = React.forwardRef<HTMLDivElement, NumberInputProps>(
  (props, ref) => {
    const { value, onChange, ...restProps } = props;

    const handleChange = (value: number | null) => {
      onChange?.(value ?? 0);
    };

    return (
      <NullableNumberInput
        ref={ref}
        value={value}
        onChange={handleChange}
        {...restProps}
      />
    );
  },
);

export default NumberInput;
