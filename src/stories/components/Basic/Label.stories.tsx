import React from "react";
import Label from "@/components/Label";
import Input from "@/components/Input";
import Checkbox from "@/components/Checkbox";
import type { Meta, StoryObj } from "@storybook/react";

/**
 * This component is a simple label UI.
 */
const meta: Meta<typeof Label> = {
  title: "Components/Basic/Label",
  component: Label,
  parameters: {},
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * An label component with large size.
 */
export const Large: Story = {
  args: {
    name: "Diamter",
    unit: "mm",
    size: "large",
    option: "optional",
    message: "Please enter the diameter here",
    children: (
      <Input.Number placeholder="Enter number here" size="large" isFullWidth />
    ),
  },
};

/**
 * An label component with medium size.
 */
export const Medium: Story = {
  args: {
    name: "Diamter",
    unit: "mm",
    size: "medium",
    option: "optional",
    message: "Please enter the diameter here",
    children: (
      <Input.Number placeholder="Enter number here" size="medium" isFullWidth />
    ),
  },
};

/**
 * An label component with small size.
 */
export const Small: Story = {
  args: {
    name: "Diamter",
    unit: "mm",
    size: "small",
    option: "optional",
    message: "Please enter the diameter here",
    children: (
      <Input.Number placeholder="Enter number here" size="small" isFullWidth />
    ),
  },
};

/**
 * Set `isHorizontal` to `true` to display contents horizontally.
 */
export const UsingCheckbox: Story = {
  args: {
    name: "Subscribe",
    option: "optional",
    message: "Please subscribe to our newsletter",
    isHorizontal: true,
    children: <Checkbox value={true} />,
  },
};

/**
 * Set `hasError` to `true` to display error message.
 */
export const WithError: Story = {
  args: {
    name: "Diamter",
    unit: "mm",
    size: "medium",
    option: "required",
    message: "Diameter must be greater than 0",
    hasError: true,
    children: (
      <Input.Number
        placeholder="Enter number here"
        size="medium"
        isFullWidth
        value={-1}
      />
    ),
  },
};
