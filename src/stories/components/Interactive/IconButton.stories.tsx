import IconButton from "@/components/IconButton";
import type { Meta, StoryObj } from "@storybook/react";

/**
 * This component is a simple icon button UI.
 */
const meta: Meta<typeof IconButton> = {
  title: "Components/Interactive/IconButton",
  component: IconButton,
  parameters: {},
  tags: ["autodocs"],
  argTypes: {
    size: {
      type: {
        name: "enum",
        value: ["small", "medium", "large"],
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const CloseIconButton: Story = {
  args: {
    preset: "close",
  },
};

export const MergeIconButton: Story = {
  args: {
    preset: "merge",
  },
};
