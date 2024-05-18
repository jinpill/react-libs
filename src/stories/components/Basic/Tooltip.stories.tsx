import React from "react";
import Tooltip from "@/components/Tooltip";
import TooltipArea from "@/components/Tooltip/TooltipArea";
import Button from "@/components/Button";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Tooltip> = {
  title: "Components/Basic/Tooltip",
  component: Tooltip,
  parameters: {},
  tags: ["autodocs"],
  argTypes: {
    size: {
      type: {
        name: "enum",
        value: ["small", "medium", "large"],
      },
    },
    position: {
      type: {
        name: "enum",
        value: ["top", "bottom", "left", "right"],
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (props) => {
    return (
      <div
        style={{
          position: "relative",
        }}
      >
        <TooltipArea />
        <div
          style={{
            height: "10rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Tooltip {...props}>
            <Button text="Disabled" isDisabled />
          </Tooltip>
        </div>
      </div>
    );
  },
  args: {
    message: "This button is disabled",
  },
};
