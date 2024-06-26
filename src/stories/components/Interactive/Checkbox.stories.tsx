import Checkbox from "@/components/Checkbox";
import type { Meta, StoryObj } from "@storybook/react";

/**
 * This component is a simple checkbox UI.
 */
const meta: Meta<typeof Checkbox> = {
  title: "Components/Interactive/Checkbox",
  component: Checkbox,
  parameters: {},
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Unchecked: Story = {
  args: {
    value: false,
  },
};

export const Checked: Story = {
  args: {
    value: true,
  },
};

export const Disabled: Story = {
  args: {
    value: true,
    isDisabled: true,
  },
};
