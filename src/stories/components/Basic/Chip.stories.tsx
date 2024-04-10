import Chip from "../../../components/Chip";
import type { Meta, StoryObj } from "@storybook/react";

/**
 * This component is a simple chip UI.
 */
const meta: Meta<typeof Chip> = {
  title: "Components/Basic/Chip",
  component: Chip,
  parameters: {},
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * This component is a simple chip UI.
 */
export const Default: Story = {
  args: {
    label: "Chip",
  },
};

/**
 * This is a chip with a long label that will be truncated.
 */
export const Ellipsis: Story = {
  args: {
    label:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
  },
};

/**
 * If the `onClick` prop is provided, it will has a pointer cursor.
 */
export const Clickable: Story = {
  args: {
    label: "Chip",
    onClick: console.log,
  },
};

/**
 * If the `onClear` prop is provided, it will has a close button.
 */
export const Clearable: Story = {
  args: {
    label: "Chip",
    onClear: console.log,
  },
};
