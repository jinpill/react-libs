import React from "react";
import Input from "@/components/Input";
import BaseInput from "@/components/Input/BaseInput";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof BaseInput> = {
  title: "Components/Interactive/Input",
  parameters: {},
  tags: ["autodocs"],
  argTypes: {
    size: {
      type: {
        name: "enum",
        value: ["small", "medium", "large"],
      },
    },
    tabIndex: {
      type: "number",
      required: false,
    },
    className: {
      type: "string",
      required: false,
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const TextInput: Story = {
  render: (props) => <Input.Text {...props} />,
  args: {
    size: "large",
    placeholder: "Enter text here",
    tabIndex: undefined,
    useImmediateChangeEffect: false,
    isFullWidth: false,
    isDisabled: false,
    className: undefined,
  },
};

export const PasswordInput: Story = {
  render: (props) => <Input.Password {...props} />,
  args: {
    size: "large",
    placeholder: "Enter password here",
    tabIndex: undefined,
    useImmediateChangeEffect: false,
    isFullWidth: false,
    isDisabled: false,
    className: undefined,
  },
};

export const NumberInput: Story = {
  render: (props) => {
    const { value: _, onChange: __, ...restProps } = props;
    return <Input.Number {...restProps} />;
  },
  args: {
    size: "large",
    placeholder: "Enter number here",
    tabIndex: undefined,
    useImmediateChangeEffect: false,
    isFullWidth: false,
    isDisabled: false,
    className: undefined,
  },
};

export const NumberInputProps: Story = {
  render: (props) => {
    const { value: _, onChange: __, ...restProps } = props;
    return <Input.Number {...restProps} />;
  },
  args: {
    size: "large",
    placeholder: "Enter number here",
    tabIndex: undefined,
    min: -100,
    max: 100,
    step: 10,
    float: 1,
    useImmediateChangeEffect: false,
    isFullWidth: false,
    isDisabled: false,
    className: undefined,
  },
};
