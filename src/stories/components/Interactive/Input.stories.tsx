import React from "react";
import Input from "@/components/Input";
import BaseInput from "@/components/Input/BaseInput";
import type { Meta, StoryObj } from "@storybook/react";

/**
 * This component is a simple input UI.
 */
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

/**
 * An input component with text type.
 */
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

/**
 * An input component with password type.
 */
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

/**
 * An input component with number type.
 */
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

/**
 * An input component with number type using additional props.
 */
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

export const ColorInput: Story = {
  render: (props) => <Input.Color {...props} />,
  args: {
    size: "large",
    tabIndex: undefined,
    isFullWidth: false,
    isDisabled: false,
    className: undefined,
  },
};

/**
 * An disabled input component.
 */
export const Disabled: Story = {
  render: (props) => <Input.Text {...props} />,
  args: {
    size: "large",
    value: "Disabled",
    isDisabled: true,
  },
};

/**
 * An input component with small size.
 */
export const Small: Story = {
  render: (props) => <Input.Text {...props} />,
  args: {
    size: "small",
    placeholder: "Small size text input",
  },
};

/**
 * An input component with medium size.
 */
export const Medium: Story = {
  render: (props) => <Input.Text {...props} />,
  args: {
    size: "medium",
    placeholder: "Medium size text input",
  },
};

/**
 * An input component with large size.
 */
export const Large: Story = {
  render: (props) => <Input.Text {...props} />,
  args: {
    size: "large",
    placeholder: "Large size text input",
  },
};
