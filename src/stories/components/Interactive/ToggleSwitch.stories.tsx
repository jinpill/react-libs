import ToggleSwitch, { ToggleOption } from "@/components/ToggleSwitch";
import type { Meta, StoryObj } from "@storybook/react";

const OPTIONS: ToggleOption[] = [
  {
    label: "Option 1",
    value: "1",
  },
  {
    label: "Good option 2",
    value: "2",
  },
  {
    label: "Best option 3",
    value: "3",
  },
  {
    label: "Best of best option 4",
    value: "4",
  },
];

/**
 * This component is a simple toggle switch UI.
 */
const meta: Meta<typeof ToggleSwitch> = {
  title: "Components/Interactive/ToggleSwitch",
  component: ToggleSwitch,
  parameters: {},
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * This is a toggle switch with large size.
 */
export const Large: Story = {
  args: {
    options: OPTIONS,
    size: "large",
  },
};

/**
 * This is a toggle switch with medium size.
 */
export const Medium: Story = {
  args: {
    options: OPTIONS,
    size: "medium",
  },
};

/**
 * This is a toggle switch with small size.
 */
export const Small: Story = {
  args: {
    options: OPTIONS,
    size: "small",
  },
};

/**
 * Set the `isDisabled` prop to `true` to disable the toggle switch.
 */
export const Disabled: Story = {
  args: {
    options: OPTIONS,
    size: "medium",
    value: "3",
    isDisabled: true,
  },
};

/**
 * Set the `isFullWidth` prop to `true` to make the toggle switch full width.
 */
export const FullWidth: Story = {
  args: {
    options: OPTIONS,
    size: "medium",
    isFullWidth: true,
  },
};

/**
 * Set the `isUniformWidth` prop to `true` to make the toggle switch options uniform width.
 */
export const UniformWidth: Story = {
  args: {
    options: OPTIONS,
    size: "medium",
    isUniformWidth: true,
  },
};

/**
 * Set the `isDeselectable` prop to `true` to allow deselecting the selected option.
 */
export const Deselectable: Story = {
  args: {
    options: OPTIONS,
    size: "medium",
    isDeselectable: true,
  },
};
