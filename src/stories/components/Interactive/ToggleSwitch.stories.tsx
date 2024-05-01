import ToggleSwitch from "@/components/ToggleSwitch";
import type { Meta, StoryObj } from "@storybook/react";

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
 * A toggle switch that can be toggled on and off.
 */
export const Inactive: Story = {
  args: {},
};

/**
 * A toggle switch that is toggled on.
 */
export const Active: Story = {
  args: {
    value: true,
  },
};

/**
 * A toggle switch that is toggled on and disabled.
 */
export const Disabled: Story = {
  args: {
    value: true,
    isDisabled: true,
  },
};
