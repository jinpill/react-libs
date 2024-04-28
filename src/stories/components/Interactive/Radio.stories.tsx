import Radio from "@/components/Radio";
import type { Meta, StoryObj } from "@storybook/react";

/**
 * This component is a simple radio UI.
 */
const meta: Meta<typeof Radio> = {
  title: "Components/Interactive/Radio",
  component: Radio,
  parameters: {},
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

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
