import React from "react";
import Ellipsis from "../../../components/Ellipsis";
import type { Meta, StoryObj } from "@storybook/react";

/**
 * This component truncates and displays content based on the length of the child text.
 */
const meta: Meta<typeof Ellipsis> = {
  title: "Components/Basic/Ellipsis",
  component: Ellipsis,
  parameters: {},
  tags: ["autodocs"],
  argTypes: {},
  render: (args) => (
    <div style={{ width: "200px" }}>
      <Ellipsis {...args} />
    </div>
  ),
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
};
