import React, { useMemo } from "react";
import BaseInput, { BaseInputProps } from "./BaseInput";

export type NumberInputProps = {
  value?: number | null;
  onChange?: (value: number | null) => void;
} & Omit<BaseInputProps, "type" | "value" | "onChange">;

const NumberInput = React.forwardRef<HTMLDivElement, NumberInputProps>(
  (props, ref) => {
    const { value: _value, onChange, ...restProps } = props;

    const value = useMemo(() => {
      if (_value === null) return "";
      if (typeof _value === "number") return _value.toString();
      return _value;
    }, [_value]);

    const handleChange = (value: string) => {
      const nextValue = value === "" ? null : parseInt(value, 10);
      onChange?.(nextValue);
    };

    return (
      <BaseInput
        ref={ref}
        type="number"
        value={value}
        onChange={handleChange}
        {...restProps}
      />
    );
  },
);

export default NumberInput;
