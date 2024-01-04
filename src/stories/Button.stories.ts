import Button from "../components/Button";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Button> = {
  title: "Example/Button",
  component: Button,
  parameters: {},
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    text: "Primary",
    role: "primary",
  },
};

export const Secondary: Story = {
  args: {
    text: "Secondary",
    role: "secondary",
  },
};

export const Tertiary: Story = {
  args: {
    text: "Tertiary",
    role: "tertiary",
  },
};

export const Danger: Story = {
  args: {
    text: "Danger",
    role: "danger",
  },
};
