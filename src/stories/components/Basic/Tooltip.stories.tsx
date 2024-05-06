import React from "react";
import Tooltip from "@/components/Tooltip";
import TooltipArea from "@/components/Tooltip/TooltipArea";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Tooltip> = {
  title: "Components/Basic/Tooltip",
  component: Tooltip,
  parameters: {},
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (props) => {
    return (
      <>
        <TooltipArea />
      </>
    );
  },
  args: {},
};
